import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const ExamPage = () => {
  const [history, setHistory] = useState([]);
  const [stats, setStats] = useState({
    totalAttempts: 0,
    highestScore: 0,
    averageScore: 0,
    passRate: 0,
  });

  // Load history on mount
  useEffect(() => {
    try {
      const storedHistory = JSON.parse(localStorage.getItem("kte_exam_history") || "[]");
      setHistory(storedHistory);

      if (storedHistory.length > 0) {
        const total = storedHistory.length;
        const highest = Math.max(...storedHistory.map((h) => h.score));
        const sum = storedHistory.reduce((acc, curr) => acc + curr.score, 0);
        const passedCount = storedHistory.filter((h) => h.passed).length;
        
        setStats({
          totalAttempts: total,
          highestScore: highest,
          averageScore: Math.round((sum / total) * 10) / 10,
          passRate: Math.round((passedCount / total) * 100),
        });
      }
    } catch (e) {
      console.error("Failed to load history", e);
    }
  }, []);

  // Clear history
  const handleClearHistory = () => {
    if (window.confirm("Haqiqatan ham barcha urinishlar tarixini o'chirmoqchimisiz?")) {
      localStorage.removeItem("kte_exam_history");
      setHistory([]);
      setStats({
        totalAttempts: 0,
        highestScore: 0,
        averageScore: 0,
        passRate: 0,
      });
    }
  };

  return (
    <div className="py-5" style={{ minHeight: "100vh" }}>
      <div className="container">
        {/* Header Banner */}
        <div 
          className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary d-flex align-items-center flex-column flex-md-row justify-content-between gap-4"
          style={{
            background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
            color: "#fff",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            border: "none",
          }}
        >
          <div className="text-center text-md-start">
            <h1 className="display-5 fw-bold text-white mb-2">Imtihon Tayyorgarlik Portali</h1>
            <p className="lead text-white-50 mb-0">
              Yakuniy nazorat imtihonlariga tayyorlanish va o'z bilimlaringizni real vaqt rejimida tekshirish uchun tizim.
            </p>
          </div>
          <div className="bg-white p-2 rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: "90px", height: "90px" }}>
            <img src={logo} alt="Logo" style={{ height: "65px", width: "auto" }} />
          </div>
        </div>

        <div className="row g-4">
          {/* Left Column: Exam Card & Configuration */}
          <div className="col-lg-7">
            <div className="card h-100 border-0 shadow-sm" style={{ borderTop: "5px solid #3c8dbc" }}>
              <div className="card-body p-4 p-md-5 d-flex flex-column">
                <div className="mb-4">
                  <span className="badge bg-primary px-3 py-2 mb-2" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                    Faol Imtihon
                  </span>
                  <h2 className="card-title fw-bold text-dark mb-3">Tizimlar va signallarni qayta ishlash (KTE)</h2>
                  <p className="text-secondary" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                    Ushbu test to'plami Kompyuterni Tashkil Etilishi fanining test savollari (adashmasam 800 tadan ortiq umumiy baza) asosida shakllantirilgan. 
                    Tizim har safar yangi urinishda bazadan 50 ta tasodifiy savolni tanlaydi va variantlarni aralashtiradi.
                  </p>
                </div>

                {/* Exam Settings / Rules */}
                <div className="bg-light p-4 rounded mb-4" style={{ borderLeft: "4px solid #17a2b8" }}>
                  <h5 className="fw-bold mb-3 text-dark">Imtihon qoidalari va konfiguratsiyasi:</h5>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2">
                        <span style={{ fontSize: "20px" }}>📝</span>
                        <div>
                          <div className="text-muted" style={{ fontSize: "12px" }}>Savollar soni</div>
                          <strong className="text-dark">50 ta savol</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2">
                        <span style={{ fontSize: "20px" }}>⏱️</span>
                        <div>
                          <div className="text-muted" style={{ fontSize: "12px" }}>Vaqt limiti</div>
                          <strong className="text-dark">30 daqiqa (00:30:00)</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2">
                        <span style={{ fontSize: "20px" }}>🎯</span>
                        <div>
                          <div className="text-muted" style={{ fontSize: "12px" }}>O'tish ko'rsatkichi</div>
                          <strong className="text-dark">30 ta (Kamida 60%)</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2">
                        <span style={{ fontSize: "20px" }}>🔄</span>
                        <div>
                          <div className="text-muted" style={{ fontSize: "12px" }}>Aralashtirish tizimi</div>
                          <strong className="text-dark">Savol va javoblar shuffli</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <Link 
                    to="/kompyuterni_tashkil etilishi" 
                    className="btn btn-primary btn-lg w-100 py-3 fw-bold border-0 shadow-sm"
                    style={{
                      background: "linear-gradient(135deg, #3c8dbc 0%, #2c6f9c 100%)",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = "0.9"}
                    onMouseOut={(e) => e.currentTarget.style.opacity = "1"}
                  >
                    🚀 Imtihonni Boshlash
                  </Link>
                  <small className="text-muted d-block text-center mt-2 mb-3">
                    Tugmani bosganingizdan so'ng vaqt hisoblashni boshlaydi.
                  </small>
                  
                  {/* <Link 
                    to="/kompyuterni_tashkil etilishi?mode=practice" 
                    className="btn btn-outline-secondary btn-lg w-100 py-3 fw-bold shadow-sm"
                    style={{
                      borderColor: "#3c8dbc",
                      color: "#3c8dbc",
                      borderWidth: "2px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#3c8dbc";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#3c8dbc";
                    }}
                  >
                    📖 Savollar bilan tanishish
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Attempts History & Statistics */}
          <div className="col-lg-5">
            <div className="card h-100 border-0 shadow-sm" style={{ borderTop: "5px solid #ffc107" }}>
              <div className="card-body p-4 p-md-5">
                <h4 className="fw-bold text-dark mb-4">Statistika va Tarix</h4>

                {history.length === 0 ? (
                  <div className="text-center py-5 text-muted">
                    <span style={{ fontSize: "40px" }}>📊</span>
                    <p className="mt-2">Hali hech qanday urinish amalga oshirilmagan.</p>
                    <p className="small">O'z bilimingizni sinab ko'rish uchun testni boshlang.</p>
                  </div>
                ) : (
                  <div>
                    {/* Brief Stats Cards */}
                    <div className="row g-2 mb-4">
                      <div className="col-6">
                        <div className="p-3 border rounded text-center bg-light">
                          <div className="text-muted small">Jami urinishlar</div>
                          <h4 className="fw-bold mb-0 text-dark">{stats.totalAttempts} ta</h4>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 border rounded text-center bg-light">
                          <div className="text-muted small">Rekord natija</div>
                          <h4 className="fw-bold mb-0 text-success">{stats.highestScore} / 50</h4>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 border rounded text-center bg-light">
                          <div className="text-muted small">O'rtacha ball</div>
                          <h4 className="fw-bold mb-0 text-primary">{stats.averageScore} / 50</h4>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 border rounded text-center bg-light">
                          <div className="text-muted small">O'tish foizi</div>
                          <h4 className={`fw-bold mb-0 ${stats.passRate >= 50 ? "text-success" : "text-danger"}`}>
                            {stats.passRate}%
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Attempt Records List */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="fw-bold text-dark m-0">Oxirgi urinishlar:</h6>
                      <button 
                        onClick={handleClearHistory} 
                        className="btn btn-sm btn-outline-danger px-2 py-1"
                        style={{ fontSize: "12px" }}
                      >
                        Tarixni tozalash
                      </button>
                    </div>

                    <div className="overflow-y-auto" style={{ maxHeight: "300px" }}>
                      {history.map((record, index) => (
                        <div 
                          key={index} 
                          className="p-3 border-bottom d-flex justify-content-between align-items-center gap-2"
                          style={{ fontSize: "14px" }}
                        >
                          <div>
                            <div className="fw-semibold text-dark">{record.date}</div>
                            <div className="text-muted small">Sarflandi: {record.timeSpent}</div>
                          </div>
                          <div className="text-end">
                            <span className={`badge ${record.passed ? "bg-success" : "bg-danger"} d-block mb-1`}>
                              {record.passed ? "O'tdi" : "Yiqildi"}
                            </span>
                            <strong className={record.passed ? "text-success" : "text-danger"}>
                              {record.score} / {record.total}
                            </strong>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Practice Mode Call-to-Action at the very bottom */}
        <div className="mt-4">
          <div 
            className="card border-0 shadow-sm p-4 text-center" 
            style={{ 
              background: "linear-gradient(135deg, #17a2b8 0%, #117a8b 100%)",
              color: "#fff",
              borderRadius: "12px"
            }}
          >
            <h4 className="fw-bold mb-2 text-white">Imtihonga mustaqil tayyorgarlik ko'rish</h4>
            <p className="mb-3 text-white-50">Barcha savollar to'plamini javoblari bilan birgalikda ko'rib chiqing va o'rganing.</p>
            <div className="d-flex justify-content-center">
              <Link 
                to="/kompyuterni_tashkil etilishi?mode=practice" 
                className="btn btn-light btn-lg px-5 fw-bold text-info"
                style={{ borderRadius: "30px", boxShadow: "0 4px 10px rgba(0,0,0,0.15)", border: "none" }}
              >
                📖 SAVOLLAR BILAN TANISHISH (BARCHA SAVOLLAR)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
