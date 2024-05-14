import React from "react";

import Slide from "./Slide";
import { gatos } from "./Portada";
import Fondo from "./Header";

function Carrusel() {
  const carrousel = [...gatos, ...gatos]; // "gatos" contiene los objetos.
  // "carrousel" es lo que itero en el mapeado-

  <Fondo />;

  return (
    <div className="w-full  bg-orange-400 m-0 ">
      <div className="container mx-auto mt-32">
        <div className="overflow-hidden w-full">
          <div className="flex whitespace-nowrap animate-scroll">
            {carrousel.map((cat, index) => (
              <Slide cat={cat} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
