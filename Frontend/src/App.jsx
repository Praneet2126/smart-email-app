import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing_page/LandingPage";
import HomePage from "./components/Home/HomePage";
import MailPage from "./components/Mail/MailPage";
import SignUp from "./components/Signup/SignUp";
import LoginPage from "./components/Login/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/mail/:id" element={<MailPage/>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
