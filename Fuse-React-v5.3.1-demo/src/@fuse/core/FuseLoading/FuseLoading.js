import { useTimeout } from '@fuse/hooks';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function FuseLoading(props) {
	const [showLoading, setShowLoading] = useState(!props.delay);

	useTimeout(() => {
		setShowLoading(true);
	}, props.delay);

	if (!showLoading) {
		return null;
	}

	return (
		<div className="flex flex-1 flex-col items-center justify-center p-12">
			<Typography className="text-20 mb-16" color="textSecondary">
				Loading...
			</Typography>
			<LinearProgress className="w-xs max-w-full" color="secondary" />
		</div>
	);
}

FuseLoading.propTypes = {
	delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
};

FuseLoading.defaultProps = {
	delay: false
};

export default FuseLoading;
