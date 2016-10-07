import React, { Component } from 'react';

class ListItem extends Component {
  render () {
    return (
      <li
        className="listItem"
        style={this.props.style}
      >
        I'm a list item!
      </li>
    )
  }
}

export default ListItem;