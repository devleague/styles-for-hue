export default {
  getColorPalette
};

export function getColorPalette(color) {
  return {
    type: "GET_COLOR_PALETTE",
    data: color
  }
}

export function changeColorPalette(colorArray) {
  return {
    type: "CHANGE_COLOR_PALETTE",
    data: colorArray
  }
}