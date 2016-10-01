import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp, Header, Footer } from '../components';

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {backgroundColor: 'red'};
  }
  render() {
    return (
      <div>
        <Header />
        <ImgComp />
        <DivComp
          backgroundColor={this.state.backgroundColor}
        />
        <PComp />
        <ListComp />
        <Footer />
      </div>
    )
  }
}

export default Template;