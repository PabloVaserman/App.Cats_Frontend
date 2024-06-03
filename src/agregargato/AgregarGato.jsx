"use client";

import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AgregarGato() {
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [peso, setPeso] = useState("");
  const [temperamento, setTemperamento] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const navegar = useNavigate();

  function postearGato() {
    const newCat = {
      // Recibirá los valores de los inputs.
      name: nombre, // Los incorporo al objeto.
      breed: raza,
      temperament: temperamento,
      weight: peso,
      description: descripcion,
      image: imagen,
    };

    // CONEXIÓN FRONT/BACK

    axios
      .post("http://localhost:5050/rutasGatos/postear/", newCat) // Le pide al endpoint del back que entre a la DB para crear un nuevo gato.

      //Cuando consigue la info., entonces...
      .then((res) => console.log(res.data)) // Si encontró la info. la muestra en consola.
      .then((err) => console.log(err)); // Si no la encontró, muestra el error.
    alert("Gato agregado a la DB");
    navegar("/");
  }

  return (
    <div className="w-full bg-stone-500">
      <div className="bg-cyan-700 text-center">
        <div className="font-sans text-3xl mt-4">
          <h3
            style={{ fontSize: "2rem", color: "blue", fontWeight: "bold", lineHeight: "4.5"}}
            className="text-indigo-800"
          >
            Agregar un GATO
          </h3>
        </div>

        <div className="text-lg font-sans font-bold text-indigo-800 mx-auto mt-4
        ">
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="raza">Raza</label>
            <input
              type="text"
              className="form-control border border-gray-300 rounded-md px-3 py-2"
              value={raza}
              onChange={(e) => setRaza(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="peso">Peso</label>
            <input
              type="number"
              className="form-control border border-gray-300 rounded-md px-3 py-2"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="temperamento">Temperamento</label>
            <input
              type="text"
              className="form-control border border-gray-300 rounded-md px-3 py-2"
              value={temperamento}
              onChange={(e) => setTemperamento(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descripción">Descripción</label>
            <input
              type="text"
              className="form-control border border-gray-300 rounded-md px-3 py-2"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="imagen">Imagen</label>
            <input
              type="text"
              className="form-control border border-gray-300 rounded-md px-3 py-2"
              value={imagen}
              placeholder="Ingresa la URL"
              onChange={(e) => setImagen(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={postearGato}
          className="border-2 rounded border-gray-500 p-1 px-2 mr-4 mt-6 hover:bg-green-800 text-lg transition-all ease-in-out"
        >
          {" "}
          {/* Cuando se hace click dispara la función "postearGato" */}
          Agregar Gato
        </button>
      </div>
    </div>
  );
}

export default AgregarGato; //
