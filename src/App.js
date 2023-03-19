import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projet1 from "./pages/Projet-1";
import Projet2 from "./pages/Projet-2";
import Projet3 from "./pages/Projet-3";
import Projet4 from "./pages/Projet-4";
import Projet5 from "./pages/Projet-5";
import "./style/app.scss";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projet1" element={<Projet1 />} />
        <Route path="/projet2" element={<Projet2 />} />
        <Route path="/projet3" element={<Projet3 />} />
        <Route path="/projet4" element={<Projet4 />} />
        <Route path="/projet5" element={<Projet5 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
