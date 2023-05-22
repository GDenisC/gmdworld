import React, { useEffect, useState } from "react";
import Header from "../UI/Header/Header";
import Input from "../UI/Input/Input";
import ModCell from "../components/ModObject/ModCell";
import { useFetching } from "../hooks/useFetching";
import Requests from "../API/requests";
import Button from "../UI/Button/Button";
import Popup from "../UI/Popup/Popup"
import AddModForm from "../components/AddModForm/AddModForm";
import ModList from "../components/ModList/ModList";

function ModsPage() {


  return (
    <div>
        <Header/>
        <div style={{width: '100%', display: 'flex', justifyContent: "center", marginTop: 70}}>
          <ModList/>
        </div>
    </div>
  );
}

export default ModsPage;