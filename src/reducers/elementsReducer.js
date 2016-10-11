const initialState = {
  doc: {
    _id: null,
    divTags: [],
    pTags: [],
    imgTags: [],
    ulTags: []
  },
  selectedElement: {
    selectedElementId: 0,
    selectedStyle: {}
  }
};

const reducer = (state = initialState, action) => {
  let newElems = { ...state.doc};
  let selectedElement = { ...state.selectedElement};
  switch (action.type) {
    case "SET_ELEMENTS":
    console.log(action.data);
      return {...state, doc: action.data.doc};
    case "SELECT_ELEMENT":
        return runThroughElems(state, newElems, selectedElement, action.data.elementId);
        // newElems[element] = newElems[element].map((elem, index) => {
        //   if (elem.elementId === action.data.elementId) {
        //     selectedElement = { selectedElementId: elem.elementId, selectedStyle: elem.style };
        //     return { ...elem, style: { ...elem.style} };
        //   }
        //   if (elem.subType) {
        //     elem.subType = elem.subType.map((child, index) => {
        //       if (child.elementId === action.data.elementId) {
        //         selectedElement = { selectedElementId: child.elementId, selectedStyle: child.style };
        //         return { ...child, style: { ...child.style} };
        //       }
        //       return { ...child, style: { ...child.style}}
        //     })
        //   }
        //   return { ...elem, style: { ...elem.style}};
        // })
      // return { ...state, doc: { ...state.doc, elements: newElems}, selectedElement: selectedElement};

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

function runThroughElems (state, elements, selectedElement, id) {
  if (!Array.isArray(elements)) {
    for (let element in elements) {
      elements[element] = elements[element].map((elem, index) => {
        if (elem.elementId === id) {
          selectedElement = { selectedElementId: elem.elementId, selectedStyle: elem.style };
          return { ...elem};
        }
        if (elem.subType) {
          runThroughElems(state, elem.subType, selectedElement, id);
        }
        return { ...elem};
      })
    }
    return { ...state, selectedElement: selectedElement };
  } else if (Array.isArray(elements)) {
    elements = elements.map((elem, index) => {
      if (elem.elementId === id) {
        selectedElement = { selectedElementId: elem.elementId, selectedStyle: elem.style };
        return { ...elem};
      }
      if (elem.subType) {
        console.log('Am I triggering?!');
        runThroughElems(state, elem.subType, selectedElement, id);
      }
      return { ...elem};
    })
    console.log(elements);
    return { ...state, selectedElement: selectedElement };
  }
  console.log('DO SOMETHNG!!', {...state, selectedElement: selectedElement});
  // return { ...state, selectedElement: selectedElement };
}

export default reducer;