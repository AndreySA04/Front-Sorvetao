// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/esqueceu" element={<Forgot />} />
        <Route path="/conciliar" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
