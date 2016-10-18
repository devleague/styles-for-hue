import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    this._render();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive) {
      this.modalTarget.className = nextProps.isActive ? 'modal is-active' : 'modal';
    }
  }
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }
  _render() {
    let element = (
      <Provider store={store}>
        <div>
          <div className="modal-background">
        </div>
          {this.props.children}
          </div>
        </Provider>
    );
    ReactDOM.render(element, this.modalTarget);
  }
  render() {
    return null;
  }
}
const MyModal = ({show, click}) => (
  <Modal isActive={show}>
    <div
      className="modal-content"
    >
      <div
        className="modal-header"
      >
      </div>
      <div
        className="modal-body"
      >
        <p>This is a test</p>
      </div>
      <div
        className="modal-footer"
      >
        <button onClick={click}>
          x
        </button>
      </div>
    </div>
  </Modal>
);


export default Modal;