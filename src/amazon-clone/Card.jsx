import React from "react";
import { State_Value } from "./amzon images/State_Provider";

const Card = ({ id, img, title, price }) => {
  const [state, dispatch] = State_Value();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: { id: id, img: img, title: title, price: price },
    });
  };
  return (
    <div className="card">
      <img className="card__img" src={img} alt={title} />
      <div className="card__info">
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <button onClick={addToBasket} className="card__button">
        Add to Basket
      </button>
    </div>
  );
};

export default Card;
