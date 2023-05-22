import {React} from "react";
import classes from "./ErrorAlert.module.css"
import Popup from "../../UI/Popup/Popup";

function ErrorAlert({isError, setError, errorText}) {

  return (
    <Popup isVisible={isError} setVisible={setError}>
        <div className={classes.errorAlert}>
            <p className={classes.header}>Ошибка!</p>
            <div className={classes.error}>{errorText}</div>
        </div>
    </Popup>
  );
}

export default ErrorAlert;