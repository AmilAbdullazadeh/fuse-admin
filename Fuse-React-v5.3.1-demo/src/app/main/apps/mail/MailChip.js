import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		height: 21,
		borderRadius: 2,
		padding: '0 6px',
		fontSize: 11,
		backgroundColor: 'rgba(0,0,0,.08);'
	},
	color: {
		width: 8,
		height: 8,
		marginRight: 4,
		borderRadius: '50%'
	}
}));

function MailChip(props) {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, props.className)}>
			<div className={classes.color} style={{ backgroundColor: props.color }} />
			<div>{props.title}</div>
		</div>
	);
}

export default MailChip;
