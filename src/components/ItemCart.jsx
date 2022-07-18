import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ItemCart({ producto }) {
    const {removeItem} = useContext(CartContext);
    const {id, title, author, price, cantidad , image} = producto;
    return (
        <div className="productoCarrito">
            <div>
                <img className="imagenCarrito" src={image} alt="" />
            </div>
            <div className="descripcionCarrito">
                <div>
                    <h2 className="tituloProducto">{title}</h2>
                    <p>Autor: {author}</p>
                    <p>Precio: ${price}</p>
                </div>
                <div className="cantidadProducto"><p>Cantidad: {cantidad}</p></div>
                <div><p>Precio Total: ${price*cantidad}</p></div>
            </div>
            <div className="botonQuitarProducto">
                <button onClick={()=>{removeItem(id)}} type="button" className="btn-close" aria-label="Close"></button>
                
            </div>
        </div>

    )
}

export default ItemCart