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

export function changeColorPalette (colorArray) {
  return {
    type: 'CHANGE_COLOR_PALETTE',
    data: colorArray
  }
}

export function changeColor (elements) {
  return {
    type: 'CHANGE_COLOR',
    data: elements
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

export function changeFontSize (elementId, size) {
  return {
    type: 'CHANGE_FONT_SIZE',
    data: {
      elementId: elementId,
      fontSize: size
    }
  }
}

export function newDoc (docId) {
  return {
    type: 'NEW_DOC',
    data: docId
  }
}

export function divWidth (elementId, width) {
  return {
    type: 'CHANGE_WIDTH',
    data: {
      elementId: elementId,
      width: width
    }
  }

}

export function divHeight (elementId, height) {
  return {
    type: 'CHANGE_HEIGHT',
    data: {
      elementId: elementId,
      height: height
    }
  }
}