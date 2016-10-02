import React, { Component } from 'react';

class EditComp extends Component {
  render () {
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
        <div>
          <h3>Pick Your Font:</h3>
            <select>
              <option value="times">Times New Roman</option>
              <option value="arial">Arial</option>
            </select>
        </div>
        <div>
          <h3>Pick Your Color:</h3>
            <select>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
            </select>
        </div>
      </div>
    )
  }
}

export default EditComp;