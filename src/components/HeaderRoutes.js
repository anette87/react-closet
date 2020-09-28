import React from 'react';
import '../App.css';
import LoadClosetContainer from '../containers/LoadClosetContainer';
import CreateClosetContainer from '../containers/CreateClosetContainer';
import AddItemForm from './AddItemForm';
import { Switch, Route, Link } from "react-router-dom";

function HeaderRoutes() {

    return (
      <div className='controller'>
        <Link to="/closets">
          <button class="d-block p-2 bg-dark text-white btn-block">Access to Closet</button>
        </Link>
        <div className="box-container" class="min-vh-100 min-vw-100">
          <Switch>
            <Route exact path="/" render={()=> 
              <div>
                  <h1 class="text-xl-center badge-dark rounded-block shadow-lg p-3 title ">Welcome To Your Online Closet!</h1>
                  <h2 class="center-text background-white">A CLOSET ORGANIZATION SYSTEM</h2>
              </div>} /> 
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