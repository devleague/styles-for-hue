export default {
  getColorPalette
};

export function getColorPalette(color) {
  return {
    type: "GET_COLOR_PALETTE",
    data: [
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
        value: "greenw",
      }
    ]
  }
}