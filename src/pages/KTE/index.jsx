import { Fragment, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.scss";
import { Image } from "react-bootstrap";

import closeIcon from "../../assets/image/close.png";
import flagIcon from "../../assets/image/flags.png";
import QuestionCard from "../../cards/QuestionCard";
import { generateExamQuestions, generateAllQuestionsForPractice } from "../../utils/quiz";

const Kompyuter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isPracticeMode = queryParams.get("mode") === "practice";

  // State variables
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds (1800s)
  const [isFinished, setIsFinished] = useState(false);
  const [timeSpentText, setTimeSpentText] = useState("");

  // Modals state
  const [showExitModal, setShowExitModal] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);

  // Analysis filters
  const [activeFilter, setActiveFilter] = useState("all"); // 'all', 'correct', 'incorrect', 'flagged'

  // Initialize questions
  useEffect(() => {
    if (isPracticeMode) {
      const generated = generateAllQuestionsForPractice();
      setQuestions(generated);
    } else {
      const generated = generateExamQuestions(50);
      setQuestions(generated);
    }
  }, [isPracticeMode]);

  // Manage body overflow to prevent global scrolling during exam
  useEffect(() => {
    if (!isFinished) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFinished]);

  // Timer loop
  useEffect(() => {
    if (isPracticeMode) return; // disable timer loop in practice mode
    if (isFinished || timeLeft <= 0) {
      if (timeLeft <= 0 && !isFinished) {
        handleFinishExam(true); // force finish on time up
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isFinished, isPracticeMode]);

  // Sync animation progress bar
  const animationProgress = (timeLeft / 1800) * 100;

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // Handle option select
  const handleAnswerSelect = (qIndex, optionIndex) => {
    setQuestions((prevQuestions) => {
      const updated = [...prevQuestions];
      updated[qIndex] = {
        ...updated[qIndex],
        userAnswerIndex: optionIndex,
      };
      return updated;
    });
  };

  // Scroll to question
  const scrollToQuestion = (idx) => {
    setCurrentQuestionIndex(idx);
    const element = document.getElementById(`question-${idx}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Toggle flag
  const toggleFlag = () => {
    setQuestions((prevQuestions) => {
      if (prevQuestions.length === 0) return prevQuestions;
      const updated = [...prevQuestions];
      updated[currentQuestionIndex] = {
        ...updated[currentQuestionIndex],
        isFlagged: !updated[currentQuestionIndex].isFlagged,
      };
      return updated;
    });
  };

  // Finish exam logic
  const handleFinishExam = (forced = false) => {
    setIsFinished(true);
    setShowFinishModal(false);

    // Calculate time spent
    const totalTimeSpent = 1800 - (forced ? 0 : timeLeft);
    const minutes = Math.floor(totalTimeSpent / 60);
    const seconds = totalTimeSpent % 60;
    const timeText = `${minutes} daqiqa ${seconds} soniya`;
    setTimeSpentText(timeText);

    // Calculate score
    const correctCount = questions.filter(
      (q) => q.userAnswerIndex !== null && q.userAnswerIndex === q.correctIndex
    ).length;
    const isPassed = correctCount >= 30;

    // Save to history in localStorage
    const newRecord = {
      date: new Date().toLocaleString("uz-UZ"),
      score: correctCount,
      total: questions.length,
      passed: isPassed,
      timeSpent: timeText,
    };

    try {
      const existingHistory = JSON.parse(localStorage.getItem("kte_exam_history") || "[]");
      existingHistory.unshift(newRecord);
      localStorage.setItem("kte_exam_history", JSON.stringify(existingHistory.slice(0, 10))); // keep last 10
    } catch (e) {
      console.error("Failed to save history", e);
    }
  };

  // Statistics calculations
  const totalQuestions = questions.length;
  const answeredCount = questions.filter((q) => q.userAnswerIndex !== null).length;
  const correctAnswersCount = questions.filter(
    (q) => q.userAnswerIndex !== null && q.userAnswerIndex === q.correctIndex
  ).length;
  const incorrectAnswersCount = questions.filter(
    (q) => q.userAnswerIndex !== null && q.userAnswerIndex !== q.correctIndex
  ).length;
  const skippedAnswersCount = totalQuestions - answeredCount;
  const scorePercent = totalQuestions > 0 ? Math.round((correctAnswersCount / totalQuestions) * 100) : 0;
  const isPassed = correctAnswersCount >= 30;

  // Filtered questions for analysis
  const filteredQuestionsForAnalysis = questions.filter((q) => {
    if (activeFilter === "correct") {
      return q.userAnswerIndex !== null && q.userAnswerIndex === q.correctIndex;
    }
    if (activeFilter === "incorrect") {
      return q.userAnswerIndex !== null && q.userAnswerIndex !== q.correctIndex;
    }
    if (activeFilter === "flagged") {
      return q.isFlagged;
    }
    return true; // 'all'
  });

  return (
    <Fragment>
      {/* 1. Exam Running Mode */}
      {!isFinished && (
        <div style={{ paddingTop: "60px" }}>
          <div className="head">
            <div className="countdown-animation">
              <div
                className="progress-bar"
                style={{ left: isPracticeMode ? "0%" : `${animationProgress}%` }}
              />
            </div>
            <header>
              <div className="container">
                <div className="header-icons">
                  <div className="date d-flex align-items-center gap-1">
                    <p>{isPracticeMode ? "Amaliyot rejimi (Barcha savollar)" : `00:${formatTime(timeLeft)}`}</p>
                  </div>
                  <div className="finish" style={{ cursor: "pointer" }}>
                    <Image
                      title="Belgilangan savolni belgilash/olib tashlash"
                      className="flagcha"
                      src={flagIcon}
                      onClick={toggleFlag}
                      style={{
                        filter: questions[currentQuestionIndex]?.isFlagged
                          ? "drop-shadow(0px 0px 5px #f39c12) sepia(1) saturate(5) hue-rotate(15deg)"
                          : "none",
                        transform: questions[currentQuestionIndex]?.isFlagged ? "scale(1.2)" : "scale(1)",
                        transition: "all 0.2s ease"
                      }}
                    />
                    <Image
                      title="Imtihondan chiqish"
                      src={closeIcon}
                      onClick={() => setShowExitModal(true)}
                    />
                  </div>
                </div>
              </div>
            </header>
          </div>

          <main className="">
            <div className="container">
              <div className="main-info">
                <div className="question-left" style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto", paddingRight: "10px" }}>
                  <QuestionCard
                    questions={questions}
                    onAnswerSelect={handleAnswerSelect}
                    currentQuestionIndex={currentQuestionIndex}
                    onQuestionFocus={setCurrentQuestionIndex}
                    isPracticeMode={isPracticeMode}
                  />
                </div>

                <div className="answers-right">
                  <div className="sidebar-card">
                    <h3>Javoblar</h3>
                    <div className="numbers">
                      {questions.map((q, idx) => {
                        const isQuestionAnswered = q.userAnswerIndex !== null;
                        const isActive = idx === currentQuestionIndex;

                        let className = isQuestionAnswered ? "number" : "empty";
                        if (q.isFlagged) className += " flagged";
                        if (isActive) className += " active";

                        return (
                          <div
                            key={idx}
                            className={className}
                            onClick={() => scrollToQuestion(idx)}
                          >
                            <span>{idx + 1}</span>
                          </div>
                        );
                      })}
                    </div>
                    <span className="line"></span>
                    {isPracticeMode ? (
                      <button
                        onClick={() => setShowExitModal(true)}
                        className="btn btn-secondary btn-flat"
                        style={{ backgroundColor: "#6c757d", color: "#fff", border: "none" }}
                      >
                        Chiqish
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowFinishModal(true)}
                        className="btn btn-primary btn-flat"
                      >
                        Yakunlash
                      </button>
                    )}
                  </div>

                  <div className="sidebar-card" style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "15px", alignItems: "center" }}>
                    <img src="https://hemis.kstu.uz/static/crop/2/0/120_140_90_2026466945.jpg" style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover" }} alt="" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h3 style={{ fontSize: "16px", margin: 0, fontWeight: "600", color: "#333" }}>RUSTAMOV SH. T.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}

      {/* 2. Exam Analysis Mode (Tahlil) */}
      {isFinished && (
        <div className="container mt-4 analysis-container">
          <div className="stats-header text-center">
            <h2 className="mb-2">Imtihon Natijasi va Tahlili</h2>
            <p className="text-muted">Fan: Tizimlar va signallarni qayta ishlash</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className={`stat-card ${isPassed ? "status-pass" : "status-fail"}`}>
              <p>Natija</p>
              <h3>{isPassed ? "O'TDINGIZ" : "O'TA OLMADINGIZ"}</h3>
              <small className="text-muted">Kamida 30 ta to'g'ri topshirish kerak</small>
            </div>
            <div className="stat-card stat-correct">
              <p>To'g'ri Javoblar</p>
              <h3>{correctAnswersCount} / {totalQuestions}</h3>
              <small className="text-muted">To'g'ri topshirilgan savollar</small>
            </div>
            <div className="stat-card stat-incorrect">
              <p>Noto'g'ri Javoblar</p>
              <h3>{incorrectAnswersCount}</h3>
              <small className="text-muted">Xato belgilangan javoblar</small>
            </div>
            <div className="stat-card stat-skipped">
              <p>Belgilanmagan</p>
              <h3>{skippedAnswersCount}</h3>
              <small className="text-muted">Javob berilmagan savollar</small>
            </div>
            <div className="stat-card stat-time">
              <p>Sarflangan Vaqt</p>
              <h3>{timeSpentText || "Noma'lum"}</h3>
              <small className="text-muted">30 daqiqalik limitdan</small>
            </div>
          </div>

          <div className="row">
            {/* Left: Questions Analysis */}
            <div className="col-lg-8">
              <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <h4 className="m-0">Savollar tahlili</h4>
                <div className="filter-tabs">
                  <button
                    className={`tab-btn ${activeFilter === "all" ? "active" : ""}`}
                    onClick={() => setActiveFilter("all")}
                  >
                    Barchasi ({totalQuestions})
                  </button>
                  <button
                    className={`tab-btn ${activeFilter === "correct" ? "active" : ""}`}
                    onClick={() => setActiveFilter("correct")}
                  >
                    To'g'ri ({correctAnswersCount})
                  </button>
                  <button
                    className={`tab-btn ${activeFilter === "incorrect" ? "active" : ""}`}
                    onClick={() => setActiveFilter("incorrect")}
                  >
                    Noto'g'ri ({incorrectAnswersCount})
                  </button>
                  <button
                    className={`tab-btn ${activeFilter === "flagged" ? "active" : ""}`}
                    onClick={() => setActiveFilter("flagged")}
                  >
                    Belgilangan ({questions.filter((q) => q.isFlagged).length})
                  </button>
                </div>
              </div>

              {filteredQuestionsForAnalysis.length === 0 ? (
                <div className="card p-4 text-center text-muted">
                  Ushbu filter bo'yicha savollar mavjud emas.
                </div>
              ) : (
                filteredQuestionsForAnalysis.map((q) => {
                  const isUserCorrect = q.userAnswerIndex !== null && q.userAnswerIndex === q.correctIndex;
                  const isSkipped = q.userAnswerIndex === null;

                  let cardClass = "analysis-question-card";
                  if (isUserCorrect) cardClass += " correct";
                  else if (!isSkipped) cardClass += " incorrect";

                  return (
                    <div key={q.id} className={cardClass}>
                      <div className="q-header">
                        <div>
                          {q.isFlagged && <span className="badge bg-warning text-dark me-2">🚩 Flagged</span>}
                          {isUserCorrect && <span className="badge bg-success">To'g'ri</span>}
                          {!isUserCorrect && !isSkipped && <span className="badge bg-danger">Noto'g'ri</span>}
                          {isSkipped && <span className="badge bg-secondary">Belgilanmagan</span>}
                        </div>
                      </div>
                      <h5 className="mb-3" style={{ fontSize: "16px", color: "#333", fontWeight: "600" }}>
                        {q.questionText}
                      </h5>
                      <div className="choices-list">
                        {q.choices.map((choice, i) => {
                          const isThisCorrect = i === q.correctIndex;
                          const isThisUserSelection = i === q.userAnswerIndex;

                          let choiceClass = "choice-item";
                          if (isThisCorrect) choiceClass += " correct-choice";
                          else if (isThisUserSelection) choiceClass += " user-choice-incorrect";

                          return (
                            <div key={i} className={choiceClass}>
                              <span>
                                {isThisCorrect ? "✅ " : isThisUserSelection ? "❌ " : "⚪ "}
                              </span>
                              <span>{choice}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Right: Summary panel & Navigation */}
            <div className="col-lg-4">
              <div className="card p-3 mb-4" style={{ position: "sticky", top: "20px" }}>
                <h4 className="border-bottom pb-2 mb-3">Imtihon yakuni</h4>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>To'g'ri javoblar:</span>
                    <strong>{correctAnswersCount} ta</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Noto'g'ri javoblar:</span>
                    <strong>{incorrectAnswersCount} ta</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Ko'rsatkich:</span>
                    <strong>{scorePercent}%</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Holat:</span>
                    <span className={`fw-bold ${isPassed ? "text-success" : "text-danger"}`}>
                      {isPassed ? "O'tdi" : "O'ta olmadi"}
                    </span>
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setQuestions(generateExamQuestions(50));
                      setCurrentQuestionIndex(0);
                      setTimeLeft(1800);
                      setIsFinished(false);
                      setActiveFilter("all");
                    }}
                  >
                    Qayta urinish
                  </button>
                  <button
                    className="btn btn-outline-secondary mt-2"
                    onClick={() => navigate("/")}
                  >
                    Bosh sahifaga qaytish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Exit Confirmation Modal */}
      {showExitModal && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal">
            <div className="modal-body">
              <h4>{isPracticeMode ? "Amaliyotdan chiqish" : "Imtihondan chiqish"}</h4>
              <p>
                {isPracticeMode
                  ? "Haqiqatan ham amaliyot rejimidan chiqmoqchimisiz?"
                  : "Haqiqatan ham testdan chiqmoqchimisiz? Urinish bekor qilinadi va natijalar saqlanmaydi."}
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary btn-flat"
                style={{ width: "auto", margin: 0, padding: "6px 15px", backgroundColor: "#aaa", color: "#fff", border: "none" }}
                onClick={() => setShowExitModal(false)}
              >
                Bekor qilish
              </button>
              <button
                className="btn btn-danger btn-flat"
                style={{ width: "auto", margin: 0, padding: "6px 15px", backgroundColor: "#d9534f", color: "#fff", border: "none" }}
                onClick={() => navigate("/")}
              >
                Chiqish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Finish Confirmation Modal */}
      {showFinishModal && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal">
            <div className="modal-body">
              <h4>Imtihonni yakunlash</h4>
              <p>Imtihonni yakunlashni xohlaysizmi? Jami 50 ta savoldan {answeredCount} tasiga javob berdingiz.</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary btn-flat"
                style={{ width: "auto", margin: 0, padding: "6px 15px", backgroundColor: "#aaa", color: "#fff", border: "none" }}
                onClick={() => setShowFinishModal(false)}
              >
                Orqaga qaytish
              </button>
              <button
                className="btn btn-success btn-flat"
                style={{ width: "auto", margin: 0, padding: "6px 15px", backgroundColor: "#5cb85c", color: "#fff", border: "none" }}
                onClick={() => handleFinishExam(false)}
              >
                Ha, yakunlash
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Kompyuter;
