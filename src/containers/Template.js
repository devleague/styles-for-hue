import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp, Header, Footer, EditComp } from '../components';
import { connect } from 'react-redux';

import { changeColor } from '../actions';

function mapStateToProps (state) {
  return { ...state};
}

class Template extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="template-one"
      >
        <Header />
        <EditComp />
        <ImgComp />
        <DivComp
          style={this.props.divComp}
        />
        <PComp />
        <ListComp />
        <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  changeColor
})(Template);
