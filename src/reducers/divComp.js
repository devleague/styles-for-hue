const initialState = {
  divs: []
};

const reducer = (state = initialState, action) => {
  let newDivs = { ...state}.divs;
  switch (action.type) {
    case "SET_DIVS":
      return { ...state, divs: action.data};
    case "CHANGE_COLOR":
      let changeDiv = newDivs.map((div, index) => {
        switch (div.elementId) {
          case 5:
            return { elementId: div.elementId, style: { ...div.style, backgroundColor: action.data.backgroundColor}};
          default:
            return { ...div };
        }
      });
      return {...state, divs: changeDiv };
    case "CHANGE_FONT":
      newDivs = newDivs.map((div, index) => {
        return { style: { ...div.style, fontFamily: action.data.fontFamily}};
      });
      return { ...state, divs: newDivs};
    default:
      return { ...state};
  }
}

export default reducer;