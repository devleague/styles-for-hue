export default {
  showFontMenu,
  showDivMenu,
  showUpdate
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

export function showUpdate (show) {
  return {
    type: "SHOW_UPDATE",
    show: show
  }
}