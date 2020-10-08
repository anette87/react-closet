export const addItem= (item) => ({ type: "ADDED_ITEM", payload: item });

export const deletedItem = (id) => ({type: "DELETE_ITEM", payload: id});

export const createItem = (item) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
      const configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(item),
        };

        fetch("https://online-closet-backend.herokuapp.com/items", configObj)
          .then((res) => res.json())
          .then((newItem) => {
            console.log('d')
            return dispatch(addItem(newItem))
          });
          console.log('e')
  }
  console.log('f')
}

export const deleteItem = (id) => {
  return (dispatch) => {
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         "Accept": "application/json"
      },
    };
    return fetch(`https://online-closet-backend.herokuapp.com/items/${id}`, configObj)
    .then(resp => resp.json())

}
}