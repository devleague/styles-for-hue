import React, { Component } from 'react';
import { Template , Edit } from './';
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
  loadTheme () {
    return $.ajax({
      url: 'http://localhost:3000/api/styles',
      dataType: 'json',
    });
  }
  loadColorApi () {
      return $.ajax({
      url : "http://www.colourlovers.com/api/colors",
      data: {
        format: 'json',
        numResults: 5,
        resultOffset: 2
      },
      dataType:"jsonp",
      xhrFields:{'withCredentials': true},
      jsonp: 'jsonCallback',
    })
  }
  componentDidMount () {
    this.loadColorApi()
      .then(
        function(data){
          var colorPalette = [];
          data.map(function (elem, i) {
            return colorPalette.push({label: elem.title, value: "#" + elem.hex});
        })
        return colorPalette;
      })
      .then((colors) => {
        return this.props.getColorPalette(colors)
      })

  //   this.props.getColorPalette([
  //   {
  //     label: "blue",
  //     value: "#0000FF",
  //   },
  //   {
  //     label: "red",
  //     value: "#FF0000",
  //   },
  //   {
  //     label: "green",
  //     value: "#00FF00",
  //   }
  // ]);
    this.props.fontTypes();
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
        let ulTags = elementArray.filter((elem, index) => {
          return elem.type === 'ul';
        });
        return {
          divTags: divTags,
          pTags: pTags,
          imgTags: imgTags,
          ulTags: ulTags
        };
      })
      .then((elementObj) => {
        this.props.setElements(elementObj);
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
    return(
      <div
        className="template-edit-container"
      >
        <Template
          divTags={this.props.elementsReducer.elements.divTags}
          pTags={this.props.elementsReducer.elements.pTags}
          imgTags={this.props.elementsReducer.elements.imgTags}
          ulTags={this.props.elementsReducer.elements.ulTags}
          selectElement={this.props.selectElement}
          selectedElementStyle={this.props.elementsReducer.selectedElement.selectedStyle}
          showElementStyles={this.showElementStyles}
        />
        <Edit
          colorPalette={this.props.colors.colorPalette}
          fontList={this.props.fonts.items}
          changeColor={this.props.changeColor}
          changeFont={this.props.changeFont}
          selectedElement={this.props.elementsReducer.selectedElement.selectedElementId}
          selectedElementStyle={this.props.elementsReducer.selectedElement.selectedStyle}
          elements={this.props.elementsReducer.elements}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(TemplateEdit);
