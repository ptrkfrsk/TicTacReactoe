require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Board from './Board'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <Board />
      </div>
    );
  }
}


export default AppComponent;
