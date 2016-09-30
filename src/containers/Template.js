import React, { Component } from 'react';
import { DivComp, PComp } from '../components';

class Template extends Component {
  render() {
    return (
      <div>
        <DivComp />
        <PComp />
      </div>
    )
  }
}

export default Template;