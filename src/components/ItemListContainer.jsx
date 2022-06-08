import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';

function ItemListContainer({ greetings }) {

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const listaProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res([{ "id": 1, "titulo": "Batman: La Broma Asesina", "precio": 1800, "autor": "Alan Moore", "imagen": "https://i.imgur.com/3Uejavo.png" },
        { "id": 2, "titulo": "Batman: El Regreso Del Caballero Oscuro", "precio": 2300, "autor": "Frank Miller", "imagen": "https://i.imgur.com/KzcmPap.jpg" },
        { "id": 3, "titulo": "Batman: Año Uno", "precio": 1700, "autor": "Frank Miller", "imagen": "https://i.imgur.com/t2JfkGT.jpg" },
        { "id": 4, "titulo": "Watchmen", "precio": 3000, "autor": "Alan Moore", "imagen": "https://i.imgur.com/MusDuh8.png" },
        { "id": 5, "titulo": "Spiderman: La Última Cacería De Kraven", "precio": 1400, "autor": "J. M. DeMatteis", "imagen": "https://i.imgur.com/3L3ajuo.png" },
        { "id": 6, "titulo": "One Piece Volumen 1", "precio": 600, "autor": "Eichiro Oda", "imagen": "https://i.imgur.com/Vm7yZ0z.jpg" },
        { "id": 7, "titulo": "One Piece Volumen 2", "precio": 600, "autor": "Eichiro Oda", "imagen": "https://i.imgur.com/C8whcbO.jpg" },
        { "id": 8, "titulo": "Sandman", "precio": 3000, "autor": "Warren Ellis", "imagen": "https://i.imgur.com/Ty6nlIw.jpg" }])
      }, 2000)
    });


    listaProductos
      .then(dato => setProductos(dato))
      .catch((error) => {
        setError(true);
        console("Error", error);
      })
      .finally(() => setCargando(false));



  }, [])

  return (
    <main>
      <h1>{greetings}</h1>
      <div>{cargando && "CARGANDO......"} </div>
      <div>{error && "Error en la carga"}</div>
      <div id='listaProductos'>
        <ItemList lista={productos} />
      </div>
    </main>

  )
}

export default ItemListContainer