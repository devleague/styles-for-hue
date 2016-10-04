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
          src="/images/city_night.jpg"
          style={
            {
              width: "100%",
              backgroundColor: "#3C6E71"
            }
          }
        />
      </div>
    )
  }
}

export default ImgComp;