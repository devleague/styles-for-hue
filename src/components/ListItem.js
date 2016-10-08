import React, { Component } from 'react';

class ListItem extends Component {
  render () {
    return (
      <li
        className="listItem"
        style={this.props.style}
        onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
      >
        I'm a list item!
      </li>
    )
  }
}

export default ListItem;