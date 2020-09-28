import React from "react";
import AddItemButton from '../components/AddItemButton';
import ItemCard from '../components/ItemCard';
import { connect } from 'react-redux';
import UserForm from "../components/UserForm";
import CreateCloset from "../components/CreateCloset";
import ItemSearch from "../components/ItemSearch";


class CreateClosetContainer extends React.Component {  

    state = {
        search: "",
        option: "",
        enabledSearch: false
    }

    renderItems() {
        let shownItems = this.props.items;
        if (this.state.search) {
            shownItems = this.props.items.filter((item) =>
            item.data.attributes[this.state.option].toLowerCase().includes(this.state.search.toLowerCase())
            );
        }
        return shownItems.map((item) => {
            return <ItemCard key={item.data.id} item={item} />;
            });
        
    }

    itemsOptions = () => {
        let item = this.props.items[0].data.attributes
        let options = Object.keys(item)
        let removeIndex = options.indexOf('image')
        options.splice(removeIndex)
        return options
    }

    handleSearchChange = (e) => {    
        this.setState({
            search: e.target.value,
        });
        
    }

    handleOptionSelect = (e) => {
        this.setState({
            enabledSearch: true,
            option: e.target.value
            
        });
    }

    render(){
        if (this.props.closets.length > 0) {
           return(
                <div>
                    <div class="row">
                    <div class="col-12 col-md-2">
                    </div>
                    <div class="col-12 col-md-8 center-text mt-3">
                        {this.props.items.length > 0 && <UserForm />}
                        {this.props.items.length > 0 && <ItemSearch search={this.state.search} handleSearchChange={this.handleSearchChange} handleSelectChange={this.handleOptionSelect} options={this.itemsOptions} enabledSearch={this.state.enabledSearch} />}
                    </div>
                    </div>
                    <div class="col-12 col-md-2">
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-4">
                        </div>
                        <div class="col-12 col-md-4">
                            <AddItemButton />
                            {this.renderItems()}
                        </div>
                        <div class="col-12 col-md-4">
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <CreateCloset />
                </div>
            )
        }   
    }; 
}   

const mapStateToProps = (state) => {
    return {
        items: state.item.items,
        closets: state.closet.closets,
        
    }
}
    
export default connect(mapStateToProps)(CreateClosetContainer)


