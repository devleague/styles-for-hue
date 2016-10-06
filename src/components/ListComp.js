import React, { Component } from 'react';

class ListComp extends Component {
  render() {
    const listArray = ['yellow', 'green', 'orange', 'pink'].map((color, index) => {
      return (
        <li
          key={index}
          className="listItem"
          onClick={() => this.props.selectElement(this.props.elementId)}
          style={
            {
              backgroundColor: color
            }
          }
        >
          I'm a list item!
        </li>
      )
    })
    return (
      <ul
        className="listComp"
      >
        {listArray}
      </ul>
    )
  }
}

export default ListComp;