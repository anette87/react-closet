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
                <form id="userForm" onSubmit={handleSubmit}>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Your Name"/><input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Your Email"/><input type="submit" value="SAVE YOUR CLOSET"/>
                </form>
            </div>
        )
    } else {
        return(
            <div>
                <p> {props.user.data.attributes.name} Closet</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.user)
    return {
        closets: state.closet.closets,
        user: state.user.user
    }
  }
  


export default connect(mapStateToProps, { createUser })(UserForm);
