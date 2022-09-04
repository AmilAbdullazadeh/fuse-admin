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
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	}
}));

function Register2Page() {
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
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0')}>
			<div className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">
				<FuseAnimate animation="transition.expandIn">
					<img className="w-128 mb-32" src="assets/images/logos/fuse.svg" alt="logo" />
				</FuseAnimate>

				<FuseAnimate animation="transition.slideUpIn" delay={400}>
					<Typography variant="h3" color="inherit" className="font-800 leading-tight">
						Welcome to the <br /> FUSE React!
					</Typography>
				</FuseAnimate>

				<FuseAnimate delay={500}>
					<Typography variant="subtitle1" color="inherit" className="mt-32">
						Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more.
					</Typography>
				</FuseAnimate>
			</div>

			<FuseAnimate animation={{ translateX: [0, '100%'] }}>
				<Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>
					<CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">
						<Typography variant="h6" className="mb-32 font-bold text-20 sm:text-24">
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
								className="w-full mx-auto mt-16"
								aria-label="Register"
								disabled={!isFormValid()}
								type="submit"
							>
								Create an account
							</Button>
						</form>

						<div className="flex flex-col items-center justify-center pt-32 pb-24">
							<span className="font-medium">Already have an account?</span>
							<Link className="font-medium" to="/pages/auth/login-2">
								Login
							</Link>
						</div>
					</CardContent>
				</Card>
			</FuseAnimate>
		</div>
	);
}

export default Register2Page;
