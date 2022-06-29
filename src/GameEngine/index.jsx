import { useContext } from "react";
import { ContextState } from "../Context";
import "./index.scss";

export const GameEngine = () => {
  const context = useContext(ContextState);

  const exitFromEngine = () => {
    context.setDisabled(!context.disabled);
    context.setGameEngine((context.gameEngine = false));
  };

  const liveInterval = (event) => {
    const id = event.currentTarget.id;

    if (id == 1 && context.live < 10) {
      context.setLive(context.live + 1);
    } else if (id == 2 && context.live > 1) {
      context.setLive(context.live - 1);
    }
    context.setLiveLimit(context.live);
  };

  return (
    <div>
      <div className="engine">
        <div className="engine__preview">
          <div className="engine__text">Настройки</div>
          <button className="engine__button" onClick={() => exitFromEngine()}>
            Готово
          </button>
        </div>

        {/* Количество попыток */}
        <div className="engine__block">
          <div>Количество попыток</div>
          <div>
            <button
              id="1"
              className="engine__button-plus"
              onClick={(event) => liveInterval(event)}>
              +
            </button>
            <button
              id="2"
              className="engine__button-minus"
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
      </div>
    </div>
  );
};
