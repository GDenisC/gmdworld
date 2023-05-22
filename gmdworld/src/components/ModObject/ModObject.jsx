import {React} from "react";
import classes from "./ModObject.module.css"
import { useNavigate } from "react-router-dom";

function ModObject({id, imgUrl, name, dev}) {
    const navigate = useNavigate();

    const openModPage = () => {
        navigate(`/mods/${id}`)
    }

  return (
    <div className={classes.cell}>
          <div className={classes.header}>
            <p className={classes.name}>{name}</p>
            <p className={classes.dev}>by {dev}</p>
          </div>
          <div style={{backgroundImage: `url(http://176.57.220.181:4000/imgs/${imgUrl})`}} className={classes.img}></div>
          <button onClick={() => openModPage(id)} className={classes.btn}>Информация</button>
    </div>
  );
}

export default ModObject;