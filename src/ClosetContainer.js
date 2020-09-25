import React from "react";
import AddItemButton from './AddItemButton';
import ItemCard from './ItemCard';
import { connect } from 'react-redux';
import { createCloset, addToCloset} from './actions/closetAction'

class CreateCloset extends React.Component {  

    // state = {
    //     closetCreated: false
    // }

    clearBox = (elementID) => {
        document.getElementById(elementID).innerHTML = "";
    }

    handleClick = (e) =>{
        debugger
        const closet = {};
        this.props.createCloset(closet)
        // this.setState({closetCreated: true})
        // this.props.showButton
        this.clearBox("createCloset") 
    }

    renderItems = () => {
        return this.props.items.map((item) => {
          return <ItemCard key={item.data.id} item={item} />;
        });
    }

    render(){
        return (
            <div>
                <div className="App" id="createCloset">
                    <h1 onClick={this.handleClick}> Click Here To Create Your Closet!</h1>   
                </div>
                <br></br>
                <div>
                    {this.props.showNewItemButton && <AddItemButton />}
                    {this.renderItems()}
                </div>
            </div>
        )      
    }; 
}   

const mapStateToProps = (state) => {
    return {
        showNewItemButton: state.closet.showNewItemButton,
        items: state.item.items
    }
}
    
export default connect(mapStateToProps, { createCloset, addToCloset })(CreateCloset)

