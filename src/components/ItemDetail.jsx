import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.jsx';
import { CartContext } from '../context/CartContext.jsx';
import { useContext } from 'react';
import Swal from 'sweetalert2';

function ItemDetail({ producto }) {
  const { addItem, cart } = useContext(CartContext);
  const { id,title, publisher, category, description, price, author, image, stock } = producto;
  const [productoComprado, setProductoComprado] = useState(false);
  let inicial = cart.some((itemCart) => itemCart.id == id)?(cart.find((itemCart) => itemCart.id == id)).cantidad:0;

  const onAdd = (cant) => {
    setProductoComprado(true)
    addItem(producto, cant);
    Swal.fire({
      icon: 'success',
      title: 'AGREGADO AL CARRITO',
      
    })
  }
  return (
    <div className='detalleProducto'>
      <img src={image} className="imagenDetalle" alt="..." />
      <div className="">
        <h2 className="">{title}</h2>
        <p className="">Autor: {author}</p>
        <p>Editorial: {publisher}</p>
        <p className='categoria'>Categoria: {category}</p>
        <p className="">Precio: ${price}</p>
        <p className=''>Descripcion: {description}</p>
        <div>{productoComprado ? <><Link className='botonCarrito' to='/cart'><button type="button" className="btn btn-primary">Terminar la compra</button></Link><Link className='botonCarrito' to='/'><button type="button" className="btn btn-primary">Seguir Comprando</button></Link></> : <ItemCount inicial={0} stock={stock - inicial} onAdd={onAdd} />}</div>
      </div>
    </div>
  )
}

export default ItemDetail