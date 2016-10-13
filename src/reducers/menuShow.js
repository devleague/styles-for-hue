const initialState = {
  showMenu: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return {...state, showMenu: action.show};
    default:
      return state;
  }
}

export default reducer;