const initialState = {
  updateTemp: false
}

const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case "SHOW_UPDATEBUTTON":
      return {...state, updateTemp: action.show};
    case "HIDE_UPDATEBUTTON":
      return {...state, updateTemp: action.show}
    default:
      return state;
  }
}

export default reducer;