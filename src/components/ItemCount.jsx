import React, { useState } from 'react'

function ItemCount({ inicial, stock, onAdd }) {

    const [contador, setContador] = useState(inicial);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        } else {
            alert("No podes agregar mas productos no hay stock disponible");
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
            <h2>{contador}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={() => { onAdd(contador); resetear() }}>AGREGAR AL CARRITO</button>
        </div>
    )



}

export default ItemCount