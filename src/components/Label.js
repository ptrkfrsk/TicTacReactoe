import React from 'react';

class LabelComponent extends React.Component {
  render() {
    return (
      <div className="label">
        { this.props.status }
      </div>
    );
  }
}

export default LabelComponent;
