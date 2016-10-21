import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp, Header, Footer, EditComp } from '../components';
import { connect } from 'react-redux';

import * as Actions from '../actions';

function mapStateToProps (state) {
  return { ...state};
}

class Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const elements = this.props.elementsReducer.doc.elements.map((elem, index) => {
      switch (elem.tag) {
        case 'div':
          return (
            <DivComp
              key={elem.elementId}
              elementId={elem.elementId}
              className={elem.className}
              children={elem.children}
              style={elem.style}
              selectElement={this.props.selectElement}
              selectedElementId={this.props.elementsReducer.selectedElement.selectedElementId}
            >
            </DivComp>
          )
        default:
          return (
            <div> Document Not Found! </div>
          )
      }
    })
    return (
      <div>
        {elements}
      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(Template);
