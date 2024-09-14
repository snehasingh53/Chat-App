import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Join from "./components/Join";
import Login from "./components/Login";


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/login" element={<Login />} />

      <Route path="/chat" element={<Chat />} />
    </Routes>
  </Router>
);

export default App;
