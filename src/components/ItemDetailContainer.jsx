import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

const listaProductos = [{ "id": 1, "titulo": "Batman: La Broma Asesina","editorial":"Ovni", "descripcion": "El peor enemigo de Batman, el Joker, se ha escapado de la prisión de Arkham una vez más. El criminal toma al inspector Gordon y a su hija, a quien deja en una silla de ruedas. Con este acto, el Joker quiere hacer que el inspector Gordon se vuelva loco. Para salvar al inspector, Batman deberá encontrar el escondite del Joker antes de que sea demasiado tarde.", "precio": 1800, "autor": "Alan Moore", "imagen": "https://i.imgur.com/3Uejavo.png" },
{ "id": 2, "titulo": "Batman: El Regreso Del Caballero Oscuro","editorial":"Ecc","descripcion":"Bruce Wayne hace más de diez años que abandonó la capa de murciélago atormentado por la muerte de Robin. Apoyado por Carrie Kelly, una adolescente que asumirá el puesto de Robin, el murciélago sale nuevamente a la calle para luchar contra el crimen.", "precio": 2300, "autor": "Frank Miller", "imagen": "https://i.imgur.com/KzcmPap.jpg" },
{ "id": 3, "titulo": "Batman: Año Uno","editorial":"Ovni","descripcion":" La historia relata los inicios de la carrera de James Gordon con el Departamento de Policía de Gotham City con la aparición de Bruce como Batman. La vida de estos dos individuos se entrelazan cuando descubren que son aliados en contra de los poderes corruptos en Gotham City.", "precio": 1700, "autor": "Frank Miller", "imagen": "https://i.imgur.com/t2JfkGT.jpg" },
{ "id": 4, "titulo": "Watchmen","editorial":"Ovni","descripcion":"Estados Unidos, años 80, la Guerra Fría está en su apogeo, y los superhéroes, que antes habían sido admirados, ahora son perseguidos por la ley. Un día aparece muerto uno de ellos, El Comediante, que trabajaba para la CIA. Su amigo Rorschach, el único héroe enmascarado en activo, emprenderá la investigación de su muerte, tras la que se oculta algo muy importante. ", "precio": 3000, "autor": "Alan Moore", "imagen": "https://i.imgur.com/MusDuh8.png" },
{ "id": 5, "titulo": "Spiderman: La Última Cacería De Kraven","editorial":"Panini Comics","descripcion":"Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella.", "precio": 1400, "autor": "J. M. DeMatteis", "imagen": "https://i.imgur.com/3L3ajuo.png" },
{ "id": 6, "titulo": "One Piece Volumen 1","editorial":"Ivrea","descripcion":"Sigue las aventuras de Monkey D. Luffy, un chico muy especial y elástico, que sueña con ser el rey de los piratas y encontrar una gran tesoro: el One Piece. Para ello, se hace a la mar en un bote con el que buscará la tripulación que le pueda ayudar en su misión.", "precio": 600, "autor": "Eichiro Oda", "imagen": "https://i.imgur.com/Vm7yZ0z.jpg" },
{ "id": 7, "titulo": "One Piece Volumen 2","editorial":"Ivrea","descripcion":"Monkey D. Luffy ha reclutado al primer miembro de su tripulación:Rolonoa Zoro, el espadachín de las tres espadas. Juntos quieren apoderarse del mapa de la Gran Ruta Marina, pero para eso deberán pelear contra Buggy y sus hombres.", "precio": 600, "autor": "Eichiro Oda", "imagen": "https://i.imgur.com/C8whcbO.jpg" },
{ "id": 8, "titulo": "Sandman","editorial":"Ecc","descripcion":"Una inolvidable epopeya protagonizada por Morfeo, Rey del Sueño perteneciente a la familia de los Eternos. Sandman es con razón la colección de cómics más aplaudida y premiada de los años noventa. Esta epopeya soberbia y muy melancólica cuenta con el elegante guion de Neil Gaiman y los dibujos de un elenco de artistas que se van alternando y que se encuentran entre los más solicitados de la actualidad.", "precio": 3000, "autor": "Warren Ellis", "imagen": "https://i.imgur.com/Ty6nlIw.jpg" }];

function ItemDetailContainer({ idPedido }) {

    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState();

    useEffect(() => {


        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res(listaProductos.find((producto) => producto.id == idPedido))
            }, 2000)
        });
        getItem
            .then(dato => setItem(dato))
            .catch((error) => {
                setError(true);
                console("Error", error);
            })
            .finally(() => setCargando(false));

    }, [])

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