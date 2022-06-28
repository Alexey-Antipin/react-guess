import { useContext } from "react";
import { ContextState } from "../Context";
import "./index.scss";

export const GameEngine = () => {
  const context = useContext(ContextState);

  const exitFromEngine = () => {
    context.setDisabled(!context.disabled);
    context.setGameEngine(!context.gameEngine);
  };

  const liveInterval = (event) => {
    const id = event.currentTarget.id;

    if (id == 1 && context.live < 10) {
      context.setLive(context.live + 1);
    } else if (id == 2 && context.live > 0) {
      context.setLive(context.live - 1);
    }
  };

  return (
    <div>
      <div className="engine">
        <div className="engine__text">Настройки</div>

        {/* Количество попыток */}
        <div className="engine__block">
          <div>Количество попыток</div>
          <div>
            <button
              id="1"
              className="engine__button"
              onClick={(event) => liveInterval(event)}>
              +
            </button>
            <button
              id="2"
              className="engine__button"
              onClick={(event) => liveInterval(event)}>
              -
            </button>
          </div>
          <div>Попыток: {context.live}</div>
        </div>

        {/* Размер числа */}
        <div className="engine__block">
          <div>Размер числа</div>
          <div>Минимум</div>
          <input
            value={context.min}
            onChange={(e) => context.setMin(e.target.value)}
            placeholder="Минимальное значение"
          />
          <div>Максимум</div>
          <input
            value={context.max}
            onChange={(e) => context.setMax(e.target.value)}
            placeholder="Максимальное значение"
          />
        </div>

        <button onClick={() => exitFromEngine()}>
          Выполнить и выйти
        </button>
      </div>
    </div>
  );
};
