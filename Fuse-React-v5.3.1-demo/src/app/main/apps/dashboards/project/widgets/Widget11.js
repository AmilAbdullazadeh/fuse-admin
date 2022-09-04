import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function Widget11(props) {
	return (
		<Paper className="w-full rounded-8 shadow">
			<div className="flex items-center justify-between px-16 h-64 border-b-1">
				<Typography className="text-16">{props.widget.title}</Typography>
				<Typography className="text-11 font-500 rounded-4 text-white bg-blue px-8 py-4">
					{`${props.widget.table.rows.length} Members`}
				</Typography>
			</div>
			<div className="table-responsive">
				<Table className="w-full min-w-full" size="small">
					<TableHead>
						<TableRow>
							{props.widget.table.columns.map(column => {
								switch (column.id) {
									case 'avatar': {
										return (
											<TableCell key={column.id} className="whitespace-nowrap p-8 px-16">
												{column.title}
											</TableCell>
										);
									}
									default: {
										return (
											<TableCell key={column.id} className="whitespace-nowrap">
												{column.title}
											</TableCell>
										);
									}
								}
							})}
						</TableRow>
					</TableHead>
					<TableBody>
						{props.widget.table.rows.map(row => (
							<TableRow key={row.id}>
								{row.cells.map(cell => {
									switch (cell.id) {
										case 'avatar': {
											return (
												<TableCell key={cell.id} component="th" scope="row" className="px-16">
													<Avatar src={cell.value} />
												</TableCell>
											);
										}
										case 'name': {
											return (
												<TableCell
													key={cell.id}
													component="th"
													scope="row"
													className="truncate font-600"
												>
													{cell.value}
												</TableCell>
											);
										}
										default: {
											return (
												<TableCell
													key={cell.id}
													component="th"
													scope="row"
													className="truncate"
												>
													{cell.value}
												</TableCell>
											);
										}
									}
								})}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</Paper>
	);
}

export default React.memo(Widget11);
