import DemoContent from '@fuse/core/DemoContent';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
	root: {
		padding: 24
	}
});

function BlankSample() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<DemoContent />
		</div>
	);
}

export default BlankSample;
