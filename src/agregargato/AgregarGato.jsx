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
  const [mail, setEmail] = useState("");

  // Agrego estados para verificaciones:  el nombre es válido en el formulario, el peso recibe números, la imagen es una Url, el correo fue ingresado y es válido.

  const [nombreValido, setNombreValido] = useState("");
  const [nuevoPeso, setNuevoPeso] = useState("");

  const navegar = useNavigate();

  function postearGato() {
    const newCat = {
      // Recibirá los valores de los inputs.
      name: nombre, // Los incorporo al objeto.
      breed: raza,
      weight: peso,
      temperament: temperamento,
      description: descripcion,
      image: imagen,
      email: mail,
    };

    // CONEXIÓN FRONT/BACK

    axios
      .post("http://localhost:5050/rutasGatos/postear/", newCat) // Le pide al endpoint del back que entre a la DB para crear un nuevo gato.

      //Cuando consigue la info., entonces...
      .then((res) => {
        console.log(res.data);
        alert("Gato agregado a la DB");
        navegar("/");
      }) // Si encontró la info. la muestra en consola.
      .catch((err) => console.log(err)); // Si no la encontró, muestra el error.
  }

  {
    /* FUNCIÓN MANEJADORA del envío del formulario */
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombreValido) {
      alert("El nombre es obligatorio");
      return;
    }
  };

  {
    /* CONTROLADOR DEL EVENTO "PESO" 
  const pesoChange = (e) => {
    const checkPeso = e.target.value;
    if (checkPeso.trim() !== '' || checkPeso.length === 1 || (checkPeso.length === 2 && checkPeso[0] === '0')) {
    setPeso(checkPeso);
    } else if (!isNaN(checkPeso) && parseFloat(checkPeso) >= 0.5 && parseFloat(checkPeso) < 30) {
     setPeso(checkPeso);
     } else {
     alert("El peso debe estar entre 0,400 gramos y 30 kilos");
     }
    }         */
  }
  // FUNCIÓN MANEJADORA DEL EVENTO "URL IMAGEN"

  
  const urlImagen = (e) => {
    const inputValue = e.target.value;

    // Validar que la URL sea una imagen válida
    if (isImagenValida(inputValue)) {
      setImagen(inputValue);
     
    } else {
      setImagen('');
      alert('Por favor ingresa una URL de imagen válida.');
    }
  }

  const isImagenValida = (url) => {
    return /\.(jpeg|jpg|gif|png)$/.test(url);
  }

  //

  return (
    <div style={{ width: "100%" }}>
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
          marginTop: "5px",
          height: "110px",
        }}
      >
        <p style={{ color: "red", fontSize: "40px" }}>
          Ingreso <br></br> <span style={{ color: "white" }}>{nombre}</span>
        </p>
      </div>
      {/* AQUÍ EMPIEZA EL FORMULARIO */}
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Función manejadora del evento enviar el formulario */}
        <div
          style={{
            // Posición del contenedor.
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <div // RECUADRO - CONTENEDOR
            style={{
              borderRadius: "0.75rem",
              padding: "1rem",
              backgroundColor: "orange",
              marginTop: "-40px",
            }}
          >
            <div style={{ textAlign: "center", fontSize: "1.25rem" }}>
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="nombre"
                  style={{
                    color: "black",
                    fontSize: "1.5rem",
                    fontFamily: "cursive",
                  }}
                >
                  Nombre:{" "}
                </label>
                <input
                  type="text"
                  style={{ marginLeft: "8px", borderRadius: "0.5rem" }}
                  //  className="form-control border border-gray-300 rounded-md px-3 py-2"
                  value={nombre}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const regex = /^.+/; // Esta expresión regular verifica que al menos un carácter esté presente
                    const isNameValid = regex.test(inputValue); // Verifica si el valor del input coincide con la expresión regular
                    setNombreValido(isNameValid); // Actualiza el estado de nombre válido.
                    setNombre(inputValue);
                  }}

                  // hasta acá

                  //   onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              {/*   <div className="mb-3">   */}

              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="raza"
                  style={{
                    color: "black",
                    fontSize: "1.5rem",
                    fontFamily: "cursive",
                  }}
                >
                  Raza:
                </label>
                <input
                  type="text"
                  style={{ marginLeft: "8px", borderRadius: "0.5rem" }}
                  //  className="form-control border border-gray-300 rounded-md px-3 py-2"
                  value={raza}
                  onChange={(e) => setRaza(e.target.value)}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                {/*   <div className="mb-3"> */}
                <label
                  htmlFor="peso"
                  style={{
                    color: "black",
                    fontSize: "1.5rem",
                    fontFamily: "cursive",
                  }}
                >
                  Peso:
                </label>

                <input
                  type="text"
                  style={{ marginLeft: "8px", borderRadius: "0.5rem" }}
                  //  className="form-control border border-gray-300 rounded-md px-3 py-2"
                  value={peso}
                  //  onChange= {pesoChange}  // Utiliza esta función para manejar el cambio de peso
                  // onChange={(e) => setPeso(e.target.value)}

                  onChange={(e) => {
                    const checkPeso = e.target.value;
                    if (
                      checkPeso.trim() === "" ||
                      (checkPeso.length === 1 && /^[0-9]$/.test(checkPeso))  // Verifica si el campo está vacío o si contiene un sólo dígito comprendido entre 0 y 9. Si se cumple esta condición, actualiza el peso. Permite la eliminación de un solo dígito comprendido entre 0 y 9 sin activar la alerta.
                    ) {
                      setPeso(checkPeso);
                    } else if (
                      !isNaN(checkPeso) &&   // Valida si el valor ingresado está comprendido entre 0,400 gramos y 30 kilos. Si se cumple, actualiza el estado.
                      parseFloat(checkPeso) >= 0.5 &&
                      parseFloat(checkPeso) < 30
                    ) {
                      setPeso(checkPeso);
                    } else {     // Si ninguna de las condiciones se cumple, dispara el alerta. 
                      alert("El peso debe estar entre 0,400 gramos y 30 kilos");
                    }
                  }}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                {/*  <div className="mb-3"> */}
                <label
                  htmlFor="temperamento"
                  style={{
                    color: "black",
                    fontSize: "1.5rem",
                    fontFamily: "cursive",
                  }}
                >
                  Temperamento:
                </label>
                <input
                  type="text"
                  style={{ marginLeft: "8px", borderRadius: "0.5rem" }}
                  //  className="form-control border border-gray-300 rounded-md px-3 py-2"
                  value={temperamento}
                  onChange={(e) => setTemperamento(e.target.value)}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                {/*    <div className="mb-3"> */}
                <label
                  htmlFor="descripción"
                  style={{
                    color: "black",
                    fontSize: "1.5rem",
                    fontFamily: "cursive",
                  }}
                >
                  Descripción:
                </label>
                <input
                  type="text"
                  style={{ marginLeft: "8px", borderRadius: "0.5rem" }}
                  //  className="form-control border border-gray-300 rounded-md px-3 py-2"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </div>

              {/*   <div className="mb-3"> */}
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="imagen"
                  style={{
                    color: "black",
                    fontSize: "1.5rem",
                    fontFamily: "cursive",
                  }}
                >
                  Imagen:
                </label>
                <input
                  type="text"
                  style={{ marginLeft: "8px", borderRadius: "0.5rem" }}
                  // className="form-control border border-gray-300 rounded-md px-3 py-2"
                  value={imagen}
                  placeholder="Ingresa la URL"
                 onChange={urlImagen}
                 
                 // onChange={(e) => setImagen(e.target.value)}
                />
              </div>

              {/*    <div className="mb-3"> */}
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="e-mail"
                  style={{
                    color: "black",
                    fontSize: "1.5rem",
                    fontFamily: "cursive",
                  }}
                >
                  E-mail:
                </label>
                <input
                  type="text"
                  style={{ marginLeft: "8px", borderRadius: "0.5rem" }}
                  // className="form-control border border-gray-300 rounded-md px-3 py-2"
                  value={mail}
                  placeholder="Ingresa un mail de contacto"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "",
            marginTop: "-40px",
          }}
        >
          <button
            type="submit"
            style={{
              border: "2px solid #3182ce",
              backgroundColor: "yellow",
              borderRadius: "0.75rem",
              padding: "0.25rem 0.75rem",
              marginRight: "1rem",
              marginBottom: "1.5rem",
              fontFamily: "fantasy",
              fontSize: "2rem",
              color: "red",
              transition: "all 0.3s ease-in-out",
            }}
            onClick={postearGato}
            //    className="border-2 rounded border-gray-500 p-1 px-2 mr-4 mt-6 hover:bg-yellow-800 text-lg transition-all ease-in-out"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "yellow";
              e.target.style.color = "black"; // Cambia el color del texto a negro
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "red";
              e.target.style.color = "yellow"; // Restaura el color original del texto
            }}
          >
            {" "}
            {/* Cuando se hace click dispara la función "postearGato" */}
            ADMISIÓN
          </button>
        </div>
      </form>{" "}
      {/* Cierre del fomulario */}
    </div>
  );
}

export default AgregarGato;
