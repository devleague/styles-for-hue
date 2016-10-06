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
    this.state = {};
    this.showElementStyles = this.showElementStyles.bind(this);
    this.selectElementAndShowStyles = this.selectElementAndShowStyles.bind(this);
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

  selectElementAndShowStyles(elementId) {
    this.props.selectElement(elementId);
    this.showElementStyles();
  }

  showElementStyles(container){
    console.log("testing");
    var newStyles = {};
    var el = document.getSelection();
    // console.log(el);
    var styles = el.anchorNode.parentElement.attributes.style.nodeValue;
    // console.log(el.anchorNode.parentElement.className);
    // console.log(el.anchorNode.data)
    // console.log("STYLES OBJECT" + styles);

    this.setState({styles: styles});
  }

  render() {
    //console.log(this.props.elementsReducer.elements.imgTags);
    return(
      <div
        className="template-edit-container"
      >
        <Template
          divTags={this.props.elementsReducer.elements.divTags}
          pTags={this.props.elementsReducer.elements.pTags}
          imgTags={this.props.elementsReducer.elements.imgTags}
          selectElement={this.selectElementAndShowStyles}
          showElementStyles={this.showElementStyles}
          styles={this.state.styles}
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