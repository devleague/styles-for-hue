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
        let divTags = elementArray.filter((elem, index) => {
          return elem.type === 'div';
        })
        let pTags = elementArray.filter((elem, index) => {
          return elem.type === 'p';
        })
        return {divTags: divTags, pTags: pTags};
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
          divTags={this.props.divComp.elements.divTags}
          pTags={this.props.divComp.elements.pTags}
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