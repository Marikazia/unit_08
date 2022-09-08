import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

	// constructor (props) {
	// 	super();
	// 	console.log(props);
	// 	// this.state = {
	// 	// 	s1: props.data.p1
	// 	// }
	// 	// this.s2 = 201;
	// 	// console.log(this.state.s1);
	// 	// console.log(this.s2);
	// };

	const h1 = React.createElement('h1', {}, 'unit_08')
	const h2 = React.createElement('h2', {}, 'header 2')
	const p = React.createElement('p', {
		'style': {
			'color': 'red',
	}}, 
	'this is p')
	const input = React.createElement('input', {'defaultValue' : 55})
	const p1 = React.createElement('p', {}, 'hi' )
	const p2 = React.createElement('p', {}, 'world' )
	const div = React.createElement('div', {
		className : 'text-grey'
	}, p1, p2 )

	// const [currVal, setSameVal] = useState('');
	// const gotSameVal = event => {
	// 	setSameVal(event.target.value);
	// }

	// const Comp = React.createElement(
	// 	input,
	// 	{
	// 		ref: bbbbbb
	// 	}
	// );

	// buttonLi = () => {
	// 	console.log(currVal);
	// 	console.log(gotSameVal);
	// };

  return (
		<>

			{h1}
			{h2}
			{p}
			{div}
			{input}


		</>
	);
}

export default App;
