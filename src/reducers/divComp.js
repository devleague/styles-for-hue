const initialState = {
  elements: {
    divs: [],
    ps: []
  },
  selectedElementId: 0
};

const reducer = (state = initialState, action) => {
  let newElems = { ...state.elements};
  switch (action.type) {
    case "SET_ELEMENTS":
      return { ...state, elements: action.data};
    case "SELECT_ELEMENT":
      return { ...state, selectedElementId: action.data.elementId};
    case "CHANGE_COLOR":
      for (let element in newElems) {
        newElems[element] = newElems[element].map((elem, index) => {
          switch (elem.elementId) {
            case action.data.elemId:
              return { elementId: elem.elementId, style: { ...elem.style, backgroundColor: action.data.backgroundColor}};
            default:
              return { ...elem};
          }
        });
      }
      return { ...state, elements: newElems };
    case "CHANGE_FONT":
      for (let element in newElems) {
        newElems[element] = newElems[element].map((elem, index) => {
          switch (elem.elementId) {
            case action.data.elemId:
              return { elementId: elem.elementId, style: { ...elem.style, fontFamily: action.data.fontFamily}};
            default:
              return { ...elem };
          }
        });
      }
      return { ...state, elements: newElems };
    default:
      return { ...state};
  }
}

export default reducer;