import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from './Breadcrumb';
import DetailSidebarContent from './DetailSidebarContent';
import DetailSidebarHeader from './DetailSidebarHeader';
import FileList from './FileList';
import MainSidebarContent from './MainSidebarContent';
import MainSidebarHeader from './MainSidebarHeader';
import reducer from './store';
import { selectFileById, getFiles } from './store/filesSlice';

function FileManagerApp() {
	const dispatch = useDispatch();
	const selectedItem = useSelector(state => selectFileById(state, state.fileManagerApp.files.selectedItemId));

	const pageLayout = useRef(null);

	useEffect(() => {
		dispatch(getFiles());
	}, [dispatch]);

	return (
		<FusePageSimple
			classes={{
				root: 'bg-red',
				header: 'h-96 min-h-96 sm:h-160 sm:min-h-160',
				sidebarHeader: 'h-96 min-h-96 sm:h-160 sm:min-h-160',
				rightSidebar: 'w-320'
			}}
			header={
				<div className="flex flex-col flex-1 p-8 sm:p-12 relative">
					<div className="flex items-center justify-between">
						<IconButton
							onClick={ev => {
								pageLayout.current.toggleLeftSidebar();
							}}
							aria-label="open left sidebar"
						>
							<Icon>menu</Icon>
						</IconButton>
						<FuseAnimate animation="transition.expandIn" delay={200}>
							<IconButton aria-label="search">
								<Icon>search</Icon>
							</IconButton>
						</FuseAnimate>
					</div>
					<div className="flex flex-1 items-end">
						<FuseAnimate animation="transition.expandIn" delay={600}>
							<Fab
								color="secondary"
								aria-label="add"
								className="absolute bottom-0 ltr:left-0 rtl:right-0 mx-16 -mb-28 z-999"
							>
								<Icon>add</Icon>
							</Fab>
						</FuseAnimate>
						<FuseAnimate delay={200}>
							<div>
								{selectedItem && (
									<Breadcrumb
										selected={selectedItem}
										className="flex flex-1 ltr:pl-72 rtl:pr-72 pb-12 text-16 sm:text-24"
									/>
								)}
							</div>
						</FuseAnimate>
					</div>
				</div>
			}
			content={<FileList pageLayout={pageLayout} />}
			leftSidebarVariant="temporary"
			leftSidebarHeader={<MainSidebarHeader />}
			leftSidebarContent={<MainSidebarContent />}
			rightSidebarHeader={<DetailSidebarHeader />}
			rightSidebarContent={<DetailSidebarContent />}
			ref={pageLayout}
			innerScroll
		/>
	);
}

export default withReducer('fileManagerApp', reducer)(FileManagerApp);
