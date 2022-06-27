import React from 'react'
import Carretilla from '../imagenes/carretilla.png'

function CartWidget({cantidad}) {

    const cartImagen = <>
    <img src={Carretilla}/>
    {cantidad}
    </>

    return (<>{(cantidad != 0) && cartImagen}</>)
}

export default CartWidget