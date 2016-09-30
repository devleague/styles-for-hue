import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp } from '../components';

class Template extends Component {
  render() {
    return (
      <div>
        <ImgComp />
        <DivComp />
        <PComp />
        <ListComp />
      </div>
    )
  }
}

export default Template;