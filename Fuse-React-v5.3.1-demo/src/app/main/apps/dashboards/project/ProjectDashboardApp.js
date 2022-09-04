import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import _ from '@lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import reducer from './store';
import { selectProjects, getProjects } from './store/projectsSlice';

import { getWidgets, selectWidgets } from './store/widgetsSlice';

import Widget1 from './widgets/Widget1';
import Widget10 from './widgets/Widget10';
import Widget11 from './widgets/Widget11';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';
import Widget9 from './widgets/Widget9';
import WidgetNow from './widgets/WidgetNow';
import WidgetWeather from './widgets/WidgetWeather';

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
	selectedProject: {
		background: lighten(theme.palette.primary.dark, 0.1),
		color: theme.palette.primary.contrastText,
		borderRadius: '8px 0 0 0'
	},
	projectMenuButton: {
		background: lighten(theme.palette.primary.dark, 0.1),
		color: theme.palette.primary.contrastText,
		borderRadius: '0 8px 0 0',
		marginLeft: 1
	}
}));

function ProjectDashboardApp(props) {
	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgets);
	const projects = useSelector(selectProjects);

	const classes = useStyles(props);
	const pageLayout = useRef(null);
	const [tabValue, setTabValue] = useState(0);
	const [selectedProject, setSelectedProject] = useState({
		id: 1,
		menuEl: null
	});

	useEffect(() => {
		dispatch(getWidgets());
		dispatch(getProjects());
	}, [dispatch]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	function handleChangeProject(id) {
		setSelectedProject({
			id,
			menuEl: null
		});
	}

	function handleOpenProjectMenu(event) {
		setSelectedProject({
			id: selectedProject.id,
			menuEl: event.currentTarget
		});
	}

	function handleCloseProjectMenu() {
		setSelectedProject({
			id: selectedProject.id,
			menuEl: null
		});
	}
	// return null;
	if (_.isEmpty(widgets) || _.isEmpty(projects)) {
		return null;
	}

	return (
		<FusePageSimple
			classes={{
				header: 'min-h-160 h-160',
				toolbar: 'min-h-56 h-56 items-end',
				rightSidebar: 'w-288',
				content: classes.content
			}}
			header={
				<div className="flex flex-col justify-between flex-1 px-24 pt-24">
					<div className="flex justify-between items-start">
						<Typography className="py-0 sm:py-24 text-24 md:text-32" variant="h4">
							Welcome back, John!
						</Typography>
						<Hidden lgUp>
							<IconButton
								onClick={ev => pageLayout.current.toggleRightSidebar()}
								aria-label="open left sidebar"
								color="inherit"
							>
								<Icon>menu</Icon>
							</IconButton>
						</Hidden>
					</div>
					<div className="flex items-end">
						<div className="flex items-center">
							<div className={clsx(classes.selectedProject, 'flex items-center h-40 px-16 text-16')}>
								{_.find(projects, ['id', selectedProject.id]).name}
							</div>
							<IconButton
								className={clsx(classes.projectMenuButton, 'h-40 w-40 p-0')}
								aria-owns={selectedProject.menuEl ? 'project-menu' : undefined}
								aria-haspopup="true"
								onClick={handleOpenProjectMenu}
							>
								<Icon>more_horiz</Icon>
							</IconButton>
							<Menu
								id="project-menu"
								anchorEl={selectedProject.menuEl}
								open={Boolean(selectedProject.menuEl)}
								onClose={handleCloseProjectMenu}
							>
								{projects &&
									projects.map(project => (
										<MenuItem
											key={project.id}
											onClick={ev => {
												handleChangeProject(project.id);
											}}
										>
											{project.name}
										</MenuItem>
									))}
							</Menu>
						</div>
					</div>
				</div>
			}
			contentToolbar={
				<Tabs
					value={tabValue}
					onChange={handleChangeTab}
					indicatorColor="secondary"
					textColor="inherit"
					variant="scrollable"
					scrollButtons="off"
					className="w-full px-24 -mx-4 min-h-40"
					classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
					TabIndicatorProps={{
						children: <Divider className="w-full h-full rounded-full opacity-50" />
					}}
				>
					<Tab className="text-14 font-bold min-h-40 min-w-64 mx-4" disableRipple label="Home" />
					<Tab className="text-14 font-bold min-h-40 min-w-64 mx-4" disableRipple label="Budget Summary" />
					<Tab className="text-14 font-bold min-h-40 min-w-64 mx-4" disableRipple label="Team Members" />
				</Tabs>
			}
			content={
				<div className="p-12">
					{tabValue === 0 && (
						<FuseAnimateGroup
							className="flex flex-wrap"
							enter={{
								animation: 'transition.slideUpBigIn'
							}}
						>
							<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
								<Widget1 widget={widgets.widget1} />
							</div>
							<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
								<Widget2 widget={widgets.widget2} />
							</div>
							<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
								<Widget3 widget={widgets.widget3} />
							</div>
							<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
								<Widget4 widget={widgets.widget4} />
							</div>
							<div className="widget flex w-full p-12">
								<Widget5 widget={widgets.widget5} />
							</div>
							<div className="widget flex w-full sm:w-1/2 p-12">
								<Widget6 widget={widgets.widget6} />
							</div>
							<div className="widget flex w-full sm:w-1/2 p-12">
								<Widget7 widget={widgets.widget7} />
							</div>
						</FuseAnimateGroup>
					)}
					{tabValue === 1 && (
						<FuseAnimateGroup
							className="flex flex-wrap"
							enter={{
								animation: 'transition.slideUpBigIn'
							}}
						>
							<div className="widget flex w-full sm:w-1/2 p-12">
								<Widget8 widget={widgets.widget8} />
							</div>
							<div className="widget flex w-full sm:w-1/2 p-12">
								<Widget9 widget={widgets.widget9} />
							</div>
							<div className="widget flex w-full p-12">
								<Widget10 widget={widgets.widget10} />
							</div>
						</FuseAnimateGroup>
					)}
					{tabValue === 2 && (
						<FuseAnimateGroup
							className="flex flex-wrap"
							enter={{
								animation: 'transition.slideUpBigIn'
							}}
						>
							<div className="widget flex w-full p-12">
								<Widget11 widget={widgets.widget11} />
							</div>
						</FuseAnimateGroup>
					)}
				</div>
			}
			rightSidebarContent={
				<FuseAnimateGroup
					className="w-full"
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					<div className="widget w-full p-12">
						<WidgetNow />
					</div>
					<div className="widget w-full p-12">
						<WidgetWeather widget={widgets.weatherWidget} />
					</div>
				</FuseAnimateGroup>
			}
			ref={pageLayout}
		/>
	);
}

export default withReducer('projectDashboardApp', reducer)(ProjectDashboardApp);
