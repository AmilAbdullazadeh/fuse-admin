import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

function Error404Page() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center p-16">
			<div className="max-w-512 text-center">
				<FuseAnimate animation="transition.expandIn" delay={100}>
					<Typography variant="h1" color="inherit" className="font-medium mb-16">
						404
					</Typography>
				</FuseAnimate>

				<FuseAnimate delay={500}>
					<Typography variant="h5" color="textSecondary" className="mb-16">
						Sorry but we could not find the page you are looking for
					</Typography>
				</FuseAnimate>

				<Paper className="flex items-center w-full h-56 p-16 mt-48 mb-16 shadow">
					<Icon color="action">search</Icon>
					<Input
						placeholder="Search for anything"
						className="px-16"
						disableUnderline
						fullWidth
						inputProps={{
							'aria-label': 'Search'
						}}
					/>
				</Paper>

				<Link className="font-medium" to="/apps/dashboards/project">
					Go back to dashboard
				</Link>
			</div>
		</div>
	);
}

export default Error404Page;
