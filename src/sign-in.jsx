import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import "./app.css";
import SignInElements from "./sign-in-elements";
import SignUpElements from "./sign-up-elements";

function SignIn(props) {
  const { formType } = props;
  return (
    <div className="form-content-wrapper">
      {formType === "sign-in" ? <SignInElements /> : <SignUpElements />}
      <div className="social-media-wrapper">
        <span className="secondary-color">Sign Up Directly.</span>
        <div className="icon-wrapper">
          <FaFacebookSquare />
          <FaSquareGooglePlus />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
