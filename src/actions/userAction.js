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

        fetch("https://online-closet-backend.herokuapp.com/users", configObj)
          .then((res) => res.ok ? res.json() : alert("An error has occurred. Error Options: 1.Email is already in use  2.A required field is empty Please Try Again!"))
          .then((newUser) => dispatch(addUser(newUser.data)))
          .catch((error) => error)
  }
}



export const findUser = (submittedUser) => {
    return (dispatch) => {
      fetch("https://online-closet-backend.herokuapp.com/users")
        .then(response => response.json())
        .then((users) => {
          let foundUser = users.data.find(user => user.attributes.email === submittedUser.email)
            if (foundUser){
              dispatch(addUser(foundUser))
              dispatch(loadCloset(foundUser.attributes.closet))
              dispatch(loadItems(foundUser.attributes.closet.data.attributes.items))}
            else{
              alert("An error has occurred. Email address not found.")
            }    
      });     
    }
}