import React from 'react';
import './App.css';
import ClosetContainer from './ClosetContainer';
import LoadCloset from './LoadCloset';

class Header extends React.Component {
  
  state = {
    isCreateClosetOpen: true,
    isLoadClosetOpen: false,
  };

  showCreateCloset(){
    this.setState({isCreateClosetOpen: true, isLoadClosetOpen: false});
  }

  showLoadCloset(){
    this.setState({isLoadClosetOpen: true, isCreateClosetOpen: false});
  }
  
  
  render() {
    return (
      <div className="root-container">
        <div className='box-container'>
          <div className='controller' onClick={this.showCreateCloset.bind(this)}>
            Create Closet
          </div> 
          <div className="controller" onClick={this.showLoadCloset.bind(this)}>
            Access your Closet  
          </div> 
        </div>
        <div className="box-container">
          {this.state.isCreateClosetOpen && <ClosetContainer />}
          {this.state.isLoadClosetOpen && <LoadCloset />}
        </div>
      </div>
    );
  }
}

export default Header;
