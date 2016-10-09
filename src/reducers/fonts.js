const initialState = {
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FONT_TYPES":
      return { ...state, items: action.data };
    default:
      return state;
  }
}

export default reducer;