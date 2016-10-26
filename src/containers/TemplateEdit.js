import React, { Component } from 'react';
import { Template , Edit, CssView, NotFound } from './';
import { connect } from 'react-redux';

import * as Actions from '../actions';
import { Router, Route, browserHistory } from 'react-router';

function mapStateToProps (state) {
  return { ...state};
}

class TemplateEdit extends Component {
  constructor (props) {
    super(props)
    this.showElementStyles = this.showElementStyles.bind(this);
  }

  loadSavedTheme (hash) {
    return $.ajax({
      url: `/api/template/${hash}`,
      dataType: 'json',
      success: function (result) {
        if(result === null)  {
          browserHistory.push('NotFound')
        }
      },
      error: function (result) {
        if(result === null) {
          browserHistory.push('NotFound')
        }
      }
    })
    .then((result) => {
      if(result === null){
        setTimeout(() => {
          browserHistory.push('/template');
        }, 5000)
      } else {
        return $.ajax({
          url: `/api/template/${hash}`,
          dataType: 'json'
        })
      }
    });
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

  componentDidMount() {
    if (this.props.params.hash) {
      this.loadSavedTheme(this.props.params.hash)
        .then((resultsObject) =>{
          return resultsObject;
        })
        .then((doc) => {
          this.props.setElements(doc);
        })
    } else {
      this.loadTheme()
        .then((docObj) => {
          return docObj;
        })
        .then((doc) => {
          this.props.setElements(doc);
        })
    }
    this.loadStyles()
      .then((styles) => {
        let selectedStyle = styles.style1;
        this.props.setSelectedStyle(selectedStyle);
        this.props.fontTypes(styles.fontFamily);
        let colorPalette = [];
        for (let style in styles) {
          if (style.indexOf('style') !== -1) {
            colorPalette.push(styles[style]);
          }
        }
        this.props.setStyles(styles);
        this.props.getColorPalette(colorPalette);
        return selectedStyle;
      })
      .then((selectedStyle) => {
        this.props.setButtonColors(selectedStyle.backgroundColor[0]);
        return this.props.changeColorPalette(selectedStyle.backgroundColor);
      })
  }

  showElementStyles(styles){
    let stylesArray = [];
    for (let style in styles) {
      stylesArray.push(`${style}: ${styles[style]},  `);
    }
    return stylesArray;
  }

  render() {
    let cssComponent = null;
    if (this.props.sideBar.showCss === true) {
      cssComponent = <CssView />;
    };
    return(
      <div
        className="template-edit-container"
      >
        <Template
          hash={this.props.params.hash}
          // elements={this.props.elementsReducer.doc.elements}
          // selectElement={this.props.selectElement}
          // selectedElementId={this.props.elementsReducer.selectedElement.selectedElementId}
          // selectedElementStyle={this.props.elementsReducer.selectedElement.selectedStyle}
        />
        <div
          className="edit-views-container"
        >
          <Edit
            showElementStyles={this.showElementStyles}
            hash={this.props.params.hash}
            loadSavedTheme={this.loadSavedTheme}
          />
          { cssComponent }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(TemplateEdit);
