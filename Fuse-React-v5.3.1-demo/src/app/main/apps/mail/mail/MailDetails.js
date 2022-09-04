import FuseAnimate from '@fuse/core/FuseAnimate';
import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import MailChip from '../MailChip';
import { selectLabelsEntities } from '../store/labelsSlice';
import { getMail } from '../store/mailSlice';

function MailDetails(props) {
	const dispatch = useDispatch();
	const mail = useSelector(({ mailApp }) => mailApp.mail);
	const labels = useSelector(selectLabelsEntities);

	const routeParams = useParams();
	const [showDetails, setShowDetails] = useState(false);

	useDeepCompareEffect(() => {
		dispatch(getMail(routeParams));
	}, [dispatch, routeParams]);

	if (!mail) {
		return null;
	}

	return (
		<div className="p-16 sm:p-24">
			<div className="flex items-center justify-between overflow-hidden">
				<div className="flex flex-col">
					<FuseAnimate delay={100}>
						<Typography variant="subtitle1" className="flex">
							{mail.subject}
						</Typography>
					</FuseAnimate>

					{!_.isEmpty(labels) && mail.labels.length > 0 && (
						<div className="flex flex-wrap mt-8 -mx-2">
							{mail.labels.map(label => (
								<MailChip
									className="mt-4 mx-2"
									title={labels[label].title}
									color={labels[label].color}
									key={label}
								/>
							))}
						</div>
					)}
				</div>
			</div>

			<Divider className="my-16" />

			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div>
					<div className="flex items-start justify-between">
						<div className="flex items-center justify-start">
							{mail.from.avatar ? (
								<Avatar alt={mail.from.name} src={mail.from.avatar} />
							) : (
								<Avatar>{mail.from.name[0]}</Avatar>
							)}

							<div className="flex flex-col mx-8">
								<span>{mail.from.name}</span>
								<Typography
									component="div"
									color="textSecondary"
									variant="body1"
									className="flex items-center justify-start"
								>
									<div>to</div>
									<div className="mx-4">{mail.to[0].name}</div>
								</Typography>
							</div>
						</div>
						<IconButton>
							<Icon>more_vert</Icon>
						</IconButton>
					</div>

					<div className="my-16">
						<Typography
							color="primary"
							className="cursor-pointer underline mb-8"
							onClick={() => {
								setShowDetails(!showDetails);
							}}
						>
							{showDetails ? <span>Hide Details</span> : <span>Show Details</span>}
						</Typography>

						{showDetails && (
							<div className="flex">
								<Typography variant="body2" className="flex flex-col">
									<span>From:</span>
									<span>To:</span>
									<span>Date:</span>
								</Typography>

								<Typography variant="body2" color="textSecondary" className="px-4 flex flex-col">
									<span>{mail.from.email}</span>
									<span>{mail.to[0].email}</span>
									<span>{mail.time}</span>
								</Typography>
							</div>
						)}
					</div>

					<Typography variant="body2" dangerouslySetInnerHTML={{ __html: mail.message }} />

					<Divider className="my-16" />

					{mail.attachments && (
						<div>
							<Typography variant="subtitle1" className="mb-16">
								<span className="mx-4">Attachments</span>
								<span>({mail.attachments.length})</span>
							</Typography>

							<div className="flex flex-wrap -mx-8">
								{mail.attachments.map(attachment => (
									<div className="w-192 px-8 pb-16" key={attachment.fileName}>
										<img
											className="w-full rounded-4"
											src={attachment.preview}
											alt={attachment.fileName}
										/>
										<div className="flex flex-col">
											<Typography
												color="primary"
												className="underline cursor-pointer"
												onClick={event => event.preventDefault()}
											>
												View
											</Typography>
											<Typography
												color="primary"
												className="underline cursor-pointer"
												onClick={event => event.preventDefault()}
											>
												Download
											</Typography>
											<Typography>({attachment.size})</Typography>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</FuseAnimate>
		</div>
	);
}

export default withRouter(MailDetails);
