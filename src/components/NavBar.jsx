import React, { useContext } from 'react'
import MiLogo from './MiLogo'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function NavBar() {
  const {cantidadCarrito} = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light miBarra">

      <div className="container-fluid">
        <div className="container">
          <Link to='/'><MiLogo /></Link>

        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link active botonCategoria" aria-current="page" to='/category/comic'>Comic</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active botonCategoria" aria-current="page" to='/category/manga'>Manga</Link>
            </li>
          </ul>
        </div>
        <div className='carrito'>
          <Link to = '/cart'>
          <CartWidget cantidad={cantidadCarrito} />
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default NavBar