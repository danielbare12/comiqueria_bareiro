import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ItemCart({ producto }) {
    const {removeItem} = useContext(CartContext);
    const {id, titulo, autor, precio, cantidad , imagen} = producto;
    return (
        <div className='productoCarrito'>
            <div>
                <img className="imagenCarrito" src={imagen} alt="" />
            </div>
            <div className="descripcionCarrito">
                <div>
                    <h2 className="tituloProducto">{titulo}</h2>
                    <p>Autor: {autor}</p>
                    <p>Precio: ${precio}</p>
                </div>
                <div className="cantidadProducto"><p>Cantidad: {cantidad}</p></div>
                <div><p>Precio Total: ${precio*cantidad}</p></div>
            </div>
            <div>
                <button onClick={()=>{removeItem(id)}}>Borrar Producto</button>
            </div>
        </div>

    )
}

export default ItemCart