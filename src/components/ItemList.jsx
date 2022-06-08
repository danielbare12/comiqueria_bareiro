import React from 'react'
import Item from './Item'

function ItemList({ lista }) {
  return (
    <>
      {lista.map(comic => <Item key={comic.id} producto = {comic} />)}
    
      </>
  )
}

export default ItemList