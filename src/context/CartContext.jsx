import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

const {Provider} = CartContext;

function MyProvider({children}) {
    const [cart,setCart] = useState([]);
    

    const addItem = (item,cantidad) => {
        const nuevoItem = {...item,cantidad};
        

        if(isInCart(nuevoItem.id)){
          const productoEnCarrito = cart.find(x => x.id == nuevoItem.id)
          const pos = cart.indexOf(productoEnCarrito)
          const aux = [...cart];
          aux[pos].cantidad += cantidad
          setCart(aux);
        } else {
          const aux = [...cart]
          aux.push(nuevoItem);
          setCart(aux);
        }

        
        console.log(cart);
    };

    const removeItem = (id) => {
        let aux = cart.filter(producto => producto.id !== id)
        setCart(aux)
    };
    const clear = () => {setCart([])};

    const isInCart = (itemid) => {return cart.some((producto) => producto.id === itemid)};

    const cantidadCarrito = cart.reduce((acc,x) => acc + x.cantidad,0)

    const precioTotal = cart.reduce((acc,x) => acc + x.precio*x.cantidad,0)
    

  return (
    <Provider value={{cart,addItem,removeItem,clear,isInCart,cantidadCarrito,precioTotal}}>
    
    {children}
    </Provider>
  )
}

export default MyProvider