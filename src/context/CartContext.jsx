import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

const { Provider } = CartContext;

function MyProvider({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('carrito')) || []);

  const addItem = (item, cantidad) => {
    const nuevoItem = { ...item, cantidad };


    if (isInCart(nuevoItem.id)) {
      const productoEnCarrito = cart.find(x => x.id == nuevoItem.id)
      const pos = cart.indexOf(productoEnCarrito)
      const aux = [...cart];
      aux[pos].cantidad += cantidad
      setCart(aux);
      const listaEnJsonCarrito = JSON.stringify(aux);
      localStorage.setItem("carrito", listaEnJsonCarrito);
    } else {
      const aux = [...cart]
      aux.push(nuevoItem);
      setCart(aux);
      const listaEnJsonCarrito = JSON.stringify(aux);
      localStorage.setItem("carrito", listaEnJsonCarrito);
    }



  };

  const removeItem = (id) => {
    let aux = cart.filter(producto => producto.id !== id)
    setCart(aux)
    const listaEnJsonCarrito = JSON.stringify(aux);
    localStorage.setItem("carrito", listaEnJsonCarrito);
  };
  const clear = () => {
    setCart([])
    const listaEnJsonCarrito = JSON.stringify([]);
    localStorage.setItem("carrito", listaEnJsonCarrito);
  };

  const isInCart = (itemid) => { return cart.some((producto) => producto.id === itemid) };

  const cantidadCarrito = cart.reduce((acc, x) => acc + x.cantidad, 0)

  const precioTotal = cart.reduce((acc, x) => acc + x.price * x.cantidad, 0)


  return (
    <Provider value={{ cart, addItem, removeItem, clear, isInCart, cantidadCarrito, precioTotal }}>

      {children}
    </Provider>
  )
}

export default MyProvider