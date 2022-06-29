import { useState } from "react";
import { ContextState } from "../Context";
import { GameEngine } from "../GameEngine";
import { Logic } from "../Components/Logic";
import { GamePlay } from "../Components/GamePlay";
import { AgainPlay } from "../Components/RepeatComponents";
import "./index.scss";

export const App = () => {
  const [live, setLive] = useState(5);
  const [liveLimit, setLiveLimit] = useState();
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(400);
  const [value, setValue] = useState("");
  const [attempt, setAttempt] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [randNumber, setRandNumber] = useState([]);
  const [gameEngine, setGameEngine] = useState(false);

  return (
    <ContextState.Provider
      value={{
        min,
        setMin,
        max,
        setMax,
        live,
        setLive,
        liveLimit,
        setLiveLimit,
        value,
        setValue,
        attempt,
        setAttempt,
        randNumber,
        setRandNumber,
        gameEngine,
        setGameEngine,
        disabled,
        setDisabled,
      }}>
      <div className="app">
        <div className="gameplay">
          <Logic />
          <GamePlay />
        </div>
        <div>
          {!live && <AgainPlay />}
          {attempt == true && <AgainPlay word={"Вы победили, поздравляем!"} />}
          {gameEngine && <GameEngine />}
        </div>
      </div>
    </ContextState.Provider>
  );
};
