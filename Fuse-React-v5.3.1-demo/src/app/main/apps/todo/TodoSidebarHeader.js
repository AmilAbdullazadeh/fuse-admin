import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

const accounts = {
	creapond: 'johndoe@creapond.com',
	withinpixels: 'johndoe@withinpixels.com'
};

function TodoSidebarHeader() {
	const [selectedAccount, setSelectedCount] = useState('creapond');

	function handleAccountChange(ev) {
		setSelectedCount(ev.target.value);
	}

	return (
		<div className="flex flex-col justify-center h-full p-24">
			<div className="flex items-center flex-1">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<Icon className="text-32">check_box</Icon>
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<span className="text-24 mx-16">To-Do</span>
				</FuseAnimate>
			</div>

			<FuseAnimate animation="transition.slideUpIn" delay={300}>
				<TextField
					id="account-selection"
					select
					label={selectedAccount}
					value={selectedAccount}
					onChange={handleAccountChange}
					placeholder="Select Account"
					margin="normal"
				>
					{Object.keys(accounts).map((key, value) => (
						<MenuItem key={key} value={key}>
							{accounts[key]}
						</MenuItem>
					))}
				</TextField>
			</FuseAnimate>
		</div>
	);
}

export default TodoSidebarHeader;
