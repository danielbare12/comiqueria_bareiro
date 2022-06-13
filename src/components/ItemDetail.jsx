import React from 'react'
import ItemCount from './ItemCount.jsx'

function ItemDetail({producto}) {
    const {id, titulo,editorial , descripcion, precio, autor, imagen} = producto;
    const onAdd = (cant) => {
      alert(`La cantidad de productos agregados es ${cant} de ${titulo}`)
  
    }
  return (
    <div className='detalleProducto'>
    <img src={imagen} className="imagenDetalle" alt="..." />
    <div className="">
      <h2 className="">{id}. {titulo}</h2>
      <p className="">Autor: {autor}</p>
      <p>Editorial: {editorial}</p>
      <p className="">Precio: ${precio}</p>
      <p className=''>Descripcion: {descripcion}</p>
      <div><ItemCount inicial={1} stock={5} onAdd = {onAdd}/></div>
    </div>
    </div>
  )
}

export default ItemDetail