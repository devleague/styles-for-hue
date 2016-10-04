const initialState = {
  divs: []
};

const reducer = (state = initialState, action) => {
  let newDivs = { ...state}.divs;
  switch (action.type) {
    case "SET_DIVS":
      return { ...state, divs: action.data};
    case "CHANGE_COLOR":
      newDivs = newDivs.map((div, index) => {
        return { style: { ...div.style, backgroundColor: action.data.backgroundColor}};
      });
      return { ...state, divs: newDivs};
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