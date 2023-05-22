import {React} from "react";
import classes from "./ModInfo.module.css"
import { useNavigate } from "react-router-dom";

function ModInfo({title, dev, info, imgUrl, download, source}) {
    const navigator = useNavigate();

    const downloadRelease = () => {
        window.location.href = `http://176.57.220.181:4000/downloads/${download}`;
    };

    const downloadSource = () => {
        window.location.href = `http://176.57.220.181:4000/sources/${source}`;
    };


  return (
    <div className={classes.modInfo}>
        <p className={classes.title}>{`${title} by ${dev}`}</p>
        <div style={{backgroundImage: `url(http://176.57.220.181:4000/imgs/${imgUrl})`}} className={classes.img}></div>
        <div className={classes.info}>{info}</div>
        <div className={classes.buttons}>
            <button onClick={downloadRelease} className={classes.btn}>Скачать</button>
            {source && <button onClick={downloadSource} className={classes.btn}>Сорсы</button>}
        </div>
    </div>
  );
}

export default ModInfo;