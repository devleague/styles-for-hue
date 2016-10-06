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
        });
        let pTags = elementArray.filter((elem, index) => {
          return elem.type === 'p';
        });
        let imgTags = elementArray.filter((elem, index) => {
          return elem.type === 'img';
        });
        return {
          divTags: divTags,
          pTags: pTags,
          imgTags: imgTags
        };
      })
      .then((elementObj) => {
        this.props.setElements(elementObj);
      })
  }
  render() {
    console.log(this.props.elementsReducer.elements.imgTags);
    return(
      <div
        className="template-edit-container"
      >
        <Template
          divTags={this.props.elementsReducer.elements.divTags}
          pTags={this.props.elementsReducer.elements.pTags}
          imgTags={this.props.elementsReducer.elements.imgTags}
          selectElement={this.props.selectElement}
        />
        <Edit
          colorPalette={this.props.colors.colorPalette}
          changeColor={this.props.changeColor}
          changeFont={this.props.changeFont}
          selectedElement={this.props.elementsReducer.selectedElementId}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  changeColor, changeFont, setElements, selectElement
})(TemplateEdit);