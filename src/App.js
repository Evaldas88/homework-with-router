import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Calculator from './components/Calculator/Calculator';
import Greeter from './components/Greeter/Greeter'





function App() {

  
  return (
    <BrowserRouter>
        <Header />
         <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/calculator' element={<Calculator />} />        
        <Route exact path='/greeter' element={<Greeter />} />

        <Route path="*"
            element={
                <main style={{ padding: "1rem" }}>
                   <p>There's nothing here!</p>
                </main>
                    }
        />

      </Routes>
    </BrowserRouter>
  )
 }
export default App;
































