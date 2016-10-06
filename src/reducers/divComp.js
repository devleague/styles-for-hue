const initialState = {
  divs: [],
  selectedElementId: 0
};

const reducer = (state = initialState, action) => {
  let newDivs = { ...state}.divs;
  switch (action.type) {
    case "SET_DIVS":
      return { ...state, divs: action.data};
    case "SELECT_DIV":
      return { ...state, selectedElementId: action.data.elementId};
    case "CHANGE_COLOR":
      let changeDivColor = newDivs.map((div, index) => {
        switch (div.elementId) {
          case action.data.divId:
            return { elementId: div.elementId, style: { ...div.style, backgroundColor: action.data.backgroundColor}};
          default:
            return { ...div };
        }
      });
      return { ...state, divs: changeDivColor };
    case "CHANGE_FONT":
      let changeDivFont = newDivs.map((div, index) => {
        switch (div.elementId) {
          case action.data.divId:
            return { elementId: div.elementId, style: { ...div.style, fontFamily: action.data.fontFamily}};
          default:
            return { ...div };
        }
      });
      return { ...state, divs: changeDivFont };
    default:
      return { ...state};
  }
}

export default reducer;