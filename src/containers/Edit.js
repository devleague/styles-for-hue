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
    this.update = () => {
      this.editSave(this.props.elements);
    }
  }

  saveStyle(doc){
    return $.ajax({
      url: '/api/styles',
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

  editSave(){
    return $.ajax({
      url: '/doc/' + this.props.docId,
      type: 'PUT',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({doc: this.props.doc})
    })
  }

  exportAsSCSSFile(elements) {
    var text = "";
    var li = "liTags";
    var liStyles = "";
    var liId = "";
    var test = "";
    for (var key in elements) {
      var elementType = key.toString();
      if (elementType === "ulTags") {
      var elementKeySubTypeLi = elements[key][0].subType;
        for (var i = 0; i < elementKeySubTypeLi.liTags.length; i++){
          var elementKeySubTypeLiStyle = JSON.stringify(elementKeySubTypeLi.liTags[i].style);
          var elementKeySubTypeLiId = elementKeySubTypeLi.liTags[i].elementId;
          var liTag = elementKeySubTypeLiId + elementKeySubTypeLiStyle;
          var liSplit = liTag.split(/(?=[A-Z])/);
          liSplit = liSplit[0] + "-" + liSplit[1].toLowerCase();
          liStyles += ".listItem" + liSplit;
        }
      }
      if(elementType != "ulTags"){

        for (var i = 0; i < elements[key].length; i++){
          var elementStyle = (JSON.stringify(elements[key][i].style));
          elementStyle = elementStyle.slice(0, 1) + " \n  " + elementStyle.slice(1);
          elementStyle = elementStyle.slice(0, -2) + elementStyle.slice(-2, -1) + ";\n" + elementStyle.slice(-1);
          var elementId = elements[key][i].elementId;
          if (elementType === "divTags") {
            elementType = ".divComp";
          }
          if (elementType === "pTags") {
            elementType = ".pComp";
          }
          text += elementType + elementId + " " + elementStyle + "\n";
          text = text.replace("backgroundColor", "background-color");
          text = text.replace("fontFamily", "font-family");
        }
      }
    }
    liStyles = liStyles.replace(/\{/g, ' {\n  ');
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
    console.log(text);
    fileSaver.saveAs(blob, filename+".scss");
  };

  render() {
    let fontComponent = null;
    if (this.props.menuShow.showFontMenu === true) {
      //console.log(this.props.showFontMenu);
      fontComponent = (
        <FontMenu
          fontList={this.props.fontList}
          selectedElement={this.props.selectedElement}
          changeFont={this.props.changeFont}
          changeFontColor={this.props.changeFontColor}
        />
      );
    };
    let divComponent = null;
    if (this.props.menuShow.showDivMenu === true) {
      console.log(this.props.showDivMenu);
      divComponent = (
        <ColorMenu
          colorPalette={this.props.colorPalette}
          selectedElement={this.props.selectedElement}
          changeColor={this.props.changeColor}
          changeDivWidth={this.props.divWidth}
        />
      );
    };
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
          <button
            className="view-css"
            onClick={ ()=> {
              if (this.props.sideBar.showCss === false) {
                this.props.showCss(true);
              } else {
                this.props.showCss(false);
              }
            }
          }>
            &lt;CSS&gt;
          </button>
        <div
          className="font-menu">
          <button
            className="font-button"
            onClick={ () => {
              if (this.props.menuShow.showFontMenu === false) {
                this.props.showFontMenu(true);
              } else {
                this.props.showFontMenu(false);
              }
            }
          }>
            <i className="fa fa-caret-down"></i>
          </button>
          <h3>Font</h3>
          { fontComponent }
        </div>
        <div
          className="div-menu"
        >
          <span>
            <button
              className="div-button"
              onClick={ () => {
                if (this.props.menuShow.showDivMenu === false) {
                  this.props.showDivMenu(true);
                } else {
                  this.props.showDivMenu(false);
                }
              }}
            >
              <i className="fa fa-caret-down"></i>
            </button>
            <h3>Div</h3>
          </span>
          <div>
            { divComponent }
          </div>
        </div>
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

        <div>
          <button
            className="update"
            type="submit"
            onClick={this.update}
          >
            Update Template
          </button>
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