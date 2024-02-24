import React, { Fragment } from "react";

function SignInElements() {
  return (
    <Fragment>
      <h1>Sign In.</h1>
      <input type="text" placeholder="Enter your Email" />
      <input type="password" placeholder="Enter your password" />
      <div className="form-content-area-2">
        <div className="form-checkbox">
          <input type="checkbox" />
          <label for="checkbox">Keep me signed in.</label>
        </div>
        <span className="secondary-color ">Forgot Password ?</span>
      </div>
      <button className="submit-button">Sign In</button>
    </Fragment>
  );
}

export default SignInElements;
