"use client"

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Galeria() {
  // "Gatos" se dispara apenas se inicia la página

  const [data, setData] = useState([]);
  const navegar = useNavigate();

  useEffect(() => {
    obtenerGatos();
  }, []);

  const obtenerGatos = async () => {
    const gatos = (await axios.get("http://localhost:5050/galeria")).data;
    setData(gatos); // Le coloca esa info. a "data" (la lista de gatos)
  };

  return (
    // Renderiza la API
    <div className="w-full bg-violet-500">
      <div className="container">
        <h2 className="text-2xl font-sans text-purple-950 text-center ">
          GALERÍA DE GATOS
        </h2>
        <div>
          {data.map((item) => {
            return (
              <div className="card" key={item._id + 1}>
                {" "}
                {/* Cada elemento debe tener una key */}
                <div className="row" key={item._id + 2}>
                  <div key={item._id} className="text-purple-500 text-xl font-sans">
                    <img src={item.image}></img>
                    <p>Nombre:{item.name}</p>
                    <p>Raza:{item.breed}</p>
                    <p>Peso:{item.weight}</p>
                    <p>Caracter:{item.temperament}</p>
                    <p>Descripción:{item.description}</p>
                    <Link to={"/"}>
                      <li className="border-2 rounded border-gray-500 p-1 px-2 mr-4 hover:bg-green-800 transition-all text-lg ease-in-out">
                        Volver
                      </li>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Galeria;
