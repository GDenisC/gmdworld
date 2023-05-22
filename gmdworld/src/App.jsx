import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./null.css"
import ChatsPage from "./pages/ChatsPage";
import CollabsPage from "./pages/CollabsPage";
import ModsPage from "./pages/ModsPage";
import LoginPage from "./pages/AccountPage";
import { useEffect, useState } from "react";
import { AuthContext } from "./context"
import ModInfoPage from "./pages/ModInfoPage";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <AuthContext.Provider value={{ username, setUsername, password, setPassword }}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainPage/>} />
          <Route path={'/chats'} element={<ChatsPage/>} />
          <Route path={'/collabs'} element={<CollabsPage/>} />
          <Route path={'/mods'} element={<ModsPage/>} />
          <Route path={'/mods/:id'} element={<ModInfoPage/>} />
          <Route path={'/account'} element={<LoginPage/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
