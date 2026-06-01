import { Fragment } from "react";
import "./QuestionCard.scss";

const QuestionCard = ({
  questions,
  onAnswerSelect,
  currentQuestionIndex,
  onQuestionFocus,
  isPracticeMode = false,
}) => {
  return (
    <Fragment>
      <div className="pt-3">
        {questions.map((card, index) => (
          <div
            key={card.id}
            id={`question-${index}`}
            className="card mb-4"
            onClick={() => onQuestionFocus(index)}
            style={{
              transition: "all 0.3s ease",
              boxShadow: index === currentQuestionIndex ? "0 4px 10px rgba(0,0,0,0.1)" : "none",
            }}
          >
            <div className="d-flex justify-content-between align-items-center pb-2 mb-3">
              {card.isFlagged && (
                <span className="text-warning fw-bold d-flex align-items-center gap-1" style={{ fontSize: "13px" }}>
                  🚩 Belgilangan
                </span>
              )}
            </div>
            <h4>{card.questionText}</h4>
            <form className="my-4" onSubmit={(e) => e.preventDefault()}>
              {card.choices.map((choice, i) => {
                const isCorrect = i === card.correctIndex;
                const isSelected = card.userAnswerIndex === i;

                let className = "d-flex value align-items-center";
                if (isPracticeMode && isCorrect) {
                  className += " practice-correct";
                }

                return (
                  <div
                    key={i}
                    className={className}
                    onClick={() => {
                      if (!isPracticeMode) {
                        onAnswerSelect(index, i);
                      }
                    }}
                    style={{ cursor: isPracticeMode ? "default" : "pointer" }}
                  >
                    <input
                      type="radio"
                      name={`question-${card.id}`}
                      checked={isSelected}
                      onChange={() => { }}
                      disabled={isPracticeMode}
                    />
                    <p>{choice}</p>
                    <span className="checkmark"></span>
                  </div>
                );
              })}
            </form>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default QuestionCard;
