import React, { useEffect, useState } from "react";
import Header from "../UI/Header/Header";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import Requests from "../API/requests";
import LoadingCircle from "../UI/LoadingCircle/LoadingCircle";
import ModInfo from "../components/ModInfo/ModInfo";

function ModInfoPage() {
    const params = useParams();
    const [modInfo, setModInfo] = useState({});
    const [loadModInfo, isLoading, error] = useFetching(async () => {
        const response = await Requests.getModById(params.id);
        if (!response.data || response.data.length === 0)
            console.log("sus")
        else
            setModInfo(response.data[0]);
    });

    useEffect(() => {
        loadModInfo();
    }, [])

  return (
    <div>
        <Header/>
        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "5% 0"}}>
            <ModInfo title={modInfo.title} dev={modInfo.dev} info={modInfo.info} imgUrl={modInfo.img} download={modInfo.download} source={modInfo.source}/>
        </div>
        <LoadingCircle top={'50%'} left={'50%'} width={'20%'} isLoading={isLoading}/>
    </div>
  );
}

export default ModInfoPage;