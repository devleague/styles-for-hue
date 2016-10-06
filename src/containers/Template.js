import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp, Header, Footer, EditComp } from '../components';
import { connect } from 'react-redux';

class Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const divTags = this.props.divTags.map((div, index) => {
      return (
        <DivComp
          key={div.elementId}
          elementId={div.elementId}
          style={div.style}
          selectElement={this.props.selectElement}
          onClick={this.props.showElementStyles}
        />
      )
    })
    const pTags = this.props.pTags.map((p, index) => {
      return (
        <PComp
          key={p.elementId}
          elementId={p.elementId}
          style={p.style}
          selectElement={this.props.selectElement}
        />
      )
    })
    const imgTags = this.props.imgTags.map((img, index) => {
      return (
        <ImgComp
          key={img.elementId}
          elementId={img.elementId}
          src={img.src}
          style={img.style}
          selectElement={this.props.selectElement}
        />
      )
    })
    return (
      <div
        className="template-one"
      >
        <Header />
        {imgTags}
        {divTags}
        {pTags}
        <ListComp
          selectElement={this.props.selectElement}
        />
        <Footer />
        <div
          onChange={this.props.showElementStyles}
        >
        HELLO{this.props.styles}
        </div>
      </div>
    )
  }
}

export default Template;
