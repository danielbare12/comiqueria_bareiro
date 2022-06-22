import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Item from './Item';
import ItemCart from './ItemCart';

function Cart() {
  const { cart , clear, precioTotal} = useContext(CartContext);

  return (
    <>
    <main className='mainCarrito'>
      {cart.map(comic => <ItemCart key={comic.id} producto={comic} />)}
      <div>Precio Total: {precioTotal}</div>
      <button onClick={clear}>Vaciar Carrito</button>
      </main>
    </>
  )
}

export default Cart