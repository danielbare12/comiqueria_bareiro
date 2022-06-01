import React from 'react'
import Carretilla from '../imagenes/carretilla.png'

function CartWidget({cantidad}) {
    return (
        <>
        <img src={Carretilla}/>
        {cantidad}
        </>
    )
}

export default CartWidget