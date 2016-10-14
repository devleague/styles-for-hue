export function setElements (elem) {
  return {
    type: 'SET_ELEMENTS',
    data: elem
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

export function changeColor (elementId, color) {
  return {
    type: 'CHANGE_COLOR',
    data: {
      elementId: elementId,
      backgroundColor: color
    }
  }
}

export function changeFont (elementId, font) {
  return {
    type: 'CHANGE_FONT',
    data: {
      elementId: elementId,
      fontFamily: font
    }
  }
}

export function changeFontColor (elementId, color) {
  return {
    type: 'CHANGE_FONT_COLOR',
    data: {
      elementId: elementId,
      color: color
    }
  }
}

export function newDoc (docId) {
  return {
    type: 'NEW_DOC',
    data: docId
  }
}