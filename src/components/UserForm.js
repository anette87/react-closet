import React, { useState } from "react";
import { connect } from "react-redux";
import { createUser } from '../actions/userAction'

function UserForm(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
        name: name,
        email: email,
        closet_id: props.closets[0].data.id
    };

        props.createUser(user)

        setName("");
        setEmail("");
    }
    if (!props.user) {
        return(
            <div>
                <form id="userForm" class="mb-5" onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col-12 col-md-5">
                            <input type="text" name="name" class="form-control mb-4" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Your Name"/>
                        </div>
                        <div class="col-12 col-md-5">
                            <input type="email" name="email" class="form-control mb-4" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Your Email"/>
                        </div>
                        <div class="col-12 col-md-2">   
                            <input type="submit" class="btn btn-secondary left-text" value="SAVE YOUR CLOSET"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    } else {
        return(
            <div>
                <p> {props.user.attributes.name} Closet</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        closets: state.closet.closets,
        user: state.user.user
    }
  }
  


export default connect(mapStateToProps, { createUser })(UserForm);
