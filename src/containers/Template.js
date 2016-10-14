import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp, Header, Footer, EditComp } from '../components';
import { connect } from 'react-redux';

class Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const divTags = this.props.divTags.map((div, index) => {
    //   return (
    //     <DivComp
    //       key={div.elementId}
    //       elementId={div.elementId}
    //       children={div.subType}
    //       style={div.style}
    //       selectElement={this.props.selectElement}
    //       selectedElementId={this.props.selectedElementId}
    //       onClick={this.props.showElementStyles}
    //     >
    //     </DivComp>
    //   )
    // })
    // const pTags = this.props.pTags.map((p, index) => {
    //   return (
    //     <PComp
    //       key={p.elementId}
    //       elementId={p.elementId}
    //       style={p.style}
    //       selectElement={this.props.selectElement}
    //       selectedElementId={this.props.selectedElementId}
    //     />
    //   )
    // })
    // const imgTags = this.props.imgTags.map((img, index) => {
    //   return (
    //     <ImgComp
    //       key={img.elementId}
    //       elementId={img.elementId}
    //       src={img.src}
    //       style={img.style}
    //       selectElement={this.props.selectElement}
    //       selectedElementId={this.props.selectedElementId}
    //     />
    //   )
    // })
    // const ulTags = this.props.ulTags.map((ul, index) => {
    //   return (
    //     <ListComp
    //       key={ul.elementId}
    //       elementId={ul.elementId}
    //       style={ul.style}
    //       list={ul.subType}
    //       selectElement={this.props.selectElement}
    //       selectedElementId={this.props.selectedElementId}
    //     />
    //   )
    // })
    return (
      <div
        className="template-1"
      >
        <Header />

        <Footer />
        <hr />
        <div className="current-styles-container">
          <h6>Current Element Styles</h6>
          <div className="current-elem-styles"
          >
            {this.props.showElementStyles(this.props.selectedElementStyle)}
          </div>
        </div>
      </div>
    )
  }
}

export default Template;
