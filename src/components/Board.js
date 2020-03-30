import React from 'react';
import FieldRow from './FieldRow'

class BoardComponent extends React.Component {
  render() {
    return (
      <div className="board">
        <FieldRow />
        <FieldRow />
        <FieldRow />
      </div>
    );
  }
}


export default BoardComponent;
