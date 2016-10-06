import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp, Header, Footer, EditComp } from '../components';
import { connect } from 'react-redux';

class Template extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const divTags = this.props.divTags.map((div, index) => {
      return (
        <DivComp
          key={div.elementId}
          elementId={div.elementId}
          style={div.style}
          selectDiv={this.props.selectElement}
        />
      )
    })
    const pTags = this.props.pTags.map((p, index) => {
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
        {divTags}
        {pTags}
        <ListComp />
        <Footer />
      </div>
    )
  }
}

export default Template;
