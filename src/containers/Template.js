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
          selectDiv={this.props.selectElement}
        />
      )
    })
    const ps = this.props.ps.map((p, index) => {
      return (
        <PComp
          key={p.elementId}
          elementId={p.elementId}
          style={p.style}
          selectP={this.props.selectElement}
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
        {ps}
        <ListComp />
        <Footer />
      </div>
    )
  }
}

export default Template;
