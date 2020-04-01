import React from 'react';
import Field from './Field'

class BoardComponent extends React.Component {
  constructor() {
    super();
    this.player = "O";
    this.state = {
        values: ['','','','','','','','',''],
        player: 'O',
    };

  }

  insertValue(i) {
    if (this.state.values[i] === '') {
      const newValues = this.state.values.slice();
      switch (this.state.player) {
        case 'O':
          newValues[i] = 'O';
          this.setState({
            player: 'X',
            values: newValues,
          });
          break;
        case 'X':
          newValues[i] = 'X';
          this.setState({
            player: 'O',
            values: newValues,
          });
          break;
        default:
          break;
      }
    }
  }

  resetGame() {
    const cleanBoard = ['','','','','','','','',''];
    this.setState({
      values: cleanBoard,
      player: 'O',
    });
  }

  render() {
    return (
      <div className="board">
        <div className="fieldRow">
          <Field value={this.state.values[0]} onClick={() => { this.insertValue(0);} }/>
          <Field value={this.state.values[1]} onClick={() => { this.insertValue(1);} }/>
          <Field value={this.state.values[2]} onClick={() => { this.insertValue(2);} }/>
        </div>
        <div className="fieldRow">
          <Field value={this.state.values[3]} onClick={() => { this.insertValue(3);} }/>
          <Field value={this.state.values[4]} onClick={() => { this.insertValue(4);} }/>
          <Field value={this.state.values[5]} onClick={() => { this.insertValue(5);} }/>
        </div>
        <div className="fieldRow">
          <Field value={this.state.values[6]} onClick={() => { this.insertValue(6);} }/>
          <Field value={this.state.values[7]} onClick={() => { this.insertValue(7);} }/>
          <Field value={this.state.values[8]} onClick={() => { this.insertValue(8);} }/>
        </div>
        <button id="resetGame" onClick={() => this.resetGame()}>Reset</button>
      </div>
    );
  }
}


export default BoardComponent;
