export default function itemReducer(
    state = { items: [] }, action) {
    switch (action.type) {
      case "ADDED_ITEM":
        return {...state, items: [...state.items, action.payload]}
      case "DELETE_ITEM":
        debugger
        return {items: state.items.filter( item => item.data.attributes.id !== action.payload)}
      default:
        return state;
    }
  }