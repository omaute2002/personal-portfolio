import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CardContextProvider } from "./CardContext";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
  return (
    <>
      <CardContextProvider>
        <div className="app">
          <BackgroundVideo />
          <div className="app-content">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
          </div>
          
        </div>
      </CardContextProvider>
    </>
  );
}

export default App;
