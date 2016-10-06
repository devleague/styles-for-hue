export function setElements (elem) {
  return {
    type: 'SET_ELEMENTS',
    data: elem
  }
}

export function setPs (ps) {
  return {
    type: 'SET_PS',
    data: ps
  }
}

export function selectElement (elementId) {
  return {
    type: 'SELECT_ELEMENT',
    data: {
      elementId: elementId
    }
  }
}

export function changeColor (elemId, color) {
  return {
    type: 'CHANGE_COLOR',
    data: {
      elemId: elemId,
      backgroundColor: color
    }
  }
}


export function changeFont (elemId, font) {
  return {
    type: 'CHANGE_FONT',
    data: {
      elemId: elemId,
      fontFamily: font
    }
  }
}
