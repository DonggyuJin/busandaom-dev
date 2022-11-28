import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Map from "./pages/Map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/map/:category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
