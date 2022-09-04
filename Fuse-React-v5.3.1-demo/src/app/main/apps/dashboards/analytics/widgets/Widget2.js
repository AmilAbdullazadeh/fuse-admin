import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import _ from '@lodash';

function Widget2(props) {
	const theme = useTheme();
	const data = _.merge({}, props.data);

	return (
		<Card className="w-full rounded-8 shadow">
			<div className="p-16 pb-0 flex flex-row flex-wrap items-end">
				<div className="">
					<Typography className="h3" color="textSecondary">
						Conversion
					</Typography>
					<Typography className="text-56 font-300 leading-none mt-8">{data.conversion.value}</Typography>
				</div>

				<div className="py-4 text-16 flex flex-row items-center">
					<div className="flex flex-row items-center">
						{data.conversion.ofTarget > 0 && <Icon className="text-green">trending_up</Icon>}
						{data.conversion.ofTarget < 0 && <Icon className="text-red">trending_down</Icon>}
						<Typography className="mx-4">{data.conversion.ofTarget}%</Typography>
					</div>
					<Typography className="whitespace-nowrap">of target</Typography>
				</div>
			</div>

			<div className="h-96 w-100-p">
				<Bar
					data={{
						labels: data.labels,
						datasets: data.datasets.map(obj => ({
							...obj,
							borderColor: theme.palette.secondary.main,
							backgroundColor: theme.palette.secondary.main
						}))
					}}
					options={data.options}
				/>
			</div>
		</Card>
	);
}

export default React.memo(Widget2);
