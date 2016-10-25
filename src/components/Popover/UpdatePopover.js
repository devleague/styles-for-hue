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
          <button
              className="close-button"
              onClick={this.props.update}
            >
            <i className="fa fa-times modal-close" aria-hidden="true"></i>
           </button>
          <div
            className="modal-top"
          >
            <i className="fa fa-check-circle modal-check" aria-hidden="true"></i>
            <h1>Updated!</h1>
            <p>Your Styles Have Been Updated</p>
          </div>
          <div
            className="modal-bottom"
          >
            <button
              className="savepopover-button"
              onClick={this.props.update}
            >
            Continue Styling
            </button>
          </div>
        </div>
      </Popover>
    )
  }
}

export default UpdatePopover;