import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from 'clsx';
import React, { useImperativeHandle, useState } from 'react';
import FusePageSimpleSidebarContent from './FusePageSimpleSidebarContent';

function FusePageSimpleSidebar(props, ref) {
	const [isOpen, setIsOpen] = useState(false);
	const { classes } = props;

	useImperativeHandle(ref, () => ({
		toggleSidebar: handleToggleDrawer
	}));

	const handleToggleDrawer = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Hidden lgUp={props.variant === 'permanent'}>
				<SwipeableDrawer
					variant="temporary"
					anchor={props.position}
					open={isOpen}
					onOpen={ev => {}}
					onClose={ev => handleToggleDrawer()}
					disableSwipeToOpen
					classes={{
						root: clsx(classes.sidebarWrapper, props.variant),
						paper: clsx(
							classes.sidebar,
							props.variant,
							props.position === 'left' ? classes.leftSidebar : classes.rightSidebar
						)
					}}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
					container={props.rootRef.current}
					BackdropProps={{
						classes: {
							root: classes.backdrop
						}
					}}
					style={{ position: 'absolute' }}
				>
					<FusePageSimpleSidebarContent {...props} />
				</SwipeableDrawer>
			</Hidden>
			{props.variant === 'permanent' && (
				<Hidden mdDown>
					<Drawer
						variant="permanent"
						className={clsx(classes.sidebarWrapper, props.variant)}
						open={isOpen}
						classes={{
							paper: clsx(
								classes.sidebar,
								props.variant,
								props.position === 'left' ? classes.leftSidebar : classes.rightSidebar
							)
						}}
					>
						<FusePageSimpleSidebarContent {...props} />
					</Drawer>
				</Hidden>
			)}
		</>
	);
}

export default React.forwardRef(FusePageSimpleSidebar);
