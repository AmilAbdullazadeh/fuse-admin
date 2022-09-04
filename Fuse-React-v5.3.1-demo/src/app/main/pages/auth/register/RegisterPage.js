import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

function RegisterPage() {
	const classes = useStyles();

	const { form, handleChange, resetForm } = useForm({
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',
		acceptTermsConditions: false
	});

	function isFormValid() {
		return (
			form.email.length > 0 &&
			form.password.length > 0 &&
			form.password.length > 3 &&
			form.password === form.passwordConfirm &&
			form.acceptTermsConditions
		);
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
							<img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo" />

							<Typography variant="h6" className="mt-16 mb-32 font-bold text-20 sm:text-24">
								Create an account
							</Typography>

							<form
								name="registerForm"
								noValidate
								className="flex flex-col justify-center w-full"
								onSubmit={handleSubmit}
							>
								<TextField
									className="mb-16"
									label="Name"
									autoFocus
									type="name"
									name="name"
									value={form.name}
									onChange={handleChange}
									variant="outlined"
									required
									fullWidth
								/>

								<TextField
									className="mb-16"
									label="Email"
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									variant="outlined"
									required
									fullWidth
								/>

								<TextField
									className="mb-16"
									label="Password"
									type="password"
									name="password"
									value={form.password}
									onChange={handleChange}
									variant="outlined"
									required
									fullWidth
								/>

								<TextField
									className="mb-16"
									label="Password (Confirm)"
									type="password"
									name="passwordConfirm"
									value={form.passwordConfirm}
									onChange={handleChange}
									variant="outlined"
									required
									fullWidth
								/>

								<FormControl className="items-center">
									<FormControlLabel
										control={
											<Checkbox
												name="acceptTermsConditions"
												checked={form.acceptTermsConditions}
												onChange={handleChange}
											/>
										}
										label="I read and accept terms and conditions"
									/>
								</FormControl>

								<Button
									variant="contained"
									color="primary"
									className="w-224 mx-auto mt-16"
									aria-label="Register"
									disabled={!isFormValid()}
									type="submit"
								>
									Create an account
								</Button>
							</form>

							<div className="flex flex-col items-center justify-center pt-32 pb-24">
								<span className="font-medium">Already have an account?</span>
								<Link className="font-medium" to="/pages/auth/login">
									Login
								</Link>
							</div>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default RegisterPage;
