import {React, useState} from "react";
import classes from "./RegisterForm.module.css"
import Popup from "../../UI/Popup/Popup";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function RegisterForm({isVisible, setVisible}) {
    const [recaptchaToken, setRecaptchaToken] = useState("");

    const recaptchaChanged = async (event) => {
    
        try {
          const response = await axios.post("/verify-captcha", {
            token: recaptchaToken,
          });
    
          const { success } = response.data;
    
          if (success) {
            console.log("reCAPTCHA verification passed");
            // Дополнительные действия по обработке формы
          } else {
            console.log("reCAPTCHA verification failed");
            // Дополнительные действия при неудачной проверке
          }
        } catch (error) {
          console.error("reCAPTCHA verification error:", error);
        }
    };

  return (
    <Popup isVisible={isVisible} setVisible={setVisible}>
        <div className={classes.registerAlert}>
            <p className={classes.header}>Зарегистрироваться</p>
            <div className={classes.form}>
                <div className={classes.inputFrame}>
                    <label className={classes.label} name="name">Имя:</label>
                    <input name="name" type="text" className={classes.input}/>
                </div>
                <div className={classes.inputFrame}>
                <label className={classes.label} name="password">Пароль:</label>
                <input name="password" type="password" className={classes.input}/>
                </div>
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={recaptchaChanged}
                />
                <button className={classes.login}>register</button>
            </div>
        </div>
    </Popup>
  );
}

export default RegisterForm;