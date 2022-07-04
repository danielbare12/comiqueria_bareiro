import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function Checkout() {

    const { cart, precioTotal, clear } = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cel, setCel] = useState("");
    

    let navigate = useNavigate();

    const handleClick = () => {

        const order = {
            buyer: { name, email, cel },
            items: cart,
            date: new Date(),
            total: precioTotal
        }

        console.log(order);

        const db = getFirestore();

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then(({ id }) => {
            

            Swal.fire({
                icon: 'success',
                title: 'COMPRA EXITOSA',
                text: 'Su codigo de compra es: '+id,
                footer: order.date,
                confirmButtonText: 'Aceptar'
              }).then((result) => {
                
                if (result.isConfirmed) {

                    navigate('/');
                    clear();

                } 
              })
        })

    }

    const alerta = () => {

    }

    return (
        <main className='mainCheckout'>
            <div>
                <p>NOMBRE COMPLETO</p>
                <input onChange={(e) => { setName(e.target.value) }} type="" />
            </div>
            <div>
                <p>EMAIL</p>
                <input onChange={(e) => { setEmail(e.target.value) }} type="text" />
            </div>
            <div>
                <p>CELULAR</p>
                <input onChange={(e) => { setCel(e.target.value) }} type="text" />
            </div>
            <button onClick={() => { handleClick(); alerta(); }}>Terminar Compra</button>

        </main>
    )
}

export default Checkout