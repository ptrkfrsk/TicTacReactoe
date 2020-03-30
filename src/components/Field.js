import React from 'react';

class FieldComponent extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  insertValue() {
    this.setState({ value: "O" } );
  }

  render() {
    return (
      <div className="field" onClick={ this.insertValue.bind(this) }>
        { this.state.value }
      </div>
    );
  }
}

export default FieldComponent;
