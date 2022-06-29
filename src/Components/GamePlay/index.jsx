import { useContext } from "react";
import { ContextState } from "../../Context";
import "./index.scss";

export const GamePlay = () => {
  const context = useContext(ContextState);
  const lengthRandNumber = context.randNumber.toString().split("");

  function fractionMassives() {
    let fractionNumber = context.randNumber.toString().split("");
    let fractionValue = context.value.toString().split("");
    checkMassive(fractionNumber, fractionValue);
  }

  const checkMassive = (fractionNumber, fractionValue) => {
    let tryAttempt = [];

    for (let i = 0; i < lengthRandNumber.length; i++) {
      if (fractionNumber[i] == fractionValue[i]) {
        tryAttempt.push(0);
      }
    }

    if (tryAttempt.length == lengthRandNumber.length) {
      context.setAttempt(true);
    } else {
      context.setAttempt(tryAttempt);
      context.setLive(context.live - 1);
    }
  };

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        value={context.value}
        disabled={context.randNumber == 0}
        onChange={(e) => context.setValue(e.target.value)}
        maxLength={lengthRandNumber.length}
        placeholder="Ваше число?"
      />

      <button
        disabled={context.randNumber == 0}
        className="button"
        onClick={() => fractionMassives()}>
        Крути барабан
      </button>

      {context.attempt != 0 ? (
        <div className="dialog">
          <div className="dialog__text">
            Совпавших цифр на своих местах:
            <div className="dialog__number">{context.attempt.length}</div>
          </div>
        </div>
      ) : (
        <div className="dialog__close"></div>
      )}
    </div>
  );
};
