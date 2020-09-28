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
      <div class="row">
        <div class="col-12 col-md-4">
        </div>
          <div class="col-12 col-md-4">
            <form id="loadClosetForm" class="text-center border border-light p-5 m-5 login-btn background-white" onSubmit={handleSubmit} >
              <input type="email" required="true" name="email" class="form-control mt-3" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} value={email}/><br></br>
              <input type="submit" class="btn btn-secondary" value="Load Your Closet"/><br></br>
              <img src="https://i.pinimg.com/originals/b9/76/3c/b9763cd1a5449329d1371131ec3fe6c6.png" alt="hanger" width="200" height="200"></img>
            </form>
          </div>
          <div class="col-12 col-md-4">
          </div>
      </div>
    </div> 
  )
}


export default connect(null, { findUser })(LoadCloset);
