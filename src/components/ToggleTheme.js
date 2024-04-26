import React from "react";
import PropTypes from "prop-types";

function ToggleTheme(props) {
  const { theme, toggleTheme } = props;

  const styles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  }

  return (
    <React.Fragment>
      <button style={styles} onClick={toggleTheme}>{theme.textColor === "AntiqueWhite" ? "Toggle Light Theme" : "Toggle Dark Theme"}</button>
    </React.Fragment>
  );
}

ToggleTheme.propTypes = {
  toggleTheme: PropTypes.func,
  theme: PropTypes.object
}

export default ToggleTheme;