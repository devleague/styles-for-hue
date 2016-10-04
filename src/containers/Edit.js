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
    console.log('div', divStyles);
    console.log('div styles:', divStyles.fontFamily);
    $.ajax({
      url: 'http://127.0.0.1:3000/update',
      type: 'POST',
      data: {backgroundColor: divStyles.backgroundColor, fontFamily: divStyles.fontFamily}
    })
  }

  selectElement(container){
    var newStyles = {}, cart =[];
    var el = document.getSelection();
    var styles = el.anchorNode.parentElement.attributes.style.nodeValue;
    var newPunc = styles.replace(/;/g, ',');
    console.log('new punc', newPunc);
    newStyles.style = {newPunc};
    cart.push({newStyles: newStyles});
    console.log('newstyles', newStyles);
    console.log('test');

    // var slice = styles.split('-').map(function capitalize(part){
    //     return part.charAt(0).toUpperCase() + part.slice(1);
    //   }).join('');
    // newStyles.push(slice);

    // console.log('styles', newStyles);
  }

  render () {
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
        <div>
          <h3>Pick Your Font:</h3>
            <select id="fontMenu" onChange={() => this.props.changeFont(this.changeFont())}>
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
          <button type="button" onClick={this.saveStyle}> Save </button>
        </div>
        <div>
          <button type="button" onClick={this.selectElement}> Get Element </button>
        </div>
      </div>
    )
  }
}

export default Edit;
