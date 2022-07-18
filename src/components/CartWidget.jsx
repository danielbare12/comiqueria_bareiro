import React from 'react'
import Carretilla from '../imagenes/carretilla.png'

function CartWidget({cantidad}) {

    const cartImagen = <>
    <img src={Carretilla}/>
    {cantidad}
    </>

    return (<>{cartImagen}</>)
}

export default CartWidget