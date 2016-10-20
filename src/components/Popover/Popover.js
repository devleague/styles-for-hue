import React, { Component } from 'react';
import TestPopover from './TestPopover';

class Popover extends Component {
  render() {
    return (
      <TestPopover
        isActive={this.props.show}
      >
        <div
          className="modal-content"
        >
          <div
            className="modal-header"
          >
            Test THIS
          </div>
          <div
            className="modal-body"
          >
            <p>OMG ITS A MODAL</p>
          </div>
          <div
            className="modal-footer"
          >
            <button
              onClick={this.props.click}
            >
              x
            </button>
          </div>
        </div>
      </TestPopover>
    )
  }
}

export default Popover;