import React, { Component } from 'react';

const loadMongo = function () {
  $.ajax({
    url: 'http://localhost:3000/api/styles',
    dataType: 'json',
    success: (mongoStyles) => {
      // this.setState({style:mongoStyles})
      console.log(JSON.stringify(mongoStyles));
      // console.log(mongoStyles);
      return mongoStyles;
    }
  })
}

class DivComp extends Component {
  render() {
    console.log(loadMongo());
    return (
      <div
        className="divComp"
        style={ () => this.props.setInitialState(loadMongo()) }
      >
      I'm a div component!
      </div>
    )
  }
}

export default DivComp;