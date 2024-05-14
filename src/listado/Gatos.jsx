"use client"

import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../../src/card.css'

function Gatos() {
  // "Gatos" se dispara apenas se inicia la página

  const [data, setData] = useState([]);
  const navegar = useNavigate();

  useEffect(() => {
    obtenerGatos(); // "obtenerGatos" se dispara apenas se inicia la aplicación. Le pide la info al "back".
  }, []);

  const obtenerGatos = async () => {
    const gatos = (await axios.get("http://localhost:5050/gatos")).data;
    setData(gatos); // Le coloca esa info. a "data" (la lista de gatos obtenida en el Back)
  };

  function borrarGato(idGato) {
    axios
      .delete("http://localhost:5050/borrar/" + idGato)
      .then(
        // Hace una petición al "back"
        // En la ruta "/borrar" va a "deleteCatRouter" y borra por ID el elemento.
        (res) => {
          alert("Gato borrado");
          navegar(0); // Me devuelve al "home"
        }
      )
      .catch((err) => console.log(err));
  }

  return (
    // Renderiza la base de datos

    
<div className="flex items-center justify-between w-full h-16 bg-blue-300">
      <h3 className="text-2xl font-bold mb-4 underline text-cyan-950 font-sans">GATOS EN ADOPCIÓN</h3>
      <div className="flex  gap-2">
        {/* Borrado lógico: no lo muestra si el estado es "false" */}
        {/* ACÁ EMPIEZA */}
        {data.map((item) => {

          {/* Aquí incluir verificación con DATA REGEX si la DB tiene datos o está vacía antes de renderizar
         
         //Queremos que antes de que se envíe el form se analicen algunas cosas
    e.preventDefault(); //detener el comportamiento por defecto del submit, para que no se me guarde cualquier cosa en el form

    const dataRegEx = /^[A-Z][a-z]+$/; //Esta regex determina que se reciba un string con su primera letra en mayúscula y el resto en minúscula

    if (!form.name || !form.lastname) {       // Si la sección del nombre o apellido está vacía, devuelve el alert. 
      alert("datos incompletos");             // Con el return corta la ejecución.
      return;
    }

    if (!dataRegEx.test(form.name) || !dataRegEx.test(form.lastname)) {  // Testea lo que el usuario escribió en "form.name" y "form.lastname"
      alert("Solo se aceptan letras, las primeras en mayúscula");        // Si escribe distinto a lo que espera, lanza el alert. 
      return;       
    }
        
        */}
          if (item.estado === true)
            return (
              //   { (item.estado == true) &&

              <div className="flex justify-between gap-8 shadow-lg mb-6 items-center p-4 animate-fade ">
                <div className="card" key={item._id + 1}>
                  {" "}
                  {/* Cada elemento debe tener una key*/}{" "}
                  <div className="row" key={item._id + 2}>
                    <div key={item._id} className="text-purple-500 text-xl font-sans">
                      <img src={item.image}></img>
                      <p>Nombre:{item.name}</p>
                      <p>Raza:{item.breed}</p>
                      <p>Peso:{item.weight}</p>
                      <p>Caracter:{item.temperament}</p>
                      <p>Descripción:{item.description}</p>
                      <Link to={"/editargato/${item._id}"}>
                        <li className="border-2 rounded border-gray-500 p-1 px-2 mr-4 hover:bg-green-800 transition-all ease-in-out">Editar</li>
                      </Link>
                      <button
                        className="border-2 rounded border-gray-500 p-1 px-2 hover:bg-orange-500 transition-all ease-in-out"
                        onClick={() => {
                          borrarGato(item.id);
                        }}
                      >
                        Borrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </div>

  );
}
export default Gatos;

