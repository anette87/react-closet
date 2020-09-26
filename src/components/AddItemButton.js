import React from "react";
import AddItemForm from './AddItemForm';
import { connect } from "react-redux";
import { hideFormFalse } from '../actions/itemAction';
import MyClosetContainer from '../MyClosetContainer';
import { showItemFormTrue, showItemFormFalse } from '../actions/displayAction'
import UserForm from "./UserForm";

class AddItemButton extends React.Component {

    buttonText = () => {
        if (this.props.showItemForm){
            return "Cancel";
        } else {
            return  "Add Item";
        }
    }

    handleItemButtonClick = (e) => {
        if (this.props.showItemForm){
            this.props.showItemFormFalse() 
        } else {
            this.props.showItemFormTrue() 
        }
    }

    render(){

        if (this.props.items.length > 0) {
            return(
                <div>
                    <UserForm />
                    <button id="button" onClick={this.handleItemButtonClick}> {this.buttonText()} </button>
                    {this.props.showItemForm && <AddItemForm />}

                </div>
            )
        }else{
            return(
                <div>
                    <button id="button" onClick={this.handleItemButtonClick}> {this.buttonText()} </button>
                    {this.props.showItemForm && <AddItemForm />}
                </div>
            )
        }

    }

        
        
    
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        showItemForm: state.display.showItemForm,
        items: state.item.items
    }
}
        
    
  
  


export default connect(mapStateToProps, { showItemFormTrue, showItemFormFalse })(AddItemButton);