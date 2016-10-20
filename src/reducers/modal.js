const initialState = {
  modal: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, modal: action.payload}
    case "HIDE_MODAL":
      return { ...state, modal: action.payload}
    default:
      return state;
  }
}

export default reducer;