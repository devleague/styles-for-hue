import React, { Component } from 'react';
import PComp from './PComp';
import HComp from './HComp';
import { ImgComp } from '../../components';
import Header from './Header';
import Footer from './Footer';

class DivComp extends Component {
  isActive (elementId, className) {
    if (elementId === this.props.selectedElementId) {
      return `${className} selected`
    }
    return className;
  }

  render() {
    let children = [];
    if(this.props.children) {
      let children2 = [];
      children = this.props.children.map((child, index) => {
        switch (child.tag) {
          case 'Header':
            return (
              <Header
                key={child.elementId}
                elementId={child.elementId}
                className={this.isActive(child.elementId, child.className)}
                style={child.style}
                selectElement={this.props.selectElement}
              >
              </Header>
            )
          case 'Footer':
            return (
              <Footer
                key={child.elementId}
                elementId={child.elementId}
                className={this.isActive(child.elementId, child.className)}
                style={child.style}
                selectElement={this.props.selectElement}
              >
              </Footer>
            )
          case 'img':
            return (
              <ImgComp
                key={child.elementId}
                elementId={child.elementId}
                className={child.className}
                src={child.src}
                style={child.style}
                selectElement={this.props.selectElement}
              />
            )
          case 'div':
            if (child.children) {
              let children3 = [];
              children2 = child.children.map((secondChild, index) => {
                if (secondChild.children) {
                  children3 = secondChild.children.map((thirdChild, index) => {
                    let children4 = [];
                    children4 = thirdChild.children.map((fourthChild, index) => {
                      switch (fourthChild.tag[0]) {
                        case 'h':
                          return (
                            <HComp
                              key={fourthChild.elementId}
                              elementId={fourthChild.elementId}
                              tag={fourthChild.tag}
                              text={fourthChild.text}
                              style={fourthChild.style}
                              selectElement={this.props.selectElement}
                            >
                            </HComp>
                          )
                        case 'p':
                          return (
                            <PComp
                              key={fourthChild.elementId}
                              elementId={fourthChild.elementId}
                              text={fourthChild.text}
                              linkText={fourthChild.linkText}
                              style={fourthChild.style}
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
                    return (
                      <div
                        key={thirdChild.elementId}
                        className={this.isActive(thirdChild.elementId, thirdChild.className)}
                        style={thirdChild.style}
                        onClick={() => this.props.selectElement(thirdChild.elementId, child.style)}
                      >
                        {children4}
                      </div>
                    )
                  })
                }
                return (
                  <div
                    key={secondChild.elementId}
                    className={this.isActive(secondChild.elementId, secondChild.className)}
                    style={secondChild.style}
                    onClick={() => this.props.selectElement(secondChild.elementId, child.style)}
                  >
                    {children3}
                  </div>
                )
              })
              return (
                <div
                  key={child.elementId}
                  className={this.isActive(child.elementId, child.className)}
                  style={child.style}
                >
                  {children2}
                </div>
              )
            } else {
              return (
                <div
                  key={child.elementId}
                  className={this.isActive(child.elementId, child.className)}
                  style={child.style}
                  onClick={() => this.props.selectElement(child.elementId, child.style)}
                >
                </div>
              )
            }
        }
      })
    }
    return (
      <div
          className={this.isActive(this.props.elementId, this.props.className)}
          style={this.props.style}
          // onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
        >
          {children}
      </div>
    )
  }
}

export default DivComp;