import React, { Component } from 'react';
import { Template , Edit } from './';
import { connect } from 'react-redux';

import { changeColor, changeFont, setElements, selectElement } from '../actions';

function mapStateToProps (state) {
  return { ...state};
}

class TemplateEdit extends Component {
  constructor (props) {
    super(props);
  }
  loadTheme () {
    return $.ajax({
      url: 'http://localhost:3000/api/styles',
      dataType: 'json',
    });
  }
  componentDidMount () {
    this.loadTheme()
      .then((elementArray) => {
        let divs = elementArray.filter((elem, index) => {
          return elem.type === 'div';
        })
        let ps = elementArray.filter((elem, index) => {
          return elem.type === 'p';
        })
        return {divs: divs, ps: ps};
      })
      .then((elementObj) => {
        this.props.setElements(elementObj);
      })
  }
  render() {
    return(
      <div
        className="template-edit-container"
      >
        <Template
          divs={this.props.divComp.elements.divs}
          ps={this.props.divComp.elements.ps}
          selectElement={this.props.selectElement}
        />
        <Edit
          changeColor={this.props.changeColor}
          changeFont={this.props.changeFont}
          selectedElement={this.props.divComp.selectedElementId}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  changeColor, changeFont, setElements, selectElement
})(TemplateEdit);