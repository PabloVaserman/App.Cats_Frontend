"use client";

import React from "react";

function Slide({ cat }) {
  return (
   <div className="h-full w-[450px] m-4 flex-shrink-0 cursor-pointer">
      <div className="rounded-3xl overflow-hidden mb-4 relative h-[250px]">
        {" "}
        {/*IMAGEN */}
        <img src={`/imagenes/cat${cat.id}.jpg`} alt={cat.title} />
      </div>
   </div>
  );
}

export default Slide;
