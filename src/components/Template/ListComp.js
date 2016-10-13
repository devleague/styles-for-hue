import React, { Component } from 'react';
import ListItem from './ListItem';

class ListComp extends Component {
  render() {
    let listArray = [];
    for (let listItem in this.props.list) {
      listArray = this.props.list[listItem].map((li, index) => {
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
    }
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