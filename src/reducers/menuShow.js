const initialState = {
  showFontMenu: false,
  showDivMenu: false,
  showUpdate: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_FONTMENU":
      return {...state, showFontMenu: action.show};
    case "SHOW_DIVMENU":
      return {...state, showDivMenu: action.show};
    case "SHOW_UPDATE":
      return {...state, showUpdate: action.show};
    default:
      return state;
  }
}

export default reducer;