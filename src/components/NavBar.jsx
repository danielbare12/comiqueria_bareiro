import React from 'react'
import MiLogo from './MiLogo'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light miBarra">

      <div className="container-fluid">
        <div className="container">
          <a href="#"><MiLogo /></a>

        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Novedades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Nosotros</a>
            </li>
          </ul>
        </div>
        <div className='carrito'>
          <CartWidget cantidad={8}/>

        </div>
      </div>
    </nav>
  )
}

export default NavBar