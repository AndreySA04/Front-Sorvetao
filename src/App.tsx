// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Config from "./pages/Config";
import User from "./pages/User";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/esqueceu" element={<Forgot />} />
        <Route path="/conciliar" element={<Home />} />
        <Route path="/relatorio" element={<Report />} />
        <Route path="/configuracao" element={<Config />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
