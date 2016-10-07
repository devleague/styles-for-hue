import React, { Component } from 'react';
import { FontMenu, ColorMenu } from '../components';

class Edit extends Component {
  constructor (props) {
    super(props);
  }

  saveStyle(doc){
    console.log('props', this.props);
    $.ajax({
      url: '/update',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({doc: doc}),
    });
  }

  render() {
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
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
            type="button"
            onClick={this.saveStyle(this.props.elements)}
          >
            Save
          </button>
        </div>
      </div>
    )
  }
}

export default Edit;