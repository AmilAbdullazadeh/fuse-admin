import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';

const data = {
	datasets: [
		{
			data: [11, 16, 7, 3, 14],
			backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
			label: 'My dataset' // for legend
		}
	],
	labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
};

class PolarExample extends Component {
	render() {
		return (
			<div className="flex flex-col items-center w-full max-w-md">
				<h2>Polar Example</h2>
				<Polar data={data} />
			</div>
		);
	}
}

export default PolarExample;
