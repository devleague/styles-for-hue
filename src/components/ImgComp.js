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
          style={
            {
              width: "960px",
              height: "360px",
              backgroundColor: "#3C6E71"
            }
          }
        />
      </div>
    )
  }
}

export default ImgComp;