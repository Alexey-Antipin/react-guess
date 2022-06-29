import { useContext, useEffect,useState } from "react";
import { ContextState } from "../../Context";
import "./index.scss";

export const Logic = () => {
  const context = useContext(ContextState);
  const symbols = context.min.toString().split("")
  const [symbolStar, setSymbolStar] = useState([]);
  
  const createRandNumber = () => {
    const response = Math.floor(
      Number(context.min) +
        Math.random() * (Number(context.max) + 1 - Number(context.min))
    );
    context.setRandNumber(response);
    context.setDisabled(!context.disabled);
  };

  useEffect(() => {
    getSymbols();
  }, [context.min]);

  const getSymbols = () => {
    let massive = []; 
    for (let i = 0; i < symbols.length; i++) {
      massive.push("*");
    }
    setSymbolStar(massive);
  };

  return (
    <div className="logic">
      <p className="logic__text">Игра</p>
      <button
        className="logic__button"
        disabled={context.disabled == true}
        onClick={() => createRandNumber()}>
        Загадать число
      </button>

      {context.disabled == true ? (
        <div className="logic__attempt">
          <div>Случайное число: {symbolStar}</div>
          <div>Попыток осталось: {context.live}</div>
        </div>
      ) : (
        <div className="logic__close"></div>
      )}
    </div>
  );
};
