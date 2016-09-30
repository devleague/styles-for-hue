import React, { Component } from 'react';

class ImgComp extends Component {
  render () {
    return (
      <img
        className="imgComp"
        src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/14484933_1259937267381521_3166834407146026396_n.jpg?oh=aaf828d044af7ce83e78941819be992b&oe=5863670D"
        alt="I like rice!"
        style={
          {
            display: "inline-block",
            width: "50%"
          }
        }
      />
    )
  }
}

export default ImgComp;