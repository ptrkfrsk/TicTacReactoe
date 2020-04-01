import React from 'react';

class FieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <div className="field" onClick={this.props.onClick}>
        { this.props.value }
      </div>
    );
  }
}

export default FieldComponent;
