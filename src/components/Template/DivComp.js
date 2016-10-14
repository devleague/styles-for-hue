import React, { Component } from 'react';

class DivComp extends Component {
  isActive (elementId) {
    if (elementId === this.props.selectedElementId) {
      return `divComp${elementId} selected`
    }
    return `divComp${elementId}`;
  }

  render() {
    let children = [];
    if(this.props.children) {
      let children2 = [];
      children = this.props.children.map((child, index) => {
        if (child.children) {
          children2 = child.children.map((youngerChlid, index) => {
            return (
              <div
                key={index}
                className={this.isActive(youngerChlid.elementId)}
                style={ youngerChlid.style }
                onClick={() => this.props.selectElement(youngerChlid.elementId, child.style)}
              >
                I'm a div component!
              </div>
            )
          })
        }
        if (child.children) {
          return (
            <div
              key={index}
              className={this.isActive(child.elementId)}
              style={ child.style }
            >
              I'm a div component!
              {children2}
            </div>
          )
        } else {
          return (
            <div
              key={index}
              className={this.isActive(child.elementId)}
              style={ child.style }
              onClick={() => this.props.selectElement(child.elementId, child.style)}
            >
              I'm a div component!
            </div>
          )
        }
      })
    }
    console.log(children);
    return (
      <div
          className={this.isActive(this.props.elementId)}
          style={ this.props.style }
          // onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
        >
          I'm a div component!
          {children}
      </div>
    )
  }
}

export default DivComp;