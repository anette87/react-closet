import React from "react";
import AddItemForm from './AddItemForm';
import { connect } from "react-redux";
import { hideFormFalse } from './actions/itemAction';

class AddItemButton extends React.Component {

    state = {
        showForm: false
    }

    showForm(){
        this.setState({showForm: true});
      }


    render(){

        if (this.state.showForm === false){
            return (
                <div className="addItemButton" id="addItemButton" >
                    <button onClick={ this.showForm.bind(this)}>Add New Item</button>
                </div>
            )
        }else 
            return (
                <div className="box-container">
                    {this.state.showForm && <AddItemForm />}
                </div>
            )
        }    
 }
  
  


export default connect(null, { hideFormFalse })(AddItemButton);