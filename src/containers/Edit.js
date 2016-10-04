import React, { Component } from 'react';
import { FontMenu, ColorMenu } from '../components';

class Edit extends Component {
  constructor (props) {
    super(props);
  }

  saveStyle(){
    var divStyles = document.getElementsByClassName('divComp')[0].style;
    console.log('div styles:', divStyles);
    $.ajax({
      url: 'http://127.0.0.1:3000/update',
      type: 'POST',
      data: {backgroundColor: divStyles.backgroundColor}
    })
  }

  render() {
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
        <FontMenu
          changeFont={this.props.changeFont}
        />
        <ColorMenu
          changeColor={this.props.changeColor}
        />
        <div>
          <button type="button" onClick={this.saveStyle}> Save </button>
        </div>
      </div>
    )
  }
}

export default Edit;
