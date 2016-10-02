import React, { Component } from 'react';

class DivComp extends Component {
  // getStyle(){
  //   console.log('hi');
  //   var divStyles = document.getElementsByClassName('divComp');
  //   console.log(divStyles[0].style.backgroundColor);
  //   console.log('div styles:', divStyles);
  // }

  render() {
    return (
      <div
        className="divComp"
        style={ this.props.style }
      >
      I'm a div component!
      </div>
    )
  }
}

export default DivComp;