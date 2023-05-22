import {React, useContext, useEffect, useState} from "react";
import classes from "./ModList.module.css"
import ModCell from "../ModObject/ModCell";
import LoadingCircle from "../../UI/LoadingCircle/LoadingCircle";
import { useFetching } from "../../hooks/useFetching";
import Requests from "../../API/requests";
import AddModForm from "../AddModForm/AddModForm";
import ModObject from "../ModObject/ModObject";
import {AuthContext} from "../../context"
import ErrorAlert from "../ErrorAlert/ErrorAlert";

function ModList() {
    const {username, setUsername} = useContext(AuthContext);
    const {password, setPassword} = useContext(AuthContext);

    const [mods, setMods] = useState([]);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');
    const [isCreatePopup, setCreatePopup] = useState(0);

    const [loadMods, isLoading, error] = useFetching(async () => {
        const response = await Requests.getMods(search, filter);
        if (!response.data)
            setMods([]);
        else
            setMods(response.data);
    });

    useEffect(() => {
        loadMods();
    }, [search, filter])
    

  return (
    <div className={classes.modList}>
        {username && password
        ?<AddModForm isVisible={isCreatePopup} setVisible={setCreatePopup}/>
        :<ErrorAlert isError={isCreatePopup} setError={setCreatePopup} errorText="Вы не вошли в аккаунт!"/>
        }
        <div className={classes.header}>
            <button onClick={ () => setCreatePopup(1)} className={classes.addMod}>+</button>
            <input value={search} type="text" className={classes.search} onChange={(e) => setSearch(e.target.value)}/>
            <select className={classes.filter} value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">All</option>
                <option value="windows">Windows</option>
                <option value="android">Android</option>
            </select>
        </div>
        <div className={classes.list}>
            {mods.map(mod => 
                <ModObject key={mod.id} id={mod.id} imgUrl={mod.img} name={mod.title} dev={mod.dev}/>
            )}
            <LoadingCircle top={'50%'} left={'50%'} width={'20%'} isLoading={isLoading}/>
        </div>
    </div>
  );
}

export default ModList;