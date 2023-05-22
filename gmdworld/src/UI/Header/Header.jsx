import React, { useContext, useState } from "react";
import classes from "./Header.module.css"
import planet from "../../assets/planet.png"
import accountPng from "../../assets/account.png"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

function Header() {
  const navigate = useNavigate();
  const {username, setUsername} = useContext(AuthContext);
  const {password, setPassword} = useContext(AuthContext);
  const [isLoginPage, setLoginPage] = useState(0);
  const [isRegisterPage, setRegisterPage] = useState(0);

    const onAccount = () => {
      if (!username || !password){
        setLoginPage(1);
      }else{
        navigate("/account");
      }
    }
  
    const openRegisterPage = () => {
      setLoginPage(0);
      setRegisterPage(1);
    }

  return (
    <header className={classes.header}>
        <RegisterForm isVisible={isRegisterPage} setVisible={setRegisterPage}/>
        <LoginForm isVisible={isLoginPage} setVisible={setLoginPage} openRegisterPage={openRegisterPage}/>
        <div className={classes.logoPart}>
          <div className={classes.logo}>
            <img onClick={() => navigate("/")} src={planet} alt="" />
          </div>
        </div>
        <div className={classes.centerPart}>
          <span className={classes.link} onClick={() => navigate("/chats")} >chats</span>
          <span className={classes.link} onClick={() => navigate("/collabs")} >collabs</span>
          <span className={classes.link} onClick={() => navigate("/mods")}>mods</span>
        </div>
        <div onClick={() => onAccount()} className={classes.loginPart}>
          <img className={classes.accountBtn} src={accountPng} alt="" />
        </div>
    </header>
  );
}

export default Header;