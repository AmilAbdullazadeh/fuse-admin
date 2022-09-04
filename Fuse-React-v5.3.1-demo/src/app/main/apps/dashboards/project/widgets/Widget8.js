import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import _ from '@lodash';

function Widget8(props) {
	const widget = _.merge({}, props.widget);

	return (
		<Paper className="w-full rounded-8 shadow">
			<div className="flex items-center justify-between px-16 h-64 border-b-1">
				<Typography className="text-16">{widget.title}</Typography>
			</div>
			<div className="h-400 w-full p-32">
				<Doughnut
					data={{
						labels: widget.mainChart.labels,
						datasets: widget.mainChart.datasets
					}}
					options={widget.mainChart.options}
				/>
			</div>
		</Paper>
	);
}

export default React.memo(Widget8);
