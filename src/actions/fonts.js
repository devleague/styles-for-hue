export default {
  fontTypes
};

export function fontTypes(fontFamily){
  return {
    type: "FONT_TYPES",
    data: fontFamily
  }
};

export function changeSelectedFont(fontArray){
  return {
    type: "CHANGE_SELECTED_FONT",
    data: fontArray
  }
};