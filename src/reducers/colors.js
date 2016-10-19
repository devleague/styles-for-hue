const initialState = {
  colorPalette: [],
  selectedColorPalette: []
};

const colors = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COLOR_PALETTE":
      console.log(action.data);
      return { ...state, colorPalette: action.data };
    case "CHANGE_COLOR_PALETTE":
      return { ...state, selectedColorPalette: action.data};
    default:
      return state;
  }
}

export default colors;