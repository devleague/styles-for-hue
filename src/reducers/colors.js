const initialState = {
  colorPalette: [
    {
      label: "blue",
      value: "1",
    },
    {
      label: "red",
      value: "2",
    },
    {
      label: "green",
      value: "3",
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