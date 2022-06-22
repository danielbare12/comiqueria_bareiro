import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.jsx';
import { CartContext } from '../context/CartContext.jsx';
import { useContext } from 'react';

function ItemDetail({producto}) {
    const {addItem,isInCart} = useContext(CartContext);
    const {id, titulo,editorial ,categoria, descripcion, precio, autor, imagen} = producto;
    const [productoComprado,setProductoComprado] = useState(false);

    const onAdd = (cant) => {
      setProductoComprado(true)
      addItem(producto,cant);
      alert(`La cantidad de productos agregados es ${cant} de ${titulo}`)
      console.log(isInCart(id))
    }
  return (
    <div className='detalleProducto'>
    <img src={imagen} className="imagenDetalle" alt="..." />
    <div className="">
      <h2 className="">{id}. {titulo}</h2>
      <p className="">Autor: {autor}</p>
      <p>Editorial: {editorial}</p>
      <p className='categoria'>Categoria: {categoria}</p>
      <p className="">Precio: ${precio}</p>
      <p className=''>Descripcion: {descripcion}</p>
      <div>{productoComprado?<><Link className='botonCarrito' to='/cart'>Ir al carrito</Link><Link className='botonCarrito' to='/'>Seguir Comprando</Link></>:<ItemCount inicial={1} stock={5} onAdd = {onAdd}/>}</div>
    </div>
    </div>
  )
}

export default ItemDetail