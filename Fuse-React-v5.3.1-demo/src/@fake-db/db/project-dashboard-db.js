import mock from '../mock';

const projectDashboardAppDB = {
	widgets: [
		{
			id: 'widget1',
			ranges: {
				DY: 'Yesterday',
				DT: 'Today',
				DTM: 'Tomorrow'
			},
			currentRange: 'DT',
			data: {
				label: 'DUE TASKS',
				count: {
					DY: 21,
					DT: 25,
					DTM: 19
				},
				extra: {
					label: 'Completed',
					count: {
						DY: 6,
						DT: 7,
						DTM: '-'
					}
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		{
			id: 'widget2',
			title: 'Overdue',
			data: {
				label: 'TASKS',
				count: 4,
				extra: {
					label: "Yesterday's overdue",
					count: 2
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		{
			id: 'widget3',
			title: 'Issues',
			data: {
				label: 'OPEN',
				count: 32,
				extra: {
					label: 'Closed today',
					count: 0
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		{
			id: 'widget4',
			title: 'Features',
			data: {
				label: 'PROPOSALS',
				count: 42,
				extra: {
					label: 'Implemented',
					count: 8
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		{
			id: 'widget5',
			title: 'Github Issues',
			ranges: {
				TW: 'This Week',
				LW: 'Last Week',
				'2W': '2 Weeks Ago'
			},
			mainChart: {
				TW: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [
						{
							type: 'bar',
							label: 'Issues',
							data: [42, 28, 43, 34, 20, 25, 22],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Closed issues',
							data: [11, 10, 8, 11, 8, 10, 17],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						}
					]
				},
				'2W': {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [
						{
							type: 'bar',
							label: 'Issues',
							data: [37, 32, 39, 27, 18, 24, 20],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Closed issues',
							data: [9, 12, 9, 12, 7, 8, 16],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						}
					]
				},
				LW: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [
						{
							type: 'bar',
							label: 'Issues',
							data: [37, 24, 51, 31, 29, 17, 31],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Closed issues',
							data: [12, 8, 7, 13, 7, 6, 10],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						}
					]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: false
					},
					tooltips: {
						mode: 'label'
					},
					scales: {
						xAxes: [
							{
								stacked: true,
								display: true,
								gridLines: {
									display: false
								},
								labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
							}
						],
						yAxes: [
							{
								stacked: true,
								type: 'linear',
								display: true,
								position: 'left',
								gridLines: {
									display: false
								},
								labels: {
									show: true
								}
							}
						]
					}
				}
			},
			supporting: {
				created: {
					label: 'CREATED',
					count: {
						'2W': 48,
						LW: 46,
						TW: 54
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [5, 8, 5, 6, 7, 8, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [3, 2, 1, 4, 8, 8, 4],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				closed: {
					label: 'CLOSED',
					count: {
						'2W': 27,
						LW: 31,
						TW: 26
					},
					chart: {
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [3, 2, 1, 4, 8, 8, 4],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 5, 4, 5, 7, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				reOpened: {
					label: 'RE-OPENED',
					count: {
						'2W': 4,
						LW: 5,
						TW: 2
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 8, 8, 6, 4, 1],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [3, 2, 1, 4, 8, 8, 4],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW2: [
							{
								name: 'RE-OPENED',
								series: [
									{
										name: 'Mon',
										value: 3
									},
									{
										name: 'Tue',
										value: 2
									},
									{
										name: 'Wed',
										value: 1
									},
									{
										name: 'Thu',
										value: 4
									},
									{
										name: 'Fri',
										value: 8
									},
									{
										name: 'Sat',
										value: 8
									},
									{
										name: 'Sun',
										value: 4
									}
								]
							}
						],
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				wontFix: {
					label: "WON'T FIX",
					count: {
						'2W': 6,
						LW: 3,
						TW: 4
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 4, 6, 5, 3, 2],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 5, 4, 5, 7, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				needsTest: {
					label: 'NEEDS TEST',
					count: {
						'2W': 10,
						LW: 7,
						TW: 8
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [6, 5, 4, 5, 7, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 8, 8, 6, 4, 1],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				fixed: {
					label: 'FIXED',
					count: {
						'2W': 21,
						LW: 17,
						TW: 14
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 8, 8, 6, 4, 1],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 5, 4, 5, 7, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 4, 6, 5, 3, 2],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				}
			}
		},
		{
			id: 'widget6',
			title: 'Task Distribution',
			ranges: {
				TW: 'This Week',
				LW: 'Last Week',
				'2W': '2 Weeks Ago'
			},
			currentRange: 'TW',
			mainChart: {
				labels: ['Frontend', 'Backend', 'API', 'Issues'],
				datasets: {
					TW: [
						{
							data: [15, 20, 38, 27],
							backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63'],
							hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F']
						}
					],
					LW: [
						{
							data: [19, 16, 42, 23],
							backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63'],
							hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F']
						}
					],
					'2W': [
						{
							data: [18, 17, 40, 25],
							backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63'],
							hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F']
						}
					]
				},
				options: {
					cutoutPercentage: 66,
					spanGaps: false,
					legend: {
						display: true,
						position: 'bottom',
						labels: {
							padding: 16,
							usePointStyle: true
						}
					},
					maintainAspectRatio: false
				}
			},
			footerLeft: {
				title: 'Tasks Added',
				count: {
					'2W': 487,
					LW: 526,
					TW: 594
				}
			},
			footerRight: {
				title: 'Tasks Completed',
				count: {
					'2W': 193,
					LW: 260,
					TW: 287
				}
			}
		},
		{
			id: 'widget7',
			title: 'Schedule',
			currentRange: 'T',
			ranges: {
				T: 'Today',
				TM: 'Tomorrow'
			},
			schedule: {
				T: [
					{
						id: 1,
						title: 'Group Meeting',
						time: 'In 32 minutes'
					},
					{
						id: 2,
						title: 'Coffee Break',
						time: '10:30 AM'
					},
					{
						id: 3,
						title: 'Public Beta Release',
						time: '11:00 AM'
					},
					{
						id: 4,
						title: 'Lunch',
						time: '12:10 PM'
					},
					{
						id: 5,
						title: 'Dinner with David',
						time: '17:30 PM'
					},
					{
						id: 6,
						title: "Jane's Birthday Party",
						time: '19:30 PM'
					},
					{
						id: 7,
						title: "Overseer's Retirement Party",
						time: '21:30 PM'
					}
				],
				TM: [
					{
						id: 1,
						title: 'Marketing Meeting',
						time: '09:00 AM'
					},
					{
						id: 2,
						title: 'Public Announcement',
						time: '11:00 AM'
					},
					{
						id: 3,
						title: 'Lunch',
						time: '12:10 PM'
					},
					{
						id: 4,
						title: 'Meeting with Beta Testers',
						time: '15:00 AM'
					},
					{
						id: 5,
						title: 'Live Stream',
						time: '17:30 PM'
					},
					{
						id: 6,
						title: 'Release Party',
						time: '19:30 PM'
					},
					{
						id: 7,
						title: "CEO's Party",
						time: '22:30 PM'
					}
				]
			}
		},
		{
			id: 'widget8',
			title: 'Budget Distribution',
			mainChart: {
				labels: ['Wireframing', 'Design', 'Coding', 'Marketing', 'Extra'],
				datasets: [
					{
						data: [12, 17, 28, 25, 15],
						backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63', '#FFC107'],
						hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F', '#FFD341']
					}
				],
				options: {
					cutoutPercentage: 0,
					spanGaps: false,
					legend: {
						display: true,
						position: 'bottom',
						labels: {
							padding: 16,
							usePointStyle: true
						}
					},
					maintainAspectRatio: false
				}
			}
		},
		{
			id: 'widget9',
			title: 'Spent',
			ranges: {
				TW: 'This Week',
				LW: 'Last Week',
				'2W': '2 Weeks Ago'
			},
			currentRange: 'TW',
			weeklySpent: {
				title: 'WEEKLY SPENT',
				count: {
					'2W': '2,682.85',
					LW: '1,445.34',
					TW: '3,630.15'
				},
				chart: {
					'2W': {
						datasets: [
							{
								label: 'Created',
								data: [2, 6, 5, 4, 5, 3, 6],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					LW: {
						datasets: [
							{
								label: 'Created',
								data: [4, 6, 2, 2, 1, 3, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					TW: {
						datasets: [
							{
								label: 'Created',
								data: [2, 6, 5, 4, 5, 3, 6],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					options: {
						legend: {
							display: false
						},
						maintainAspectRatio: false,
						scales: {
							xAxes: [
								{
									display: false
								}
							],
							yAxes: [
								{
									display: false
								}
							]
						}
					}
				}
			},
			totalSpent: {
				title: 'TOTAL SPENT',
				count: {
					'2W': '29,682.85',
					LW: '31,128.19',
					TW: '34,758.34'
				},
				chart: {
					'2W': {
						datasets: [
							{
								label: 'Created',
								data: [3, 2, 2, 4, 7, 7, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					LW: {
						datasets: [
							{
								label: 'Created',
								data: [5, 7, 8, 8, 6, 4, 1],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					TW: {
						datasets: [
							{
								label: 'Created',
								data: [6, 4, 7, 5, 5, 4, 7],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					options: {
						legend: {
							display: false
						},
						maintainAspectRatio: false,
						scales: {
							xAxes: [
								{
									display: false
								}
							],
							yAxes: [
								{
									display: false
								}
							]
						}
					}
				}
			},
			remaining: {
				title: 'REMAINING',
				count: {
					'2W': '94.317,15',
					LW: '92.871,81',
					TW: '89.241,66'
				},
				chart: {
					'2W': {
						datasets: [
							{
								label: 'Created',
								data: [1, 4, 5, 7, 8, 2, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					LW: {
						datasets: [
							{
								label: 'Created',
								data: [3, 2, 1, 4, 8, 8, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					TW: {
						datasets: [
							{
								label: 'Created',
								data: [2, 4, 8, 6, 2, 5, 1],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					options: {
						legend: {
							display: false
						},
						maintainAspectRatio: false,
						scales: {
							xAxes: [
								{
									display: false
								}
							],
							yAxes: [
								{
									display: false
								}
							]
						}
					}
				}
			},
			totalBudget: {
				title: 'TOTAL BUDGET',
				count: '124.000,00'
			}
		},
		{
			id: 'widget10',
			title: 'Budget Details',
			table: {
				columns: [
					{
						id: 'budget_type',
						title: 'Budget Type'
					},
					{
						id: 'total_budget',
						title: 'Total Budget'
					},
					{
						id: 'spent_usd',
						title: 'Spent ($)'
					},
					{
						id: 'spent_perc',
						title: 'Spent (%)'
					},
					{
						id: 'remaining_usd',
						title: 'Remaining ($)'
					},
					{
						id: 'remaining_perc',
						title: 'Remaining (%)'
					}
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'budget_type',
								value: 'Wireframing',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$14,880.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$14,000.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%94.08',
								classes: 'text-green',
								icon: 'trending_up'
							},
							{
								id: 'remaining_usd',
								value: '$880.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%5.92',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'budget_type',
								value: 'Design',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$21,080.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$17,240.34',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%81.78',
								classes: 'text-green',
								icon: 'trending_up'
							},
							{
								id: 'remaining_usd',
								value: '$3,839.66',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%18.22',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'budget_type',
								value: 'Coding',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$34,720.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$3,518.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%10.13',
								classes: 'text-red',
								icon: 'trending_down'
							},
							{
								id: 'remaining_usd',
								value: '$31,202.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%89.87',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'budget_type',
								value: 'Marketing',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$34,720.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$0.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%0.00',
								classes: 'text-blue',
								icon: 'trending_flat'
							},
							{
								id: 'remaining_usd',
								value: '$34,720.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%100.00',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'budget_type',
								value: 'Extra',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$18,600.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$0.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%0.00',
								classes: 'text-blue',
								icon: 'trending_flat'
							},
							{
								id: 'remaining_usd',
								value: '$34,720.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%100.00',
								classes: '',
								icon: ''
							}
						]
					}
				]
			}
		},
		{
			id: 'widget11',
			title: 'Team Members',
			table: {
				columns: [
					{
						id: 'avatar',
						title: ''
					},
					{
						id: 'name',
						title: 'Name'
					},
					{
						id: 'position',
						title: 'Position'
					},
					{
						id: 'office',
						title: 'Office'
					},
					{
						id: 'email',
						title: 'Email'
					},
					{
						id: 'phone',
						title: 'Phone'
					}
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/james.jpg'
							},
							{
								id: 'name',
								value: 'Jack Gilbert'
							},
							{
								id: 'position',
								value: 'Design Manager'
							},
							{
								id: 'office',
								value: 'Johor Bahru'
							},
							{
								id: 'email',
								value: 'jgilbert48@mail.com'
							},
							{
								id: 'phone',
								value: '+16 298 032 7774'
							}
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/katherine.jpg'
							},
							{
								id: 'name',
								value: 'Kathy Anderson'
							},
							{
								id: 'position',
								value: 'Recruiting Manager'
							},
							{
								id: 'office',
								value: 'Solţānābād'
							},
							{
								id: 'email',
								value: 'kanderson49@mail.com.br'
							},
							{
								id: 'phone',
								value: '+23 572 311 1136'
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/garry.jpg'
							},
							{
								id: 'name',
								value: 'Gary Gonzalez'
							},
							{
								id: 'position',
								value: 'Speech Pathologist'
							},
							{
								id: 'office',
								value: 'Gangkou'
							},
							{
								id: 'email',
								value: 'ggonzalez4r@mail.cc'
							},
							{
								id: 'phone',
								value: '+10 862 046 7916'
							}
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/andrew.jpg'
							},
							{
								id: 'name',
								value: 'Mark Turner'
							},
							{
								id: 'position',
								value: 'Recruiting Manager'
							},
							{
								id: 'office',
								value: 'Neftegorsk'
							},
							{
								id: 'email',
								value: 'mturner4a@mail.com'
							},
							{
								id: 'phone',
								value: '+01 139 803 9263'
							}
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/jane.jpg'
							},
							{
								id: 'name',
								value: 'Kathryn Martinez'
							},
							{
								id: 'position',
								value: 'Director of Sales'
							},
							{
								id: 'office',
								value: 'Palekastro'
							},
							{
								id: 'email',
								value: 'kmartinez4b@mail.com'
							},
							{
								id: 'phone',
								value: '+25 467 022 5393'
							}
						]
					},
					{
						id: 6,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/alice.jpg'
							},
							{
								id: 'name',
								value: 'Annie Gonzales'
							},
							{
								id: 'position',
								value: 'Actuary'
							},
							{
								id: 'office',
								value: 'Candon'
							},
							{
								id: 'email',
								value: 'agonzales4c@mail.edu'
							},
							{
								id: 'phone',
								value: '+99 891 619 7138'
							}
						]
					},
					{
						id: 7,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/vincent.jpg'
							},
							{
								id: 'name',
								value: 'Howard King'
							},
							{
								id: 'position',
								value: 'Human Resources'
							},
							{
								id: 'office',
								value: 'Bergen op Zoom'
							},
							{
								id: 'email',
								value: 'hking4d@mail.gov'
							},
							{
								id: 'phone',
								value: '+46 984 348 1409'
							}
						]
					},
					{
						id: 8,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/joyce.jpg'
							},
							{
								id: 'name',
								value: 'Elizabeth Dixon'
							},
							{
								id: 'position',
								value: 'Electrical Engineer'
							},
							{
								id: 'office',
								value: 'Písečná'
							},
							{
								id: 'email',
								value: 'edixon4e@mail.gov'
							},
							{
								id: 'phone',
								value: '+33 332 067 9063'
							}
						]
					},
					{
						id: 9,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/danielle.jpg'
							},
							{
								id: 'name',
								value: 'Dorothy Morris'
							},
							{
								id: 'position',
								value: 'Office Assistant'
							},
							{
								id: 'office',
								value: 'Magsaysay'
							},
							{
								id: 'email',
								value: 'dmorris4f@mail.com'
							},
							{
								id: 'phone',
								value: '+05 490 958 6120'
							}
						]
					},
					{
						id: 10,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/carl.jpg'
							},
							{
								id: 'name',
								value: 'Mark Gonzales'
							},
							{
								id: 'position',
								value: 'Quality Control'
							},
							{
								id: 'office',
								value: 'Matsue-shi'
							},
							{
								id: 'email',
								value: 'mgonzales4g@mail.com'
							},
							{
								id: 'phone',
								value: '+03 168 394 9935'
							}
						]
					},
					{
						id: 11,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/profile.jpg'
							},
							{
								id: 'name',
								value: 'Catherine Rogers'
							},
							{
								id: 'position',
								value: 'Programmer Analyst'
							},
							{
								id: 'office',
								value: 'Kangar'
							},
							{
								id: 'email',
								value: 'crogers4h@mail.com'
							},
							{
								id: 'phone',
								value: '+86 235 407 5373'
							}
						]
					},
					{
						id: 12,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/garry.jpg'
							},
							{
								id: 'name',
								value: 'Ruth Grant'
							},
							{
								id: 'position',
								value: 'Community Outreach'
							},
							{
								id: 'office',
								value: 'Beaune'
							},
							{
								id: 'email',
								value: 'rgrant4i@mail.pl'
							},
							{
								id: 'phone',
								value: '+36 288 083 8460'
							}
						]
					},
					{
						id: 13,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/james.jpg'
							},
							{
								id: 'name',
								value: 'Phyllis Gutierrez'
							},
							{
								id: 'position',
								value: 'Administrative Assistant'
							},
							{
								id: 'office',
								value: 'Shlissel’burg'
							},
							{
								id: 'email',
								value: 'pgutierrez4j@mail.net'
							},
							{
								id: 'phone',
								value: '+52 749 861 9304'
							}
						]
					},
					{
						id: 14,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/alice.jpg'
							},
							{
								id: 'name',
								value: 'Lillian Morris'
							},
							{
								id: 'position',
								value: 'Media Planner'
							},
							{
								id: 'office',
								value: 'Berlin'
							},
							{
								id: 'email',
								value: 'lmorris4k@mail.de'
							},
							{
								id: 'phone',
								value: '+59 695 110 3856'
							}
						]
					},
					{
						id: 15,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/vincent.jpg'
							},
							{
								id: 'name',
								value: 'Jeremy Anderson'
							},
							{
								id: 'position',
								value: 'Systems Engineer'
							},
							{
								id: 'office',
								value: 'Lũng Hồ'
							},
							{
								id: 'email',
								value: 'janderson4l@mail.uk'
							},
							{
								id: 'phone',
								value: '+40 384 115 1448'
							}
						]
					},
					{
						id: 16,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/carl.jpg'
							},
							{
								id: 'name',
								value: 'Arthur Lawrence'
							},
							{
								id: 'position',
								value: 'Nurse Practicioner'
							},
							{
								id: 'office',
								value: 'Sarkanjut'
							},
							{
								id: 'email',
								value: 'alawrence4m@mail.com'
							},
							{
								id: 'phone',
								value: '+36 631 599 7867'
							}
						]
					},
					{
						id: 17,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/andrew.jpg'
							},
							{
								id: 'name',
								value: 'David Simmons'
							},
							{
								id: 'position',
								value: 'Social Worker'
							},
							{
								id: 'office',
								value: 'Ushumun'
							},
							{
								id: 'email',
								value: 'dsimmons4n@mail.com'
							},
							{
								id: 'phone',
								value: '+01 189 681 4417'
							}
						]
					},
					{
						id: 18,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/danielle.jpg'
							},
							{
								id: 'name',
								value: 'Daniel Johnston'
							},
							{
								id: 'position',
								value: 'Help Desk'
							},
							{
								id: 'office',
								value: 'São Carlos'
							},
							{
								id: 'email',
								value: 'djohnston4o@mail.gov'
							},
							{
								id: 'phone',
								value: '+60 028 943 7919'
							}
						]
					},
					{
						id: 19,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/joyce.jpg'
							},
							{
								id: 'name',
								value: 'Ann King'
							},
							{
								id: 'position',
								value: 'Internal Auditor'
							},
							{
								id: 'office',
								value: 'Liren'
							},
							{
								id: 'email',
								value: 'aking4p@mail.com'
							},
							{
								id: 'phone',
								value: '+91 103 932 6545'
							}
						]
					},
					{
						id: 20,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/james.jpg'
							},
							{
								id: 'name',
								value: 'Phillip Franklin'
							},
							{
								id: 'position',
								value: 'VP Accounting'
							},
							{
								id: 'office',
								value: 'Soba'
							},
							{
								id: 'email',
								value: 'pfranklin4q@mail.com'
							},
							{
								id: 'phone',
								value: '+25 820 986 7626'
							}
						]
					}
				]
			}
		},
		{
			id: 'weatherWidget',
			locations: {
				NewYork: {
					name: 'New York',
					icon: 'rainy2',
					temp: {
						C: '22',
						F: '72'
					},
					windSpeed: {
						KMH: 12,
						MPH: 7.5
					},
					windDirection: 'NW',
					rainProbability: '98%',
					next3Days: [
						{
							name: 'Sunday',
							icon: 'rainy',
							temp: {
								C: '21',
								F: '70'
							}
						},
						{
							name: 'Monday',
							icon: 'cloudy',
							temp: {
								C: '19',
								F: '66'
							}
						},
						{
							name: 'Tuesday',
							icon: 'windy3',
							temp: {
								C: '24',
								F: '75'
							}
						}
					]
				}
			},
			currentLocation: 'NewYork',
			tempUnit: 'C',
			speedUnit: 'KMH'
		}
	],
	projects: [
		{
			id: 1,
			name: 'ACME Corp. Backend App'
		},
		{
			id: 2,
			name: 'ACME Corp. Frontend App'
		},
		{
			id: 3,
			name: 'Creapond'
		},
		{
			id: 4,
			name: 'Withinpixels'
		}
	]
};

mock.onGet('/api/project-dashboard-app/widgets').reply(config => {
	return [200, projectDashboardAppDB.widgets];
});

mock.onGet('/api/project-dashboard-app/projects').reply(config => {
	return [200, projectDashboardAppDB.projects];
});
