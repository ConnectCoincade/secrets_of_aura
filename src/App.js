import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import AuraReading from './components/AuraReading/AuraReading';
import ChakraAnalysis from './components/ChakraAnalysis/ChakraAnalysis';
import ReadingScanningServices from './components/ReadingScanningServices/ReadingScanningServices';
import HealingTherapyService from './components/HealingTherapyService/HealingTherapyService';
import Support from './components/Support/Support';
import Navigationbar from './container/Header/Header';
import Footer from './container/Footer/Footer';


function App() {

  
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/aura-reading" element={<AuraReading />}></Route>
        <Route path="/chakra-analysis" element={<ChakraAnalysis />}></Route>
        <Route
          path="/reading-n-scanning-service"
          element={<ReadingScanningServices />}
        ></Route>
        <Route
          path="/healing-n-therapy-service"
          element={<HealingTherapyService />}
        ></Route>
        <Route path='/support' element={<Support/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
