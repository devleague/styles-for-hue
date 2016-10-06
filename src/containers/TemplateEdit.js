import React, { Component } from 'react';
import { Template , Edit } from './';
import { connect } from 'react-redux';

import { changeColor, changeFont, setDivs, selectDiv } from '../actions';

function mapStateToProps (state) {
  return { ...state};
}

class TemplateEdit extends Component {
  constructor (props) {
    super(props);
  }
  loadTheme () {
    return $.ajax({
      url: 'http://localhost:3000/api/styles',
      dataType: 'json',
    });
  }
  componentDidMount () {
    this.loadTheme()
      .then((elementArray) => {
        let div = elementArray.filter((elem, index) => {
          return elem.type === 'div';
        })
        return div;
      })
      .then((div) => {
        return this.props.setDivs(div);
      })
  }
  render() {
    console.log(this.props);
    return(
      <div
        className="template-edit-container"
      >
        <Template
          divs={this.props.divComp.divs}
          selectDiv={this.props.selectDiv}
        />
        <Edit
          changeColor={this.props.changeColor}
          changeFont={this.props.changeFont}
          selectedElement={this.props.divComp.selectedElementId}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  changeColor, changeFont, setDivs, selectDiv
})(TemplateEdit);