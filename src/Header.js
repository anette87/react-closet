import React from 'react';
import './App.css';
import LoadClosetContainer from './containers/LoadClosetContainer';
import ClosetContainer from './containers/ClosetContainer';
import { connect } from 'react-redux'

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
    if (!this.props.user){
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
            {this.state.isLoadClosetOpen && <LoadClosetContainer />}
          </div>
        </div>
      );
    }else{
      return (
        <div className="root-container">
          <div className='box-container'> 
            <div className="controller" onClick={this.showLoadCloset.bind(this)}>
              Access your Closet  
            </div> 
          </div>
          <div className="box-container">
            {this.state.isCreateClosetOpen && <ClosetContainer />}
            {this.state.isLoadClosetOpen && <LoadClosetContainer />}
            </div>
       </div>
      )
    }
  }
}
    

const mapStateToProps = (state) => {
  debugger
  return {
      user: state.user.user
  }
  
}


export default connect(mapStateToProps)(Header);
