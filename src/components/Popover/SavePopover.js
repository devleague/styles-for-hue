import React, { Component } from 'react';
import Popover from './Popover';

class SavePopover extends Component {
  render() {
    return (
      <Popover
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
              onClick={ this.props.click }
            >
              x
            </button>
          </div>
        </div>
      </Popover>
    )
  }
}

export default SavePopover;