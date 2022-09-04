import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Avatar from '@material-ui/core/Avatar';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withReducer from 'app/store/withReducer';
import GoogleMap from 'google-map-react';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import reducer from '../store';
import { resetOrder, getOrder } from '../store/orderSlice';
import OrderInvoice from './OrderInvoice';
import OrdersStatus from './OrdersStatus';

function Marker(props) {
	return (
		<Tooltip title={props.text} placement="top">
			<Icon className="text-red">place</Icon>
		</Tooltip>
	);
}

function Order(props) {
	const dispatch = useDispatch();
	const order = useSelector(({ eCommerceApp }) => eCommerceApp.order);
	const theme = useTheme();

	const routeParams = useParams();
	const [tabValue, setTabValue] = useState(0);
	const [noOrder, setNoOrder] = useState(false);
	const [map, setMap] = useState('shipping');

	useDeepCompareEffect(() => {
		dispatch(getOrder(routeParams)).then(action => {
			if (!action.payload) {
				setNoOrder(true);
			}
		});
	}, [dispatch, routeParams]);

	useEffect(() => {
		return () => {
			dispatch(resetOrder());
			setNoOrder(false);
		};
	}, [dispatch]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	if (noOrder) {
		return (
			<FuseAnimate delay={100}>
				<div className="flex flex-col flex-1 items-center justify-center h-full">
					<Typography color="textSecondary" variant="h5">
						There is no such order!
					</Typography>
					<Button
						className="mt-24"
						component={Link}
						variant="outlined"
						to="/apps/e-commerce/orders"
						color="inherit"
					>
						Go to Orders Page
					</Button>
				</div>
			</FuseAnimate>
		);
	}

	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={
				order && (
					<div className="flex flex-1 w-full items-center justify-between">
						<div className="flex flex-1 flex-col items-center sm:items-start">
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Typography
									className="flex items-center sm:mb-12"
									component={Link}
									role="button"
									to="/apps/e-commerce/orders"
									color="inherit"
								>
									<Icon className="text-20">
										{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
									</Icon>
									<span className="mx-4">Orders</span>
								</Typography>
							</FuseAnimate>

							<div className="flex flex-col min-w-0 items-center sm:items-start">
								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography className="text-16 sm:text-20 truncate">
										{`Order ${order.reference}`}
									</Typography>
								</FuseAnimate>

								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography variant="caption">
										{`From ${order.customer.firstName} ${order.customer.lastName}`}
									</Typography>
								</FuseAnimate>
							</div>
						</div>
					</div>
				)
			}
			contentToolbar={
				<Tabs
					value={tabValue}
					onChange={handleChangeTab}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
					classes={{ root: 'w-full h-64' }}
				>
					<Tab className="h-64" label="Order Details" />
					<Tab className="h-64" label="Products" />
					<Tab className="h-64" label="Invoice" />
				</Tabs>
			}
			content={
				order && (
					<div className="p-16 sm:p-24 max-w-2xl w-full">
						{/* Order Details */}
						{tabValue === 0 && (
							<div>
								<div className="pb-48">
									<div className="pb-16 flex items-center">
										<Icon color="action">account_circle</Icon>
										<Typography className="h2 mx-16" color="textSecondary">
											Customer
										</Typography>
									</div>

									<div className="mb-24">
										<div className="table-responsive mb-48">
											<table className="simple">
												<thead>
													<tr>
														<th>Name</th>
														<th>Email</th>
														<th>Phone</th>
														<th>Company</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div className="flex items-center">
																<Avatar src={order.customer.avatar} />
																<Typography className="truncate mx-8">
																	{`${order.customer.firstName} ${order.customer.lastName}`}
																</Typography>
															</div>
														</td>
														<td>
															<Typography className="truncate">
																{order.customer.email}
															</Typography>
														</td>
														<td>
															<Typography className="truncate">
																{order.customer.phone}
															</Typography>
														</td>
														<td>
															<span className="truncate">{order.customer.company}</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>

										<Accordion
											className="shadow"
											expanded={map === 'shipping'}
											onChange={() => setMap(map !== 'shipping' ? 'shipping' : false)}
										>
											<AccordionSummary expandIcon={<ExpandMoreIcon />}>
												<Typography className="font-600">Shipping Address</Typography>
											</AccordionSummary>
											<AccordionDetails className="flex flex-col md:flex-row">
												<Typography className="w-full md:max-w-256 mb-16 md:mb-0">
													{order.customer.shippingAddress.address}
												</Typography>
												<div className="w-full h-320">
													<GoogleMap
														bootstrapURLKeys={{
															key: process.env.REACT_APP_MAP_KEY
														}}
														defaultZoom={15}
														defaultCenter={[
															order.customer.shippingAddress.lat,
															order.customer.shippingAddress.lng
														]}
													>
														<Marker
															text={order.customer.shippingAddress.address}
															lat={order.customer.shippingAddress.lat}
															lng={order.customer.shippingAddress.lng}
														/>
													</GoogleMap>
												</div>
											</AccordionDetails>
										</Accordion>

										<Accordion
											className="shadow"
											expanded={map === 'invoice'}
											onChange={() => setMap(map !== 'invoice' ? 'invoice' : false)}
										>
											<AccordionSummary expandIcon={<ExpandMoreIcon />}>
												<Typography className="font-600">Invoice Address</Typography>
											</AccordionSummary>
											<AccordionDetails className="flex flex-col md:flex-row">
												<Typography className="w-full md:max-w-256 mb-16 md:mb-0">
													{order.customer.invoiceAddress.address}
												</Typography>
												<div className="w-full h-320">
													<GoogleMap
														bootstrapURLKeys={{
															key: process.env.REACT_APP_MAP_KEY
														}}
														defaultZoom={15}
														defaultCenter={[
															order.customer.invoiceAddress.lat,
															order.customer.invoiceAddress.lng
														]}
													>
														<Marker
															text={order.customer.invoiceAddress.address}
															lat={order.customer.invoiceAddress.lat}
															lng={order.customer.invoiceAddress.lng}
														/>
													</GoogleMap>
												</div>
											</AccordionDetails>
										</Accordion>
									</div>
								</div>

								<div className="pb-48">
									<div className="pb-16 flex items-center">
										<Icon color="action">access_time</Icon>
										<Typography className="h2 mx-16" color="textSecondary">
											Order Status
										</Typography>
									</div>

									<div className="table-responsive">
										<table className="simple">
											<thead>
												<tr>
													<th>Status</th>
													<th>Updated On</th>
												</tr>
											</thead>
											<tbody>
												{order.status.map(status => (
													<tr key={status.id}>
														<td>
															<OrdersStatus name={status.name} />
														</td>
														<td>{status.date}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>

								<div className="pb-48">
									<div className="pb-16 flex items-center">
										<Icon color="action">attach_money</Icon>
										<Typography className="h2 mx-16" color="textSecondary">
											Payment
										</Typography>
									</div>

									<div className="table-responsive">
										<table className="simple">
											<thead>
												<tr>
													<th>TransactionID</th>
													<th>Payment Method</th>
													<th>Amount</th>
													<th>Date</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<span className="truncate">{order.payment.transactionId}</span>
													</td>
													<td>
														<span className="truncate">{order.payment.method}</span>
													</td>
													<td>
														<span className="truncate">{order.payment.amount}</span>
													</td>
													<td>
														<span className="truncate">{order.payment.date}</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>

								<div className="pb-48">
									<div className="pb-16 flex items-center">
										<Icon color="action">local_shipping</Icon>
										<Typography className="h2 mx-12" color="textSecondary">
											Shipping
										</Typography>
									</div>

									<div className="table-responsive">
										<table className="simple">
											<thead>
												<tr>
													<th>Tracking Code</th>
													<th>Carrier</th>
													<th>Weight</th>
													<th>Fee</th>
													<th>Date</th>
												</tr>
											</thead>
											<tbody>
												{order.shippingDetails.map(shipping => (
													<tr key={shipping.date}>
														<td>
															<span className="truncate">{shipping.tracking}</span>
														</td>
														<td>
															<span className="truncate">{shipping.carrier}</span>
														</td>
														<td>
															<span className="truncate">{shipping.weight}</span>
														</td>
														<td>
															<span className="truncate">{shipping.fee}</span>
														</td>
														<td>
															<span className="truncate">{shipping.date}</span>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						)}
						{/* Products */}
						{tabValue === 1 && (
							<div className="table-responsive">
								<table className="simple">
									<thead>
										<tr>
											<th>ID</th>
											<th>Image</th>
											<th>Name</th>
											<th>Price</th>
											<th>Quantity</th>
										</tr>
									</thead>
									<tbody>
										{order.products.map(product => (
											<tr key={product.id}>
												<td className="w-64">{product.id}</td>
												<td className="w-80">
													<img className="product-image" src={product.image} alt="product" />
												</td>
												<td>
													<Typography
														component={Link}
														to={`/apps/e-commerce/products/${product.id}`}
														className="truncate"
														style={{
															color: 'inherit',
															textDecoration: 'underline'
														}}
													>
														{product.name}
													</Typography>
												</td>
												<td className="w-64 text-right">
													<span className="truncate">${product.price}</span>
												</td>
												<td className="w-64 text-right">
													<span className="truncate">{product.quantity}</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
						{/* Invoice */}
						{tabValue === 2 && <OrderInvoice order={order} />}
					</div>
				)
			}
			innerScroll
		/>
	);
}

export default withReducer('eCommerceApp', reducer)(Order);
