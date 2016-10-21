import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp, Header, Footer, EditComp } from '../components';
import { connect } from 'react-redux';

import * as Actions from '../actions';

function mapStateToProps (state) {
  return { ...state};
}

class Template extends Component {
  constructor(props) {
    super(props);
  }
  loadTheme () {
    return $.ajax({
      url: '/api/docs',
      dataType: 'json',
    });
  }
  loadStyles () {
    return $.ajax({
      url: '/api/styles',
      dataType: 'json',
    });
  }
  loadSavedTheme () {
    return $.ajax({
      url: '/api/template/' + this.props.elementsReducer._id,
      dataType: 'json',
    });
  }

  componentDidMount() {
    this.loadSavedTheme()
      .then((resultsObject) =>{
      })
      .then((docArray) => {
        return docArray[0];
      })
      .then((doc) => {
        this.props.setElements(doc);
      })
    this.loadTheme()
      .then((docArray) => {
        return docArray[0];
      })
      .then((doc) => {
        this.props.setElements(doc);
      })
    this.loadStyles()
      .then((styles) => {
        var selectedStyle = styles.style1;
        this.props.setStyles(styles);
        this.props.setSelectedStyle(selectedStyle);
        return selectedStyle;
      })
      .then((selectedStyle) => {
        return this.props.getColorPalette(selectedStyle.backgroundColor);
      })
  }

  render() {
    const elements = this.props.elementsReducer.doc.elements.map((elem, index) => {
      switch (elem.tag) {
        case 'div':
          return (
            <DivComp
              key={elem.elementId}
              elementId={elem.elementId}
              className={elem.className}
              children={elem.children}
              style={elem.style}
              selectElement={this.props.selectElement}
              selectedElementId={this.props.elementsReducer.selectedElement.selectedElementId}
            >
            </DivComp>
          )
        default:
          return (
            <div> Document Not Found! </div>
          )
      }
    })
    return (
      <div>
        {elements}
      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(Template);
