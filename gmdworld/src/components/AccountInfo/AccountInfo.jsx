import {React, useContext} from "react";
import classes from "./AccountInfo.module.css"
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

function AccountInfo({}) {
  const {username, setUsername} = useContext(AuthContext);
  const {password, setPassword} = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    setUsername("");
    setPassword("");
    navigate(`/mods`)
  }

  return (
    <div className={classes.accountInfo}>
        <p className={classes.title}>Ваш аккаунт</p>
        <div className={classes.info}>Привет, {username}!<br/>Это страница аккаунта. Но тут ничего нет кроме возможности выйти. Так как на создание сайта у меня было очень мало времени. В следующих обновлениях я добавлю сюда что то :333</div>
        <button onClick={() => logout()} className={classes.logout}>Выйти из аккаунты</button>
    </div>
  );
}

export default AccountInfo;