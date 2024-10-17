"use client";

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../Cards/card.css";

function EditarGato() {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [temperamento, setTemperamento] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [peso, setPeso] = useState("");
  const [imagen, setImagen] = useState("");
  const [mail, setEmail] = useState("");
  const navegar = useNavigate();

  useEffect(() => {
    console.log(id);

    // (Llamada original)
    // axios.get(`http://localhost:5050/rutasGatos/gatos/${id}`).then((res) => {
    //  let dataGato = res.data;

    // Llamada a la URL deployada 
      axios.get(`https://backendcats-pablos-projects-1f3606e3.vercel.app/rutasGatos/gatos/${id}`).then((res) => {
        let dataGato = res.data;

      setNombre(dataGato.name);
      setRaza(dataGato.breed);
      setPeso(dataGato.weight);
      setTemperamento(dataGato.temperament);
      setDescripcion(dataGato.description);
      setImagen(dataGato.image);
      setEmail(dataGato.email);
    });
  }, []);

  function editarCat() {
    const gatoUpdate = {
      name: nombre,
      breed: raza,
      weight: peso,
      temperament: temperamento,
      description: descripcion,
      image: imagen,
      email: mail,
    };

    // Llamo al back para generar una modificación en la DB
    // Le envío los datos en "gatoUpdate"

    // (Llamada original)
    // axios.put(`http://localhost:5050/rutasGatos/editar/${id}`, gatoUpdate)

    // Llamada a la URL deployada
    axios.put(`https://backendcats-pablos-projects-1f3606e3.vercel.app/rutasGatos/editar/${id}`, gatoUpdate)
      .then((res) => {
        alert("Gato actualizado con éxito!");
        navegar("/");
      });
  }

  return (
    <div className="w-full bg-stone-500">
      {/*  <div className="container bg-cyan-700">  */}

      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "10px",
          textAlign: "center",
          padding: "10px",
          width: "570px",
          fontWeight: "bold",
          marginTop: "10px",
          height: "110px",
        }}
      >
        <p style={{ color: "red", fontSize: "40px" }}>
          Actualizar datos de <br></br>{" "}
          <span style={{ color: "white" }}>{nombre}</span>
        </p>
      </div>

      {/*   <div className="m-auto flex justify-center items-center text-white rounded-lg text-center p-10 w-500 font-bold h-10">
        <p className="text-white text-4xl">
          EDITAR A {nombre}
          <br />
        </p>
      </div>*/}

      {/*    <div className="m-auto flex justify-center items-center bg-blue text-white rounded-lg text-center p-10 w-430 font-bold h-10">
        <h2 style={{ fontSize: "30px", color: "blue" }}> Editar a {nombre} </h2>
      </div>*/}

      {/* <div className="flex justify-center items-center h-screen">
        <div className="text-indigo-800 rounded-lg p-4">
        <div className="text-center text-2xl">  */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <div // RECUADRO - CONTENEDOR
          style={{
            borderRadius: "0.5rem",
            padding: "1rem",
            backgroundColor: "orange",
          }}
        >
          <div style={{ textAlign: "center", fontSize: "1.25rem" }}>
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="raza"
                style={{ color: "black", fontSize: "2rem" }}
              >
                Raza:{" "}
              </label>
              <input
                type="text"
                style={{ marginLeft: "8px" }}
                className="border-4 p-2 mr-4 rounded-md"
                value={raza}
                onChange={(e) => setRaza(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="peso"
                style={{ color: "black", fontSize: "2rem" }}
              >
                Peso:{" "}
              </label>
              <input
                type="text"
                style={{ marginLeft: "8px" }}
                className="border-4 p-2 mr-4 rounded-md"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="temperamento"
                style={{ color: "black", fontSize: "2rem" }}
              >
                Temperamento:{" "}
              </label>
              <input
                type="text"
                style={{ marginLeft: "8px" }}
                className="border-4 p-2 mr-4 rounded-md"
                value={temperamento}
                onChange={(e) => setTemperamento(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="descripción"
                style={{ color: "black", fontSize: "2rem" }}
              >
                Descripción:
              </label>
              <input
                type="text"
                style={{ marginLeft: "8px" }}
                className="border-4 p-2 mr-4 rounded-md"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "5px" }}>
              <label
                htmlFor="imagen"
                style={{ color: "black", fontSize: "2rem" }}
              >
                Imagen:
              </label>
              <input
                type="text"
                className="rounded-md"
                style={{ marginLeft: "8px" }}
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: "5px" }}>
              <label
                htmlFor="imagen"
                style={{ color: "black", fontSize: "2rem" }}
              >
                E-mail:
              </label>
              <input
                type="text"
                className="rounded-md"
                style={{ marginLeft: "8px" }}
                value={mail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="contenedor_botón">
        <button onClick={() => editarCat()} className="botón">
          {/*      className="border-2 rounded border-blue-500 p-1 px-2 mr-4 hover:bg-orange-800 transition-all ease-in-out" */}{" "}
          Enviarme
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        <button onClick={() => editarCat()} className="botón">
          Enviar
        </button>
      </div>

      {/*  Muestra este botón con estilo en línea  */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "orange",
        }}
      >
        <button
          style={{
            border: "2px solid #3182ce",
            backgroundColor: "yellow",
            borderRadius: "0.75rem",
            padding: "0.25rem 0.5rem",
            marginRight: "1rem",
            fontFamily: "fantasy",
            fontSize: "2rem",
            transition: "all 0.3s ease-in-out",
          }}
          onClick={() => editarCat()}
        >
          ENVIARME
        </button>
      </div>

      {/*  ¿POR QUÉ NO APLICA LAs CLASEs "contenedor_botón" y "botón" */}

      <div className="contenedor_botón">
        <button onClick={() => editarCat()} className="botón">
          {/*      className="border-2 rounded border-blue-500 p-1 px-2 mr-4 hover:bg-orange-800 transition-all ease-in-out" */}{" "}
          Enviarme
        </button>
      </div>
    </div>
  );
}

