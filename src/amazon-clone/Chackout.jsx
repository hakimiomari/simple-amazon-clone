import React from "react";
import { State_Value } from "./State_Provider";

const Chackout = () => {
  const [state, dispatch] = State_Value();
  const removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };
  return (
    <div className="checkout">
      {state.basket.map((item) => (
        <div className="card">
          <img className="card__img" src={item.img} alt={item.title} />
          <div className="card__info">
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
          <button
            className="card__button"
            onClick={() => removeFromBasket(item.id)}
          >
            Remove from Basket
          </button>
        </div>
      ))}
    </div>
  );
};

export default Chackout;
