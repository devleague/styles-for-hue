import React, { Component } from 'react';

class ImgComp extends Component {
  render () {
    return (
      <div
        style={
          {
            margin: "30px"
          }
        }
      >
        <img
          className="imgComp"
          // src="http://buzzsharer.com/wp-content/uploads/2015/07/cute-corgi-face.jpg"
          // alt="I like rice!"
          style={
            {
              display: "inline-block",
              width: "960px",
              height: "360px"
            }
          }
        />
      </div>
    )
  }
}

export default ImgComp;