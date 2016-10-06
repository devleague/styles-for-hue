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

  render() {
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
        <FontMenu
          changeFont={this.props.changeFont}
        />
        <div
          className="font-size"
        >
          <h3>Font Size</h3>
            <select>
              <option>--px</option>
              <option>12px</option>
              <option>13px</option>
            </select>  
        </div>
        <div
          className="font-weight"
        >
          <h3>Font Weight</h3>
            <select>
              <option> --- </option>
              <option>300</option>
              <option>400</option>
              <option>700</option>
            </select>
        </div>
        <ColorMenu
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
