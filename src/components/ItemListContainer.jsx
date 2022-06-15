import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer({ greetings }) {

  const { idCategoria } = useParams()
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://mocki.io/v1/bb0fff3b-75fb-4f92-896c-a856433f661c")
      .then(res => res.json())
      .then(listaproductos => setProductos((idCategoria == undefined) ? listaproductos : listaproductos.filter((producto) => producto.categoria == idCategoria)))
      .catch((error) => {
        setError(true);
        console("Error", error);
      })
      .finally(() => setCargando(false))
    }, 2000);

  }, [idCategoria])

  return (
    <main>
      <h1>{(idCategoria == undefined) ? greetings : (greetings + idCategoria)}</h1>
      <div>{cargando && "CARGANDO......"} </div>
      <div>{error && "Error en la carga"}</div>
      <div id='listaProductos'>
        <ItemList lista={productos} />
      </div>
    </main>

  )

  
}

export default ItemListContainer