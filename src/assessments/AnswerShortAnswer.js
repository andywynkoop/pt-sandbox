import React from 'react';
import Content from './Content';

export default ({ scoring, answer }) => 
  <React.Fragment>
    <div className="assessment-header">Scoring: </div>
    <div className="assessment-body padded">
      <Content src={scoring} />
    </div>
    <div className="assessment-header">Answer: </div>
    <div className="assessment-body padded">
      <Content src={answer} />
    </div>
  </React.Fragment>;