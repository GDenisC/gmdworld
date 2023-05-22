import React from "react";
import classes from "./LoadingCircle.module.css"

function LoadingCircle({left, top, width, isLoading}) {
    let loadingClass;

    if (isLoading){
        loadingClass = classes.loadingCircle;
    }else{
        loadingClass = classes.loadingCircle + classes.invisible;
    }

  return (
    <div style={{left: left, top: top, width: width}} className={loadingClass}></div>
  );
}

export default LoadingCircle;