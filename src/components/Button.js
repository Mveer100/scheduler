import React from "react";
import classNames from "classnames";
import "components/Button.scss";

export default function Button(props) {
  let buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger,
  });
  const handleButtonClick = () => {
    if (props.disabled) {
      buttonClass += " button--disabled";
    }
  }
 
 
  return (
    <button
      className={buttonClass}
      onClick={handleButtonClick}
      disabled={props.disabled}
    >
    {props.children}
    </button>
  );
}
