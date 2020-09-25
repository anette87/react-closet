export default function itemReducer(
    state = { items: [], hideForm: false }, action) {
    switch (action.type) {
      case "ADDED_ITEM":
        return {...state, items: [...state.items, action.payload], hideForm: true}
      case "HIDE_FORM_FALSE":
        debugger
        return {...state, hideForm: false}
      default:
        return state;
    }
  }