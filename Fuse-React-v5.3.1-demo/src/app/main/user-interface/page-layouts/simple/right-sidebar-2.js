import DemoContent from '@fuse/core/DemoContent';
import DemoSidebarContent from '@fuse/core/DemoSidebarContent';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import React, { useRef } from 'react';

const useStyles = makeStyles({
	layoutRoot: {}
});

function SimpleRightSidebar2Sample() {
	const classes = useStyles();
	const pageLayout = useRef(null);

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="flex flex-col flex-1">
					<div className="flex items-center p-24 px-12">
						<div className="flex-1 lg:px-12">
							<h4>Header</h4>
						</div>
						<Hidden lgUp>
							<IconButton
								onClick={ev => pageLayout.current.toggleRightSidebar()}
								aria-label="open right sidebar"
							>
								<Icon>menu</Icon>
							</IconButton>
						</Hidden>
					</div>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h4>Content Toolbar</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h4>Content</h4>
					<br />
					<DemoContent />
				</div>
			}
			rightSidebarHeader={
				<div className="p-24">
					<h4>Sidebar Header</h4>
				</div>
			}
			rightSidebarContent={
				<div className="p-24">
					<h4>Sidebar Content</h4>
					<br />
					<DemoSidebarContent />
				</div>
			}
			innerScroll
			ref={pageLayout}
		/>
	);
}

export default SimpleRightSidebar2Sample;
