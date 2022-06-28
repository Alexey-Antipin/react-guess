import { useContext } from "react";
import { ContextState } from "../../Context";
import "./index.scss";

export const GamePlay = () => {
  const context = useContext(ContextState)

  function fractionMassives() {
    let fractionNumber = context.randNumber.toString().split("");
    let fractionValue = context.value.toString().split("");
    checkMassive(fractionNumber, fractionValue);
  }

  const checkMassive = (fractionNumber, fractionValue) => {
    let tryAttempt = [];
    if (context.attempt.length == 3) {
      console.log("WIN");
    }
    for (let i = 0; i < 3; i++) {
      if (fractionNumber[i] === fractionValue[i]) {
        tryAttempt.push(1);
      }
    }
    context.setAttempt(tryAttempt);
    context.setLive(context.live - 1);
  };

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        value={context.value}
        onChange={(e) => context.setValue(e.target.value)}
        maxLength={3}
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
