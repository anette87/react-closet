export const addUser= (user) => ({ type: "ADDED_USER", payload: user });

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
          .then((newUser) => dispatch(addUser(newUser))
          );
  }
}