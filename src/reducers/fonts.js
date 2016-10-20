const initialState = {
  items: [],
  selectedFont: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FONT_TYPES":
      return { ...state, items: action.data };
    case "CHANGE_SELECTED_FONT":
      return { ...state, selectedFont: action.data}
    default:
      return state;
  }
}

export default reducer;