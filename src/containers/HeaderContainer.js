import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Switch, Link, Route} from "react-router-dom";
import HeaderRoutes from "../components/HeaderRoutes";


class Header extends React.Component {

  
render() {
  if (!this.props.user){
    return (
      <Switch>
        <div className='controller' >
          <Link to="/closets/new">
            <button>Create Closet</button>
          </Link>  
          <HeaderRoutes />
        </div>   
      </Switch>
    );
  }else{
    return (
      <div className="controller">
        <HeaderRoutes />
      </div> 
    )
  }
}
}

const mapStateToProps = (state) => {
  return {
      user: state.user.user
  }
  
}


export default connect(mapStateToProps)(Header);
