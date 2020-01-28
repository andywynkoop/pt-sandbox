import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Assessment from './assessments/Assessment';

const question1 = {
	id: 1,
	body:
		'Consider the following JavaScript code. What will be the return value of `banana([15, 16, 19, 15])`? would cause the `toMinnesotan` function to return `"Can\'t Complain"`?\n' +
		'```javascript\n' +
		'function banana(arr) { \n' +
		'let sum = 0;\n'+
		'for (let i = 0; i < arr.length; i++) {\n' +
		'  sum += arr[i]\n'+
		'}\n' +
		'return sum;\n'+
		'\n' +
		'console.log(banana([15, 16, 19, 15]));\n' +
		'```',
	ord: 1,
	points: 3,
	score: null,
	isMultipleChoice: true,
	answers: [
		{
			id: 1,
			body: "`44`",
			isCorrect: false,
			isSelected: true,
		},
		{
			id: 2,
			body:
				"`65`",
			isCorrect: true,
			isSelected: false,
		},
    {
      id: 3,
      body: "`undefined`",
      isCorrect: false,
      isSelected: false,
    },
		{
			id: 4,
			body: "The string `\"banana\"`",
			isCorrect: true,
			isSelected: false,
		},
		{
			id: 5,
			body: "The function will throw an error.",
			isCorrect: true,
			isSelected: false,
		},
	],
};

const question2 = {
  id: 2,
  body: "Say you just got married, or bought a late-model pickup under book price with low milege and hardly any rust?\n How are you feeling?",
  ord: 2,
  points: 5,
  score: 1,
  isMultipleChoice: false,
  scoring: "Full Credit: The response shows that they feel good about things without running down the street telling people about it at the top of their voice.",
  answer: "I wouldn't want you to think I'm not happy."
}

const questions = [question1, question2];

const tasks = [
  {
    id: 10,
    name: "Task 1",
    submitted: new Date(),
    questions
  },
  {
    id: 11,
    name: "Task 2",
    submitted: new Date(),
    questions
  }
];

const student = {
  name: "Howard Mohr",
  img: "https://www.twincities.com/wp-content/uploads/2015/11/20100126__100129wl-Howard.jpg"
}
// const studentAssessmentDemo = {
//   name: "Rails Hunger Games",
//   student,
//   tasks,
//   instructor: false
// }

const instructorAssessmentDemo = {
  name: "The Minnesota Negative",
  student,
  tasks,
  instructor: true
}

ReactDOM.render(
  <Assessment {...instructorAssessmentDemo}/>,
  document.getElementById('root')
);
