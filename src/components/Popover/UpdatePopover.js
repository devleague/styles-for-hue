import React, { Component } from 'react';
import Popover from './Popover';

class UpdatePopover extends Component {
  render() {
    return (
      <Popover
        isActive={this.props.reveal}
      >
        <div
          className="modal-content"
        >
          <div
            className="modal-header"
          >
            <button
              className="savepopover-button"
              onClick={this.props.update}
            >
            x
            </button>
            <div
              className="modal-body"
            >
              <p>Template Updated!</p>
            </div>
            <div
              className="modal-footer"
            >
            </div>
          </div>
        </div>
      </Popover>
    )
  }
}

export default UpdatePopover;