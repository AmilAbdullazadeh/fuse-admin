import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import AboutTab from './tabs/AboutTab';
import PhotosVideosTab from './tabs/PhotosVideosTab';
import TimelineTab from './tabs/TimelineTab';

const useStyles = makeStyles(theme => ({
	layoutHeader: {
		height: 320,
		minHeight: 320,
		[theme.breakpoints.down('md')]: {
			height: 240,
			minHeight: 240
		}
	}
}));

function ProfilePage() {
	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);

	function handleTabChange(event, value) {
		setSelectedTab(value);
	}

	return (
		<FusePageSimple
			classes={{
				header: classes.layoutHeader,
				toolbar: 'min-h-56 h-56 items-end'
			}}
			header={
				<div className="p-24 flex flex-1 flex-codisableRipple l items-center justify-center md:flex-row md:items-end">
					<div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
						<FuseAnimate animation="transition.expandIn" delay={300}>
							<Avatar className="w-96 h-96" src="assets/images/avatars/Velazquez.jpg" />
						</FuseAnimate>
						<FuseAnimate animation="transition.slideLeftIn" delay={300}>
							<Typography
								className="md:mx-24 text-24 md:text-32 my-8 md:my-0"
								variant="h4"
								color="inherit"
							>
								John Doe
							</Typography>
						</FuseAnimate>
					</div>

					<div className="flex items-center justify-end">
						<Button className="mx-8" variant="contained" color="secondary" aria-label="Follow">
							Follow
						</Button>
						<Button variant="contained" color="primary" aria-label="Send Message">
							Send Message
						</Button>
					</div>
				</div>
			}
			contentToolbar={
				<Tabs
					value={selectedTab}
					onChange={handleTabChange}
					indicatorColor="primary"
					textColor="inherit"
					variant="scrollable"
					scrollButtons="off"
					className="w-full px-24 -mx-4 min-h-40"
					classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
					TabIndicatorProps={{
						children: <Divider className="w-full h-full rounded-full opacity-50" />
					}}
				>
					<Tab className="text-14 font-bold min-h-40 min-w-64 mx-4" disableRipple label="Timeline" />
					<Tab className="text-14 font-bold min-h-40 min-w-64 mx-4" disableRipple label="About" />
					<Tab className="text-14 font-bold min-h-40 min-w-64 mx-4" disableRipple label="Photos & Videos" />
				</Tabs>
			}
			content={
				<div className="p-16 sm:p-24">
					{selectedTab === 0 && <TimelineTab />}
					{selectedTab === 1 && <AboutTab />}
					{selectedTab === 2 && <PhotosVideosTab />}
				</div>
			}
		/>
	);
}

export default ProfilePage;
