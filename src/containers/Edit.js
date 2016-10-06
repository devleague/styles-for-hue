import React, { Component } from 'react';
import { FontMenu, ColorMenu } from '../components';

class Edit extends Component {
  constructor (props) {
    super(props);
  }

  saveStyle(){
    var divStyles = document.getElementsByClassName('divComp')[0].style;
    console.log('div', divStyles);
    console.log('div styles:', divStyles.fontFamily);
    $.ajax({
      url: 'http://127.0.0.1:3000/update',
      type: 'POST',
      data: {backgroundColor: divStyles.backgroundColor, fontFamily: divStyles.fontFamily}
    })
  }

  selectElement(container){
  //   var newStyles = {};
  //   var camelCase = {};
  //   var el = document.getSelection();
  //   var styles = el.anchorNode.parentElement.attributes.style.nodeValue;
  //   console.log('styles', styles);
  //   var newPunc = styles.replace(/;/g, ',');
  //   console.log('newPunc', newPunc);
  //   var test = newPunc.split(',');
  //   console.log('test:', test);
  //   test.forEach(function(property) {
  //     var tup = property.split(': ');
  //     newStyles[tup[0]] = tup[1];
  //     var keys = Object.keys(newStyles);
  //     console.log('console keys', keys);
  //   // var camelStyles = keys.split('-').map(function capitalize(part){
  //   //     return part.charAt(0).toUpperCase() + part.slice(1);
  //   //   }).join('');
  //   // camelCase.push(camelStyles);

  //   console.log('newstyles', newStyles);
  //   // console.log(camelCase);
  //   });

    // var newStyles = {};
    // var el = document.getSelection();
    // var styles = el.anchorNode.parentElement.attributes.style.nodeValue;
    // var newPunc = styles.replace(/;/g, ',');
    // var test = newPunc.split(',');
    // test.forEach(function(property) {
    //   var tup = property.split(': ');
    //   newStyles[tup[0]] = tup[1];
    // // var camelCase = [];
    // var camelStyles = tup[0].split('-').map(function capitalize(part){
    //     return part.charAt(0).toUpperCase() + part.slice(1);
    //   }).join('');
    // // camelCase.push(camelStyles);
    // console.log('camel', camelStyles);
    // newStyles[camelStyles] = tup[1];
    // });
    // console.log(newStyles);

    var newStyles = {};
    var el = document.getSelection();
    console.log(el);
    var styles = el.anchorNode.parentElement.attributes.style.nodeValue;
    console.log("styles " + styles);

    var test = styles.split('; ');
    console.log("test"  + test);

    test.forEach(function(property) {
      var tup = property.split(': ');
      //console.log("Line 32" + tup[0]);
      var slice = tup[0].split('-').map(function capitalize(part){
        return part.charAt(0).toUpperCase() + part.slice(1);
      }).join('');
      var good = slice.charAt(0).toLowerCase() + slice.slice(1);
      tup[0] = good;
      newStyles[tup[0]] = tup[1].replace(';', '');
    });
    $.ajax({
      url: 'http://127.0.0.1:3000/update',
      type: 'POST',
      data: newStyles
    });

  }

  render() {
    console.log(this.props);
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
        <FontMenu
          selectedElement={this.props.selectedElement}
          changeFont={this.props.changeFont}
        />
        <ColorMenu
          selectedElement={this.props.selectedElement}
          changeColor={this.props.changeColor}
        />
        <div>
          <button
            className="save"
            type="button"
            onClick={this.saveStyle}
          >
            Save
          </button>
        </div>
        <div>
          <button
            className="export-css"
            type="button"
            onClick={this.selectElement}
          >
            Get Element
          </button>
        </div>
      </div>
    )
  }
}

export default Edit;
