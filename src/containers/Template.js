import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp, Header, Footer } from '../components';
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
      <div>
        <Header />
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