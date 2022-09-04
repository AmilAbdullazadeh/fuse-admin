import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`,
		color: theme.palette.primary.contrastText
	}
}));

function ForgotPasswordPage() {
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
						<CardContent className="flex flex-col items-center justify-center p-32">
							<div className="w-128 m-32">
								<img src="assets/images/logos/fuse.svg" alt="logo" />
							</div>

							<Typography variant="h6" className="mt-16 mb-32 font-bold text-20 sm:text-24">
								Recover your password
							</Typography>

							<form
								name="recoverForm"
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
									className="w-224 mx-auto mt-16"
									aria-label="Reset"
									disabled={!isFormValid()}
									type="submit"
								>
									Send reset link
								</Button>
							</form>

							<div className="flex flex-col items-center justify-center pt-32 pb-24">
								<Link className="font-medium" to="/pages/auth/login">
									Go back to login
								</Link>
							</div>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default ForgotPasswordPage;
