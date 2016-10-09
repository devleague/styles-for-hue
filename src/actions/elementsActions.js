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

export function newDoc (docId) {
  return {
    type: 'NEW_DOC',
    data: docId
  }
}