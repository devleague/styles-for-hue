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
            className="modal-top"
          >
            <i className="fa fa-check-circle modal-check" aria-hidden="true"></i>
            <h1>Saved!</h1>
            <p>Your Styles Have Been Saved</p>
          </div>
          <div
            className="modal-bottom"
          >
            <button
              className="savepopover-button"
              onClick={ this.props.click }
            >
              Continue Styling
            </button>
          </div>
        </div>
      </Popover>
    )
  }
}

export default SavePopover;