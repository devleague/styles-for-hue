import React, { Component } from 'react';
import { DivComp, PComp, ImgComp } from '../components';

class Template extends Component {
  render() {
    return (
      <div>
        <ImgComp />
        <DivComp />
        <PComp />
      </div>
    )
  }
}

export default Template;