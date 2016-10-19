const initialState = {
  visibility: 'hidden'
}

const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TEMPLATE":
      return {...state, visibility: action.data};
    default:
      return state;
  }
}

export default reducer;