import React, { Component } from 'react';
import Popover from './Popover';

class SavePopover extends Component {
  render() {
    return (
      <Popover
        isActive={this.props.show}
        animationOptions={{duration: 0.2, timing: 'ease-in'}}
      >
        <div
          className="modal-content"
        >
          <div
            className="modal-header"
          >
            <button
              className="savepopover-button"
              onClick={ this.props.click }
            >
              x
            </button>
          </div>
          <div
            className="modal-body"
          >
            <p>Template Saved!</p>
          </div>
          <div
            className="modal-footer"
          >
          </div>
        </div>
      </Popover>
    )
  }
}

export default SavePopover;