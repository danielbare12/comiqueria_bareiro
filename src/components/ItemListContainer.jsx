import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs,getFirestore,query,where } from 'firebase/firestore';


function ItemListContainer({ greetings }) {

  const { idCategoria } = useParams()
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [productos, setProductos] = useState([]);

  //aca esta la llamada al firebase
  const coll = 'items';
  const db = getFirestore();

  const itemCollection = (idCategoria==undefined)?collection(db,coll):query(collection(db,coll),where('category','==',idCategoria));

  useEffect(() => {
   
      getDocs(itemCollection)
      .then(res => {
        setProductos(res.docs.map((doc)=>({id:doc.id,...doc.data()})));
      })
      .catch((error) => {
        setError(true);
        console.log("Error", error);
      })
      .finally(() => setCargando(false))


  }, [idCategoria])

  return (
    <main>
      <h1>{(idCategoria == undefined) ? greetings : (greetings + idCategoria)}</h1>
      <div>{cargando && "CARGANDO......"} </div>
      <div>{error && "Error en la carga"}</div>
      <div id='listaProductos'>
        <ItemList lista={productos} />
      </div>
    </main>

  )

  
}

export default ItemListContainer