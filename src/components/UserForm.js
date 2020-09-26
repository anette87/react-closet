import React from 'react';

function UserForm() {
    return(
        <div>
            <form id="userForm">
              
                  <input type="text" name="name" placeholder="Enter Your Name"/><input type="email" name="email" placeholder="Enter Your Email"/><input type="submit" value="SAVE YOUR CLOSET"/>
            </form>
        </div>
    )
}
  


export default UserForm;
