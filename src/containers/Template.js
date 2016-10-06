import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp, Header, Footer, EditComp } from '../components';
import { connect } from 'react-redux';

class Template extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const divs = this.props.divs.map((div, index) => {
      return (
        <DivComp
          key={div.elementId}
          elementId={div.elementId}
          style={div.style}
        />
      )
    })
    return (
      <div
        className="template-one"
      >
        <Header />
        <ImgComp />
        {divs}
        <DivComp />
        <PComp />
        <ListComp />
        <Footer />
      </div>
    )
  }
}

export default Template;
