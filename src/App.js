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

	function Comp2 () {

		const [comments, setComments] = useState([]);
		let myRef = React.createRef(); 
		
		
		let addComment = () => {
			if (!myRef.current.value) return
			setComments([...comments, myRef.current.value]);
			myRef.current.value = '';
		}

		return (

			<div>
				<input ref={myRef}/><br/>
				<button onClick={addComment}>Add comment</button>

				<ul>
					{comments.map(
						(item) => <li key={item}> {item} </li>
					)}

				</ul>

		</div>
		)
	}

	



  return (
		<>

			{h1}
			{h2}
			{p}
			{div}
			{input}
			<Comp2/>
			{/* <div>
				<ul>
					{this.state}

				</ul>

			</div> */}

		</>
	);
}

export default App;
