"use client"

import React from "react"
import {useNavigate, useParams} from "react-router-dom"
import {useState} from "react"
import { useEffect } from "react"
import axios from "axios"

function EditarGato() {

const { id }=useParams()
const [nombre, setNombre] = useState('')
const [raza,setRaza]= useState('')
const [temperamento, setTemperamento]= useState('')
const [descripcion, setDescripcion]= useState('')
const [peso, setPeso]=useState('')
const navegar=useNavigate()

useEffect(() => {

axios.put (`http://localhost:5050/rutasGatos/editar/${id}`).then(res=>{ 
    let dataGato= res.data


setNombre(dataGato.data.name)
setRaza(dataGato.data.breed)
setPeso(dataGato.data.weight)
setTemperamento(dataGato.data.temperament)
setDescripcion(dataGato.data.description)
})
},[])

function editarCat() {

const gatoUpdate = {


name: nombre,
breed: raza, 
weight: peso,
temperament: temperamento,
description: descripcion,
}


// Llamo al back para generar una modificación en la DB
// Le envío los datos en "gatoUpdate"

axios.put(`http://localhost:5050/rutasGatos/editar/${id}`, gatoUpdate).then(res => {
    alert('Gato actualizado con éxito!')
    navegar("/")
}) 
}

return (

    <div className="w-full bg-stone-500">
    <div className="container bg-cyan-700">
      <div className="font-sans text-xl">
            
                <h2 className="mt-4 font-sans text-cyan-300 from-purple-500 text-2xl"> Editar a {nombre} </h2>            

            </div>
            <div className="flex flex-col justify-center items-center border-4 p-4 rounded">
                <div className="text-lg font-sans text-indigo-800">
                    <div className="mb-3">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="border-4 p-2 mr-4" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="raza">Raza</label>
                        <input type="text" className="border-4 p-2 mr-4" value={raza} onChange={(e)=>setRaza(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="peso">Peso</label>
                        <input type="text" className="border-4 p-2 mr-4" value={peso} onChange={(e)=>setPeso(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="temperamento">Temperamento</label>
                        <input type="text" className="border-4 p-2 mr-4" value={temperamento} onChange={(e)=>setTemperamento(e.target.value)}/>
                    </div>

                    <button onClick={editarCat} className="border-2 rounded border-gray-500 p-1 px-2 mr-4 hover:bg-green-800 transition-all ease-in-out"> Editar Gato</button>

                </div>
            </div>
        </div>
        </div>
    )
}

export default EditarGato;

   






