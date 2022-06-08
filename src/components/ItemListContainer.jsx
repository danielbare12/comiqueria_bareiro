import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';

function ItemListContainer({greetings}) {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/e5b3165e-694d-4c18-86a6-02407556cc1a")
    .then(res => res.json())
    .catch(error => console("Error",error))
    .then(dato => setProductos(dato));

  },[])

  return (
  <main>
    <h1>{greetings}</h1>
  <div id='listaProductos'>
  <ItemList lista = {productos}/>
  </div>
  </main>
  
  )
}

export default ItemListContainer