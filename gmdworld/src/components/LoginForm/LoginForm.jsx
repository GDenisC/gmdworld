import {React, useState} from "react";
import classes from "./LoginForm.module.css"
import Popup from "../../UI/Popup/Popup";
import { useFetching } from "../../hooks/useFetching";
import Requests from "../../API/requests";
import { useContext } from "react";
import { AuthContext } from "../../context";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import LoadingCircle from "../../UI/LoadingCircle/LoadingCircle";
import { useNavigate } from "react-router-dom";

function LoginForm({isVisible, setVisible, openRegisterPage}) {
  const navigate = useNavigate();
  const {username, setUsername} = useContext(AuthContext);
  const {password, setPassword} = useContext(AuthContext);

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [isError, setError] = useState(0);
  const [errorText, setErrorText] = useState("");

  const [checkLogin, isLoading, error] = useFetching(async () => {
    const newUsername = loginUsername;
    const newPassword = loginPassword;
    const response = await Requests.checkLogin(newUsername, newPassword);
    const responseData = response.data;
      if(responseData != "200"){
        setErrorText(response.data);
        setError(1);
      }else{
        setVisible(0);
        setUsername(newUsername);
        setPassword(newPassword);
        navigate("/account")
      }
  });


  return (
    <div>
      <Popup isVisible={isVisible} setVisible={setVisible}>
          <div className={classes.loginAlert}>
              <p className={classes.header}>Войти в аккаунт</p>
              <div className={classes.form}>
                  <div className={classes.inputFrame}>
                      <label className={classes.label} name="name">Имя:</label>
                      <input onChange={(e) => setLoginUsername(e.target.value)} value={loginUsername} name="name" type="text" className={classes.input}/>
                  </div>
                  <div className={classes.inputFrame}>
                      <label className={classes.label} name="password">Пароль:</label>
                      <input onChange={(e) => setLoginPassword(e.target.value)} value={loginPassword} name="password" type="password" className={classes.input}/>
                  </div>
                  <button onClick={() => !isLoading && checkLogin()} className={classes.login}>login</button>
                  <span className={classes.registerText}>Нет аккаунта? <span onClick={() => openRegisterPage()} className={classes.registerLink}>Зарегистрируйся!</span></span>
              </div>
          </div>
      </Popup>
      <ErrorAlert isError={isError} setError={setError} errorText={errorText}/>
      <LoadingCircle isLoading={isLoading} top={'50%'} left={'50%'} width={'30%'}/>
    </div>
  );
}

export default LoginForm;