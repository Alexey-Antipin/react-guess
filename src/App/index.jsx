import { useState } from "react";
import { Logic } from "../Components/Logic";
import { GamePlay } from "../Components/GamePlay";
import { AgainPlay } from "../Components/RepeatComponents";
import { GameEngine } from "../GameEngine";
import "./index.scss";
import { ContextState } from "../Context";

export const App = () => {
  const [live, setLive] = useState(5);
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
        <Logic />
        <GamePlay />
        {!live && <AgainPlay />}
        {attempt.length == 3 && (
          <AgainPlay word={"Вы победили, поздравляем!"} />
        )}
        {gameEngine && <GameEngine />}
      </div>
    </ContextState.Provider>
  );
};
