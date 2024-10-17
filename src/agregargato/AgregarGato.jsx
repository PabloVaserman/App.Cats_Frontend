"use client";

import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

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
  const [error, setError] = useState("");

  const [esMailValido, setEsMailValido] = useState("");

  const [errorDesc, setErrorDesc] = useState("");

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

    // (Llamada original) 
   // axios.post("http://localhost:5050/rutasGatos/postear/", newCat) // Le pide al endpoint del back que entre a la DB para crear un nuevo gato.


      axios   // llamada a la url deployada
      .post("https://backendcats-pablos-projects-1f3606e3.vercel.app/rutasGatos/postear/", newCat)

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
    console.log("URL de la imagen:", urlImagen);

    e.preventDefault();
    if (!nombreValido) {
      //   alert("El nombre es obligatorio");  // Modal con SweetAlert
      Swal.fire("El nombre es obligatorio");
      return;
    }

    if (urlImagen === "") {
      // Verifica si la variable está vacía

      console.log("URL de la imagen vacía");
      //  alert("Debe ingresar la URL de la imagen");  // Modal con SweetAlert
      Swal.fire("Debes ingresar la URL de la imagen");
      return;
    }
    if (
      typeof urlImagen !== "string" ||
      (typeof urlImagen !== "undefined" &&
        !urlImagen.startsWith("http://") &&
        !urlImagen.startsWith("https://"))
    ) {
      console.log("URL de la imagen no válida");
      alert("Ingrese una URL válida que comience con http:// o https://");
      return;
    }

    if (!/\.(jpeg|jpg|gif|png)$/.test(urlImagen)) {
      console.log("Extensión de la URL inválida");
      alert(
        "La URL de la imagen debe tener una extensión válida (jpeg, jpg, gif, png)"
      );
      return;
    }

    if (mail === "") {
      //   alert("Debe ingresar un mail de contacto")   // Modal con SweetAlert
      Swal.fire("Debe ingresar un mail de contacto");
      return;
    } else if (!/\S+@\S+\.\S+/.test(mail)) {
      alert("Debe ingresar un correo electrónico válido");
      return;
    }

    //
    // Verifica que la descripción tenga más de 5 caracteres y no se encuentre en blanco para actualizar el estado
   
   
   {/*  if (setDescripcion.trim() === "" || setDescripcion.length <= 5) {
      alert("Debe ingresar una descripción con más de cinco caracteres");
      return;
    }

    */}

    // setDescripcion(descripcion); // Actualizar el estado con la descripción ingresada si cumple las condiciones

    setImagen(urlImagen); // Si se cumplen las validaciones, actualiza el estado de la imagen

    setEmail(mail); // Actualiza el estado del correo electrónico si todas las validaciones son exitosas
  };

  {
    /* FUNCIÓN MANEJADORA DEL EVENTO EMAIL */
  }

  //     const handleEmailChange = (e) => {
  const handleEmailChange = (e) => {
    const checkMail = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!checkMail.match(emailPattern)) {
      setEsMailValido("Por favor ingresa un email válido");
    } else {
      setEsMailValido("");
    }
    setEmail(checkMail); // Actualiza el estado del correo electrónico
  };

  //   const handleEmailBlur = () => {       // Lo verifica cuando termina de ingresarlo
  //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //    setEsMailValido(mail.length > 0 ? emailPattern.test(mail) : true);
  //  };

  // FUNCIÓN MANEJADORA DEL EVENTO "URL IMAGEN"

  const urlImagen = (e) => {
    const url = e.target.value;

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      setError(
        "Por favor ingresa una URL válida que comience con http:// o https://"
      );
    } else if (!/\.(jpeg|jpg|gif|png)$/.test(url)) {
      setError("La URL debe ser una imagen con extensión jpeg, jpg, gif o png");
    } else {
      setError(""); // Limpia el mensaje de error si la URL y la extensión son válidas
    }

    setImagen(url);
  };

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
                      (checkPeso.length === 1 && /^[0-9]$/.test(checkPeso)) // Verifica si el campo está vacío o si contiene un sólo dígito comprendido entre 0 y 9. Si se cumple esta condición, actualiza el peso. Permite la eliminación de un solo dígito comprendido entre 0 y 9 sin activar la alerta.
                    ) {
                      setPeso(checkPeso);
                    } else if (
                      !isNaN(checkPeso) && // Valida si el valor ingresado está comprendido entre 0,400 gramos y 30 kilos. Si se cumple, actualiza el estado.
                      parseFloat(checkPeso) >= 0.5 &&
                      parseFloat(checkPeso) < 30
                    ) {
                      setPeso(checkPeso);
                    } else {
                      // Si ninguna de las condiciones se cumple, dispara el alerta.
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

              {/*

            <div style={{ marginBottom: "15px" }}>
        
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
                  // onChange={(e) => setDescripcion(e.target.value)}

                  onChange={(e) => {
                    if (e.target.value.length > 5) {
                      setDescripcion(e.target.value);
                      setErrorDesc("");
                    } else {
                      setErrorDesc(
                        "La descripción debe tener más de cinco caracteres"
                      );
                    }

                    //  muestra el error
                  }}
                />
                {errorDesc && (
                  <p
                    style={{
                      color: "grey",
                      fontFamily: "cursive",
                      fontSize: "16px",
                    }}
                  >
                    {errorDesc}
                  </p>
                )}
              </div> 
              
               */}

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
                {error && (
                  <p
                    style={{
                      color: "grey",
                      fontFamily: "cursive",
                      fontSize: "16px",
                    }}
                  >
                    {error}
                  </p>
                )}
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
                  onChange={handleEmailChange} // Actualiza el estado del correo electrónico
                  //   onBlur={handleEmailBlur}   // Realiza la verificación cuando el usuario terminó de ingresar el mail
                  // onChange={(e) => setEmail(e.target.value)}
                />
                {esMailValido && (
                  <p
                    style={{
                      color: "grey",
                      fontSize: "1rem",
                      fontFamily: "cursive",
                    }}
                  >
                    {esMailValido}
                  </p>
                )}

                {/*   {!esMailValido && <p style={{ color: 'grey', fontSize:"1rem", fontFamily:"cursive" }}>Por favor ingresa un email válido</p>} */}
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
