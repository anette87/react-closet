import React from "react";
import AddItemButton from './components/AddItemButton';
import ItemCard from './components/ItemCard';
import { connect } from 'react-redux';
import { createCloset, addToCloset} from './actions/closetAction'
import AddItemForm from "./components/AddItemForm";

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
        // return (
        //     <div>
        //         <div className="App" id="createCloset">
        //             <h1 onClick={this.handleClick}> Click Here To Create Your Closet!</h1>   
        //         </div>
        //         <br></br>
        //         <div>
        //             {this.props.showNewItemButton && <AddItemButton />}
        //             {this.renderItems()}
        //         </div>
        //     </div>
        // )      
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

// state= {front: true}
// handleClick=(e)=>{ 
//     if (this.state.front === false){
//         this.setState({front:true})    
//     }else {
//         this.setState({front:false})  
//     }
// }

// render(){
//     return(
//         <div onClick={this.handleClick}>
//             {this.state.front ? <TripFront clientName={this.props.clientName} location={this.props.location} /> : <TripBack email={this.props.email} />  }
             
//         </div>
//     )

// }
// }