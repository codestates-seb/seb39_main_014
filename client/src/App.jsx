import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Nav from "./components/navigation/Nav";
import Home from "./pages/home/Home";
import WriteForm from "./pages/writeForm/WriteForm";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/write" element={<WriteForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
