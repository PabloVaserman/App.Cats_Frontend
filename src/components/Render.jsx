"use client"

import React from "react";

function Render() {
  <div className="flex items-center justify-between w-full h-16 bg-blue-300">
    <h3 className="text-lg font-bold mb-4 underline">GATOS EN ADOPCIÓN</h3>
    <div className="flex  gap-2">
      {/* Borrado lógico: no lo muestra si el estado es "false" */}
      {/* ACÁ EMPIEZA */}
      {data.map((item) => {
        if (item.estado === true)
          return (
            //   { (item.estado == true) &&

            <div className="flex justify-between gap-8 shadow-lg mb-6 items-center p-4 animate-fade ">
              <div className="card" key={item._id + 1}>
                {" "}
                {/* Cada elemento debe tener una key*/}{" "}
                <div className="row" key={item._id + 2}>
                  <div key={item._id} className="col-sm-6 offset-3">
                    <img src={item.image}></img>
                    <p>Nombre:{item.name}</p>
                    <p>Raza:{item.breed}</p>
                    <p>Peso:{item.weight}</p>
                    <p>Caracter:{item.temperament}</p>
                    <p>Descripción:{item.description}</p>
                    <Link to={"/editargato/${item._id}"}>
                      <li className="border-2 rounded border-gray-500 p-1 px-2 mr-4 hover:bg-green-800 transition-all ease-in-out">
                        Editar
                      </li>
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
  </div>;
}

export default Render;
