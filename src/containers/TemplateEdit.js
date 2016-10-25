import React, { Component } from 'react';
import { Template , Edit, CssView, NotFound } from './';
import { connect } from 'react-redux';

import * as Actions from '../actions';
import { browserHistory } from 'react-router';

function mapStateToProps (state) {
  return { ...state};
}

class TemplateEdit extends Component {
  constructor (props) {
    super(props)
    this.showElementStyles = this.showElementStyles.bind(this);
  }

  loadSavedTheme () {
    return $.ajax({
      url: `/api/template/${this.props.params.hash}`,
      dataType: 'json',
      success: function (result) {
        if(result === null)  {
          browserHistory.push('NotFound');
        }
      },
      error: function (result) {
        if(result === null) {
          browserHistory.push('NotFound');
        }
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
      this.loadSavedTheme()
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
        return this.props.changeColorPalette(selectedStyle.backgroundColor);
      })
  // loadColorApi () {
  //   return $.ajax({
  //     url: "http://www.colr.org/json/colors/random/8"
  //   });
  // }
  // loadFontApi () {
  //   return $.ajax({
  //     url: "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBifqNWX2_oCeWV1TZcsOZL-Sy1Q15eIIs"
  //   });
  // }
  //   this.loadColorApi()
  //     .then(function (data) {
  //       var colorsObject = JSON.parse(data);
  //       var colorPalette = [];
  //       var palette = [];
  //       var palette2 = [];
  //       colorsObject.colors.map(function (elem, i) {
  //         var colorName = null;
  //         var colorHex = null;
  //         if (i < 4) {
  //           elem.tags.length > 0 ? colorName = elem.tags[0].name : colorName = "NO COLOR";
  //           elem.hex.length > 0 ? colorHex = "#" + elem.hex : colorHex = "#FFF";
  //           return palette.push({label: colorName, value: colorHex});
  //         }
  //         elem.tags.length > 0 ? colorName = elem.tags[0].name : colorName = "NO COLOR";
  //         elem.hex.length > 0 ? colorHex = "#" + elem.hex : colorHex = "#FFF";
  //         return palette2.push({label: colorName, value: colorHex});
  //       })
  //       colorPalette.push(palette, palette2);
  //       return colorPalette;
  //     })
  //     .then((colors) => {
  //       return this.props.getColorPalette(colors)
  //     })
  //   this.loadFontApi()
  //     .then(function (data) {
  //       var fontArr = data.items;
  //       var fontList = [];
  //       fontArr
  //         .filter(function (elem, i) {
  //           return elem.category === "sans-serif" && i < 10;
  //         })
  //         .map(function (elem, i) {
  //           return fontList.push({family: elem.family});
  //         })
  //       return fontList;
  //     })
  //     .then((fonts) => {
  //       return this.props.fontTypes(fonts)
  //     })
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
          />
          { cssComponent }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(TemplateEdit);
