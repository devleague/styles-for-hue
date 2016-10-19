const initialState = {
  isShowing: false,
  message: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return Object.assign({}, state, {
        isShowing: true,
        message: action.message
      })
    case "HIDE_MODAL":
      return Object.assign({}, state, {
        isShowing: false
      })
    default:
      return state;
  }
}

export default reducer;