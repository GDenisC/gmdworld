import {React, useState} from "react";
import classes from "./RegisterForm.module.css"
import Popup from "../../UI/Popup/Popup";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {useFetching} from "../../hooks/useFetching"
import Requests from "../../API/requests";
import LoadingCircle from "../../UI/LoadingCircle/LoadingCircle";
import OkAlert from "../OkAlert/OkAlert";
import ErrorAlert from "../ErrorAlert/ErrorAlert";

function RegisterForm({isVisible, setVisible}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isOk, setOk] = useState(0);
  const [isError, setError] = useState(0);
  const [errorText, setErrorText] = useState("");

  const [token, setToken] = useState('');

  const [registerAccount, isLoading, error] = useFetching(async () => {
    const response = await Requests.register(username, password, token);
    if (response.data == "200"){
      setVisible(0);
      setOk(1);
    }else{
      setErrorText(response.data);
      setError(1);
    }
  });


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    registerAccount();
  };

  const handleVerificationSuccess = (verifiedToken) => {
    setToken(verifiedToken);
  };

  return (
    <>
    <Popup isVisible={isVisible} setVisible={setVisible}>
        <div className={classes.registerAlert}>
            <p className={classes.header}>Зарегистрироваться</p>
            <form onSubmit={(e) => handleFormSubmit(e)} className={classes.form}>
                <div className={classes.inputFrame}>
                    <label className={classes.label} name="name">Имя:</label>
                    <input onChange={(e) => {setUsername(e.target.value)}} value={username} name="name" type="text" className={classes.input}/>
                </div>
                <div className={classes.inputFrame}>
                <label className={classes.label} name="password">Пароль:</label>
                <input onChange={(e) => {setPassword(e.target.value)}} value={password} name="password" type="password" className={classes.input}/>
                </div>
                <HCaptcha
                  sitekey="22393eb0-da23-4980-8883-a205dbef8ba6"
                  onVerify={handleVerificationSuccess}
                />
                <button type="submit" className={classes.login}>register</button>
            </form>
        </div>
        <LoadingCircle isLoading={isLoading} top={'50%'} left={'50%'} width={'30%'}/>
    </Popup>
    <ErrorAlert isError={isError} setError={setError} errorText={errorText}/>
    <OkAlert isOk={isOk} setOk={setOk} okText="Аккаунт успешно создан!"/>
    </>
  );
}

export default RegisterForm;