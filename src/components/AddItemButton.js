import React from "react";
import AddItemForm from './AddItemForm';
import { connect } from "react-redux";
import { hideFormFalse } from '../actions/itemAction';
import MyClosetContainer from '../MyClosetContainer';
import { showItemFormTrue, showItemFormFalse } from '../actions/displayAction'

class AddItemButton extends React.Component {

    buttonText = () => {
        if (this.props.showItemForm){
            return "Cancel";
        } else {
            return  "Add Item";
        }
    }

    handleButtonClick = (e) => {
        if (this.props.showItemForm){
            this.props.showItemFormFalse() 
        } else {
            this.props.showItemFormTrue() 
        }
    }

    render(){
        return(
            <div>
                <button id="button" onClick={this.handleButtonClick}> {this.buttonText()} </button>
                {this.props.showItemForm && <AddItemForm />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        showItemForm: state.display.showItemForm
    }
}
        
    


//     state = {
//         showForm: false
//     }

//     showForm(){
//         this.setState({showForm: true});
//       }


//     render(){

//         if (this.state.showForm === false){
//             return (
//                 <div className="addItemButton" id="addItemButton" >
//                     <button onClick={ this.showForm.bind(this)}>Add New Item</button>
//                 </div>
//             )
//         }else 
//             return (
//                 <div className="box-container">
//                     {this.state.showForm && <AddItemForm />}
//                 </div>
//             )
//         }    
//  }
  
  


export default connect(mapStateToProps, { showItemFormTrue, showItemFormFalse })(AddItemButton);