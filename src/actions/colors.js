export default {
  getColorPalette
};

export function getColorPalette(color) {
  return {
    type: "GET_COLOR_PALETTE",
    data: color
  }
}