import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function Breadcrumb({ className, selected }) {
	const arr = selected.location.split('>');

	return (
		<Typography className={className}>
			{arr.map((path, i) => (
				<span key={i} className="flex items-center">
					<span>{path}</span>
					{arr.length - 1 !== i && <Icon>chevron_right</Icon>}
				</span>
			))}
		</Typography>
	);
}

export default Breadcrumb;
