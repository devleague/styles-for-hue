export function setStyles(styles) {
  return {
    type: "SET_STYLES",
    data: styles
  };
};

export function setSelectedStyle(style) {
  return {
    type: "SET_SELECTED_STYLE",
    data: style
  };
};