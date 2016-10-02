import React, { Component } from 'react';
import { Template , Edit } from './';
import { connect } from 'react-redux';

import { changeColor, changeFont, setInitialState } from '../actions';

function mapStateToProps (state) {
  return { ...state};
}

class TemplateEdit extends Component {
  render() {
    return(
      <div>
        <Template style={this.props.divComp}/>
        <Edit
          changeColor={this.props.changeColor}
          changeFont={this.props.changeFont}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  changeColor, changeFont
})(TemplateEdit);