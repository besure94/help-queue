import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="names"
          placeholder="Pair Names"
          required/>
        <br/>
        <input
          type="text"
          name="location"
          placeholder="Location"
          required/>
        <br/>
        <textarea
          name="issue"
          placeholder="Describe your issue."
          required/>
        <br/>
        <button type="submit">{props.buttonText}</button>
      </form>
      <br/>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;