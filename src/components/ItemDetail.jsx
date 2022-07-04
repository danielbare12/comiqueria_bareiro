import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.jsx';
import { CartContext } from '../context/CartContext.jsx';
import { useContext } from 'react';

function ItemDetail({producto}) {
    const {addItem,isInCart} = useContext(CartContext);
    const {id, title,publisher ,category, description, price, author, image} = producto;
    const [productoComprado,setProductoComprado] = useState(false);

    const onAdd = (cant) => {
      setProductoComprado(true)
      addItem(producto,cant);
      alert(`La cantidad de productos agregados es ${cant} de ${title}`)
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
      <div>{productoComprado?<><Link className='botonCarrito' to='/cart'>Terminar la compra</Link><Link className='botonCarrito' to='/'>Seguir Comprando</Link></>:<ItemCount inicial={1} stock={5} onAdd = {onAdd}/>}</div>
    </div>
    </div>
  )
}

export default ItemDetail