export const addItem= (item) => ({ type: "ADDED_ITEM", payload: item });

export const deletedItem = (id) => ({type: "DELETE_ITEM", payload: id});

export const createItem = (item) => {
  return (dispatch) => {
      const configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(item),
        };

        fetch("http://localhost:3000/items", configObj)
          .then((res) => res.json())
          .then((newItem) => dispatch(addItem(newItem))
          );
  }
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
    return fetch(`http://localhost:3000/items/${id}`, configObj)
    .then(resp => resp.json())

}
}