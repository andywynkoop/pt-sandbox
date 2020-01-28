import React from 'react';
import AnswerChoice from './AnswerChoice';

export default ({ answers }) =>
  <React.Fragment>
    <div className="assessment-header">
      Options: <span>{`(Correct answer(s) indicated with check mark)`}</span></div>
    <div className="assessment-body padded">
      <ul>
        {answers.map(answer => <AnswerChoice key={answer.id} {...answer} />)}
      </ul>
    </div>
  </React.Fragment>;