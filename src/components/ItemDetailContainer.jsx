import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc,getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {

    const { idPedido } = useParams();

    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState();

    //aca esta la llamada al firebase
    const coll = 'items';
    const db = getFirestore();

    const docItems = doc(db,coll,idPedido);

    useEffect(() => {

        setTimeout(() => {
            getDoc(docItems)
            .then(res => {
                setItem(res.id && {id:res.id, ...res.data()})
            })
            .catch((error) => {
                setError(true);
                console.log("Error", error);
            })
            .finally(() => setCargando(false))
        }, 2000);

    }, [idPedido])

    return (
        <main>
            <div>{cargando && "CARGANDO......"} </div>
            <div>{error && "Error en la carga"}</div>
            <div>
                {!(item == undefined) && <ItemDetail producto={item} />}
            </div>
        </main>

    )
}

export default ItemDetailContainer