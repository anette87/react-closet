export default function userReducer(
    state = { user: null}, action) {
    switch (action.type) {
      case "ADDED_USER":
        debugger
        return {...state, user: action.payload}
      default:
        return state;
    }
  }