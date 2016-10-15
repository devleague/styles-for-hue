import React, { Component } from 'react';
import ListItem from './ListItem';

class ListComp extends Component {
  render() {
    let listArray = [];
    listArray = this.props.list.map((li, index) => {
      return (
        <ListItem
          key={li.elementId}
          elementId={li.elementId}
          style={li.style}
          selectElement={this.props.selectElement}
          selectedElementId={this.props.selectedElementId}
        >
        </ListItem>
      )
    })
    return (
      <ul
        className={`listComp${this.props.elementId}`}
      >
        {listArray}
      </ul>
    )
  }
}

export default ListComp;