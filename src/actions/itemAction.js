export const addItem= (item) => ({ type: "ADDED_ITEM", payload: item });

export const hideFormFalse= () => ({ type: "HIDE_FORM_FALSE", payload: {hideForm: false}});

export const createItem = (item) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(item),
          };

          fetch("http://localhost:3000/items", configObj)
            .then((res) => res.json())
            .then((newItem) => dispatch(addItem(newItem)));
    }
}