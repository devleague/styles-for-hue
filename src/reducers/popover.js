const initialState = {
  modal: false,
  updatepop: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_POPOVER":
      return { ...state, modal: action.payload}
    case "HIDE_POPOVER":
      return { ...state, modal: action.payload}
    case "SHOW_UPDATEPOPOVER":
      return { ...state, updatepop: action.payupdate}
    case "HIDE_UPDATEPOPOVER":
      return { ...state, updatepop: action.payupdate}
    default:
      return state;
  }
}

export default reducer;