import React from "react";
import AddItemButton from '../components/AddItemButton';
import ItemCard from '../components/ItemCard';
import { connect } from 'react-redux';
import { createCloset, addToCloset} from '../actions/closetAction'


class CreateCloset extends React.Component {  

    handleCreateClosetClick = (e) =>{
        const closet = {};
        this.props.createCloset(closet)
    }

    renderItems = () => {
        return this.props.items.map((item) => {
          return <ItemCard key={item.data.id} item={item} />;
        });
    }

    render(){
        if (this.props.closets.length > 0) {
           return(
                <div>
                <AddItemButton />
                {this.renderItems()}
                </div>
            )
        } else {
            return(
                <div>
                   <div className="App" id="createCloset">
                        <h1 onClick={this.handleCreateClosetClick}> Click Here To Create Your Closet!</h1>   
                    </div>
                </div>
            )
        }   
    }; 
}   

const mapStateToProps = (state) => {
    return {
        showNewItemButton: state.closet.showNewItemButton,
        items: state.item.items,
        closets: state.closet.closets
    }
}
    
export default connect(mapStateToProps, { createCloset, addToCloset })(CreateCloset)

