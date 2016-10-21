import React, { Component } from 'react';
import { FontMenu, ColorMenu } from '../components';

import { connect } from 'react-redux';

import * as Actions from '../actions';

import { browserHistory } from 'react-router';

function mapStateToProps (state) {
  return { ...state};
}

class CssView extends Component {
  render() {
    return (
      <div
        onClick={this.props.handleClick}
        className="css-contain"
      >
        <h1> &lt; CSS &gt; </h1>
        <div
          className="view-css"
        >
          { this.props.showElementStyles(this.props.elementsReducer._id) }
        </div>
        <div 
          className="footer-cssView"
        >
         <p>Stuck on the bottom</p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(CssView);