"use client";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gatos from "../listado/Gatos";
import EditarGato from "../editargato/EditarGato";
import AgregarGato from "../agregargato/AgregarGato";
import Galeria from "../galeria/Galeria";
import NavBar from "../components/NavBar";
import Carrusel from "../components/Carrusel";
import Fondo from "@/components/Header";
import Render from "@/components/Render";
import "../../src/card.css";

function App() {
  return (
    <div className="Aplicacion-Gatos">
      <NavBar />
      <Fondo />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Carrusel />}></Route>
          <Route path="/listado" element={<Gatos />}></Route>
          <Route path="/agregargato" element={<AgregarGato />}></Route>
          <Route path="/editargato" element={<EditarGato />}></Route>
          <Route path="/galeria" element={<Galeria />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
