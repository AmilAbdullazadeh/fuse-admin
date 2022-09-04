import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Button from '@material-ui/core/Button';
import { blue, green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
	title: {
		color: blue[800]
	},
	url: {
		color: green[800]
	}
});

function ModernSearchPage() {
	const classes = useStyles();
	const theme = useTheme();
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('/api/search').then(res => {
			setData(res.data);
		});
	}, []);

	return (
		<FusePageSimple
			header={
				<div className="flex flex-1 items-center p-16 sm:p-24 max-w-md">
					<ThemeProvider theme={theme}>
						<Paper className="flex items-center h-44 w-full px-16 rounded-8 shadow">
							<Input
								placeholder="Search..."
								disableUnderline
								fullWidth
								inputProps={{
									'aria-label': 'Search'
								}}
							/>
							<Icon color="action">search</Icon>
						</Paper>
					</ThemeProvider>
				</div>
			}
			content={
				<div className="p-16 pt-0 sm:p-24 sm:pt-0 max-w-md">
					<FuseAnimate delay={200}>
						<Typography color="textSecondary" className="text-13 mx-16 my-24">
							{data.length} results
						</Typography>
					</FuseAnimate>

					<FuseAnimateGroup
						enter={{
							animation: 'transition.slideUpBigIn'
						}}
					>
						{data.map(item => (
							<Paper className="p-16 mb-16 rounded-8 shadow" key={item.id}>
								<Typography className={clsx(classes.title, 'text-18 cursor-pointer')}>
									{item.title}
								</Typography>
								<Typography className={clsx(classes.url)}>{item.url}</Typography>
								<Typography className="text-13">{item.excerpt}</Typography>
							</Paper>
						))}
					</FuseAnimateGroup>
					<div className="flex justify-center mt-48">
						<Paper className="rounded-8 shadow">
							<IconButton>
								<Icon className="text-20">
									{theme.direction === 'ltr' ? 'chevron_left' : 'chevron_right'}
								</Icon>
							</IconButton>
							<Button className="min-w-48 h-48 p-0 px-16">1</Button>
							<Button className="min-w-48 h-48 p-0 px-16">2</Button>
							<Button className="min-w-48 h-48 p-0 px-16">3</Button>
							<Button className="min-w-48 h-48 p-0 px-16">4</Button>
							<Button className="min-w-48 h-48 p-0 px-16">5</Button>
							<IconButton>
								<Icon className="text-20">
									{theme.direction === 'ltr' ? 'chevron_right' : 'chevron_left'}
								</Icon>
							</IconButton>
						</Paper>
					</div>
				</div>
			}
		/>
	);
}

export default ModernSearchPage;
