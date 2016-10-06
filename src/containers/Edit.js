import React, { Component } from 'react';
import { FontMenu, ColorMenu } from '../components';

class Edit extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.showElementStyles = this.showElementStyles.bind(this);
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

  showElementStyles(container){
    var newStyles = {};
    var el = document.getSelection();
    console.log(el);
    var styles = el.anchorNode.parentElement.attributes.style.nodeValue;
    console.log(el.anchorNode.parentElement.className);
    console.log(el.anchorNode.data)
    console.log(styles);

    // var test = styles.split('; ');
    // console.log("test"  + test);

    // test.forEach(function(property) {
    //   var tup = property.split(': ');
    //   //console.log("Line 32" + tup[0]);
    //   var slice = tup[0].split('-').map(function capitalize(part){
    //     return part.charAt(0).toUpperCase() + part.slice(1);
    //   }).join('');
    //   var good = slice.charAt(0).toLowerCase() + slice.slice(1);
    //   tup[0] = good;
    //   newStyles[tup[0]] = tup[1].replace(';', '');
    // });
    //change to object
    //console.log(newStyles);
    this.setState({styles: styles});
  }

  render() {
    {this.props}
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
          colorPalette={this.props.colorPalette}
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
        <div>
          <button
            className="showCSS"
            type="button"
            onClick={this.showElementStyles}
          >
            Show Element Style
          </button>
        </div>
        <div>
          <div
            onChange={this.showElementStyles}
          >
          {this.state.styles}
          </div>
        </div>
      </div>
    )
  }
}

export default Edit;