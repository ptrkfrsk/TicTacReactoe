import React from 'react';
import Field from './Field'

class BoardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
        values: ['','','','','','','','',''],
        player: 'O',
        winIndexes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 3, 6, 1, 4, 7, 2, 5 ,8, 0, 4, 8, 2, 4, 6],
        gameEnded: false,
        moveCounter: 0
    };
  }

  insertValue(i) {
    if (this.state.values[i] === '' && !this.state.gameEnded) {
      const newValues = this.state.values.slice();
      switch (this.state.player) {
        case 'O':
          newValues[i] = 'O';
          this.setState({
            player: 'X',
            values: newValues,
            moveCounter: ++this.state.moveCounter,
          }, this.checkWin);
          break;
        case 'X':
          newValues[i] = 'X';
          this.setState({
            player: 'O',
            values: newValues,
            moveCounter: ++this.state.moveCounter
          }, this.checkWin);
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
      gameEnded: false,
      moveCounter: 0
    }, null);
  }

  checkWin() {
    console.log('Checking...');
    for (let i = 0; i < this.state.winIndexes.length; i+=3) {
      if (
        this.state.values[this.state.winIndexes[i]] === this.state.values[this.state.winIndexes[i+1]] &&
        this.state.values[this.state.winIndexes[i+1]] === this.state.values[this.state.winIndexes[i+2]] &&
        (this.state.values[this.state.winIndexes[i]] === 'O' || this.state.values[this.state.winIndexes[i]] === 'X')
      ) {
        this.setState({
          gameEnded: true
        }, null);
        console.log(this.state.values[this.state.winIndexes[i]] + ' wins!');
      }
      else if (this.state.moveCounter === 9) {
        this.setState({
          gameEnded: true,
          moveCounter: ++this.state.moveCounter
        }, null);

        console.log('Draw!');
      }
    }
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
