import React from "react";
import { deleteItem, deletedItem } from '../actions/itemAction'
import { connect } from 'react-redux'

function ItemCard(props) {
  const {category,brand,color,season,image,id} = props.item.data.attributes

  const handleDeleteClick = () => {
    props.deleteItem(id) //delete the item from db
    props.deletedItem(id) //delete the item from state
  }

  
  return (
    <div className="card m-5" id={`item-${id}`} class="background-white2 mb-3 center-text">
      <img src={image} className="item-image" class="container" />
      <h2>Category: {category}</h2>
      <h2>Brand: {brand}</h2>
      <h2>Color: {color}</h2>
      <h2>Season: {season}</h2>
      <button class="d-block p-2 bg-dark text-white btn-block rounded-block mt-2 mb-2" onClick={handleDeleteClick}>Delete </button>
    </div>
  );
}

export default connect(null, { deleteItem, deletedItem })(ItemCard);