import React, { useState } from "react";
import { connect } from "react-redux";
import { findUser } from '../actions/userAction';
import ClosetContainer from '../containers/ClosetContainer';

function LoadCloset(props) {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: email  
    }

    props.findUser(user)

    setEmail("");
  }
  
  if (!props.user){
  return (
    <div className="App">
      <form id="loadClosetForm" onSubmit={handleSubmit} >

        <label htmlFor="Email">Email</label>
        <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/><br></br>
        
        <input type="submit" value="Load Your Closet"/><br></br>
      </form>
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
  console.log(state.user)
  return {
      user: state.user.user
  }
}

export default connect(mapStateToProps, { findUser })(LoadCloset);