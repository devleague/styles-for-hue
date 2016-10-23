export default {
  showFontMenu,
  showDivMenu,
  showTemplateMenu
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

export function showTemplateMenu (show) {
  return {
    type: "SHOW_TEMPLATEMENU",
    show: show
  }
}