import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PhotosVideosTab() {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get('/api/profile/photos-videos').then(res => {
			setData(res.data);
		});
	}, []);

	if (!data) {
		return null;
	}

	return (
		<div className="md:flex max-w-2xl">
			<div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">
				<FuseAnimateGroup
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					{data.map(period => (
						<div key={period.id} className="mb-48">
							<ListSubheader component="div" className="flex items-center px-0 mb-24">
								<Typography variant="h6">{period.name}</Typography>
								<Typography className="mx-16" variant="subtitle1" color="textSecondary">
									{period.info}
								</Typography>
							</ListSubheader>

							<GridList className="" spacing={8} cols={0}>
								{period.media.map(media => (
									<GridListTile
										classes={{
											root: 'w-full sm:w-1/2 md:w-1/4',
											tile: 'rounded-8 shadow'
										}}
										key={media.preview}
									>
										<img src={media.preview} alt={media.title} />
										<GridListTileBar
											title={media.title}
											actionIcon={
												<IconButton>
													<Icon className="text-white opacity-75">info</Icon>
												</IconButton>
											}
										/>
									</GridListTile>
								))}
							</GridList>
						</div>
					))}
				</FuseAnimateGroup>
			</div>
		</div>
	);
}

export default PhotosVideosTab;
