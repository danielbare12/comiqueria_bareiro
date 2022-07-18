import React, { useState } from 'react'
import IconoMas from '../imagenes/mas.png'
import IconoMenos from '../imagenes/menos.png'

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

        <div className='botonesAgregar'>
            <div className='botonesCantidad'>
            <img className='cuantificador' onClick={sumar} src={IconoMas} />
            <p className='numeroContador'>{contador}</p>
            <img className='cuantificador' onClick={restar} src={IconoMenos} />
            </div>
            <button onClick={() => { onAdd(contador); resetear() }}  type="button" className="botonAgregarProducto btn btn-warning">AGREGAR AL CARRITO</button>
        </div>
    )



}

export default ItemCount