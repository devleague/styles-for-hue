import React, { Component } from 'react';
import { FontMenu, ColorMenu } from '../components';

import { connect } from 'react-redux';

import * as Actions from '../actions';

function mapStateToProps (state) {
  return { ...state};
}

var fileSaver = require('file-saver');


class Edit extends Component {
  constructor (props) {
    super(props);
    this.save = () => {
      this.saveStyle(this.props.elements);
    }
  }

  saveStyle(doc){
    return $.ajax({
      url: '/update',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({doc: doc})
    })
    .then((data) => {
      this.props.newDoc(data._id);
      this.props.showSave('visible');
    })
    .then(() => {
      setTimeout(() => {
        this.props.showSave('hidden');
      }, 3000);
    })
  }

  exportAsSCSSFile(elements) {
    var text = "";
    var li = "liTags";
    var liStyles = "";
    //console.log(elements.divTags[0]._id);
    for (var key in elements) {
      var elementType = key.toString();
      if (elementType === "ulTags") {
        for (var i = 0; i < elements[key][0].subType.length; i++) {
          liStyles += JSON.stringify(elements[key][0].subType[i].style) + "\n";
          var liSplit = liStyles.split(/(?=[A-Z])/);
          liSplit = liSplit[0] + "-" + liSplit[1].toLowerCase();
          liStyles = liSplit;
        }
      }
      for (var i = 0; i < elements[key].length; i++){
        var elementStyle = (JSON.stringify(elements[key][i].style));
        // elementStyle = elementStyle.replace(/,/g, ';\n  ');
        // console.log(elementStyle);
        // var elemSplit = elementStyle.split(/(?=[A-Z])/);
        // console.log(elemSplit);
        // elemSplit = elemSplit[0] + "-" + elemSplit[1].toLowerCase();

        // elementStyle = elemSplit;
        elementStyle = elementStyle.slice(0, 1) + " \n  " + elementStyle.slice(1);
        elementStyle = elementStyle.slice(0, -2) + elementStyle.slice(-2, -1) + ";\n" + elementStyle.slice(-1);
        text += elementType + " " + elementStyle + "\n";
      }
    }
    liStyles = liStyles.replace(/\{/g, 'liStyles {\n  ');
    liStyles = liStyles.replace(/\}/g, ';\n}\n');
    text += liStyles;
    text = text.replace(/['"]+/g, '');
    text = text.replace(/,/g, ';\n  ');
    text = text.replace(/:/g, ': ');

    var filename = document.getElementById("input-fileName").value;
    if (filename === "") {
      filename = new Date().toTimeString();
    }
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    //console.log(text);
    //fileSaver.saveAs(blob, filename+".scss");
  };

  render() {
    return (
      <div
        onClick={this.props.handleClick}
        className="editColumn"
      >
        <h1> Edit </h1>
        <button
          onClick={ ()=> {
            if (this.props.sideBar.showCss === false) {
              this.props.showCss(true);
            } else {
              this.props.showCss(false);
            }
          }
        }>
          View CSS
        </button>
        <FontMenu
          fontList={this.props.fontList}
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
            type="submit"
            onClick={this.save}
          >
            Save Template
          </button>
          <div style={this.props.savePopup}>
            Saved!
          </div>
        </div>
        <form>
          <div>
            <label>File name</label>
            <input type="text"
              id="input-fileName"
              placeholder="Enter file name"></input>
          </div>
          <button
            type="submit"
            onClick={()=> this.exportAsSCSSFile(this.props.elements)}>Save to file</button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(Edit);
