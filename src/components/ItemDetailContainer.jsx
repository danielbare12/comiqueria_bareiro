import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

    const { idPedido } = useParams();

    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState();

    useEffect(() => {


        const getItem = fetch('https://mocki.io/v1/bb0fff3b-75fb-4f92-896c-a856433f661c');
        getItem
            .then(res => res.json())
            .then(listaProductos => setItem(listaProductos.find((producto) => producto.id == idPedido)))
            .catch((error) => {
                setError(true);
                console("Error", error);
            })
            .finally(() => setCargando(false));

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