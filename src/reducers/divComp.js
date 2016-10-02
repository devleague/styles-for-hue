const loadMongo = function () {
  $.ajax({
    url: 'http://localhost:3000/api/styles',
    dataType: 'json',
    success: (mongoStyles) => {
      // this.setState({style:mongoStyles})
      console.log(mongoStyles);
    }
  })
  console.log('hi');
}
loadMongo();

const initialState = {
  display: 'inline-block',
  backgroundColor: 'red',
  fontFamily: 'sans-serif'
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "CHANGE_COLOR":
      newState.backgroundColor = action.data.backgroundColor;
      return newState;
    case "CHANGE_FONT":
      newState.fontFamily = action.data.fontFamily;
      return newState;
    default:
      return newState;
  }
}

export default reducer;