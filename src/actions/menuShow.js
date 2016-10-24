export default {
  showFontMenu,
  showDivMenu,
  showTemplateMenu,
  showUploadMenu
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

export function showUploadMenu (show) {
  return {
    type: "SHOW_UPLOADMENU",
    show: show
  }
}