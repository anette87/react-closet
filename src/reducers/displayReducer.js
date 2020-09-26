export default function displayReducer(
    state = { showItemForm: false }, action) {
    switch (action.type) {
        case "CHANGE_TO_TRUE":
            return {showItemForm: true}
        case "BACK_TO_FALSE":
            return {showItemForm: false}
        default:
            return state;
    }
}