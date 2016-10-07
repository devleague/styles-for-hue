const initialState = {
  colorPalette: [
    {
      label: "blue",
      value: "#0000FF",
    },
    {
      label: "red",
      value: "#FF0000",
    },
    {
      label: "green",
      value: "#00FF00",
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