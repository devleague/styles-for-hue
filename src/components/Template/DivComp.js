import React, { Component } from 'react';
import PComp from './PComp';
import HComp from './HComp';

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
          let children3 = [];
          children2 = child.children.map((secondChild, index) => {
            if (secondChild.children) {
              children3 = secondChild.children.map((thirdChild, index) => {
                switch (thirdChild.tag[0]) {
                  case 'h':
                    return (
                      <HComp
                        key={index}
                        elementId={thirdChild.elementId}
                        tag={thirdChild.tag}
                        text={thirdChild.text}
                        style={thirdChild.style}
                        selectElement={this.props.selectElement}
                      >
                      </HComp>
                    )
                  case 'p':
                    return (
                      <PComp
                        key={index}
                        elementId={thirdChild.elementId}
                        text={thirdChild.text}
                        style={thirdChild.style}
                        selectElement={this.props.selectElement}
                      >
                      </PComp>
                    )
                  default:
                    return (
                      <div> Cannot find child element. </div>
                    )
                }
              })
            }
            return (
              <div
                key={index}
                className={this.isActive(secondChild.elementId)}
                style={secondChild.style}
                onClick={() => this.props.selectElement(secondChild.elementId, child.style)}
              >
                I'm a div component!
                {children3}
              </div>
            )
          })
          return (
            <div
              key={index}
              className={this.isActive(child.elementId)}
              style={child.style}
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
              style={child.style}
              onClick={() => this.props.selectElement(child.elementId, child.style)}
            >
              I'm a div component!
            </div>
          )
        }
      })
    }
    return (
      <div
          className={this.isActive(this.props.elementId)}
          style={this.props.style}
          // onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
        >
          I'm a div component!
          {children}
      </div>
    )
  }
}

export default DivComp;