export default function itemReducer(
    state = { items: [] }, action) {
    switch (action.type) {
      case "ADDED_ITEM":
        return {...state, items: [...state.items, action.payload]}
      case "DELETE_ITEM":
        return {items: state.items.filter( item => item.data.attributes.id !== action.payload)}
      case "LOAD_ITEMS":
        debugger
        return {...state, items: action.payload}
      default:
        return state;
    }
  }