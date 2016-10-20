const initialState = {
  modal: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_POPOVER":
      return { ...state, modal: action.payload}
    case "HIDE_POPOVER":
      return { ...state, modal: action.payload}
    default:
      return state;
  }
}

export default reducer;