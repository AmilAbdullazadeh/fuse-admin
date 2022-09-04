import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

function Widget1(props) {
	const [currentRange, setCurrentRange] = useState(props.widget.currentRange);

	function handleChangeRange(ev) {
		setCurrentRange(ev.target.value);
	}

	return (
		<Paper className="w-full rounded-8 shadow">
			<div className="flex items-center justify-between px-4 pt-4">
				<Select
					className="px-12"
					native
					value={currentRange}
					onChange={handleChangeRange}
					inputProps={{
						name: 'currentRange'
					}}
					disableUnderline
				>
					{Object.entries(props.widget.ranges).map(([key, n]) => {
						return (
							<option key={key} value={key}>
								{n}
							</option>
						);
					})}
				</Select>
				<IconButton aria-label="more">
					<Icon>more_vert</Icon>
				</IconButton>
			</div>
			<div className="text-center pt-12 pb-28">
				<Typography className="text-72 leading-none text-blue">
					{props.widget.data.count[currentRange]}
				</Typography>
				<Typography className="text-16" color="textSecondary">
					{props.widget.data.label}
				</Typography>
			</div>
			<div className="flex items-center px-16 h-52 border-t-1">
				<Typography className="text-15 flex w-full" color="textSecondary">
					<span className="truncate">{props.widget.data.extra.label}</span>:
					<b className="px-8">{props.widget.data.extra.count[currentRange]}</b>
				</Typography>
			</div>
		</Paper>
	);
}

export default React.memo(Widget1);
