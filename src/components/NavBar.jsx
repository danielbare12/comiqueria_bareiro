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

      
        <div className="containerCategoria nav-item dropdown">
          <div className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item " aria-current="page" to='/category/comic'>Comic</Link></li>
            <li><Link className="dropdown-item " aria-current="page" to='/category/manga'>Manga</Link></li>
          </ul>
        </div>
    </nav>

  </>
  )
}

export default NavBar