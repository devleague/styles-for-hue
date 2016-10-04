import React, { Component } from 'react';
import { Template , Edit } from './';
import { connect } from 'react-redux';

import { changeColor, changeFont, setDivs } from '../actions';

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
    return(
      <div
        className="template-edit-container"
      >
        <Template
          divs={this.props.divComp.divs}
        />
        <Edit
          changeColor={this.props.changeColor}
          changeFont={this.props.changeFont}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  changeColor, changeFont, setDivs
})(TemplateEdit);