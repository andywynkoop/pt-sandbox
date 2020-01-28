import React from 'react';
import AnswerMultipleChoice from './AnswerMultipleChoice';
import AnswerShortAnswer from './AnswerShortAnswer';
import ScoreForm from './ScoreForm';
import Content from './Content';

export default ({ scoring, answer, answers, body, isMultipleChoice, score, instructor }) => 
  <li className="assessment-question-item">
    <div className="assessment-question">
      <div className="assessment-header">QUESTION: </div>
      <div className="assessment-body">
        <Content src={body} />
      </div>
      {isMultipleChoice 
        ? <AnswerMultipleChoice answers={answers} /> 
        : <AnswerShortAnswer {...{ scoring, answer }} />
      }
    </div>
    {instructor ? <ScoreForm score={score} correct={() => {}} incorrect={() => {}}/> : null}
  </li>;
