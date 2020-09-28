import React, { useState } from "react";
import { connect } from "react-redux";
import { createItem } from "../actions/itemAction"
import { showItemFormFalse } from '../actions/displayAction'
import { Redirect } from 'react-router';


function AddItemForm(props) {

  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [season, setSeason] = useState("");
  const [image, setImage] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      category: category,
      brand: brand,
      color: color,
      season: season,
      image: image,
      closet_id: props.closets[0].data.id
    };

    props.createItem(item)
    
    setCategory("");
    setBrand("");
    setColor("");
    setSeason("");
    setImage("");
    
    props.showItemFormFalse()
    
  }

  
    if (props.showItemForm) {
      return (
        <div className="inner-container">
          <div className="box">
              <form id="itemForm" onSubmit={handleSubmit}>
                <div className="header">Add New Item To Your Closet</div>  
                <div className="input-group">
                  <label htmlFor="category">Category</label>
                  <input type="text" name="Category" className="login-input" onChange={(e) => setCategory(e.target.value)} value={category}placeholder="Category"/>

                  <label htmlFor="brand">Brand</label>
                  <input type="brand" name="brand" className="login-input" onChange={(e) => setBrand(e.target.value)} value={brand} placeholder="Brand"/>
            
                  <label htmlFor="color">Color</label>
                  <input type="text" name="color" className="login-input" onChange={(e) => setColor(e.target.value)} value={color} placeholder="Color"/>
            
                  <label htmlFor="season">Season</label>
                  <input type="season" name="season" className="login-input" onChange={(e) => setSeason(e.target.value)} value={season} placeholder="Season"/>
            
                  <label htmlFor="image">Image</label>
                  <input type="text" name="image" className="login-input" onChange={(e) => setImage(e.target.value)} value={image} placeholder="Image"/>
                  
                  <input type="submit" value="Add"/>
                  
                </div>
            </form>
          </div>
        </div>
      );
    } else {
      return(
        <Redirect to="/closets/new"/>
      );
    }  
  };

const mapStateToProps = (state) => {
  return {
      closets: state.closet.closets,
      showItemForm: state.display.showItemForm
  }
}

export default connect(mapStateToProps, { createItem, showItemFormFalse })(AddItemForm);