import React from "react";
import PropTypes from "prop-types";

const Button = ({ disabled, children, link, buttonStyle }) => {
  const buttonClasses = () => {
    let buttonClass = disabled ? "submit button disabled" : "submit button";
    switch (buttonStyle) {
      case "primary":
        return buttonClass + " primary";
      case "secondary":
        return buttonClass + " secondary";
      default: return buttonClass
    }
  };
  return (
    <button className={buttonClasses()}>
      <a href={link} aria-disabled={true}>
        {children}
      </a>
    </button>
  );
};

Button.defaultProps = {
  disabled: false
};

Button.propTypes = {
  disabled: PropTypes.bool,
  link: PropTypes.string,
  buttonStyle: PropTypes.oneOf(['primary', 'secondary'])
};

export default Button;
