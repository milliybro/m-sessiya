import { Fragment, useEffect, useState } from "react";
import "./style.scss";
import { Image } from "react-bootstrap";

import close from "../../assets/image/close.png";
import flag from "../../assets/image/flags.png";
import CountdownTimer from "../../components/CountDownTimer";
import QuestionCard from "../../cards/QuestionCard";

const Kompyuter = () => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const animationDuration = 45 * 60 * 1000; // 30 minutes in milliseconds
    const startTime = Date.now();

    const updateAnimation = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed < animationDuration) {
        const progress = (elapsed / animationDuration) * 100;
        setAnimationProgress(100 - progress);
        requestAnimationFrame(updateAnimation);
      } else {
        setAnimationProgress(0);
      }
    };

    updateAnimation();

    return () => {
      setAnimationProgress(0);
    };
  }, []);
  return (
    <Fragment>
      <div className="head">
        <div className="countdown-animation">
          <div
            className="progress-bar"
            style={{ left: `${animationProgress}%` }}
          />
        </div>
        <header>
          <div className="container">
            <div className="header-icons">
              <div className="date d-flex">
                <p>00:</p>
                <CountdownTimer initialSeconds={1800} />
              </div>
              <div className="finish">
                <Image src={close} />
                <Image className="flagcha" src={flag} />
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="mt-5">
        <div className="container">
          <div className="main-info">
            <div className="question-left">
              <QuestionCard />
            </div>
            <div className="answers-right">
              <h3>Javoblar</h3>
              <div className="numbers">
                <div className="number">
                  <span>1</span>
                </div>
                <div className="number">
                  <span>2</span>
                </div>
                <div className="number">
                  <span>3</span>
                </div>
                <div className="number">
                  <span>4</span>
                </div>
                <div className="number">
                  <span>5</span>
                </div>
                <div className="empty">
                  <span>6</span>
                </div>
                <div className="number">
                  <span>7</span>
                </div>
                <div className="number">
                  <span>8</span>
                </div>
                <div className="empty">
                  <span>9</span>
                </div>
                <div className="empty">
                  <span>10</span>
                </div>
                <div className="empty">
                  <span>11</span>
                </div>
                <div className="number">
                  <span>12</span>
                </div>
                <div className="number">
                  <span>13</span>
                </div>
                <div className="empty">
                  <span>14</span>
                </div>
                <div className="number">
                  <span>15</span>
                </div>
                <div className="number">
                  <span>16</span>
                </div>
                <div className="number">
                  <span>17</span>
                </div>
                <div className="empty">
                  <span>18</span>
                </div>
                <div className="empty">
                  <span>19</span>
                </div>
                <div className="number">
                  <span>20</span>
                </div>
                <div className="number">
                  <span>21</span>
                </div>
                <div className="empty">
                  <span>22</span>
                </div>
                <div className="number">
                  <span>23</span>
                </div>
                <div className="number">
                  <span>24</span>
                </div>
                <div className="number">
                  <span>25</span>
                </div>
              </div>
              <span className="line"></span>
              <button className="btn btn-primary btn-flat">Yakunlash</button>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Kompyuter;
