import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/navigation/Nav";
import Home from "./pages/home/Home";
import WriteForm from "./pages/writeForm/WriteForm";
import LoginPage from "./pages/loginpage/LoginPage";
import SignUpPage from "./pages/singupPage/SignUpPage";
import BoardPage from "./pages/boardpage/BoardPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/write" element={<WriteForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/board" element={<BoardPage />} />
      </Routes>
    </>
  );
}

export default App;
