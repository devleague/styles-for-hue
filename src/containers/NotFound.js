import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div
        className="content-container"
      >
        <div
          className="row"
        >
          <div
            className="flex-nowrap-container"
          >
            <h1>404 PAGE NOT FOUND</h1>
            <br/>
            <p>Sorry, the page that your looking for cannot be found.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;