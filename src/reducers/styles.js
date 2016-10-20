const initialState = {
  styles: {},
  selectedStyle: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STYLES":
      return { ...state, styles: action.data};
    case "SET_SELECTED_STYLE":
      return { ...state, selectedStyle: action.data}
    default:
      return { ...state};
  }
}

export default reducer;