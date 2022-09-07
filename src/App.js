import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

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
