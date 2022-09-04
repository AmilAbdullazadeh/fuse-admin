import _ from '@lodash';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

function Widget7(props) {
	const theme = useTheme();
	const [dataset, setDataset] = useState('Today');
	const data = _.merge({}, props.data);

	return (
		<Card className="w-full rounded-8 shadow">
			<div className="p-16">
				<Typography className="h1 font-300">Sessions by device</Typography>
			</div>

			<div className="h-224 relative">
				<Doughnut
					data={{
						labels: data.labels,
						datasets: data.datasets[dataset].map(obj => ({
							...obj,
							borderColor: theme.palette.divider,
							backgroundColor: [
								theme.palette.primary.dark,
								theme.palette.primary.main,
								theme.palette.primary.light
							],
							hoverBackgroundColor: [
								theme.palette.secondary.dark,
								theme.palette.secondary.main,
								theme.palette.secondary.light
							]
						}))
					}}
					options={data.options}
				/>
			</div>

			<div className="p-16 flex flex-row items-center justify-center">
				{data.labels.map((label, index) => (
					<div key={label} className="px-16 flex flex-col items-center">
						<Typography className="h4" color="textSecondary">
							{label}
						</Typography>
						<Typography className="h2 font-300 py-8">{data.datasets[dataset][0].data[index]}%</Typography>

						<div className="flex flex-row items-center justify-center">
							{data.datasets[dataset][0].change[index] < 0 && (
								<Icon className="text-18 text-red">arrow_downward</Icon>
							)}

							{data.datasets[dataset][0].change[index] > 0 && (
								<Icon className="text-18 text-green">arrow_upward</Icon>
							)}
							<div className="h5 px-4">{data.datasets[dataset][0].change[index]}%</div>
						</div>
					</div>
				))}
			</div>

			<Divider className="mx-16" />

			<div className="p-16 flex flex-row items-center justify-between">
				<div>
					<FormControl className="">
						<Select value={dataset} onChange={ev => setDataset(ev.target.value)}>
							{Object.keys(data.datasets).map(key => (
								<MenuItem key={key} value={key}>
									{key}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				<Button size="small">OVERVIEW</Button>
			</div>
		</Card>
	);
}

export default React.memo(Widget7);
