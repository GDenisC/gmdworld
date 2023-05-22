import React from "react";
import classes from "./Button.module.css"

function Button({children, callback}) {
  return (
    <button className={classes.btn} onClick={() => callback()}>
        {children}
    </button>
  );
}

export default Button;