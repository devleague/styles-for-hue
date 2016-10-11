import React, { Component } from 'react';

class ListItem extends Component {
  isActive () {
    if (this.props.elementId === this.props.selectedElementId) {
      return `listItem${this.props.elementId} selected`
    }
    return `listItem${this.props.elementId}`;
  }

  render () {
    return (
      <li
        className={this.isActive()}
        style={this.props.style}
        onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
      >
        I'm a list item!
      </li>
    )
  }
}

export default ListItem;