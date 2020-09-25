import React from "react";

function ItemCard(props) {
  const {category,brand,color,season,image,id} = props.item.data.attributes

  return (
    <div className="card" id={`item-${id}`}>
      <img src={image} className="item-image" />
      <h2>Category: {category}</h2>
      <h2>Brand: {brand}</h2>
      <h2>Color: {color}</h2>
      <h2>Season: {season}</h2>
     
      <button> Delete </button>
    </div>
  );
}

export default ItemCard;