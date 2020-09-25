export const addToCloset = (closet) => ({ type: "ADDED_CLOSET", payload: closet });

export const createCloset = (closet) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(closet),
          };

          fetch("http://localhost:3000/closets", configObj)
            .then((res) => res.json())
            .then((newCloset) => dispatch(addToCloset(newCloset)));
    }
}