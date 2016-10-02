import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp, Header, Footer, EditComp } from '../components';
import { connect } from 'react-redux';

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
        <ImgComp />
        <DivComp
          style={this.props.style}
        />
        <PComp />
        <ListComp />
        <Footer />
      </div>
    )
  }
}

export default Template;
