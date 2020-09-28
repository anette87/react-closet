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
          <div class="row">
            <div class="col-12 col-md-4">
            </div>
              <div class="col-12 col-md-4">
                <form id="itemForm" class="text-center border border-light p-5 login-btn background-white" onSubmit={handleSubmit}>
                  <div class="card-header info-color white-text text-center py-4 login-input:hover mb-4">Add New Item To Your Closet</div>  
                  <div className="input-group" className="center-text">
                    
                      <span class="center-text">
                      <input type="text" name="Category" required="true"  className="login-input" class="form-control mb-4" onChange={(e) => setCategory(e.target.value)} value={category}placeholder="Category"/>
                      <input type="brand" name="brand" required="true" className="login-input" class="form-control mb-4" onChange={(e) => setBrand(e.target.value)} value={brand} placeholder="Brand"/>
                      <input type="text" name="color" required="true" className="login-input" class="form-control mb-4" onChange={(e) => setColor(e.target.value)} value={color} placeholder="Color"/>
                      <input type="season" name="season" required="true" className="login-input" class="form-control mb-4" onChange={(e) => setSeason(e.target.value)} value={season} placeholder="Season"/>
                      <input type="text" name="image" className="login-input" class="form-control mb-4" onChange={(e) => setImage(e.target.value)} value={image} placeholder="Image"/>
                      <input type="submit" class="btn btn-secondary" value="Add Item"/>
                      </span>

                  </div>
                </form>
              </div>
              <div class="col-12 col-md-4">
              </div>
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