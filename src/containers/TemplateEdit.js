import React, { Component } from 'react';
import { Template , Edit } from './';
import { connect } from 'react-redux';

import { changeColor, changeFont, setDivStyle } from '../actions';

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
      .then((style) => {
        this.props.setDivStyle(style);
      });
  }
  render() {
    return(
      <div
        className="template-edit-container"
      >
        <Template
          style={this.props.divComp}
        />
        <Edit
          changeColor={this.props.changeColor}
          changeFont={this.props.changeFont}
        />
      </div>
    )
  }
}

console.log('reducers', changeFont);

export default connect(mapStateToProps, {
  changeColor, changeFont, setDivStyle
})(TemplateEdit);