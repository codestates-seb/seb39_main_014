import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Nav from "./components/navigation/Nav";
import Home from "./pages/home/Home";
import WriteForm from "./pages/writeForm/WriteForm";
import LoginPage from "./pages/loginpage/LoginPage";
import SignUpPage from "./pages/singupPage/SignUpPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/write" element={<WriteForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
