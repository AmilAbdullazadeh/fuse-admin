import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import React, { useState } from 'react';
import ToolbarMenu from './ToolbarMenu';

function DueMenu(props) {
	const [anchorEl, setAnchorEl] = useState(null);
	const dueDate = props.due ? moment(props.due).format(moment.HTML5_FMT.DATE) : '';

	function handleMenuOpen(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleMenuClose() {
		setAnchorEl(null);
	}

	return (
		<div>
			<IconButton color="inherit" onClick={handleMenuOpen}>
				<Icon>today</Icon>
			</IconButton>
			<ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
				{props.due ? (
					<MenuItem
						onClick={ev => {
							props.onRemoveDue();
							handleMenuClose(ev);
						}}
					>
						Remove Due Date
					</MenuItem>
				) : (
					<div className="p-16">
						<TextField
							label="Due date"
							type="date"
							name="due"
							value={dueDate}
							onChange={ev => {
								props.onDueChange(ev);
								handleMenuClose(ev);
							}}
							placeholder=" Choose a due date"
							className=""
							InputLabelProps={{
								shrink: true
							}}
							variant="outlined"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon color="action">today</Icon>
									</InputAdornment>
								)
							}}
						/>
					</div>
				)}
			</ToolbarMenu>
		</div>
	);
}

export default DueMenu;
