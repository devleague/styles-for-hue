const initialState = {
  showCss: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_CSS":
      return {...state, showCss: action.show};
    default:
      return state;
  }
}

export default reducer;