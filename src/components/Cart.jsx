import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart';

function Cart() {
  const { cart, clear, precioTotal, cantidadCarrito } = useContext(CartContext);

  const mainCart = <main className='mainCarrito'>
    {cart.map(comic => <ItemCart key={comic.id} producto={comic} />)}
    <div>Precio Total: {precioTotal}</div>
    <button onClick={clear}>Vaciar Carrito</button>
    <Link to='/checkout'><button>Siguiente</button></Link>
  </main>

  const vacio = <div className='tituloCarroVacio'><h1>Carrito Vacio </h1><Link to="/" >  Ir a comprar</Link></div>

  return (
    <>
      {(cantidadCarrito == 0)?vacio:mainCart}
    </>
  )
}

export default Cart