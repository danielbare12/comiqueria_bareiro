import React from 'react'
import ItemCount from './ItemCount';

function Item({ producto }) {
  const {id, titulo, precio, autor, imagen} = producto;
  const onAdd = (cant) => {
    alert(`La cantidad de productos agregados es ${cant} de ${titulo}`)

  }

  return (

    <div className='card'>
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{id}. {titulo}</h2>
        <p className="card-text">Autor: {autor}</p>
        <p className="card-text">Precio: {precio}</p>
        <div><ItemCount inicial={1} stock={5} onAdd = {onAdd}/></div>
      </div>
      <div className='card'></div>
      </div>


  )
}

export default Item