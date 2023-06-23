import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navigationbar from "./container/Header/Header";
import Footer from "./container/Footer/Footer";

function App() {
  return (
    <>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
