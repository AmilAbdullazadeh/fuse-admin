import FuseUtils from '@fuse/utils/FuseUtils';
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const initialState = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			borderWidth: 1,
			hoverBackgroundColor: 'rgba(255,99,132,0.4)',
			hoverBorderColor: 'rgba(255,99,132,1)',
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
};

class Graph extends Component {
	state = initialState;

	componentDidMount() {
		const _this = this;

		setInterval(function() {
			const oldDataSet = _this.state.datasets[0];
			const newData = [];

			for (let x = 0; x < _this.state.labels.length; x++) {
				newData.push(Math.floor(Math.random() * 100));
			}

			const newDataSet = {
				...oldDataSet
			};

			newDataSet.data = newData;
			newDataSet.backgroundColor = FuseUtils.randomMatColor();
			newDataSet.borderColor = FuseUtils.randomMatColor();
			newDataSet.hoverBackgroundColor = FuseUtils.randomMatColor();
			newDataSet.hoverBorderColor = FuseUtils.randomMatColor();

			const newState = {
				...initialState,
				datasets: [newDataSet]
			};

			_this.setState(newState);
		}, 5000);
	}

	render() {
		return <Bar data={this.state} />;
	}
}

class CrazyDataLineExample extends Component {
	render() {
		return (
			<div className="flex flex-col items-center w-full max-w-md">
				<h2>You can even make crazy graphs like this!</h2>
				<Graph />
			</div>
		);
	}
}

export default CrazyDataLineExample;
