export default function closetReducer(
  state = { closets: []}, action) {
  switch (action.type) {
    case "ADDED_CLOSET":
      return {...state, closets: [...state.closets, action.payload,]}
    case "LOAD_CLOSET":
      return {...state, closets: [action.payload]}
    default:
      return state;
  }
}