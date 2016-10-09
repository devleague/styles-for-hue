const initialState = {
  doc: {
    _id: null,
    elements: {
      divTags: [],
      pTags: [],
      imgTags: [],
      ulTags: []
    }
  },
  selectedElement: {
    selectedElementId: 0,
    selectedStyle: {}
  }
};

const reducer = (state = initialState, action) => {
  let newElems = { ...state.doc.elements};
  let selectedElement = { ...state.selectedElement};
  switch (action.type) {
    case "SET_ELEMENTS":
      return { ...state, doc: {elements: action.data}};
    case "SELECT_ELEMENT":
      for (let element in newElems) {
        newElems[element] = newElems[element].map((elem, index) => {
          if (elem.elementId === action.data.elementId) {
            selectedElement = { selectedElementId: elem.elementId, selectedStyle: elem.style };
            return { ...elem, style: { ...elem.style} };
          }
          if (elem.subType) {
            elem.subType = elem.subType.map((child, index) => {
              if (child.elementId === action.data.elementId) {
                selectedElement = { selectedElementId: child.elementId, selectedStyle: child.style };
                return { ...child, style: { ...child.style} };
              }
              return { ...child, style: { ...child.style}}
            })
          }
          return { ...elem, style: { ...elem.style}};
        })
      }
      return { ...state, doc: { ...state.doc, elements: newElems}, selectedElement: selectedElement};
    case "CHANGE_COLOR":
      for (let element in newElems) {
        newElems[element] = newElems[element].map((elem, index) => {
          switch (elem.elementId) {
            case action.data.elemId:
              return { ...elem, style: { ...elem.style, backgroundColor: action.data.backgroundColor}};
            default:
              return { ...elem};
          }
        });
      }
      return { ...state, doc: {elements: newElems} };
    case "CHANGE_FONT":
      for (let element in newElems) {
        newElems[element] = newElems[element].map((elem, index) => {
          switch (elem.elementId) {
            case action.data.elemId:
              return { ...elem, style: { ...elem.style, fontFamily: action.data.fontFamily}};
            default:
              return { ...elem };
          }
        });
      }
      return { ...state, doc: {elements: newElems} };
    case "NEW_DOC":
      return { ...state, doc: { elements: { ...state.doc.elements }, _id: `ObjectId(${action.data})`} };
    default:
      return { ...state};
  }
}

export default reducer;