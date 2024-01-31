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
            <form className="my-4" action="">
              <div className="d-flex value">
                <input checked type="radio" />
                <p>{card.answer1}</p>
                <span className="checkmark"></span>
              </div>
              <div className="d-flex value">
                <input type="radio" />
                <p>{card.answer2}</p>
                <span className="checkmark"></span>
              </div>
              <div className="d-flex value">
                <input type="radio" />
                <p>{card.answer3}</p>
                <span className="checkmark"></span>
              </div>
              <div className="d-flex value">
                <input type="radio" />
                <p>{card.answer4}</p>
                <span className="checkmark"></span>
              </div>
            </form>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default QuestionCard;
