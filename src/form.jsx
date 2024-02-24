import React, { useState } from "react";
import Navigation from "./navigation";
import "./app.css";
import SignIn from "./sign-in";

function Form() {
  const [formType, changeFormType] = useState("sign-in");

  return (
    <div className="form-content">
      <Navigation
        changeFormType={(value) => {
          changeFormType(value);
        }}
        formType={formType}
      />
      <SignIn formType={formType} />
    </div>
  );
}

export default Form;
