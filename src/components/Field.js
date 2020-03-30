import React from 'react';
let circle = true;

class FieldComponent extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  insertValue() {
    if (this.state.value === "") {
      if (circle === true) {
        this.setState({value: "O"});
        circle = false;
      } else {
        this.setState({value: "X"});
        circle = true;
      }
    }
  }

  resetValue() {
    this.setState({ value: "" } );
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
