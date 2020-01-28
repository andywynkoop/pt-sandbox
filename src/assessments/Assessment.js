import React from 'react';
import Task from './Task';

export default ({ name, student, tasks, instructor }) => 
  <div className="assessment">
    <h1>Assessment Scoring</h1>
    <div className="assessment-student-info">
      <img src={student.img} alt={student.name}/>
      <h3>{student.name}</h3>
    </div>
    <h2>{name}</h2>
    <ul className="tasks">
      {tasks.map(task => 
        <Task key={task.id} {...task} instructor={instructor} />
      )}
    </ul>
  </div>;