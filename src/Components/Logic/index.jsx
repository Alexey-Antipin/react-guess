import { useContext } from "react";
import { ContextState } from "../../Context";
import "./index.scss";

export const Logic = () => {
  const context = useContext(ContextState);

  const createRandNumber = () => {
    const response = Math.floor(
      context.min + Math.random() * (context.max + 1 - context.min)
    );
    context.setRandNumber(response);
    context.setDisabled(!context.disabled);
  };

  return (
    <>
      <p className="logic">Игра</p>
      <button
        className="logic__button"
        disabled={context.disabled == true}
        onClick={() => createRandNumber()}>
        Загадать число
      </button>
      {context.disabled == true ? (
        <div className="logic__attempt">
          <div>Случайное число: {context.randNumber}</div>
          <div>Попыток осталось: {context.live}</div>
        </div>
      ) : (
        <div className="logic__close"></div>
      )}
    </>
  );
};
