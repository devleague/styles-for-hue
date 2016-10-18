import React, { Component } from 'react';
import { FontMenu, ColorMenu } from '../components';

import { connect } from 'react-redux';

import * as Actions from '../actions';

import { browserHistory } from 'react-router'

function mapStateToProps (state) {
  return { ...state};
}

var fileSaver = require('file-saver');


class Edit extends Component {
  constructor (props) {
    super(props);
    this.save = () => {
      this.saveStyle(this.props.elementsReducer.doc.elements);
    }
    this.update = () => {
      this.editSave(this.props.elementsReducer.doc.elements);
    }
  }

  saveStyle(){
    return $.ajax({
      url: '/api/usertemplate',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({template: this.props.elementsReducer.doc.elements})
    })
    .then((data) => {
      console.log('save style data', data);
      this.props.newDoc(data._id);
      this.props.showSave('visible');
      browserHistory.push('/template/' + data._id);
    })
    .then(() => {
      setTimeout(() => {
        this.props.showSave('hidden');
      }, 3000);
    })
  }

  editSave(){
    console.log('Updated!');
    return $.ajax({
      url: '/template/' + this.props.docId,
      type: 'PUT',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({template: this.props.elementsReducer.doc.elements})
    })
    .then(() => {
      this.props.showUpdate('hidden');
    }, 3000);
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
          elementKeySubTypeLiStyle = elementKeySubTypeLiStyle.replace("backgroundColor", "background-color");
          elementKeySubTypeLiStyle = elementKeySubTypeLiStyle.replace("fontFamily", "font-family");
          elementKeySubTypeLiStyle = elementKeySubTypeLiStyle.replace("fontSize", "font-size");
          var elementKeySubTypeLiId = elementKeySubTypeLi.liTags[i].elementId;
          var liTag = elementKeySubTypeLiId + elementKeySubTypeLiStyle;
          liStyles += ".listItem" + liTag;
        }
      }
      if(elementType != "ulTags"){
        for (var i = 0; i < elements[key].length; i++){
          var elementStyle = (JSON.stringify(elements[key][i].style));
          elementStyle = elementStyle.replace("backgroundColor", "background-color");
          elementStyle = elementStyle.replace("fontFamily", "font-family");
          elementStyle = elementStyle.replace("fontSize", "font-size");
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
    //console.log(text);
    fileSaver.saveAs(blob, filename+".css");
  };

  exportHTML(){
    // var all = document.getElementsByTagName("*");
    // console.log(all);
    //$("*").each(function(i,e){console.log(i+' '+e)});
    var output = $("html").html();
    //console.log(output);
    var re = /<!-- react-text/gi;
    var test = output.replace(re, "\n<!-- react-text");
    var end = /<!-- \/react-text -->/g;
    var test2 = test.replace(end, "<!-- /react-text -->\n");
    var text = '<!DOCTYPE html>\n<html lang="en">\n' + test2 + '\n</html>';
    //console.log("HI2\n" + test2);
    var filename = document.getElementById("input-fileName").value;
    if (filename === "") {
      filename = new Date().toTimeString();
    }
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    console.log(text);
    fileSaver.saveAs(blob, filename+".html");
  }

  render() {
    let fontComponentOpenClass = " ";
    if(this.props.menuShow.showFontMenu === true){
      fontComponentOpenClass = "open";
    };
    let divComponentOpenClass = " ";
    if(this.props.menuShow.showDivMenu === true){
      divComponentOpenClass = "open";
    };
    let fontComponent = null;
    if (this.props.menuShow.showFontMenu === true) {
      fontComponent = (
        <FontMenu
          fontList={this.props.fonts.items}
          selectedElement={this.props.selectedElement}
          changeFont={this.props.changeFont}
          changeFontColor={this.props.changeFontColor}
          changeFontSize={this.props.changeFontSize}
        />
      );
    };
    let divComponent = null;
    if (this.props.menuShow.showDivMenu === true) {
      divComponent = (
        <ColorMenu
          colorPalette={this.props.colors.colorPalette}
          selectedElement={this.props.selectedElement}
          elements={this.props.elementsReducer.doc.elements}
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
            id="button-show"
            className="font-button"
            onClick={ () => {
              if (this.props.menuShow.showFontMenu === false) {
                this.props.showFontMenu(true);
              } else {
                this.props.showFontMenu(false);
              }
            }
          }>
            <i id="icon" className={"fa fa-caret-right" + " " +
            fontComponentOpenClass}></i>
          </button>
          <h3>Font</h3>
          { fontComponent }
        </div>
        <div
          className="div-menu"
        >
          <span>
            <button
              id="button-show"
              className="div-button"
              onClick={ () => {
                if (this.props.menuShow.showDivMenu === false) {
                  this.props.showDivMenu(true);
                } else {
                  this.props.showDivMenu(false);
                }
              }}
            >
              <i id="icon" className={"fa fa-caret-right" + " " + divComponentOpenClass}></i>
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
          <div
            className="save-popup" 
          >
            <div
              className="save-content"
              style={this.props.savePopup}
            >
              <span
                className="exit"
              >
                x
              </span>
              <p>
                Saved!
              </p>
            </div>
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
          <div>
            Updated!
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
            className="save"
            type="submit"
            onClick={()=> this.exportAsSCSSFile(this.props.elementsReducer.doc.elements)}>Save to file</button>
        </form>
        <form>
          <div>
            <label>File name</label>
            <input type="text"
              id="input-fileName"
              placeholder="Enter file name"></input>
          </div>
          <button
            className="save"
            type="submit"
            onClick={this.exportHTML}>Save HTML</button>
        </form>
        <div className="current-styles-container">
          <h6>Current Element Styles</h6>
          <div className="current-elem-styles"
          >
            {this.props.showElementStyles(this.props.elementsReducer.selectedElement.selectedStyle)}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(Edit);