import React from "react";
import { State_Provider } from "./State_Provider";
import Navbar from "./Navbar";
import Product from "./Product";
import { initialValue, reducer } from "./reducer";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chackout from "./Chackout";

const My_App = () => {
  return (
    <State_Provider initialValue={initialValue} reducer={reducer}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Navbar />
                <Product />
              </>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Navbar />
                <Chackout />
              </>
            }
          />
        </Routes>
      </Router>
    </State_Provider>
  );
};

export default My_App;
