import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Popover extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    this._render();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive !== this.props.isActive) {
      this.modalTarget.className = nextProps.isActive ? 'modal is-active' : 'modal';
    } 
  }
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }
  _render() {
    let element = (
      <div>
        <div
          className="modal-background"
        />
        {this.props.children}
      </div>
    );
    ReactDOM.render(element, this.modalTarget);
  }
  render() {
    return null;
  }
}
export default Popover;