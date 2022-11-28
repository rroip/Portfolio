import React, { useState } from "react";
import { validateEmail } from "../utils/helper";

function Contact(){
    const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const valid = validateEmail(e.target.value);
      if (!valid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };
    return (
        <div className="m-5 w-50">
        <h3>Contact</h3>
        <form>
          <div className="form-group m-3">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="name"
              onBlur={handleChange}
            />
          </div>
          <div className="form-group m-3">
            <label>Email address:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="name@example.com"
              onBlur={handleChange}
            />
          </div>
          <div className="form-group m-3">
            <label>Message:</label>
            <textarea
              name="message"
              className="form-control"
              rows="10"
              onBlur={handleChange}
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="form-group m-3">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
}

export default Contact;