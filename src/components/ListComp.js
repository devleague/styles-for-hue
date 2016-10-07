import React, { Component } from 'react';
import { ListItem } from './';

class ListComp extends Component {
  render() {
    const listArray = this.props.list.map((listItem, index) => {
      return (
        <ListItem
          key={listItem.elementId}
          style={listItem.style}
        >
        </ListItem>
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