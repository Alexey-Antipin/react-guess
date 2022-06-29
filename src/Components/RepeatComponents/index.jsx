import { useContext } from "react";
import { ContextState } from "../../Context";
import "./index.scss";

export const AgainPlay = ({
  class__component,
  class__word,
  class__button,
  word,
}) => {
  const context = useContext(ContextState);

  const gameAgain = () => {
    context.setLive(context.liveLimit || 5);
    context.setRandNumber("");
    context.setValue("");
    context.setAttempt("");
    context.setDisabled((context.disabled = false));
  };

  return (
    <div className={class__component || "component"}>
      <p className={class__word || "word"}>{word || "Вы проиграли!"}</p>

      <button
        className={class__button || "button "}
        onClick={() => gameAgain()}>
        Сыграть ещё раз.
      </button>

      <button
        className={class__button || "button"}
        onClick={() => context.setGameEngine(!context.gameEngine)}>
        Изменить настройки игры
      </button>
    </div>
  );
};
