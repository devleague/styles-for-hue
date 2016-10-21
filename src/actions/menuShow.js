export default {
  showFontMenu,
  showDivMenu,
};

export function showFontMenu (show) {
  return {
    type: "SHOW_FONTMENU",
    show: show
  }
}

export function showDivMenu (show) {
  return {
    type: "SHOW_DIVMENU",
    show: show
  }
}