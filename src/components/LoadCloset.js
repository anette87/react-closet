import React, { useState } from "react";
import { connect } from "react-redux";
import { findUser } from '../actions/userAction';


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
  
  return (
    <div className="App">
      <form id="loadClosetForm" onSubmit={handleSubmit} >

        <label htmlFor="Email">Email</label>
        <input type="email" required="true" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/><br></br>
        
        <input type="submit" value="Load Your Closet"/><br></br>
      </form>
    </div> 
  )
}
  

export default connect(null, { findUser })(LoadCloset);