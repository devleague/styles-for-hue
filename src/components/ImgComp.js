import React, { Component } from 'react';

class ImgComp extends Component {
  render () {
    return (
      <div
        style={
          {
            justifyContent: "center"
          }
        }
      >
        <img
          className="imgComp"
          src={this.props.src}
          style={ this.props.style }
        />
      </div>
    )
  }
}

export default ImgComp;