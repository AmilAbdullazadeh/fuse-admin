import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import reducer from '../store';
import { selectBoards, newBoard, getBoards, resetBoards } from '../store/boardsSlice';

const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.primary.main,
		color: theme.palette.getContrastText(theme.palette.primary.main)
	},
	board: {
		cursor: 'pointer',
		transitionProperty: 'box-shadow border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		background: theme.palette.primary.dark,
		color: theme.palette.getContrastText(theme.palette.primary.dark)
	},
	newBoard: {
		borderWidth: 2,
		borderStyle: 'dashed',
		borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.6),
		'&:hover': {
			borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.8)
		}
	}
}));

function Boards(props) {
	const dispatch = useDispatch();
	const boards = useSelector(selectBoards);

	const classes = useStyles(props);

	useEffect(() => {
		dispatch(getBoards());
		return () => {
			dispatch(resetBoards());
		};
	}, [dispatch]);

	return (
		<div className={clsx(classes.root, 'flex flex-grow flex-shrink-0 flex-col items-center')}>
			<div className="flex flex-grow flex-shrink-0 flex-col items-center container px-16 md:px-24">
				<FuseAnimate>
					<Typography className="mt-44 sm:mt-88 sm:py-24 text-32 sm:text-40 font-300" color="inherit">
						Scrumboard App
					</Typography>
				</FuseAnimate>

				<div>
					<FuseAnimateGroup
						className="flex flex-wrap w-full justify-center py-32 px-16"
						enter={{
							animation: 'transition.slideUpBigIn',
							duration: 300
						}}
					>
						{boards.map(board => (
							<div className="w-224 h-224 p-16" key={board.id}>
								<Link
									to={`/apps/scrumboard/boards/${board.id}/${board.uri}`}
									className={clsx(
										classes.board,
										'flex flex-col items-center justify-center w-full h-full rounded-8 py-24 shadow hover:shadow-lg'
									)}
									role="button"
								>
									<Icon className="text-56">assessment</Icon>
									<Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">
										{board.name}
									</Typography>
								</Link>
							</div>
						))}
						<div className="w-224 h-224 p-16">
							<div
								className={clsx(
									classes.board,
									classes.newBoard,
									'flex flex-col items-center justify-center w-full h-full rounded-8 py-24 shadow hover:shadow-lg'
								)}
								onClick={() => dispatch(newBoard())}
								onKeyDown={() => dispatch(newBoard())}
								role="button"
								tabIndex={0}
							>
								<Icon className="text-56">add_circle</Icon>
								<Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">
									Add new board
								</Typography>
							</div>
						</div>
					</FuseAnimateGroup>
				</div>
			</div>
		</div>
	);
}

export default withReducer('scrumboardApp', reducer)(Boards);
