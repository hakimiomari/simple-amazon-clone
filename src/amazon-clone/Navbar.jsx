import React from "react";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { State_Value } from "./amzon images/State_Provider";
const Navbar = () => {
  const [state, dispatch] = State_Value();
  return (
    <div className="nav">
      <div className="nav__left">
        <Link to="/">
          <span className="left_basket">Online Shop</span>
        </Link>
      </div>
      <div className="nav__write">
        <Link to="/checkout">
          <span className="basket">
            <SlBasket />
          </span>
        </Link>
        <span>{state.basket.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
