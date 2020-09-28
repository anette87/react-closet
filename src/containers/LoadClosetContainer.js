import React, { useState } from "react";
import { connect } from "react-redux";
import ClosetContainer from './CreateClosetContainer';
import LoadCloset from '../components/LoadCloset'

function LoadClosetContainer(props) {
  
  if (!props.user){
  return (
    <div>
      <LoadCloset />
    </div>
  );
  }else{
    return(
      <div>
        <ClosetContainer/>
      </div>
    )
  }      
}

const mapStateToProps = (state) => {
  return {
      user: state.user.user
  }
}

export default connect(mapStateToProps)(LoadClosetContainer);