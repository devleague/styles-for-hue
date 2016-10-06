const initialState = {
  colorPalette: []
};

const colors = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COLOR_PALETTE":
      return { ...state, colorPalette: action.data };
    default:
      return state;
  }
}

export default colors;