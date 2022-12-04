import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        const { currentScore, bestScore } = this.props;
      return (
        <header className="App-header">
        
<h1 className="center">Memory Game</h1>
<div className="d-flex justify-content-around align-items-center"> 
        <div>
        <h2><p>Current Score</p></h2>
        <h2><p>{currentScore}</p></h2>
        </div>
        <div> 
        <h2><p>Best Score</p></h2>
        <h2><p>{bestScore}</p></h2>
        </div>
</div>
        </header>
      );
    }
  }

