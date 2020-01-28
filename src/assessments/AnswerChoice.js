import React from 'react';
import Content from './Content';

const check = (isCorrect, isSelected) => {
  if (isCorrect) return <span className="check correct">✓</span>;
  else if (!isCorrect && isSelected) return <span className="check wrong">×</span>;
  else return <span className="check">{" "}</span>;
}

export default ({ isCorrect, isSelected, body }) => 
  <li className="assessment-answer-choice">
    {check(isCorrect, isSelected)}
    <input type="radio" disabled checked={isSelected} />
    <span className="answer-body">
      <Content src={body} />
    </span>
  </li>;