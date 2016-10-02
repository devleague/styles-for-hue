import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp, Header, Footer, EditComp } from '../components';
import { connect } from 'react-redux';

const elementArray = [
  {
    id: 1,
    type: 'div',
    style: {
      backgroundColor: 'blue',
      fontFamily: 'sans-serif',
      display: 'inline-block'
    }
  },
  {
    id: 2,
    type: 'p',
    style: {
      backgroundColor: 'green',
      fontFamily: 'arial',
    }
  },
  {
    id: 3,
    type: 'img',
    style: {
      border: '15px black solid'
    }
  },
  {
    id: 4,
    type: 'ul',
    style: {
      color: 'red'
    }
  }
]


function loadMongo () {
  $.ajax({
    url: 'http://localhost:3000/api/styles',
    dataType: 'json',
    success: (mongoStyles) => {
      // this.setState({style:mongoStyles})
      // console.log(mongoStyles);
      return JSON.parse(JSON.stringify(mongoStyles));
    }
  })
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
