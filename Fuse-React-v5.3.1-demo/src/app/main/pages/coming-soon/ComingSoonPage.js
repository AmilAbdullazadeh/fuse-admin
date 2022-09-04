import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseCountdown from '@fuse/core/FuseCountdown';
import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`,
		color: theme.palette.primary.contrastText
	}
}));

function ComingSoonPage() {
	const classes = useStyles();

	const { form, handleChange, resetForm } = useForm({
		email: ''
	});

	function isFormValid() {
		return form.email.length > 0;
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		resetForm();
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
					<Card className="w-full max-w-384 rounded-8">
						<CardContent className="flex flex-col items-center justify-center p-32 text-center">
							<img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo" />

							<Typography variant="subtitle1" className="mb-16">
								Hey! Thank you for checking out our app.
							</Typography>

							<Typography color="textSecondary" className="max-w-288">
								It’s not quite ready yet, but we are working hard and it will be ready in approximately:
							</Typography>

							<FuseCountdown endDate="2023-07-28" className="my-48" />

							<Divider className="w-48" />

							<Typography className="font-bold my-32 w-full">
								If you would like to be notified when the app is ready, you can subscribe to our e-mail
								list.
							</Typography>

							<form
								name="subscribeForm"
								noValidate
								className="flex flex-col justify-center w-full"
								onSubmit={handleSubmit}
							>
								<TextField
									className="mb-16"
									label="Email"
									autoFocus
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									variant="outlined"
									required
									fullWidth
								/>

								<Button
									variant="contained"
									color="primary"
									className="w-224 mx-auto my-16"
									aria-label="Subscribe"
									disabled={!isFormValid()}
									type="submit"
								>
									Subscribe
								</Button>
							</form>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default ComingSoonPage;
