import React, { Fragment } from "react";

function SingUpElements() {
  return (
    <Fragment>
      <h1>Sign Up.</h1>
      <input type="text" placeholder="Enter your Email" />
      <input type="text" placeholder="Enter your Name" />
      <input type="password" placeholder="Enter your password" />

      <button className="submit-button signup-button">Sign Up</button>
    </Fragment>
  );
}

export default SingUpElements;
