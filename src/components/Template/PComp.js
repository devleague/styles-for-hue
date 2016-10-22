import React, { Component } from 'react';

class PComp extends Component {
  isActive () {
    if (this.props.elementId === this.props.selectedElementId) {
      return `pComp${this.props.elementId} selected`
    }
    return `pComp${this.props.elementId}`;
  }

  clickHandler(event, elementId) {
    let element = document.getElementById(elementId);
    let templateArray = $(element).parents();
    templateArray = templateArray.map((index, elem) => {
      if (element.className.indexOf('selected') === -1) {
        this.props.selectElement(this.props.elementId, this.props.style);
        return event.stopPropagation();
      }
    })
  }

  render() {
    if (this.props.linkText) {
      return (
        <p
          className={this.isActive()}
          style={this.props.style}
          onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
        >{this.props.text} <a href="#">{this.props.linkText}</a>
        </p>
      )
    }
    return (
      <p
        id={this.props.elementId}
        className={this.isActive()}
        style={this.props.style}
        onClick={(event) => this.clickHandler(event, this.props.elementId)}
      >{this.props.text}
      </p>
    )
  }
}

export default PComp;