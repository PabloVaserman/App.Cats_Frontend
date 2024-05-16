"use client";

import React from "react";

import  {Link}  from "react-router-dom";

// import EditarGato from "@/editargato/EditarGato";
// import Galeria from "@/galeria/Galeria";
// import Gatos from "@/listado/Gatos";
// import AgregarGato from "@/agregargato/AgregarGato";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 items-center justify-between">
      <div className=" px-2 sm:px-6 lg:px-8">
        <div className=" flex h-16 items-center justify-between">
        
          <div className="flex items-center justify-around sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-28">
                <Link
                  to="/"
                  className="bg-gray-900 text-white hover:bg-white hover:text-blue-900 rounded-md px-3 py-2 text-lg font-medium"
                  aria-current="page"
                >
                  Inicio
                </Link>
                <Link
                  to="/listado"
                  className="text-gray-300 hover:bg-yellow-400 hover:text-blue-400 rounded-md px-3 py-2 text-lg font-medium"
                >
                  Gatos en Adopción
                </Link>
                <Link
                  to="/agregargato"
                  className="text-gray-300 hover:bg-yellow-500 hover:text-blue-500 rounded-md px-3 py-2 text-lg font-medium"
                >
                  Ingresar un gato
                </Link>
                <Link
                  to="/editargato"
                  className="text-gray-300 hover:bg-yellow-600 hover:text-blue-600 rounded-md px-3 py-2 text-lg font-medium"
                >
                  Editar datos
                </Link>
                <Link
                  to="/galeria"
                  className="text-gray-300 hover:bg-yellow-700 hover:text-yellow-200 rounded-md px-3 py-2 text-lg font-medium"
                >
                  Galería de razas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Inicio
          </Link>
          <Link
            to="/listado"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Gatos en Adopción
          </Link>
          <Link
            to="/agregargato"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Ingresar un gato
          </Link>
          <Link
            to="/editargato"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Editar datos
          </Link>
          <Link
            to="/galeria"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Galería de razas
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
