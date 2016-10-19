const initialState = {
  _id: null,
  doc: {
    _id: null,
    elements: []
  },
  selectedElement: {
    selectedElementId: 0,
    selectedStyle: {}
  }
};

const reducer = (state = initialState, action) => {
  let newElems = [ ...state.doc.elements];
  let selectedElement = { ...state.selectedElement};
  switch (action.type) {
    case "SET_ELEMENTS":
      return {...state, _id: action.data._id, doc: action.data.doc};
    case "SELECT_ELEMENT":
      return selectElement(state, newElems, selectedElement, action.data.elementId);
    case "CHANGE_COLOR":
      console.log(action.data);
      return { ...state, doc: { ...state.doc, elements: action.data} };
    case "CHANGE_FONT_COLOR":
      newElems = newElems.map((elem, index) => {
        if (elem.elementId === action.data.elementId) {
          return { ...elem, style: { ...elem.style, color: action.data.color}};
        }
        if (elem.children) {
          elem.children = elem.children.map((child, index) => {
            if (child.elementId === action.data.elementId) {
              return { ...child, style: { ...child.style, color: action.data.color}};
            }
            return { ...child};
          })
        }
        return { ...elem};
      });
      return { ...state, doc: { ...state.doc, elements: newElems} };
    case "CHANGE_FONT_SIZE":
      newElems = newElems.map((elem, index) => {
        if (elem.elementId === action.data.elementId) {
          return { ...elem, style: { ...elem.style, fontSize: action.data.fontSize}};
        }
        if (elem.children) {
          elem.children = elem.children.map((child, index) => {
            if (child.elementId === action.data.elementId) {
              return { ...child, style: { ...child.style, fontSize: action.data.fontSize}};
            }
            return { ...child};
          })
        }
        return { ...elem};
      });
      return { ...state, doc: { ...state.doc, elements: newElems} };
    case "CHANGE_WIDTH":
      for (let element in newElems) {
        newElems[element] = newElems[element].map((elem, index) => {
          if (elem.elementId === action.data.elementId) {
            return { ...elem, style: { ...elem.style, width: action.data.width}};
          }
          if (elem.subType) {
            for (let children in elem.subType) {
              elem.subType[children] = elem.subType[children].map((child, index) => {
                if (child.elementId === action.data.elementId) {
                  return { ...child, style: { ...child.style, width: action.data.width}};
                }
                return { ...child};
              })
            }
          }
          return { ...elem};
        });
      }
      return { ...state, doc: { ...state.doc, elements: newElems} };
    case "CHANGE_FONT":
      return { ...state, doc: { ...state.doc, elements: action.data} };
    case "NEW_DOC":
      return { ...state, _id: `ObjectId(${action.data})`, doc: { ...state.doc, elements: [ ...state.doc.elements ]} };
    default:
      return { ...state};
  }
}

function selectElement (state, elements, selectedElement, id) {
  elements = elements.map((elem, index) => {
    if (elem.elementId === id) {
      selectedElement = { selectedElementId: elem.elementId, selectedStyle: elem.style };
      return { ...elem};
    }
    if (elem.children) {
      const _selectedElement = selectElement(state, elem.children, selectedElement, id);
      if (id === _selectedElement.selectedElement.selectedElementId) {
        selectedElement = _selectedElement.selectedElement;
        return { ...elem};
      }
      _selectedElement
      return { ...elem};
    }
    return { ...elem};
  })
  return { ...state, selectedElement: selectedElement };
}

// function changeColorPalette (state, elements, colorPalette) {
//   let counter = 1;
//   elements = elements.map((elem, index) => {
//     if (elem.children) {
//       elem.children = elem.children.map((child, index) => {
//         if (counter < colorPalette.length) {
//           return { ...child, style: { ...child.style, backgroundColor: colorPalette[counter].value}};
//         }
//         return { ...child};
//       })
//       counter = 1;
//       counter++;
//       // debugger;
//       changeColorPalette(state, elem.children, colorPalette);
//       return { ...elem, style: { ...elem.style, backgroundColor: colorPalette[0].value}};
//     }
//     return { ...elem, style: { ...elem.style, backgroundColor: colorPalette[0].value}}
//     })
//   return { ...state, doc: { ...state.doc, elements: elements}};
// }

export default reducer;