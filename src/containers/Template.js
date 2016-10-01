import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp } from '../components';

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {backgroundColor: 'red'};
  }
  render() {
    return (
      <div>
        <ImgComp />
        <DivComp
          backgroundColor={this.state.backgroundColor}
        />
        <PComp />
        <ListComp />
      </div>
    )
  }
}

export default Template;