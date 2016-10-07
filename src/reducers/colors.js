const initialState = {
  colorPalette: [
     {
        label: "blue",
        value: "blue",
      },
      {
        label: "red",
        value: "red",
      },
      {
        label: "green",
        value: "green",
      }
  ]
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