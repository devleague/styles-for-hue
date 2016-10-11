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
    this.state = {
      showDiv: false
    }
  }
  onClick(e){
    e.preventDefault();
    this.setState({showDiv: this.state.showDiv ? false : true})
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
    for (var key in elements) {
      var elementType = key.toString();
      if (elementType === "ulTags") {
        for (var i = 0; i < elements[key][0].subType.length; i++) {
          liStyles += "liTags " + JSON.stringify(elements[key][0].subType[i].style) + "\n";

        }
      }
      for (var i = 0; i < elements[key].length; i++){
        var elementStyle = (JSON.stringify(elements[key][i].style));
        text += elementType + " " + elementStyle + "\n";
      }
    }
    text += liStyles;
    text = text.replace(/['"]+/g, '');
    text = text.replace(/,/g, ';\n  ');

    var filename = document.getElementById("input-fileName").value;
    if (filename === "") {
      filename = new Date().toTimeString();
    }
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    fileSaver.saveAs(blob, filename+".scss");
  };

  render() {
    return (
      <div
        onClick={this.props.handleClick}
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
          <span>
            <button
              className="font-button"
              onClick={
                this.onClick.bind(this)
            }>
              <i className="fa fa-caret-down"></i>
            </button>
            <h3>Font</h3>
          </span>
          <div>
            <FontMenu
              fontList={this.props.fontList}
              selectedElement={this.props.selectedElement}
              changeFont={this.props.changeFont}
            />
          </div>
        </div>
        <div
          className="div-menu"
        >
          <span>
            <button
              className="div-button"
              onClick={ () => {
                if (this.props.menuShow.showMenu === false) {
                  this.props.showMenu(true);
                } else {
                  this.props.showMenu(false);
                }
              }
            }>
              <i className="fa fa-caret-down"></i>
            </button>
            <h3>Div</h3>
          </span>
          <div>
            <ColorMenu
              colorPalette={this.props.colorPalette}
              selectedElement={this.props.selectedElement}
              changeColor={this.props.changeColor}
            />
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
