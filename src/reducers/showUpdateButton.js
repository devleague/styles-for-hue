const initialState = {
  updateButton: false
}

const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case "SHOW_UPDATEBUTTON":
      return {...state, updateButton: action.show};
    case "HIDE_UPDATEBUTTON":
      return {...state, updateButton: action.show}
    default:
      return state;
  }
}

export default reducer;