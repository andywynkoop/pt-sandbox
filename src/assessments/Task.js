import React from 'react';
import Question from './Question';

export default ({ name, submitted, questions, instructor }) => 
  <div>
    <div className="task-header">
      <h4 className="task-name">{name}</h4>
      <p>
        submitted: {submitted.getFullYear()}-{submitted.getMonth()}-{submitted.getDate()}
      </p>
    </div>
    <ul>
      {questions.map(q => <Question key={q.id} {...q} instructor={instructor} />)}
    </ul>
  </div>;