import FuseExample from '@fuse/core/FuseExample';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */

function FormsyDoc() {
	return (
		<>
			<div className="flex flex-1 items-center justify-between mb-24">
				<Typography variant="h4" className="">
					Formsy
				</Typography>

				<Button
					variant="outlined"
					component="a"
					href="https://github.com/formsy/formsy-react"
					target="_blank"
					role="button"
				>
					<Icon>link</Icon>
					<span className="mx-4">Reference</span>
				</Button>
			</div>
			<Typography className="mb-16" component="p">
				<code>formsy-react</code> is a form input builder and validator for React.
			</Typography>

			<Typography className="mb-16" component="p">
				HOCs are needed for formsy to work. We created for TextField, Select, RadioGroup, Checkbox under @fuse.
			</Typography>

			<hr />

			<Typography className="text-32 mt-32 mb-8" component="h2">
				Example Usages
			</Typography>

			<FuseExample
				className="mb-64"
				component={require('./examples/SimpleFormExample.js').default}
				raw={require('!raw-loader!./examples/SimpleFormExample.js')}
			/>

			<Typography className="text-32 mt-32 mb-8" component="h2">
				Demos
			</Typography>

			<ul>
				<li className="mb-8">
					<Link to="/login">Login page</Link>
				</li>
			</ul>
		</>
	);
}

export default FormsyDoc;
