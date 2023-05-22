import React, { useContext, useEffect, useState } from "react";
import Header from "../UI/Header/Header";
import AccountInfo from "../components/AccountInfo/AccountInfo";

function LoginPage() {

  return (
    <div>
        <Header/>
        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "5% 0"}}>
            <AccountInfo/>
        </div>
    </div>
  );
}

export default LoginPage;