import React, { Component } from 'react';

const ConfirmModal = ({ accept, decline }) =>
  <div className="confirm-modal">
    <p>Are you sure?</p>
    <button onClick={accept}>Yes!</button>
    <button onClick={decline}>No!</button>
  </div>;

export default class ScoreForm extends Component {
  state = { action: null }
  confirmCorrect = () => this.setState({ action: () => console.log("correct") });
  confirmIncorrect = () => this.setState({ action: () => console.log("incorrect") });
  accept = () => {
    this.state.action();
    this.setState({ action: null });
  }
  decline = () => this.setState({ action: null });
  modal = () => this.state.action === null
    ? null
    : <ConfirmModal accept={this.accept} decline={this.decline} />;

  render() {
    const { score, setCorrect, setIncorrect } = this.props;
    let correct = "", 
      incorrect = "", 
      correctBtnFn = setCorrect, 
      incorrectBtnFn = setIncorrect;

    if (score === 1) {
      correct = "correct";
      correctBtnFn = null;
      incorrectBtnFn = this.confirmIncorrect;
    }
    if (score === -1) {
      incorrect = "incorrect";
      correctBtnFn = this.confirmCorrect;
      incorrectBtnFn = null
    }

    return (
      <div className="score-form-modal">
        {score ? null : <div className="warning"><span>!</span></div>}
        <div className="score-form">
          {score ? "Update Score" : "Input Score"}
          <button
            className={`score-button ${correct}`}
            onClick={correctBtnFn}
          >Correct</button>
          <button
            className={`score-button ${incorrect}`}
            onClick={incorrectBtnFn}
          >Incorrect</button>
        </div>
        {this.modal()}
      </div>
    );
  }
}