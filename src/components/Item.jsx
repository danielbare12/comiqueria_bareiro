import React from 'react';
import { Link } from 'react-router-dom';

function Item({ producto }) {
  const {id, title, price, image, stock} = producto;

  return (

    <div className='card'>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Precio: ${price}</p>
        <p>Stock: {stock}</p>
        <Link to={'/item/' + id} className='botonDetalle'><button type="button" className="btn btn-primary">Detalles</button></Link>
      </div>
      </div>


  )
}

export default Item