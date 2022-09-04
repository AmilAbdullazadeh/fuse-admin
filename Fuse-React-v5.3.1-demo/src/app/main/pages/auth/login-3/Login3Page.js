import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
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
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	},
	leftSection: {},
	rightSection: {
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	}
}));

function Login3Page() {
	const classes = useStyles();

	const { form, handleChange, resetForm } = useForm({
		email: '',
		password: '',
		remember: true
	});

	function isFormValid() {
		return form.email.length > 0 && form.password.length > 0;
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		resetForm();
	}

	return (
		<div
			className={clsx(
				classes.root,
				'flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24'
			)}
		>
			<FuseAnimate animation="transition.expandIn">
				<div className="flex w-full max-w-400 md:max-w-3xl rounded-12 shadow-2xl overflow-hidden">
					<Card
						className={clsx(
							classes.leftSection,
							'flex flex-col w-full max-w-sm items-center justify-center shadow-0'
						)}
						square
					>
						<CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
							<FuseAnimate delay={300}>
								<div className="flex items-center mb-48">
									<img className="logo-icon w-48" src="assets/images/logos/fuse.svg" alt="logo" />
									<div className="border-l-1 mr-4 w-1 h-40" />
									<div>
										<Typography className="text-24 font-800 logo-text" color="inherit">
											FUSE
										</Typography>
										<Typography
											className="text-16 tracking-widest -mt-8 font-700"
											color="textSecondary"
										>
											REACT
										</Typography>
									</div>
								</div>
							</FuseAnimate>

							<form
								name="loginForm"
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

								<div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
									<FormControl>
										<FormControlLabel
											control={
												<Checkbox
													name="remember"
													checked={form.remember}
													onChange={handleChange}
												/>
											}
											label="Remember Me"
										/>
									</FormControl>

									<Link className="font-medium" to="/pages/auth/forgot-password-2">
										Forgot Password?
									</Link>
								</div>

								<Button
									variant="contained"
									color="primary"
									className="w-full mx-auto mt-16"
									aria-label="LOG IN"
									disabled={!isFormValid()}
								>
									Login
								</Button>
							</form>

							<div className="my-24 flex items-center justify-center">
								<Divider className="w-32" />
								<span className="mx-8 font-bold">OR</span>
								<Divider className="w-32" />
							</div>

							<Button variant="outlined" color="primary" size="small" className="w-192 mb-8">
								Log in with Google
							</Button>

							<Button variant="outlined" color="primary" size="small" className="w-192">
								Log in with Facebook
							</Button>
						</CardContent>

						<div className="flex flex-col items-center justify-center pb-32">
							<span className="font-medium">Don't have an account?</span>
							<Link className="font-medium" to="/pages/auth/register-3">
								Create an account
							</Link>
						</div>
					</Card>

					<div
						className={clsx(classes.rightSection, 'hidden md:flex flex-1 items-center justify-center p-64')}
					>
						<div className="max-w-320">
							<FuseAnimate animation="transition.slideUpIn" delay={400}>
								<Typography variant="h3" color="inherit" className="font-800 leading-tight">
									Welcome <br />
									to the <br /> FUSE React!
								</Typography>
							</FuseAnimate>

							<FuseAnimate delay={500}>
								<Typography variant="subtitle1" color="inherit" className="mt-32">
									Powerful and professional admin template for Web Applications, CRM, CMS, Admin
									Panels and more.
								</Typography>
							</FuseAnimate>
						</div>
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default Login3Page;
