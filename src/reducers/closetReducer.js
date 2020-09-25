export default function closetReducer(
  state = { closets: [], showNewItemButton: false }, action) {
  switch (action.type) {
    case "ADDED_CLOSET":
      return {...state, closets: [...state.closets, action.payload,], showNewItemButton: true }
    default:
      return state;
  }
}