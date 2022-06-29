import React from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function Item({ producto }) {
  const {id, title, price, image} = producto;

  return (

    <div className='card'>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Precio: ${price}</p>
        <Link to={'/item/' + id} className='productoBotonDetalle'>Detalles</Link>
      </div>
      </div>


  )
}

export default Item