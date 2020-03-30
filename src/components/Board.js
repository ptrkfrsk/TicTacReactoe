import React from 'react';
import FieldRow from './FieldRow'
import Field from './Field'

class BoardComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="board">
        <FieldRow />
        <FieldRow />
        <FieldRow />
        <button onClick={()=>alert("Reset")}>Reset</button>
      </div>
    );
  }
}


export default BoardComponent;
