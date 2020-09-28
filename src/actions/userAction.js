export const addUser= (user) => ({ type: "ADDED_USER", payload: user });
export const loadCloset= (closet) => ({ type: "LOAD_CLOSET", payload: closet });
export const loadItems= (items) => ({ type: "LOAD_ITEMS", payload: items });

export const createUser = (user) => {
  return (dispatch) => {
      const configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(user),
        };

        fetch("http://localhost:3000/users", configObj)
          .then((res) => res.ok ? res.json() : alert("An error has occurred. Error Options: 1.Email is already in use  2.A required field is empty Please Try Again!"))
          .then((newUser) => dispatch(addUser(newUser.data)))
          .catch((error) => error)
  }
}



export const findUser = (submittedUser) => {
    return (dispatch) => {
      fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then((users) => {
          let foundUser = users.data.find(user => user.attributes.email === submittedUser.email)
          dispatch(addUser(foundUser))
          dispatch(loadCloset(foundUser.attributes.closet))
          dispatch(loadItems(foundUser.attributes.closet.data.attributes.items))
          
      });     
    }
}