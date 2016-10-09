import React, { Component } from 'react';
import { Link } from 'react-router';

class EditLink extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Link {...this.props} activeClassName="active"/>
    )
  }
}

export default EditLink;