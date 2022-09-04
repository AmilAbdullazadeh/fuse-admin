import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

function Error500Page() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center p-16">
			<div className="max-w-512 text-center">
				<FuseAnimate animation="transition.expandIn" delay={100}>
					<Typography variant="h1" color="inherit" className="font-medium mb-16">
						500
					</Typography>
				</FuseAnimate>

				<FuseAnimate delay={500}>
					<Typography variant="h5" color="textSecondary" className="mb-16">
						Well, you broke the internet!
					</Typography>
				</FuseAnimate>

				<FuseAnimate delay={600}>
					<Typography variant="subtitle1" color="textSecondary" className="mb-48">
						Just kidding, looks like we have an internal issue, please try again in couple minutes
					</Typography>
				</FuseAnimate>

				<Link className="font-medium" to="/apps/dashboards/project">
					Report this problem
				</Link>
			</div>
		</div>
	);
}

export default Error500Page;
