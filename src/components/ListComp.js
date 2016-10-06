import React, { Component } from 'react';

class ListComp extends Component {
  render() {
    const listArray = this.props.list.map((listItem, index) => {
      return (
        <li
          key={listItem.elementId}
          elementId={listItem.elementId}
          className="listItem"
          style={listItem.style}
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