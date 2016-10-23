import React, { Component } from 'react';

import { HComp, PComp } from '../../components';

class ImgComp extends Component {
  isActive () {
    if (this.props.elementId === this.props.selectedElementId) {
      return `imgComp${this.props.elementId} selected`
    }
    return `imgComp${this.props.elementId}`;
  }
  render () {
    let children = [];
    children = this.props.children.map((child) => {
      switch (child.tag[0]) {
        case 'h':
          return (
            <HComp
              key={child.elementId}
              elementId={child.elementId}
              tag={child.tag}
              text={child.text}
              style={child.style}
              selectElement={this.props.selectElement}
              selectedElementId={this.props.selectedElementId}
              clickHandler={this.props.clickHandler}
            >
            </HComp>
          )
        case 'p':
          return (
            <PComp
              key={child.elementId}
              elementId={child.elementId}
              text={child.text}
              linkText={child.linkText}
              style={child.style}
              selectElement={this.props.selectElement}
              selectedElementId={this.props.selectedElementId}
              clickHandler={this.props.clickHandler}
            >
            </PComp>
          )
        default:
          return (
            <div> Cannot find child element. </div>
          )
      }
    })
    console.log(this.props.style);
    return (
      <div
        id={this.props.elementId}
        className={this.props.className}
        style={this.props.style}
        onClick={(event) => this.props.clickHandler(event, this.props.selectElement, this.props.style)}
      >
        {children}
      </div>
    )
  }
}

export default ImgComp;