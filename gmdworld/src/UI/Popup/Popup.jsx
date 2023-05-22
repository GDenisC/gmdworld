import React from "react";
import classes from "./Popup.module.css";

const Popup = ({children, isVisible, setVisible})=>{

    const rootClasses = [classes.popup];
    if(isVisible){
        rootClasses.push(classes.active);
    }
    return(
        <div className={rootClasses.join(' ')} onClick={() => setVisible(0)}>
            <div className={classes.popupContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Popup;