import React from 'react';
import '../App.css';
import LoadClosetContainer from '../containers/LoadClosetContainer';
import CreateClosetContainer from '../containers/CreateClosetContainer';
import AddItemForm from './AddItemForm';
import { Switch, Route, Link } from "react-router-dom";

function HeaderRoutes() {

    return (
      <div className='controller' >
        <Link to="/closets">
          <button>Access to Closet</button>
        </Link>
        <div className="box-container">
          <Switch>
            <Route exact path="/" render={()=> <h1>Welcome to your closet!</h1>} /> 
            <Route exact path="/closets/new">
              <CreateClosetContainer />
            </Route>
            <Route exact path="/closets">
              <LoadClosetContainer />
            </Route>
            <Route exact path="/items/new">
              <AddItemForm />
            </Route>
          </Switch>
        </div>
      </div>
    );
  } 

export default (HeaderRoutes);