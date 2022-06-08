import React from 'react'

function Item({ producto }) {
  const {id, titulo, precio, autor, imagen} = producto;

  return (

    <div className='card'>
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{id}. {titulo}</h2>
        <p className="card-text">Autor: {autor}</p>
        <p className="card-text">Precio: {precio}</p>
        <button type="button" className="boton btn btn-primary">Comprar</button>
      </div>
      <div className='card'></div>
      </div>


  )
}

export default Item