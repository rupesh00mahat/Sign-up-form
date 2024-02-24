import React, { useState } from "react";
import "./app.css";

function Navigation(props) {
  const { changeFormType, formType } = props;

  return (
    <div className="form-toggle-btns">
      <button
        onClick={() => {
          changeFormType("sign-in");
        }}
        className={`form-toggle-button secondary-color ${
          formType === "sign-in" && "active-tab"
        }`}
      >
        Sign In
      </button>
      <button
        onClick={() => {
          changeFormType("register");
        }}
        className={`form-toggle-button secondary-color ${
          formType === "register" && "active-tab"
        }`}
      >
        Register
      </button>
    </div>
  );
}

export default Navigation;
