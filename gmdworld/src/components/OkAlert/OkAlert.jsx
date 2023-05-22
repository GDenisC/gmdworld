import {React} from "react";
import classes from "./OkAlert.module.css"
import Popup from "../../UI/Popup/Popup";

function OkAlert({isOk, setOk, okText}) {

  return (
    <Popup isVisible={isOk} setVisible={setOk}>
        <div className={classes.okAlert}>
            <p className={classes.header}>OK!</p>
            <div className={classes.error}>{okText}</div>
        </div>
    </Popup>
  );
}

export default OkAlert;