import React, { Component } from 'react';
import { Template , Edit, CssView } from './';
import { connect } from 'react-redux';

import * as Actions from '../actions';

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
          console.log(doc);
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
        var selectedStyle = styles.style1;
        this.props.setStyles(styles);
        this.props.setSelectedStyle(selectedStyle);
        return selectedStyle;
      })
      .then((selectedStyle) => {
        this.props.fontTypes(selectedStyle.fontFamily);
        return this.props.getColorPalette(selectedStyle.backgroundColor);
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
        <div className="template-container">
          <Template
            hash={this.props.params.hash}
            // elements={this.props.elementsReducer.doc.elements}
            // selectElement={this.props.selectElement}
            // selectedElementId={this.props.elementsReducer.selectedElement.selectedElementId}
            // selectedElementStyle={this.props.elementsReducer.selectedElement.selectedStyle}
          />
        </div>
        <div
          className="views"
        >
          <Edit
            showElementStyles={this.showElementStyles}
          />
          { cssComponent }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(TemplateEdit);