export default EditarGato;

{
  /*  
     PARA VERIFICAR SI INGRESÓ EL NOMBRE

  const input = 'nombre a verificar'; // Reemplaza 'nombre a verificar' con el valor del input
const regex = /^.+/;  // Esta expresión regular verifica que al menos un carácter esté presente
const isNameValid = regex.test(input);

console.log(isNameValid); // Devolverá true si se ingresó un nombre, de lo contrario devolverá false 

    PARA VERIFICAR QUE SOLO SE INGRESEN NÚMEROS (en el peso)

 const pesoInput = '123'; // Reemplaza '123' con el valor del peso input
const regex = /^[0-9]+$/; // Esta expresión regular verifica que solo se ingresen dígitos
const isPesoValid = regex.test(pesoInput);

console.log(isPesoValid); // Devolverá true si se ingresó un número solo, de lo contrario devolverá false
  
    PARA VERIFICAR QUE SE INGRESÓ UNA URL VÁLIDA

const urlInput = 'https://www.example.com'; // Reemplaza 'https://www.example.com' con el valor de la URL input
const regex = /^(ftp|http|https):\/\/[^ "]+$/; // Esta expresión regular verifica una URL válida
const isURLValid = regex.test(urlInput);

console.log(isURLValid); // Devolverá true si se ingresó una URL válida, de lo contrario devolverá false

      PARA VERIFICAR QUE SE INGRESÓ UN EMAIL VÁLIDO

const emailInput = 'correo@example.com'; // Reemplaza 'correo@example.com' con el valor del email input
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Esta expresión regular verifica un email válido
const isEmailValid = regex.test(emailInput);

console.log(isEmailValid); // Devolverá true si se ingresó un email válido, de lo contrario devolverá false

*/
}
