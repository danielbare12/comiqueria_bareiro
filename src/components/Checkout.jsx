import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { addDoc, collection, getFirestore, updateDoc, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import ReactTooltip from 'react-tooltip';

function Checkout() {
    const { cart, clear, precioTotal } = useContext(CartContext);


  const tooltipContainer = (msge, idInput, inputType) => {
    return <ReactTooltip id={idInput} place='right' type={inputType} effect='solid'>
      {msge}
    </ReactTooltip>
  }

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");
  const [botoTerminar, setBotonTerminar] = useState(<button disabled >Terminar Compra</button>);
  const [nameToolTip, setNameToolTip] = useState(tooltipContainer("Debe de ingresar su o sus nombres", "nameInput", 'warning'));
  const [lastNameToolTip, setLastNameToolTip] = useState(tooltipContainer("Debe de ingresar su o sus apellidos", "lastNameInput", 'warning'));
  const [emailToolTip, setEmailToolTip] = useState(tooltipContainer("Debe de ingresar un email valido", "emailInput", 'warning'));
  const [celToolTip, setCelToolTip] = useState(tooltipContainer("Debe de ingresar un numero de telefono valido", "celInput", 'warning'));
  const estaVacio = (str) => {

    if (str.trim().length === 0) {
      return true;
    } else {
      return false;
    }
  }

  let validarName = !estaVacio(name);
  let validarLastName = !estaVacio(lastName);
  let emailIsValidate = (email.includes("@") && email.includes(".", email.indexOf("@")));
  let phoneIsValidate = (cel.length >= 8);

  const updateItemCollection = (id, cantidad) => {
    const db = getFirestore();

    const orderDoc = doc(db, 'items', id);

    getDoc(orderDoc).then(
      (ref) => {

        updateDoc(orderDoc, { stock: ref.data().stock - cantidad })

      }
    )
  }

  useEffect(() => {
    if (validarName && validarLastName && emailIsValidate && phoneIsValidate) {
      setBotonTerminar(<button onClick={() => { handleClick(); }} type="button" className="botonTerminarCompra btn btn-primary">Terminar Compra</button>);
    } else {
      setBotonTerminar(<button onClick={() => { handleClick(); }} type="button" className="botonTerminarCompra btn" disabled>Terminar Compra</button>);
    }

    (validarName) ? setNameToolTip(tooltipContainer("Valido", "nameInput", 'success')) : setNameToolTip(tooltipContainer("Debe de ingresar su o sus nombres", "nameInput", 'warning'));
    (validarLastName) ? setLastNameToolTip(tooltipContainer("Valido", "lastNameInput", 'success')) : setLastNameToolTip(tooltipContainer("Debe de ingresar su o sus apellidos", "lastNameInput", 'warning'));
    (emailIsValidate) ? setEmailToolTip(tooltipContainer("Email Valido", "emailInput", 'success')) : setEmailToolTip(tooltipContainer("Debe de ingresar un email valido", "emailInput", 'warning'));
    (phoneIsValidate) ? setCelToolTip(tooltipContainer("Numero de telefono valido", "celInput", 'success')) : setCelToolTip(tooltipContainer("Debe de ingresar un numero de telefono valido", "celInput", 'warning'));

  }, [name, lastName, email, cel])

  let navigate = useNavigate();

  const handleClick = () => {

    const order = {
      buyer: { name, lastName, email, cel },
      items: cart,
      date: new Date(),
      total: precioTotal
    }

    const db = getFirestore();

    const ordersCollection = collection(db, 'orders');

    cart.forEach((item) => updateItemCollection(item.id, item.cantidad));


    addDoc(ordersCollection, order).then(({ id }) => {


      Swal.fire({
        icon: 'success',
        title: 'COMPRA EXITOSA',
        text: 'Su codigo de compra es: ' + id,
        footer: order.date,
        confirmButtonText: 'Aceptar'
      }).then((result) => {

        if (result.isConfirmed) {
          navigate('/');
        }
      })

      clear();
    })



  }


  return (
    <main className='contenedorCheckout'>
      <div className='contenedorDatosPersonales'>
        <div>
          <p>NOMBRE</p>
          <input onChange={(e) => { setName(e.target.value) }} style={validarName ? { backgroundColor: "#D9F8C4" } : { backgroundColor: "#F9D923" }} type="text" data-tip data-for="nameInput" />
        </div>
        <div>
          <p>APELLIDO</p>
          <input onChange={(e) => { setLastName(e.target.value) }} style={validarLastName ? { backgroundColor: "#D9F8C4" } : { backgroundColor: "#F9D923" }} type="text" data-tip data-for="lastNameInput" />
        </div>
        <div>
          <p>EMAIL</p>
          <input onChange={(e) => { setEmail(e.target.value) }} style={emailIsValidate ? { backgroundColor: "#D9F8C4" } : { backgroundColor: "#F9D923" }} type="text" data-tip data-for="emailInput" />
        </div>
        <div>
          <p>CELULAR</p>
          <input onChange={(e) => { setCel(e.target.value) }} style={phoneIsValidate ? { backgroundColor: "#D9F8C4" } : { backgroundColor: "#F9D923" }} onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }} type="text" data-tip data-for="celInput" />
        </div>
        {botoTerminar}
        <Link to='/cart'><button type="button" className="btn btn-primary">Volver</button></Link>
      </div>


      {nameToolTip}
      {lastNameToolTip}
      {emailToolTip}
      {celToolTip}
    </main>
  )
}

export default Checkout