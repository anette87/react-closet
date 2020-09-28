import React from "react";
import { connect } from "react-redux";
import { showItemFormTrue } from '../actions/displayAction'
import { Link } from "react-router-dom";

class AddItemButton extends React.Component {

    handleClick = (e) => {
        this.props.showItemFormTrue()
    }

    render(){
        return(
            
            <div class="mt-5">
                <Link to="/items/new">
                    <button id="button" class="d-block p-2 bg-dark text-white btn-block rounded-pill mb-4" onClick={this.handleClick}> Add Item </button>
                </Link>
            </div>
        )   
    }   
}

const mapStateToProps = (state) => {
    return {
        showItemForm: state.display.showItemForm,
    }
}
        

export default connect(mapStateToProps, { showItemFormTrue})(AddItemButton);