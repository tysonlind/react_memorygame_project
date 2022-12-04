import React, { Component } from "react";
import "./App.css";
import Header from "./components/header.jsx"
import Game from "./components/Game.jsx";

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentScore: 0,
      bestScore: 0,
    };
    this.handleScore = this.handleScore.bind(this);
    this.checkBestScore = this.checkBestScore.bind(this);
  }

 

  handleScore(increment){
    if(increment){
      this.setState ({
        currentScore: this.state.currentScore + 1,
      });
      this.checkBestScore(this.state.currentScore + 1);
    }else {
      this.setState({
        currentScore: 0,
      });
    }
  }

  checkBestScore(currentScore){
    let congrats = document.querySelector("#high-score-text")
    if (currentScore > this.state.bestScore){
      this.setState ({
        bestScore: currentScore,
      })
    }
  }

  render() {
    const { currentScore, bestScore } = this.state;
    let className = 'center no-display';
    if ((currentScore === bestScore) && (bestScore > 0)){
      className = 'center display';
    } else {
      className = 'center no-display';
    }
    return (
      <div className="App">
        <Header currentScore={currentScore} bestScore={bestScore} />
        <Game currentScore={currentScore} handleScore={this.handleScore} />
        <div className={className} id="high-score-text">
          <h1><p>New high score!</p></h1>
        </div>
      </div>
    );
  }
}

export default App;
