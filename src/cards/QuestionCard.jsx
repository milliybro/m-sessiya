import { Fragment } from "react";
import KTEData from "../data/KTE";
import "./QuestionCard.scss";

const QuestionCard = () => {
  return (
    <Fragment>
      <div className="pt-3">
        {KTEData.map((card, index) => (
          <div key={index} className="card mb-4">
            <h4>{card.question}</h4>
            <form className="my-4">
              {[card.answer1, card.answer2, card.answer3, card.answer4].map(
                (answer, i) => (
                  <div key={i} className="d-flex value">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      defaultChecked={card.correct === i + 1}
                    />
                    <p>{answer}</p>
                    <span className="checkmark"></span>
                  </div>
                )
              )}
            </form>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default QuestionCard;
