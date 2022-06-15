import React from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

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
        <div><ItemCount inicial={1} stock={5} onAdd = {onAdd}/></div>
        <Link to={'/item/' + id} className='productoBotonDetalle'>Detalles</Link>
      </div>
      </div>


  )
}

export default Item