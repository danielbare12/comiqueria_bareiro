import React, { useState } from 'react'

function ItemCount({ inicial, stock, onAdd }) {

    const [contador, setContador] = useState(inicial);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if (inicial < contador) {
            setContador(contador - 1);
        } 

    }

    const resetear = () => {
        setContador(inicial)
    }


    return (

        <div className='producto'>
            <div className='botonesCantidad'>
            <button onClick={sumar}>+</button>
            <p>{contador}</p>
            <button onClick={restar}>-</button>
            </div>
            <button onClick={() => { onAdd(contador); resetear() }}>AGREGAR AL CARRITO</button>
        </div>
    )



}

export default ItemCount