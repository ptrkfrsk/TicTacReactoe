import React from 'react';
import Field from './Field'

class FieldRowComponent extends React.Component {
  render() {
    return (
      <div className="fieldRow">
        <Field />
        <Field />
        <Field />
      </div>
    );
  }
}


export default FieldRowComponent;
