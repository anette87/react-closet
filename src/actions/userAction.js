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
          .then((res) => res.json())
          .then((newUser) => dispatch(addUser(newUser.data))
          );
  }
}

export const findUser = (submittedUser) => {
    return (dispatch) => {
      fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then((users) => {
          let foundUser = users.data.find(user => user.attributes.email === submittedUser.email)
          debugger
          dispatch(addUser(foundUser))
          dispatch(loadCloset(foundUser.attributes.closet))
          dispatch(loadItems(foundUser.attributes.closet.data.attributes.items))
          // debugger
          // console.log(foundUser)
      });     
    }
}