export function setInitialState (style) {
  return {
    type: 'SET_INITIAL_STATE',
    data: style
  }
}

export function changeColor (color) {
  return {
    type: 'CHANGE_COLOR',
    data: {
      backgroundColor: color
    }
  }
}

export function changeFont (font) {
  return {
    type: 'CHANGE_FONT',
    data: {
      fontFamily: font
    }
  }
}
