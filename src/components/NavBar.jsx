import React, { useContext } from 'react'
import MiLogo from './MiLogo';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function NavBar() {
  const { cantidadCarrito } = useContext(CartContext);
  return (<>
    <nav className='miBarra'>
      <div className='containerCarrito'>
        <Link className='carritoLink' to='/cart'>
          <CartWidget cantidad={cantidadCarrito} />
        </Link>

      </div>
      <div className="container containerLogo">
        <Link to='/'><MiLogo /></Link>

      </div>

      <div className="containerCategoria">

        <div className="">
          <Link className="navCategoria" aria-current="page" to='/category/comic'>Comic</Link>
        </div>
        <div className="">
          <Link className="navCategoria" aria-current="page" to='/category/manga'>Manga</Link>
        </div>
      </div>

    </nav>

  </>
  )
}

export default NavBar