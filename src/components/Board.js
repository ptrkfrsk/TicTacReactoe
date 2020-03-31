import React from 'react';
import Field from './Field'

class BoardComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="board">
        <div className="fieldRow">
          <Field />
          <Field />
          <Field />
        </div>
        <div className="fieldRow">
          <Field />
          <Field />
          <Field />
        </div>
        <div className="fieldRow">
          <Field />
          <Field />
          <Field />
        </div>
        <button onClick={()=>alert("Reset")}>Reset</button>
      </div>
    );
  }
}


export default BoardComponent;
