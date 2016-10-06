export function setDivs (divs) {
  return {
    type: 'SET_DIVS',
    data: divs
  }
}

export function selectDiv (elementId) {
  return {
    type: 'SELECT_DIV',
    data: {
      elementId: elementId
    }
  }
}

export function changeColor (divId, color) {
  return {
    type: 'CHANGE_COLOR',
    data: {
      divId: divId,
      backgroundColor: color
    }
  }
}


export function changeFont (divId, font) {
  return {
    type: 'CHANGE_FONT',
    data: {
      divId: divId,
      fontFamily: font
    }
  }
}
