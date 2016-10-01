import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp } from '../components';

class Template extends Component {
  render() {
    return (
      <div
        className="template-contain"
      >
        <div
        className="template-pagewrap"
        >
          <ImgComp />
          <DivComp />
          <PComp />
          <ListComp />
        </div>
      </div>
    )
  }
}

export default Template;