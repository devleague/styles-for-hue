import React, { Component } from 'react';


class Edit extends Component {
  constructor (props) {
    super(props);
  }
  changeFont() {
      var font = document.getElementById("fontMenu").value;
      return font;
  }
  changeColor() {
      var color = document.getElementById("colorMenu").value;
      return color;
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

  render () {
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
        <div>
          <h3>Font Type</h3>
            <select id="fontMenu" onChange={() => this.props.changeFont(this.changeFont())}>
              <option>Choose Your Font</option>
              <option value="times">Times New Roman</option>
              <option value="arial">Arial</option>
            </select>
        </div>
        <div>
          <h3>Pick Your Color:</h3>
            <select id="colorMenu" onChange={() => this.props.changeColor(this.changeColor())}>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
            </select>
        </div>
        <div>
          <button type="button">Export CSS</button>
        </div>
        <div>
          <button type="button" onClick={this.saveStyle}> Save </button>
        </div>
      </div>
    )
  }
}

export default Edit;
