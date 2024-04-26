import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/theme-context";

function ReusableForm(props) {
  const theme = useContext(ThemeContext);

  const buttonStyles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  }

  const inputStyles = {
    backgroundColor: theme.inputBackground,
    color: theme.textColor
  }

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          style={inputStyles}
          type="text"
          name="names"
          placeholder="Pair Names"/>
        <br/>
        <input
          style={inputStyles}
          type="text"
          name="location"
          placeholder="Location"/>
        <br/>
        <textarea
          style={inputStyles}
          name="issue"
          placeholder="Describe your issue."/>
        <br/>
        <button style={inputStyles} type="submit">{props.buttonText}</button>
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