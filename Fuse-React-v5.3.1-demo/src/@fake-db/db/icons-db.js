import mock from '../mock';
// import _ from '@lodash';
const     iconsDB = [
	{
		"name": "360",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"360",
			"arrow",
			"av",
			"camera",
			"rotation",
			"vr"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "3d_rotation",
		"version": 10,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"3",
			"3d",
			"D",
			"alphabet",
			"arrow",
			"arrows",
			"av",
			"camera",
			"character",
			"digit",
			"font",
			"letter",
			"number",
			"rotation",
			"symbol",
			"text",
			"type",
			"vr"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "4k",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"4000",
			"4K",
			"alphabet",
			"character",
			"digit",
			"display",
			"font",
			"letter",
			"number",
			"pixel",
			"pixels",
			"resolution",
			"symbol",
			"text",
			"type",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "5g",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"5g",
			"alphabet",
			"cellular",
			"character",
			"data",
			"digit",
			"font",
			"letter",
			"mobile",
			"network",
			"number",
			"phone",
			"signal",
			"speed",
			"symbol",
			"text",
			"type",
			"wifi"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "6_ft_apart",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"6",
			"apart",
			"body",
			"distance",
			"feet",
			"ft",
			"human",
			"people",
			"person",
			"social"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "ac_unit",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"ac",
			"air",
			"cold",
			"conditioner",
			"flake",
			"snow",
			"temperature",
			"unit",
			"weather",
			"winter"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "access_alarm",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "access_alarms",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "access_time",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "accessibility",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"accessibility",
			"accessible",
			"body",
			"handicap",
			"help",
			"human",
			"person"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "accessibility_new",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"accessibility",
			"accessible",
			"body",
			"handicap",
			"help",
			"human",
			"person"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "accessible",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"accessibility",
			"accessible",
			"body",
			"handicap",
			"help",
			"human",
			"person",
			"wheelchair"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "accessible_forward",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"accessibility",
			"accessible",
			"body",
			"handicap",
			"help",
			"human",
			"person",
			"wheelchair"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "account_balance",
		"version": 9,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"balance",
			"bank",
			"bill",
			"card",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"money",
			"online",
			"pay",
			"payment"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "account_balance_wallet",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"balance",
			"bank",
			"bill",
			"card",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"money",
			"online",
			"pay",
			"payment"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "account_box",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"face",
			"human",
			"people",
			"person",
			"profile",
			"square",
			"thumbnail",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "account_circle",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"circle",
			"face",
			"human",
			"people",
			"person",
			"profile",
			"thumbnail",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "account_tree",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"account",
			"connect",
			"process",
			"square",
			"structure",
			"tree"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "ad_units",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"Android",
			"OS",
			"ad",
			"banner",
			"cell",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"notification",
			"notifications",
			"phone",
			"tablet",
			"top",
			"units"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "adb",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"adb",
			"android",
			"bridge",
			"debug"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"+",
			"add",
			"create",
			"new",
			"plus"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_a_photo",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"add",
			"camera",
			"image",
			"photo",
			"photography",
			"picture",
			"plus"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_alarm",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_alert",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"alert"
		],
		"tags": [
			"active",
			"add",
			"alarm",
			"alert",
			"bell",
			"chime",
			"increase",
			"notifications",
			"notify",
			"plus",
			"reminder",
			"ringing",
			"sound"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_box",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"+",
			"add",
			"box",
			"create",
			"new",
			"plus",
			"square"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_business",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"+",
			"add",
			"business",
			"market",
			"plus",
			"retail",
			"shop",
			"shopping",
			"store",
			"storefront"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "add_circle",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"+",
			"add",
			"box",
			"circle",
			"create",
			"new",
			"plus"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_circle_outline",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"+",
			"add",
			"box",
			"circle",
			"create",
			"new",
			"plus"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_comment",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"+",
			"add",
			"bubble",
			"chat",
			"comment",
			"feedback",
			"message",
			"plus"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_ic_call",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_location",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"add",
			"destination",
			"direction",
			"location",
			"maps",
			"pin",
			"place",
			"plus",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_location_alt",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"add",
			"destination",
			"direction",
			"location",
			"maps",
			"pin",
			"place",
			"plus",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_photo_alternate",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"add",
			"image",
			"landscape",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture",
			"plus"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_road",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"add",
			"destination",
			"direction",
			"highway",
			"plus",
			"road",
			"stop",
			"street"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "add_shopping_cart",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"add",
			"card",
			"cart",
			"cash",
			"checkout",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"money",
			"online",
			"pay",
			"payment",
			"plus",
			"shopping"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_task",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"+",
			"add",
			"approve",
			"check",
			"circle",
			"completed",
			"increase",
			"mark",
			"ok",
			"plus",
			"select",
			"task",
			"tick",
			"yes"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_to_home_screen",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"Android",
			"OS",
			"add",
			"arrow",
			"device",
			"hardware",
			"homescreen",
			"iOS",
			"mobile",
			"phone",
			"tablet",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_to_photos",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"add",
			"collection",
			"image",
			"landscape",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture",
			"plus"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "add_to_queue",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"add",
			"backlog",
			"desktop",
			"display",
			"lineup",
			"monitor plus",
			"queue",
			"watch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "addchart",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"add",
			"analytics",
			"bar",
			"bars",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"plus",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "adjust",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"alter",
			"circle",
			"circles",
			"dot",
			"fix",
			"image",
			"move"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "admin_panel_settings",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"admin",
			"certified",
			"face",
			"human",
			"panel",
			"people",
			"person",
			"profile",
			"security",
			"settings",
			"shield",
			"user"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "agriculture",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"Farm",
			"automobile",
			"car",
			"cars",
			"cultivation",
			"harvest",
			"maps",
			"tractor",
			"transport",
			"truck",
			"vehicle"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "airline_seat_flat",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"airline",
			"body",
			"business",
			"class",
			"first",
			"flat",
			"human",
			"people",
			"person",
			"rest",
			"seat",
			"sleep",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "airline_seat_flat_angled",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"airline",
			"angled",
			"body",
			"business",
			"class",
			"first",
			"flat",
			"human",
			"people",
			"person",
			"rest",
			"seat",
			"sleep",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "airline_seat_individual_suite",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"airline",
			"body",
			"business",
			"class",
			"first",
			"human",
			"individual",
			"people",
			"person",
			"rest",
			"seat",
			"sleep",
			"suite"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "airline_seat_legroom_extra",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"airline",
			"body",
			"extra",
			"feet",
			"human",
			"leg",
			"legroom",
			"people",
			"person",
			"seat",
			"sitting",
			"space",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "airline_seat_legroom_normal",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"airline",
			"body",
			"feet",
			"human",
			"leg",
			"legroom",
			"normal",
			"people",
			"person",
			"seat",
			"sitting",
			"space",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "airline_seat_legroom_reduced",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"airline",
			"body",
			"feet",
			"human",
			"leg",
			"legroom",
			"people",
			"person",
			"reduced",
			"seat",
			"sitting",
			"space",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "airline_seat_recline_extra",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"airline",
			"body",
			"extra",
			"feet",
			"human",
			"leg",
			"legroom",
			"people",
			"person",
			"seat",
			"sitting",
			"space",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "airline_seat_recline_normal",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"airline",
			"body",
			"extra",
			"feet",
			"human",
			"leg",
			"legroom",
			"people",
			"person",
			"seat",
			"sitting",
			"space",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "airplanemode_active",
		"version": 10,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"active",
			"airplane",
			"airplanemode",
			"flight",
			"mode",
			"on",
			"signal"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "airplanemode_inactive",
		"version": 11,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"airplane",
			"airplanemode",
			"disabled",
			"flight",
			"inactive",
			"mode",
			"off",
			"signal"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "airplay",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Airplay",
			"arrow",
			"connect",
			"control",
			"device",
			"screen",
			"signal"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "airport_shuttle",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"airport",
			"automobile",
			"car",
			"cars",
			"commercial",
			"delivery",
			"direction",
			"maps",
			"mini",
			"public",
			"shuttle",
			"transport",
			"transportation",
			"travel",
			"truck",
			"van",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "alarm",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"alarm",
			"alart",
			"bell",
			"clock",
			"countdown",
			"notification",
			"time"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "alarm_add",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"add",
			"alarm",
			"alert",
			"bell",
			"clock",
			"countdown",
			"notification",
			"plus",
			"time"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "alarm_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"alarm",
			"alart",
			"bell",
			"clock",
			"countdown",
			"disabled",
			"enabled",
			"notification",
			"off",
			"on",
			"slash",
			"stop",
			"time"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "alarm_on",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"alarm",
			"alart",
			"bell",
			"check",
			"checkmark on",
			"clock",
			"countdown",
			"notification",
			"ready",
			"start",
			"tick",
			"time"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "album",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Album",
			"artist",
			"cd",
			"music",
			"play",
			"record",
			"track"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "align_horizontal_center",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"center",
			"format",
			"horizontal",
			"layout",
			"lines",
			"paragraph",
			"rule",
			"rules",
			"style",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "align_horizontal_left",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"format",
			"horizontal",
			"layout",
			"left",
			"lines",
			"paragraph",
			"rule",
			"rules",
			"style",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "align_horizontal_right",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"format",
			"horizontal",
			"layout",
			"lines",
			"paragraph",
			"right",
			"rule",
			"rules",
			"style",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "align_vertical_bottom",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"bottom",
			"format",
			"layout",
			"lines",
			"paragraph",
			"rule",
			"rules",
			"style",
			"text",
			"vertical"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "align_vertical_center",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"center",
			"format",
			"layout",
			"lines",
			"paragraph",
			"rule",
			"rules",
			"style",
			"text",
			"vertical"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "align_vertical_top",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"format",
			"layout",
			"lines",
			"paragraph",
			"rule",
			"rules",
			"style",
			"text",
			"top",
			"vertical"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "all_inbox",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"Inbox",
			"all",
			"delivery",
			"email",
			"letter",
			"mail",
			"post",
			"send"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "all_inclusive",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"Mobius",
			"all",
			"endless",
			"forever",
			"inclusive",
			"infinity",
			"loop",
			"neverending",
			"strip",
			"sustainability",
			"sustainable"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "all_out",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"all",
			"circle",
			"out",
			"shape"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "alt_route",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"alternate",
			"arrows",
			"direction",
			"maps",
			"navigation",
			"options",
			"other",
			"route",
			"routes",
			"split",
			"symbol"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "alternate_email",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"@",
			"Email",
			"address",
			"alternate",
			"contact"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "amp_stories",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"amp",
			"flow",
			"gallery",
			"stories",
			"view"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "analytics",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"Analytics",
			"analytics",
			"assessment",
			"bar",
			"bars",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "anchor",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"anchor",
			"google",
			"logo"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "android",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"android",
			"character",
			"logo",
			"mascot",
			"toy"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "announcement",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"!",
			"alert",
			"announcement",
			"attention",
			"bubble",
			"caution",
			"danger",
			"error",
			"exclamation",
			"important",
			"mark",
			"notification",
			"speech",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "apartment",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"accommodation",
			"apartment",
			"architecture",
			"building",
			"city",
			"company",
			"estate",
			"flat",
			"home",
			"house",
			"office",
			"place",
			"real",
			"residence",
			"residential",
			"shelter",
			"units",
			"workplace"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "api",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"api",
			"developer",
			"development",
			"enterprise",
			"software"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "app_blocking",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"Android",
			"OS",
			"app",
			"applications",
			"cancel",
			"cell",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"stop",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "app_settings_alt",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"Android",
			"OS",
			"app",
			"applications",
			"cell",
			"device",
			"gear",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"setting",
			"settings",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "apps",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"all",
			"applications",
			"apps",
			"collection",
			"dots",
			"grid",
			"squares"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "architecture",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"architecture",
			"art",
			"compass",
			"design",
			"draw",
			"drawing",
			"engineering",
			"geometric",
			"tool"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "archive",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"archive",
			"inbox",
			"mail",
			"store"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "arrow_back",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"android",
			"arrow",
			"arrows",
			"back",
			"direction",
			"left",
			"previous"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "arrow_back_ios",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"back",
			"chevron",
			"direction",
			"ios",
			"left",
			"previous"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "arrow_circle_down",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"circle",
			"down"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "arrow_circle_up",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"circle",
			"up"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "arrow_downward",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"down"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "arrow_drop_down",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"down",
			"drop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "arrow_drop_down_circle",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"circle",
			"direction",
			"down",
			"drop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "arrow_drop_up",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"drop",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "arrow_forward",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"right"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "arrow_forward_ios",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"chevron",
			"direction",
			"forward",
			"ios",
			"next",
			"right"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "arrow_left",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"left"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "arrow_right",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"right"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "arrow_right_alt",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"pointing",
			"right",
			"shape"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "arrow_upward",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "art_track",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Art",
			"display",
			"format",
			"insert",
			"track"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "article",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"article",
			"doc",
			"document",
			"text",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "aspect_ratio",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"aspect",
			"expand",
			"image",
			"ratio",
			"scale",
			"size",
			"square"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "assessment",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"analytics",
			"assessment",
			"bar",
			"bars",
			"graph",
			"measure",
			"metrics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "assignment",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"article",
			"assignment",
			"clipboard",
			"doc",
			"document",
			"text",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "assignment_ind",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"assignment",
			"clipboard",
			"face",
			"human",
			"people",
			"person",
			"profile",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "assignment_late",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"!",
			"alert",
			"assignment",
			"attention",
			"caution",
			"clipboard",
			"danger",
			"error",
			"exclamation",
			"important",
			"mark",
			"notification",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "assignment_return",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"assignment",
			"clipboard",
			"left",
			"point"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "assignment_returned",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"assignment",
			"clipboard",
			"down",
			"point"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "assignment_turned_in",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"assignment",
			"check",
			"clipboard",
			"complete",
			"done",
			"finished",
			"tick"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "assistant",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"assistant",
			"recommendation",
			"smart",
			"star",
			"suggestion"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "assistant_photo",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"assistant",
			"flag",
			"photo",
			"recommendation",
			"smart",
			"star",
			"suggestion"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "atm",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"alphabet",
			"atm",
			"automated",
			"bill",
			"card",
			"cart",
			"cash",
			"character",
			"circle",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"font",
			"letter",
			"machine",
			"money",
			"online",
			"pay",
			"payment",
			"shopping",
			"symbol",
			"teller",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "attach_email",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"Email",
			"attach",
			"attachment",
			"clip",
			"compose",
			"file",
			"image",
			"mail",
			"message",
			"note",
			"post",
			"receive",
			"send",
			"write"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "attach_file",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"add",
			"attach",
			"clip",
			"file",
			"link",
			"mail",
			"media"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "attach_money",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"add",
			"attach",
			"card",
			"clip",
			"commerce",
			"credit",
			"e-commerce",
			"file",
			"link",
			"media",
			"money",
			"online",
			"pay",
			"payment"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "attachment",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"attach",
			"attachment",
			"clip",
			"compose",
			"drive",
			"file",
			"image"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "audiotrack",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"audio",
			"audiotrack",
			"key",
			"music",
			"note",
			"sound",
			"track"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "auto_delete",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"alert"
		],
		"tags": [
			"auto",
			"can",
			"clock",
			"delete",
			"garbage",
			"removal bin",
			"schedule",
			"time",
			"trash"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "autorenew",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"cache",
			"cached",
			"inprogress",
			"renew",
			"rotate"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "av_timer",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"AV",
			"clock",
			"countdown",
			"minutes",
			"seconds",
			"time",
			"timer",
			"watch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "baby_changing_station",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"baby_changing_station"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "backpack",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"back",
			"backpack",
			"bag",
			"book",
			"bookbag",
			"knapsack",
			"pack",
			"storage",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "backspace",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"arrow",
			"back",
			"backspace",
			"cancel",
			"clear",
			"correct",
			"delete",
			"erase"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "backup",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"backup",
			"cloud",
			"point",
			"storage",
			"up",
			"upload"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "backup_table",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"backup",
			"cloud",
			"stack",
			"table"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "ballot",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"ballot",
			"election",
			"poll",
			"vote"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bar_chart",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"analytics",
			"bar",
			"bars",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "batch_prediction",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"batch",
			"bulb",
			"idea",
			"light",
			"prediction"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "bathtub",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"bath",
			"bathing",
			"bathroom",
			"bathtub",
			"hotel",
			"human",
			"person",
			"shower",
			"travel",
			"tub"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "battery_alert",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"!",
			"Battery",
			"alert",
			"attention",
			"caution",
			"cell",
			"charge",
			"danger",
			"error",
			"exclamation",
			"important",
			"mark",
			"mobile",
			"notification",
			"power",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "battery_charging_full",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"Battery",
			"bolt",
			"cell",
			"charge",
			"full",
			"lightening",
			"mobile",
			"power",
			"thunderbolt"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "battery_full",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"Battery",
			"cell",
			"charge",
			"full",
			"mobile",
			"power"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "battery_std",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"Battery",
			"cell",
			"charge",
			"mobile",
			"plus",
			"power",
			"standard",
			"std"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "battery_unknown",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"Battery",
			"cell",
			"charge",
			"mobile",
			"plus",
			"power",
			"question",
			"unknown"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "beach_access",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"access",
			"beach",
			"place",
			"sunny",
			"umbrella"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bedtime",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "beenhere",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"certified",
			"check",
			"direction",
			"guide",
			"here",
			"local",
			"location",
			"mark",
			"ok",
			"tick",
			"verified"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bento",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"bento",
			"box",
			"food",
			"meal",
			"takeout"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bike_scooter",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"bike",
			"car",
			"cars",
			"maps",
			"scooter",
			"transportation",
			"vehicle",
			"vespa"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "biotech",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"biotech",
			"chemistry",
			"laboratory",
			"microscope",
			"research",
			"science",
			"technology"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "block",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"avoid",
			"block",
			"entry",
			"no",
			"prohibited",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bluetooth",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"bluetooth",
			"connection",
			"device",
			"paring",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bluetooth_audio",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"audio",
			"bluetooth",
			"connect",
			"connection",
			"device",
			"music",
			"signal",
			"sound",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bluetooth_connected",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"bluetooth",
			"connection",
			"device",
			"paring",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bluetooth_disabled",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"bluetooth",
			"connection",
			"device",
			"disabled",
			"enabled",
			"off",
			"on",
			"paring",
			"slash",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bluetooth_searching",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"bluetooth",
			"connection",
			"device",
			"paring",
			"search",
			"searching",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "blur_circular",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"blur",
			"circle",
			"circular",
			"dots",
			"edit",
			"editing",
			"effect",
			"enhance"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "blur_linear",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"blur",
			"dots",
			"edit",
			"editing",
			"effect",
			"enhance",
			"linear"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "blur_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"blur",
			"disabled",
			"dots",
			"edit",
			"editing",
			"effect",
			"enabled",
			"enhance",
			"off",
			"on",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "blur_on",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"blur",
			"disabled",
			"dots",
			"edit",
			"editing",
			"effect",
			"enabled",
			"enhance",
			"off",
			"on",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "book",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"book",
			"bookmark",
			"favorite",
			"read",
			"reading",
			"remember",
			"save"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "book_online",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"Android",
			"OS",
			"admission",
			"appointment",
			"book",
			"cell",
			"device",
			"event",
			"hardware",
			"iOS",
			"mobile",
			"online",
			"pass",
			"phone",
			"reservation",
			"tablet",
			"ticket"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bookmark",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bookmark",
			"bookmarks",
			"remember",
			"save"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bookmark_border",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bookmark",
			"bookmarks",
			"outline",
			"remember",
			"save"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bookmarks",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bookmark",
			"bookmarks",
			"favorite",
			"remember",
			"save",
			"stack"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "border_all",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"border",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"stroke",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "border_bottom",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"border",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"stroke",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "border_clear",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"border",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"stroke",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "border_horizontal",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"border",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"stroke",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "border_inner",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"border",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"stroke",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "border_left",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"border",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"stroke",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "border_outer",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"border",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"stroke",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "border_right",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"border",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"stroke",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "border_style",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"border",
			"color",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"stroke",
			"style",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "border_top",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"border",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"stroke",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "border_vertical",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"border",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"stroke",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "branding_watermark",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Branding",
			"copyright",
			"emblem",
			"format",
			"identity",
			"logo",
			"stamp",
			"watermark"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "brightness_1",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"brightness",
			"circle",
			"control",
			"level",
			"moon",
			"screen"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "brightness_2",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"brightness",
			"circle",
			"control",
			"level",
			"moon",
			"screen"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "brightness_3",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"brightness",
			"circle",
			"control",
			"level",
			"moon",
			"screen"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "brightness_4",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"brightness",
			"circle",
			"control",
			"level",
			"screen",
			"sun"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "brightness_5",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"brightness",
			"circle",
			"control",
			"level",
			"screen",
			"sun"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "brightness_6",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"brightness",
			"circle",
			"control",
			"level",
			"screen",
			"sun"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "brightness_7",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"brightness",
			"circle",
			"control",
			"level",
			"screen",
			"sun"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "brightness_auto",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"A",
			"auto",
			"brightness",
			"control",
			"mobile",
			"monitor",
			"phone",
			"sun"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "brightness_high",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"auto",
			"brightness",
			"control",
			"high",
			"mobile",
			"monitor",
			"phone"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "brightness_low",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"auto",
			"brightness",
			"control",
			"low",
			"mobile",
			"monitor",
			"phone"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "brightness_medium",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"auto",
			"brightness",
			"control",
			"medium",
			"mobile",
			"monitor",
			"phone"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "broken_image",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"broken",
			"corrupt",
			"error",
			"file",
			"image",
			"link",
			"photo",
			"photography",
			"picture",
			"torn"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "browser_not_supported",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"browser",
			"disabled",
			"enabled",
			"internet",
			"not",
			"off",
			"on",
			"page",
			"screen",
			"site",
			"slash",
			"supported",
			"web",
			"website",
			"www"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "brush",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"art",
			"brush",
			"draw",
			"edit",
			"editing",
			"paint",
			"painting",
			"tool"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bubble_chart",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"analytics",
			"bar",
			"bars",
			"bubble",
			"chart",
			"circle",
			"data",
			"diagram",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "bug_report",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"animal",
			"bug",
			"file",
			"insect",
			"issue",
			"report"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "build",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"adjust",
			"build",
			"fix",
			"tool",
			"wrench"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "build_circle",
		"version": 9,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"adjust",
			"build",
			"circle",
			"fix",
			"tool",
			"wrench"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "burst_mode",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"burst",
			"image",
			"landscape",
			"mode",
			"mountain",
			"mountains",
			"multiple",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "business",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Business",
			"address",
			"building",
			"company",
			"structure"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "business_center",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"box",
			"briefcase",
			"business",
			"case",
			"center",
			"place",
			"suitcase",
			"tool",
			"work"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cached",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrows",
			"cache",
			"cached",
			"inprogress",
			"load",
			"loading",
			"refresh",
			"renew",
			"rotate"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cake",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"baked",
			"birthday",
			"cake",
			"candles",
			"celebration",
			"dessert",
			"food",
			"frosting",
			"party",
			"pastries",
			"pastry",
			"social",
			"sweet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "calculate",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"+",
			"-",
			"\u003d",
			"account",
			"calculate",
			"count",
			"fiance",
			"math"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "calendar_today",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"calendar",
			"date",
			"day",
			"event",
			"month",
			"remember",
			"reminder",
			"schedule",
			"today",
			"week"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "calendar_view_day",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"calendar",
			"date",
			"day",
			"event",
			"month",
			"remember",
			"reminder",
			"schedule",
			"today",
			"week"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "call",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Call",
			"device",
			"mobile",
			"phone",
			"talk"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "call_end",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Call",
			"device",
			"end",
			"mobile",
			"phone",
			"talk"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "call_made",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Call",
			"arrow",
			"device",
			"made",
			"mobile"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "call_merge",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Call",
			"arrow",
			"device",
			"merge",
			"mobile"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "call_missed",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Call",
			"arrow",
			"device",
			"missed",
			"mobile"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "call_missed_outgoing",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Call",
			"arrow",
			"device",
			"missed",
			"mobile",
			"outgoing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "call_received",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Call",
			"arrow",
			"device",
			"mobile",
			"received"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "call_split",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Call",
			"arrow",
			"device",
			"mobile",
			"split"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "call_to_action",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"CTA",
			"action",
			"alert",
			"bar",
			"call",
			"info",
			"information",
			"message",
			"notification",
			"to"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "camera",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"aperture",
			"camera",
			"lens",
			"photo",
			"photography",
			"shutter"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "camera_alt",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"camera",
			"image",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "camera_enhance",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"camera",
			"enhance",
			"image",
			"lens",
			"photo",
			"photography",
			"picture",
			"quality"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "camera_front",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"body",
			"camera",
			"front",
			"human",
			"lens",
			"mobile",
			"person",
			"phone",
			"photography",
			"portrait",
			"selfie"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "camera_rear",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"camera",
			"front",
			"lens",
			"mobile",
			"phone",
			"photography",
			"portrait",
			"rear",
			"selfie"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "camera_roll",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"camera",
			"film",
			"image",
			"library",
			"photo",
			"photography",
			"roll"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "campaign",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"announcement",
			"campaign",
			"loud",
			"megaphone",
			"microphone",
			"notification",
			"speaker"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cancel",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"cancel",
			"circle",
			"close",
			"exit",
			"stop",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cancel_presentation",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Presentation",
			"cancel",
			"close",
			"device",
			"present",
			"screen",
			"share",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cancel_schedule_send",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"cancel",
			"mail",
			"schedule",
			"send"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "card_giftcard",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"balance",
			"bill",
			"card",
			"cart",
			"cash",
			"certificate",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"gift",
			"giftcard",
			"money",
			"online",
			"pay",
			"payment",
			"present",
			"shopping"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "card_membership",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bill",
			"card",
			"cart",
			"cash",
			"certificate",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"membership",
			"money",
			"online",
			"pay",
			"payment",
			"shopping",
			"subscription"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "card_travel",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bill",
			"card",
			"cart",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"membership",
			"miles",
			"money",
			"online",
			"pay",
			"payment",
			"shopping",
			"travel",
			"trip"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "carpenter",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"building",
			"carpenter",
			"construction",
			"cutting",
			"repair",
			"saw",
			"tool"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "casino",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"casino",
			"dice",
			"dots",
			"entertainment",
			"gamble",
			"gambling",
			"game",
			"games",
			"luck",
			"place"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cast",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"airplay",
			"cast",
			"chrome",
			"connect",
			"desktop",
			"device",
			"hardware",
			"monitor",
			"screencast",
			"stream",
			"television",
			"tv",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cast_connected",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"airplay",
			"cast",
			"chrome",
			"connected",
			"desktop",
			"device",
			"hardware",
			"monitor",
			"screencast",
			"stream",
			"television",
			"tv",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cast_for_education",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"airplay",
			"cap",
			"cast",
			"chrome",
			"classroom",
			"connect",
			"desktop",
			"device",
			"education",
			"for",
			"graduation",
			"hardware",
			"hat",
			"learning",
			"monitor",
			"school",
			"screencast",
			"stream",
			"television",
			"tv",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "category",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"categories",
			"circle",
			"collection",
			"items",
			"product",
			"sort",
			"square",
			"triangle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "center_focus_strong",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"camera",
			"center",
			"focus",
			"image",
			"lens",
			"photo",
			"photography",
			"strong",
			"zoom"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "center_focus_weak",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"camera",
			"center",
			"focus",
			"image",
			"lens",
			"photo",
			"photography",
			"weak",
			"zoom"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "change_history",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"change",
			"history",
			"shape",
			"triangle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "charging_station",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"Android",
			"OS",
			"battery",
			"bolt",
			"cell",
			"charging",
			"device",
			"electric",
			"hardware",
			"iOS",
			"lightning",
			"mobile",
			"phone",
			"station",
			"tablet",
			"thunderbolt"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "chat",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Chat",
			"bubble",
			"message",
			"speech",
			"talk",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "chat_bubble",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Chat",
			"bubble",
			"message",
			"speech",
			"talk",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "chat_bubble_outline",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Chat",
			"bubble",
			"message",
			"speech",
			"talk",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "check",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"check",
			"confirm",
			"correct",
			"done",
			"enter",
			"mark",
			"ok",
			"okay",
			"select",
			"tick",
			"yes"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "check_box",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"toggle"
		],
		"tags": [
			"approved",
			"box",
			"button",
			"check",
			"component",
			"control",
			"form",
			"mark",
			"ok",
			"select",
			"selected",
			"selection",
			"tick",
			"toggle",
			"ui",
			"yes"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "check_box_outline_blank",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"toggle"
		],
		"tags": [
			"blank",
			"box",
			"button",
			"check",
			"component",
			"control",
			"deselected",
			"empty",
			"form",
			"outline",
			"select",
			"selection",
			"square",
			"tick",
			"toggle",
			"ui"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "check_circle",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"check",
			"circle",
			"complete",
			"done",
			"finished",
			"ok",
			"tick"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "check_circle_outline",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"check",
			"circle",
			"complete",
			"done",
			"finished",
			"ok",
			"outline",
			"tick"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "checkroom",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"checkroom",
			"closet",
			"clothes",
			"coat check",
			"hanger"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "chevron_left",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"chevron",
			"direction",
			"left"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "chevron_right",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"chevron",
			"direction",
			"right"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "child_care",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"baby",
			"care",
			"child",
			"children",
			"emoji",
			"face",
			"happy",
			"human",
			"infant",
			"kid",
			"newborn",
			"people",
			"person",
			"smile",
			"toddler",
			"young"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "child_friendly",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"baby",
			"care",
			"carriage",
			"child",
			"children",
			"friendly",
			"infant",
			"kid",
			"newborn",
			"stroller",
			"toddler",
			"young"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "chrome_reader_mode",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"chrome",
			"mode",
			"read",
			"reader",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "class",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"book",
			"bookmark",
			"class",
			"read",
			"reading"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "clean_hands",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"bacteria",
			"clean",
			"disinfect",
			"germs",
			"gesture",
			"hand",
			"hands",
			"sanitize",
			"sanitizer"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cleaning_services",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"clean",
			"cleaning",
			"dust",
			"services",
			"sweep"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "clear",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"back",
			"cancel",
			"clear",
			"correct",
			"delete",
			"erase",
			"exit",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "clear_all",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Clear",
			"all",
			"doc",
			"document",
			"format",
			"list"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "close",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"cancel",
			"close",
			"exit",
			"stop",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "close_fullscreen",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"action",
			"arrow",
			"arrows",
			"close",
			"collapse",
			"direction",
			"full",
			"fullscreen",
			"minimize",
			"screen"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "closed_caption",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Closed",
			"accessible",
			"alphabet",
			"caption",
			"cc",
			"character",
			"decoder",
			"font",
			"language",
			"letter",
			"subtitle",
			"subtitles",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "closed_caption_disabled",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"accessible",
			"alphabet",
			"caption",
			"cc",
			"character",
			"closed",
			"decoder",
			"disabled",
			"enabled",
			"font",
			"language",
			"letter",
			"off",
			"on",
			"slash",
			"subtitle",
			"subtitles",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cloud",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"cloud",
			"connection",
			"internet",
			"network",
			"sky",
			"upload"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cloud_circle",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"circle",
			"cloud",
			"connection",
			"internet",
			"network",
			"sky",
			"upload"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cloud_done",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"check",
			"cloud",
			"connection",
			"done",
			"internet",
			"network",
			"ok",
			"sky",
			"tick",
			"upload",
			"uploaded"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cloud_download",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"arrow",
			"arrows",
			"cloud",
			"connection",
			"down",
			"download",
			"internet",
			"network",
			"sky",
			"upload"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cloud_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"cloud",
			"connection",
			"disabled",
			"enabled",
			"internet",
			"network",
			"off",
			"on",
			"sky",
			"slash",
			"upload"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cloud_queue",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"cloud",
			"connection",
			"internet",
			"network",
			"queue",
			"sky",
			"upload"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "cloud_upload",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"arrow",
			"arrows",
			"cloud",
			"connection",
			"download",
			"internet",
			"network",
			"sky",
			"up",
			"upload"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "code",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"brackets",
			"code",
			"css",
			"develop",
			"developer",
			"engineer",
			"engineering",
			"html",
			"platform"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "collections",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"album",
			"collections",
			"gallery",
			"image",
			"landscape",
			"library",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture",
			"stack"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "collections_bookmark",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"album",
			"bookmark",
			"collections",
			"gallery",
			"image",
			"landscape",
			"library",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture",
			"stack"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "color_lens",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"art",
			"color",
			"lens",
			"paint",
			"pallet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "colorize",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"colorize",
			"dropper",
			"extract",
			"eye",
			"picker",
			"tool"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "comment",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Comment",
			"bubble",
			"doc",
			"document",
			"note"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "comment_bank",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"archive",
			"bank",
			"bookmark",
			"bubble",
			"chat",
			"comment",
			"communicate",
			"doc",
			"document",
			"note",
			"saved"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "commute",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"commute",
			"direction",
			"maps",
			"public",
			"train",
			"transportation",
			"trip",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "compare",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"adjustment",
			"compare",
			"edit",
			"editing",
			"edits",
			"enhance",
			"fix",
			"image",
			"images",
			"photo",
			"photography",
			"photos",
			"scan",
			"settings"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "compare_arrows",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrows",
			"compare",
			"facing",
			"pointing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "compass_calibration",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"calibration",
			"compass",
			"location",
			"refresh"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "computer",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"chrome",
			"computer",
			"desktop",
			"device",
			"hardware",
			"iOS",
			"mac",
			"monitor",
			"web",
			"window"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "confirmation_number",
		"version": 9,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"confirmation",
			"entertainment",
			"event",
			"number",
			"ticket"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "connect_without_contact",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"communicating",
			"connect",
			"contact",
			"distance",
			"people",
			"signal",
			"social",
			"socialize",
			"without"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "construction",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"build",
			"construction",
			"equipment",
			"fix",
			"hammer",
			"improvement",
			"industrial",
			"industry",
			"repair",
			"tools",
			"wrench"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "contact_mail",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Contact",
			"account",
			"address",
			"face",
			"human",
			"info",
			"information",
			"mail",
			"people",
			"person",
			"profile",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "contact_page",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"avatar",
			"contact",
			"data",
			"doc",
			"document",
			"drive",
			"face",
			"file",
			"folder",
			"folders",
			"human",
			"page",
			"people",
			"person",
			"profile",
			"sheet",
			"slide",
			"storage",
			"user",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "contact_phone",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Contact",
			"account",
			"face",
			"human",
			"info",
			"information",
			"number",
			"people",
			"person",
			"phone",
			"profile",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "contact_support",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"alert",
			"announcement",
			"bubble",
			"chat",
			"communicate",
			"contact",
			"help",
			"info",
			"information",
			"mark",
			"question",
			"speech",
			"support"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "contactless",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"cash",
			"contact",
			"contactless",
			"credit",
			"payment",
			"signal",
			"transaction",
			"wifi"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "contacts",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Contact",
			"account",
			"address",
			"face",
			"human",
			"info",
			"information",
			"number",
			"people",
			"person",
			"phone",
			"profile",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "content_copy",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"content",
			"copy",
			"cut",
			"doc",
			"document",
			"duplicate",
			"file",
			"multiple",
			"past"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "content_cut",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"content",
			"copy",
			"cut",
			"doc",
			"document",
			"file",
			"past",
			"scissors",
			"trim"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "content_paste",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"clipboard",
			"content",
			"copy",
			"cut",
			"doc",
			"document",
			"file",
			"multiple",
			"past"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "control_camera",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Control",
			"adjust",
			"arrow",
			"arrows",
			"camera",
			"direction",
			"left",
			"move",
			"right"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "control_point",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"add",
			"circle",
			"control",
			"plus",
			"point"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "control_point_duplicate",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"add",
			"circle",
			"control",
			"duplicate",
			"multiple",
			"plus",
			"point"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "copyright",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"C",
			"alphabet",
			"character",
			"copyright",
			"emblem",
			"font",
			"letter",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "coronavirus",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"19",
			"bacteria",
			"coronavirus",
			"covid",
			"disease",
			"germs",
			"illness",
			"sick"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "corporate_fare",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"architecture",
			"building",
			"business",
			"corporate",
			"estate",
			"fare",
			"organization",
			"place",
			"real",
			"residence",
			"residential",
			"shelter"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "countertops",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"counter",
			"countertops",
			"home",
			"kitchen",
			"sink",
			"table",
			"tops"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "create",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"compose",
			"create",
			"edit",
			"editing",
			"input",
			"new",
			"pen",
			"pencil",
			"write",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "create_new_folder",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"+. add",
			"data",
			"doc",
			"document",
			"drive",
			"file",
			"folder",
			"folders",
			"new",
			"plus",
			"sheet",
			"slide",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "credit_card",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"card",
			"charge",
			"credit",
			"info",
			"information",
			"money",
			"pay",
			"payment"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "crop",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"adjustments",
			"area",
			"crop",
			"edit",
			"editing",
			"frame",
			"image",
			"images",
			"photo",
			"photos",
			"rectangle",
			"settings",
			"size",
			"square"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "crop_16_9",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"16",
			"9",
			"adjust",
			"adjustments",
			"area",
			"by",
			"crop",
			"edit",
			"editing",
			"frame",
			"image",
			"images",
			"photo",
			"photos",
			"rectangle",
			"settings",
			"size",
			"square",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "crop_3_2",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"2",
			"3",
			"adjust",
			"adjustments",
			"area",
			"by",
			"crop",
			"edit",
			"editing",
			"frame",
			"image",
			"images",
			"photo",
			"photos",
			"rectangle",
			"settings",
			"size",
			"square",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "crop_5_4",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"4",
			"5",
			"adjust",
			"adjustments",
			"area",
			"by",
			"crop",
			"edit",
			"editing settings",
			"frame",
			"image",
			"images",
			"photo",
			"photos",
			"rectangle",
			"size",
			"square",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "crop_7_5",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"5",
			"7",
			"adjust",
			"adjustments",
			"area",
			"by",
			"crop",
			"editing",
			"frame",
			"image",
			"images",
			"photo",
			"photos",
			"rectangle",
			"settings",
			"size",
			"square",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "crop_din",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"adjustments",
			"area",
			"crop",
			"din",
			"edit",
			"editing",
			"frame",
			"image",
			"images",
			"photo",
			"photos",
			"rectangle",
			"settings",
			"size",
			"square"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "crop_free",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"adjustments",
			"crop",
			"edit",
			"editing",
			"focus",
			"frame",
			"free",
			"image",
			"photo",
			"photos",
			"settings",
			"size",
			"zoom"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "crop_landscape",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"adjustments",
			"area",
			"crop",
			"edit",
			"editing",
			"frame",
			"image",
			"images",
			"landscape",
			"photo",
			"photos",
			"settings",
			"size"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "crop_original",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"adjustments",
			"area",
			"crop",
			"edit",
			"editing",
			"frame",
			"image",
			"images",
			"original",
			"photo",
			"photos",
			"picture",
			"settings",
			"size"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "crop_portrait",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"adjustments",
			"area",
			"crop",
			"edit",
			"editing",
			"frame",
			"image",
			"images",
			"photo",
			"photos",
			"portrait",
			"rectangle",
			"settings",
			"size",
			"square"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "crop_rotate",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"adjustments",
			"area",
			"arrow",
			"arrows",
			"crop",
			"edit",
			"editing",
			"frame",
			"image",
			"images",
			"photo",
			"photos",
			"rotate",
			"settings",
			"size",
			"turn"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "crop_square",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"adjustments",
			"area",
			"crop",
			"edit",
			"editing",
			"frame",
			"image",
			"images",
			"photo",
			"photos",
			"rectangle",
			"settings",
			"size",
			"square"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "dashboard",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"cards",
			"dashboard",
			"rectangle",
			"shapes",
			"square"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "data_usage",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "date_range",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"calendar",
			"date",
			"day",
			"event",
			"month",
			"range",
			"remember",
			"reminder",
			"schedule",
			"time",
			"today",
			"week"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "deck",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"chairs",
			"deck",
			"home",
			"house",
			"outdoors",
			"outside",
			"patio",
			"social",
			"terrace",
			"umbrella",
			"yard"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "dehaze",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"add",
			"dehaze",
			"edit",
			"editing",
			"enhance",
			"haze",
			"image",
			"lines",
			"photo",
			"photography",
			"remove"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "delete",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bin",
			"can",
			"delete",
			"garbage",
			"remove",
			"trash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "delete_forever",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bin",
			"can",
			"delete",
			"forever",
			"garbage",
			"remove",
			"trash",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "delete_outline",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bin",
			"can",
			"delete",
			"garbage",
			"remove",
			"trash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "delete_sweep",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"can",
			"delete",
			"remove",
			"trash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "departure_board",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"bus",
			"car",
			"cars",
			"clock",
			"maps",
			"public",
			"schedule",
			"time",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "description",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"article",
			"content",
			"description",
			"doc",
			"document",
			"file",
			"information",
			"notes",
			"text",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "design_services",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "desktop_access_disabled",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Desktop",
			"access",
			"device",
			"disabled",
			"enabled",
			"monitor",
			"off",
			"on",
			"screen",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "desktop_mac",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"chrome",
			"desktop",
			"device",
			"hardware",
			"iOS",
			"mac",
			"monitor",
			"web",
			"window"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "desktop_windows",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"chrome",
			"desktop",
			"device",
			"hardware",
			"iOS",
			"mac",
			"monitor",
			"web",
			"windows"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "details",
		"version": 9,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"details",
			"edit",
			"editing",
			"enhance",
			"image",
			"photo",
			"photography",
			"sharpen",
			"triangle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "developer_board",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"board",
			"chip",
			"computer",
			"developer",
			"development",
			"hardware",
			"microchip",
			"processor"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "developer_mode",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"Android",
			"OS",
			"bracket",
			"code",
			"developer",
			"development",
			"device",
			"engineer",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "device_hub",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"circle",
			"computer",
			"desktop",
			"device",
			"hardware",
			"hub",
			"iOS",
			"laptop",
			"mobile",
			"monitor",
			"phone",
			"square",
			"tablet",
			"triangle",
			"watch",
			"wearable",
			"web"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "device_unknown",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"?",
			"Android",
			"OS",
			"cell",
			"device",
			"error",
			"hardware",
			"help",
			"iOS",
			"information",
			"mark",
			"mobile",
			"phone",
			"question",
			"support",
			"symbol",
			"tablet",
			"unknown",
			"unrecognized"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "devices",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"Android",
			"OS",
			"computer",
			"desktop",
			"device",
			"hardware",
			"iOS",
			"laptop",
			"mobile",
			"monitor",
			"phone",
			"tablet",
			"watch",
			"wearable",
			"web"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "devices_other",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"ar",
			"cell",
			"chrome",
			"desktop",
			"device",
			"gadget",
			"hardware",
			"iOS",
			"ipad",
			"mac",
			"mobile",
			"monitor",
			"other",
			"phone",
			"tablet",
			"vr",
			"watch",
			"wearables",
			"window"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "dialer_sip",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Dialer",
			"alphabet",
			"call",
			"character",
			"font",
			"initiation",
			"internet",
			"letter",
			"over",
			"phone",
			"protocol",
			"routing",
			"session",
			"sip",
			"symbol",
			"text",
			"type",
			"voice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "dialpad",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Dial",
			"call",
			"device",
			"number",
			"numbers",
			"pad"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "directions",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"arrow",
			"direction",
			"maps",
			"right",
			"route",
			"sign",
			"traffic"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "directions_bike",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"bicycle",
			"bike",
			"car",
			"cars",
			"direction",
			"human",
			"maps",
			"person",
			"public",
			"route",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "directions_boat",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"boat",
			"car",
			"cars",
			"direction",
			"ferry",
			"maps",
			"public",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "directions_bus",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"bus",
			"car",
			"cars",
			"maps",
			"public",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "directions_car",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"direction",
			"maps",
			"public",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "directions_off",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"arrow",
			"direction",
			"disabled",
			"enabled",
			"maps",
			"off",
			"on",
			"right",
			"route",
			"sign",
			"slash",
			"traffic"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "directions_railway",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"direction",
			"maps",
			"public",
			"rail",
			"train",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "directions_run",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"body",
			"direction",
			"human",
			"jogging",
			"people",
			"person",
			"route",
			"run",
			"walk"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "directions_subway",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"direction",
			"maps",
			"public",
			"rail",
			"subway",
			"train",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "directions_transit",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"direction",
			"maps",
			"public",
			"rail",
			"subway",
			"train",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "directions_walk",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"body",
			"direction",
			"human",
			"jogging",
			"people",
			"person",
			"route",
			"run",
			"walk"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "disabled_by_default",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"box",
			"close",
			"default",
			"disabled",
			"exit",
			"off",
			"square",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "disc_full",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"!",
			"alert",
			"attention",
			"caution",
			"cd",
			"danger",
			"disc",
			"error",
			"exclamation",
			"full",
			"important",
			"mark",
			"music",
			"notification",
			"storage",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "dns",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"address",
			"bars",
			"dns",
			"domain",
			"information",
			"ip",
			"list",
			"lookup",
			"name",
			"server",
			"system"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "do_not_step",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"boot",
			"disabled",
			"do",
			"enabled",
			"feet",
			"foot",
			"not",
			"off",
			"on",
			"shoe",
			"slash",
			"sneaker",
			"step"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "do_not_touch",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"disabled",
			"do",
			"enabled",
			"fingers",
			"gesture",
			"hand",
			"not",
			"off",
			"on",
			"slash",
			"touch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "dock",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"cell",
			"charging",
			"connector",
			"device",
			"dock",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"power",
			"station",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "domain",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"apartment",
			"architecture",
			"building",
			"business",
			"domain",
			"estate",
			"home",
			"place",
			"real",
			"residence",
			"residential",
			"shelter",
			"web",
			"www"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "domain_disabled",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Domain",
			"building",
			"disabled",
			"enabled",
			"internet",
			"off",
			"on",
			"slash",
			"web",
			"website"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "domain_verification",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Domain",
			"building",
			"disabled",
			"internet",
			"off",
			"web",
			"website"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "done",
		"version": 9,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"check",
			"complete",
			"done",
			"finished",
			"mark",
			"ok",
			"tick"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "done_all",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"check",
			"complete",
			"done",
			"finished",
			"mark",
			"multiple",
			"ok",
			"tick"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "done_outline",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"check",
			"complete",
			"done",
			"finished",
			"mark",
			"ok",
			"outline",
			"tick"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "donut_large",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"complete",
			"donut",
			"graph",
			"inprogress",
			"large"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "donut_small",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"complete",
			"donut",
			"graph",
			"inprogress",
			"small"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "double_arrow",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"double",
			"multiple",
			"right"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "drafts",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"document",
			"draft",
			"drafts",
			"email",
			"file",
			"letter",
			"mail",
			"read"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "drag_handle",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"drag",
			"handle",
			"menu",
			"move",
			"ui"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "drag_indicator",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"circles",
			"dots",
			"drag",
			"drop",
			"indicator",
			"move",
			"shape",
			"shift"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "drive_eta",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"destination",
			"direction",
			"drive",
			"estimate",
			"eta",
			"maps",
			"public",
			"transportation",
			"travel",
			"trip",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "dry",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"air",
			"dry",
			"dryer",
			"fingers",
			"gesture",
			"hand"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "duo",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Duo",
			"call",
			"chat",
			"conference",
			"device",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "dvr",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"audio",
			"computer",
			"device",
			"digital",
			"dvr",
			"electronic",
			"recorder",
			"tv",
			"vidio"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "dynamic_feed",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"dynamic",
			"feed",
			"multiple",
			"post"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "dynamic_form",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"code",
			"dynamic",
			"form",
			"lists",
			"questionnaire"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "east",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"directional",
			"east",
			"right"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "eco",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"eco",
			"economical",
			"green",
			"leaf",
			"nature"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "edit",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"compose",
			"create",
			"edit",
			"editing",
			"input",
			"new",
			"pen",
			"pencil",
			"write",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "edit_attributes",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"attribution",
			"check",
			"edit",
			"ok",
			"tick"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "edit_location",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"destination",
			"direction",
			"edit",
			"location",
			"maps",
			"pen",
			"pencil",
			"pin",
			"place",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "edit_road",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"edit",
			"location",
			"pen",
			"pencil",
			"road",
			"street"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "eject",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"eject",
			"player",
			"remove",
			"triangle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "elderly",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"body",
			"cane",
			"elderly",
			"human",
			"old",
			"people",
			"person",
			"senior"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "electric_bike",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"bike",
			"car",
			"cars",
			"maps",
			"scooter",
			"transportation",
			"vehicle",
			"vespa"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "electric_car",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"electric",
			"electricity",
			"maps",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "electric_moped",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"bike",
			"car",
			"cars",
			"maps",
			"scooter",
			"transportation",
			"vehicle",
			"vespa"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "electric_scooter",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"bike",
			"car",
			"cars",
			"maps",
			"scooter",
			"transportation",
			"vehicle",
			"vespa"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "electrical_services",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"charge",
			"cord",
			"electric",
			"electrical",
			"plug",
			"power",
			"services",
			"wire"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "elevator",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"body",
			"down",
			"elevator",
			"human",
			"people",
			"person",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "email",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Email",
			"compose",
			"mail",
			"message",
			"note",
			"post",
			"receive",
			"send",
			"write"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "emoji_emotions",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"emoji",
			"emotions",
			"expressions",
			"face",
			"feelings",
			"glad",
			"happiness",
			"happy",
			"like",
			"mood",
			"person",
			"pleased",
			"smile",
			"smiling",
			"social",
			"survey"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "emoji_events",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"achievement",
			"award",
			"chalice",
			"champion",
			"cup",
			"emoji",
			"events",
			"first",
			"prize",
			"reward",
			"sport",
			"trophy",
			"winner"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "emoji_flags",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"country",
			"destination",
			"emoji",
			"flags",
			"landmark",
			"location",
			"mark",
			"milepost",
			"milestone",
			"nation",
			"place",
			"pole",
			"save",
			"social",
			"world"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "emoji_food_beverage",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"beverage",
			"coffee",
			"cup",
			"drink",
			"emoji",
			"mug",
			"plate",
			"set",
			"tea"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "emoji_nature",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"animal",
			"bee",
			"bug",
			"daisy",
			"emoji",
			"flower",
			"insect",
			"ladybug",
			"nature",
			"petals",
			"spring",
			"summer"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "emoji_objects",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"bulb",
			"creative",
			"emoji",
			"idea",
			"light",
			"objects",
			"solution",
			"thinking"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "emoji_people",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"arm",
			"body",
			"emoji",
			"greeting",
			"human",
			"people",
			"person",
			"social",
			"waving"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "emoji_symbols",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"ampersand",
			"character",
			"emoji",
			"hieroglyph",
			"music",
			"note",
			"percent",
			"sign",
			"symbols"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "emoji_transportation",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"architecture",
			"automobile",
			"building",
			"car",
			"cars",
			"direction",
			"emoji",
			"estate",
			"maps",
			"place",
			"public",
			"real",
			"residence",
			"residential",
			"shelter",
			"transportation",
			"travel",
			"vehicle"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "engineering",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"body",
			"cogs",
			"cogwheel",
			"construction",
			"engineering",
			"fixing",
			"gears",
			"hat",
			"helmet",
			"human",
			"maintenance",
			"people",
			"person",
			"setting",
			"worker"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "enhanced_encryption",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"+",
			"add",
			"encryption",
			"enhanced",
			"lock",
			"password",
			"plus",
			"safety",
			"security"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "equalizer",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Equalizer",
			"adjustment",
			"music",
			"noise",
			"sound",
			"static",
			"volume"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "error",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"alert"
		],
		"tags": [
			"!",
			"alert",
			"attention",
			"caution",
			"circle",
			"danger",
			"error",
			"exclamation",
			"important",
			"mark",
			"notification",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "error_outline",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"alert"
		],
		"tags": [
			"!",
			"alert",
			"attention",
			"caution",
			"circle",
			"danger",
			"error",
			"exclamation",
			"important",
			"mark",
			"notification",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "escalator",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"down",
			"escalator",
			"staircase",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "escalator_warning",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"body",
			"child",
			"escalator",
			"human",
			"kid",
			"parent",
			"people",
			"person",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "euro",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"bill",
			"card",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"euro",
			"euros",
			"money",
			"online",
			"pay",
			"payment",
			"symbol"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "euro_symbol",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"currency",
			"dollar",
			"euro",
			"money",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "ev_station",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"charging",
			"electric",
			"electricity",
			"ev",
			"maps",
			"station",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "event",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"calendar",
			"date",
			"day",
			"event",
			"mark",
			"month",
			"range",
			"remember",
			"reminder",
			"today",
			"week"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "event_available",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"available",
			"calendar",
			"check",
			"date",
			"event",
			"mark",
			"ok",
			"schedule",
			"tick",
			"time"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "event_busy",
		"version": 10,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"busy",
			"calendar",
			"date",
			"event",
			"schedule",
			"time",
			"unavailable",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "event_note",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"calendar",
			"date",
			"event",
			"note",
			"schedule",
			"text",
			"time"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "event_seat",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"assign",
			"assigned",
			"chair",
			"event",
			"reservation",
			"row",
			"seat",
			"section",
			"sit"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "exit_to_app",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"app",
			"arrow",
			"back",
			"exit",
			"export",
			"leave",
			"move",
			"pointing",
			"right"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "expand_less",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"chevron",
			"collapse",
			"direction",
			"expand",
			"expandable",
			"less",
			"list",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "expand_more",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"chevron",
			"collapse",
			"direction",
			"down",
			"expand",
			"expandable",
			"list",
			"more"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "explicit",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Explicit",
			"adult",
			"alphabet",
			"character",
			"content",
			"e",
			"font",
			"language",
			"letter",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "explore",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"compass",
			"destination",
			"explore",
			"location",
			"map",
			"needle",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "explore_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"compass",
			"destination",
			"disabled",
			"enabled",
			"explore",
			"location",
			"map",
			"needle",
			"off",
			"on",
			"slash",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "exposure",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"add",
			"brightness",
			"contrast",
			"edit",
			"editing",
			"effect",
			"exposure",
			"image",
			"minus",
			"photo",
			"photography",
			"picture",
			"plus",
			"settings",
			"subtract"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "exposure_neg_1",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"1",
			"brightness",
			"contrast",
			"digit",
			"edit",
			"editing",
			"effect",
			"exposure",
			"image",
			"neg",
			"negative",
			"number",
			"photo",
			"photography",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "exposure_neg_2",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"2",
			"brightness",
			"contrast",
			"digit",
			"edit",
			"editing",
			"effect",
			"exposure",
			"image",
			"neg",
			"negative",
			"number",
			"photo",
			"photography",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "exposure_plus_1",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"1",
			"add",
			"brightness",
			"contrast",
			"digit",
			"edit",
			"editing",
			"effect",
			"exposure",
			"image",
			"number",
			"photo",
			"photography",
			"plus",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "exposure_plus_2",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"2",
			"add",
			"brightness",
			"contrast",
			"digit",
			"edit",
			"editing",
			"effect",
			"exposure",
			"image",
			"number",
			"photo",
			"photography",
			"plus",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "exposure_zero",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"0",
			"brightness",
			"contrast",
			"digit",
			"edit",
			"editing",
			"effect",
			"exposure",
			"image",
			"number",
			"photo",
			"photography",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "extension",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"extended",
			"extension",
			"jigsaw",
			"piece",
			"puzzle",
			"shape"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "face",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"emoji",
			"eyes",
			"face",
			"human",
			"lock",
			"log",
			"login",
			"logout",
			"people",
			"person",
			"profile",
			"recognition",
			"security",
			"thumbnail",
			"unlock",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "facebook",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"application",
			"apps",
			"f",
			"facebook",
			"logo",
			"post"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fact_check",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"approve",
			"check",
			"complete",
			"done",
			"fact",
			"list",
			"mark",
			"ok",
			"select",
			"tick",
			"verified",
			"yes"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "family_restroom",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"bathroom",
			"child",
			"children",
			"family",
			"kids",
			"parents",
			"restroom"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fast_forward",
		"version": 9,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Fast",
			"control",
			"forward",
			"music",
			"speed",
			"time",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fast_rewind",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Fast",
			"control",
			"music",
			"rewind",
			"speed",
			"time",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fastfood",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"drink",
			"fastfood",
			"food",
			"hamburger",
			"meal"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "favorite",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"favorite",
			"heart",
			"like",
			"love",
			"remember",
			"save",
			"shape"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "favorite_border",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"favorite",
			"heart",
			"like",
			"love",
			"outline",
			"remember",
			"save",
			"shape"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "featured_play_list",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Featured",
			"collection",
			"highlighted",
			"music",
			"play",
			"playlist",
			"recommended"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "featured_video",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Featured",
			"advertised",
			"highlighted",
			"recommended",
			"video",
			"watch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "feedback",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"!",
			"alert",
			"announcement",
			"attention",
			"bubble",
			"caution",
			"comment",
			"danger",
			"error",
			"exclamation",
			"feedback",
			"important",
			"mark",
			"notification",
			"speech",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fence",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"barrier",
			"boundaries",
			"boundary",
			"fence",
			"home",
			"protection"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fiber_dvr",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Fiber",
			"alphabet",
			"character",
			"digital",
			"dvr",
			"electronics",
			"font",
			"letter",
			"network",
			"recorder",
			"symbol",
			"text",
			"tv",
			"type",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fiber_manual_record",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Fiber",
			"circle",
			"dot",
			"manual",
			"play",
			"record",
			"watch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fiber_new",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Fiber",
			"alphabet",
			"character",
			"font",
			"letter",
			"network",
			"new",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fiber_pin",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Fiber",
			"alphabet",
			"character",
			"font",
			"letter",
			"network",
			"pin",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fiber_smart_record",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Fiber",
			"play",
			"record",
			"smart",
			"watch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "file_copy",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"content",
			"copy",
			"cut",
			"doc",
			"document",
			"duplicate",
			"file",
			"multiple",
			"past"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"edit",
			"editing",
			"effect",
			"filter",
			"image",
			"landscape",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture",
			"settings"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_1",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"1",
			"digit",
			"edit",
			"editing",
			"effect",
			"filter",
			"image",
			"images",
			"number",
			"photography",
			"picture",
			"pictures",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_2",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"2",
			"digit",
			"edit",
			"editing",
			"effect",
			"filter",
			"image",
			"images",
			"number",
			"photography",
			"picture",
			"pictures",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_3",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"3",
			"digit",
			"edit",
			"editing",
			"effect",
			"filter",
			"image",
			"images",
			"number",
			"photography",
			"picture",
			"pictures",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_4",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"4",
			"digit",
			"edit",
			"editing",
			"effect",
			"filter",
			"image",
			"images",
			"number",
			"photography",
			"picture",
			"pictures",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_5",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"5",
			"digit",
			"edit",
			"editing",
			"effect",
			"filter",
			"image",
			"images",
			"number",
			"photography",
			"picture",
			"pictures",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_6",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"6",
			"digit",
			"edit",
			"editing",
			"effect",
			"filter",
			"image",
			"images",
			"number",
			"photography",
			"picture",
			"pictures",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_7",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"7",
			"digit",
			"edit",
			"editing",
			"effect",
			"filter",
			"image",
			"images",
			"number",
			"photography",
			"picture",
			"pictures",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_8",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"8",
			"digit",
			"edit",
			"editing",
			"effect",
			"filter",
			"image",
			"images",
			"number",
			"photography",
			"picture",
			"pictures",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_9",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"9",
			"digit",
			"edit",
			"editing",
			"effect",
			"filter",
			"image",
			"images",
			"number",
			"photography",
			"picture",
			"pictures",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_9_plus",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"9",
			"add",
			"digit",
			"edit",
			"editing",
			"effect",
			"filter",
			"image",
			"images",
			"more",
			"number",
			"photography",
			"picture",
			"pictures",
			"plus",
			"settings",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_alt",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"filter",
			"funnel",
			"refine",
			"sift"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_b_and_w",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"black",
			"contrast",
			"edit",
			"editing",
			"effect",
			"filter",
			"grayscale",
			"image",
			"images",
			"photography",
			"picture",
			"pictures",
			"settings",
			"white"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_center_focus",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"camera",
			"center",
			"dot",
			"edit",
			"filter",
			"focus",
			"image",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_drama",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"camera",
			"center",
			"cloud",
			"drama",
			"edit",
			"editing",
			"effect",
			"filter",
			"focus",
			"image",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_frames",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"boarders",
			"border",
			"camera",
			"center",
			"edit",
			"editing",
			"effect",
			"filter",
			"focus",
			"frame",
			"frames",
			"image",
			"options",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_hdr",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"camera",
			"edit",
			"editing",
			"effect",
			"filter",
			"hdr",
			"image",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_list",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"filter",
			"find",
			"list",
			"organize",
			"sort"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_none",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"filter",
			"none",
			"off"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_tilt_shift",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"blur",
			"edit",
			"editing",
			"effect",
			"filter",
			"focus",
			"image",
			"images",
			"photography",
			"picture",
			"pictures",
			"shift",
			"tilt"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "filter_vintage",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"edit",
			"editing",
			"effect",
			"filter",
			"flower",
			"image",
			"images",
			"photography",
			"picture",
			"pictures",
			"vintage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "find_in_page",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"doc",
			"document",
			"find",
			"glass",
			"look",
			"magnifying",
			"page",
			"paper",
			"search",
			"see"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "find_replace",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrows",
			"find",
			"inprogress",
			"load",
			"loading",
			"look",
			"magnifying glass",
			"progress",
			"refresh",
			"replace",
			"rotate",
			"search",
			"see"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fingerprint",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"finger",
			"fingerprint",
			"id",
			"identification",
			"identity",
			"print",
			"reader",
			"thumbprint"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fire_extinguisher",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"extinguisher",
			"fire"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fireplace",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"chimney",
			"fire",
			"fireplace",
			"flame",
			"home",
			"house",
			"living",
			"pit",
			"place",
			"room",
			"warm",
			"winter"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "first_page",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"back",
			"chevron",
			"first",
			"left",
			"page",
			"rewind"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fitness_center",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"athlete",
			"center",
			"dumbbell",
			"exercise",
			"fitness",
			"gym",
			"hobby",
			"place",
			"sport",
			"weight",
			"workout"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "flag",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"country",
			"flag",
			"goal",
			"mark",
			"nation",
			"report",
			"start"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "flaky",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"approve",
			"check",
			"close",
			"complete",
			"contrast",
			"done",
			"exit",
			"flaky",
			"mark",
			"no",
			"ok",
			"select",
			"stop",
			"tick",
			"verified",
			"x",
			"yes"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "flare",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"bright",
			"edit",
			"editing",
			"effect",
			"flare",
			"image",
			"images",
			"light",
			"photography",
			"picture",
			"pictures",
			"sparkle",
			"sun"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "flash_auto",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"a",
			"auto",
			"bolt",
			"electric",
			"flash",
			"lightning",
			"thunderbolt"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "flash_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"bolt",
			"disabled",
			"electric",
			"enabled",
			"flash",
			"lightning",
			"off",
			"on",
			"slash",
			"thunderbolt"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "flash_on",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"bolt",
			"disabled",
			"electric",
			"enabled",
			"flash",
			"lightning",
			"off",
			"on",
			"slash",
			"thunderbolt"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "flight",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"air",
			"airplane",
			"airport",
			"flight",
			"plane",
			"transportation",
			"travel",
			"trip"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "flight_land",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrival",
			"arriving",
			"flight",
			"fly",
			"land",
			"landing",
			"plane",
			"transportation",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "flight_takeoff",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"departed",
			"departing",
			"flight",
			"fly",
			"landing",
			"plane",
			"takeoff",
			"transportation",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "flip",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"edit",
			"editing",
			"flip",
			"image",
			"orientation"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "flip_camera_android",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"android",
			"camera",
			"edit",
			"editing",
			"flip",
			"image",
			"mobile",
			"orientation",
			"rotate",
			"turn"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "flip_camera_ios",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"android",
			"camera",
			"edit",
			"editing",
			"flip",
			"image",
			"mobile",
			"orientation",
			"rotate",
			"turn"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "flip_to_back",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrange",
			"arrangement",
			"back",
			"flip",
			"front",
			"move",
			"order",
			"sort"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "flip_to_front",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrange",
			"arrangement",
			"back",
			"flip",
			"front",
			"move",
			"order",
			"sort"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "folder",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"data",
			"doc",
			"document",
			"drive",
			"file",
			"folder",
			"folders",
			"sheet",
			"slide",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "folder_open",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"data",
			"doc",
			"document",
			"drive",
			"file",
			"folder",
			"folders",
			"sheet",
			"slide",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "folder_shared",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"account",
			"collaboration",
			"data",
			"doc",
			"document",
			"drive",
			"face",
			"file",
			"folder",
			"folders",
			"human",
			"people",
			"person",
			"profile",
			"share",
			"sheet",
			"slide",
			"storage",
			"team",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "folder_special",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"data",
			"doc",
			"document",
			"drive",
			"favorite",
			"file",
			"folder",
			"folders",
			"important",
			"sheet",
			"slide",
			"special",
			"star",
			"starred",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "follow_the_signs",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"arrow",
			"body",
			"directional",
			"follow",
			"human",
			"people",
			"person",
			"right",
			"signs"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "font_download",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"A",
			"alphabet",
			"character",
			"download",
			"font",
			"letter",
			"save",
			"square",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "food_bank",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"architecture",
			"bank",
			"building",
			"charity",
			"eat",
			"estate",
			"food",
			"fork",
			"house",
			"knife",
			"meal",
			"place",
			"real",
			"residence",
			"residential",
			"shelter",
			"utensils"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_align_center",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_align_justify",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_align_left",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_align_right",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_bold",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"alphabet",
			"character",
			"doc",
			"edit",
			"editing",
			"editor",
			"font",
			"letter",
			"sheet",
			"spreadsheet",
			"styles",
			"symbol",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_clear",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"alphabet",
			"character",
			"clear",
			"disabled",
			"doc",
			"edit",
			"editing",
			"editor",
			"enabled",
			"font",
			"letter",
			"off",
			"on",
			"sheet",
			"slash",
			"spreadsheet",
			"style",
			"symbol",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_color_reset",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"clear",
			"color",
			"disabled",
			"doc",
			"edit",
			"editing",
			"editor",
			"enabled",
			"fill",
			"off",
			"on",
			"paint",
			"reset",
			"sheet",
			"slash",
			"spreadsheet",
			"style",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_indent_decrease",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"doc",
			"edit",
			"editing",
			"editor",
			"indent",
			"indentation",
			"paragraph",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_indent_increase",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"doc",
			"edit",
			"editing",
			"editor",
			"indent",
			"indentation",
			"paragraph",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_italic",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"alphabet",
			"character",
			"doc",
			"edit",
			"editing",
			"editor",
			"font",
			"letter",
			"sheet",
			"spreadsheet",
			"style",
			"symbol",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_line_spacing",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_list_bulleted",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"bullet",
			"doc",
			"edit",
			"editing",
			"editor",
			"list",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_list_numbered",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"digit",
			"doc",
			"edit",
			"editing",
			"editor",
			"list",
			"number",
			"sheet",
			"spreadsheet",
			"symbol",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_list_numbered_rtl",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"digit",
			"doc",
			"edit",
			"editing",
			"editor",
			"list",
			"number",
			"rtl",
			"sheet",
			"spreadsheet",
			"symbol",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_paint",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"color",
			"doc",
			"edit",
			"editing",
			"editor",
			"fill",
			"paint",
			"sheet",
			"spreadsheet",
			"style",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_quote",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"doc",
			"edit",
			"editing",
			"editor",
			"quotation",
			"quote",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_shapes",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"alphabet",
			"character",
			"color",
			"doc",
			"edit",
			"editing",
			"editor",
			"fill",
			"font",
			"format",
			"letter",
			"paint",
			"sheet",
			"spreadsheet",
			"style",
			"symbol",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_size",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"alphabet",
			"character",
			"color",
			"doc",
			"edit",
			"editing",
			"editor",
			"fill",
			"font",
			"format",
			"letter",
			"paint",
			"sheet",
			"spreadsheet",
			"style",
			"symbol",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_strikethrough",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"alphabet",
			"character",
			"doc",
			"edit",
			"editing",
			"editor",
			"font",
			"format",
			"letter",
			"sheet",
			"size",
			"spreadsheet",
			"strikethrough",
			"style",
			"symbol",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_textdirection_l_to_r",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_textdirection_r_to_l",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "format_underlined",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"alphabet",
			"character",
			"doc",
			"edit",
			"editing",
			"editor",
			"font",
			"letter",
			"line",
			"sheet",
			"spreadsheet",
			"style",
			"symbol",
			"text",
			"type",
			"under",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "forum",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Forum",
			"bubble",
			"community",
			"conversation",
			"hub",
			"speech",
			"talk"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "forward",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"arrow",
			"forward",
			"mail",
			"message",
			"playback",
			"right",
			"sent"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "forward_10",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"10",
			"Fast",
			"arrow",
			"arrows",
			"control",
			"controls",
			"digit",
			"forward",
			"music",
			"number",
			"symbol",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "forward_30",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"10",
			"30",
			"Fast",
			"arrow",
			"arrows",
			"control",
			"controls",
			"digit",
			"forward",
			"music",
			"number",
			"symbol",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "forward_5",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"10",
			"5",
			"Fast",
			"arrow",
			"arrows",
			"control",
			"controls",
			"digit",
			"forward",
			"music",
			"number",
			"symbol",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "forward_to_inbox",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"arrow",
			"email",
			"envelop",
			"forward",
			"inbox",
			"letter",
			"mail",
			"message",
			"note",
			"send"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "foundation",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"architecture",
			"base",
			"basis",
			"building",
			"construction",
			"estate",
			"foundation",
			"home",
			"place",
			"real",
			"residential"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "free_breakfast",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"beverage",
			"breakfast",
			"cafe",
			"coffee",
			"cup",
			"drink",
			"free",
			"mug",
			"tea"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fullscreen",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"adjust",
			"full",
			"fullscreen",
			"size",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "fullscreen_exit",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"adjust",
			"exit",
			"full",
			"fullscreen",
			"size",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "functions",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"average",
			"calculate",
			"count",
			"doc",
			"edit",
			"editing",
			"editor",
			"math",
			"sheet",
			"spreadsheet",
			"style",
			"sum",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "g_translate",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"emblem",
			"g",
			"google",
			"language",
			"logo",
			"mark",
			"speaking",
			"speech",
			"translate",
			"translator",
			"words"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "gamepad",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"buttons",
			"console",
			"controller",
			"device",
			"game",
			"gamepad",
			"gaming",
			"playstation",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "games",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Games",
			"adjust",
			"arrow",
			"arrows",
			"control",
			"controller",
			"direction",
			"left",
			"move",
			"right"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "gavel",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"court",
			"document",
			"gavel",
			"government",
			"judge",
			"law",
			"mallet",
			"official",
			"police",
			"rule",
			"rules"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "gesture",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"Gesture",
			"drawing",
			"finger",
			"gestures",
			"hand",
			"motion"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "get_app",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"arrows",
			"down",
			"download",
			"downloads",
			"drive",
			"export",
			"install",
			"play",
			"upload"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "gif",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"alphabet",
			"animated",
			"animation",
			"bitmap",
			"character",
			"font",
			"format",
			"gif",
			"graphics",
			"interchange",
			"letter",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "golf_course",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"athlete",
			"athletic",
			"ball",
			"club",
			"course",
			"entertainment",
			"flag",
			"golf",
			"golfer",
			"golfing",
			"hobby",
			"hole",
			"place",
			"putt",
			"sports"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "gps_fixed",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"destination",
			"direction",
			"location",
			"maps",
			"pin",
			"place",
			"pointer",
			"stop",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "gps_not_fixed",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"destination",
			"direction",
			"location",
			"maps",
			"pin",
			"place",
			"pointer",
			"stop",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "gps_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"destination",
			"direction",
			"disabled",
			"enabled",
			"location",
			"maps",
			"off",
			"on",
			"pin",
			"place",
			"pointer",
			"slash",
			"stop",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "grade",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"favorite",
			"grade",
			"likes",
			"rate",
			"rated",
			"rating",
			"shape",
			"star"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "gradient",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"color",
			"edit",
			"editing",
			"effect",
			"gradient",
			"image",
			"images",
			"photography",
			"picture",
			"pictures"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "grading",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"approve",
			"check",
			"document",
			"feedback",
			"grade",
			"grading",
			"review",
			"reviewed",
			"select",
			"tick",
			"yes"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "grain",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"dots",
			"edit",
			"editing",
			"effect",
			"grain",
			"image",
			"images",
			"photography",
			"picture",
			"pictures"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "graphic_eq",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"audio",
			"equalizer",
			"graphic",
			"music",
			"recording",
			"sound",
			"voice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "grass",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"fodder",
			"grass",
			"ground",
			"home",
			"lawn",
			"plant",
			"turf"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "grid_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"collage",
			"disabled",
			"enabled",
			"grid",
			"image",
			"layout",
			"off",
			"on",
			"slash",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "grid_on",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"collage",
			"disabled",
			"enabled",
			"grid",
			"image",
			"layout",
			"off",
			"on",
			"slash",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "group",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"accounts",
			"committee",
			"face",
			"family",
			"friends",
			"group",
			"humans",
			"network",
			"people",
			"persons",
			"profiles",
			"social",
			"team",
			"users"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "group_add",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"accounts",
			"add",
			"committee",
			"face",
			"family",
			"friends",
			"group",
			"humans",
			"increase",
			"more",
			"network",
			"people",
			"persons",
			"plus",
			"profiles",
			"social",
			"team",
			"users"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "group_work",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"alliance",
			"collaboration",
			"group",
			"partnership",
			"team",
			"teamwork",
			"together",
			"work"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "groups",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"body",
			"collaboration",
			"gathering",
			"groups",
			"human",
			"people",
			"person",
			"teams"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "handyman",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"build",
			"construction",
			"hammer",
			"handyman",
			"screw",
			"screwdriver",
			"tools"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "hd",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Hd",
			"alphabet",
			"character",
			"definition",
			"font",
			"high",
			"letter",
			"movie",
			"movies",
			"resolution",
			"symbol",
			"text",
			"tv",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "hdr_off",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"alphabet",
			"character",
			"disabled",
			"dynamic",
			"enabled",
			"enhance",
			"font",
			"hdr",
			"high",
			"letter",
			"off",
			"on",
			"range",
			"select",
			"slash",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "hdr_on",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"add",
			"alphabet",
			"character",
			"dynamic",
			"enhance",
			"font",
			"hdr",
			"high",
			"letter",
			"plus",
			"range",
			"select",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "hdr_strong",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"circle",
			"dots",
			"dynamic",
			"enhance",
			"hdr",
			"high",
			"range"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "hdr_weak",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"circle",
			"dots",
			"dynamic",
			"enhance",
			"hdr",
			"high",
			"range"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "headset",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"accessory",
			"audio",
			"device",
			"ear",
			"earphone",
			"headphones",
			"headset",
			"listen",
			"music",
			"sound"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "headset_mic",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"accessory",
			"audio",
			"chat",
			"device",
			"ear",
			"earphone",
			"headphones",
			"headset",
			"listen",
			"mic",
			"music",
			"sound",
			"talk"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "healing",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"bandage",
			"edit",
			"editing",
			"emergency",
			"healing",
			"hospital",
			"image",
			"medicine"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "hearing",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Hearing",
			"accessibility",
			"accessible",
			"aid",
			"handicap",
			"hearing",
			"help",
			"impaired",
			"listen",
			"sound"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "hearing_disabled",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"accessibility",
			"accessible",
			"aid",
			"disabled",
			"ear",
			"enabled",
			"handicap",
			"hearing",
			"hearing disabled",
			"help",
			"impaired",
			"listen",
			"off",
			"on",
			"slash",
			"sound"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "height",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"color",
			"doc",
			"edit",
			"editing",
			"editor",
			"fill",
			"format",
			"paint",
			"sheet",
			"spreadsheet",
			"style",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "help",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"?",
			"alert",
			"announcement",
			"assistance",
			"help",
			"info",
			"information",
			"mark",
			"question",
			"support",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "help_center",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"?",
			"center",
			"help",
			"info",
			"information",
			"question mark",
			"support",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "help_outline",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"?",
			"alert",
			"announcement",
			"help",
			"info",
			"information",
			"outline",
			"question mark",
			"support",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "high_quality",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Hq",
			"alphabet",
			"character",
			"definition",
			"font",
			"letter",
			"movie",
			"movies",
			"quality",
			"resolution",
			"symbol",
			"text",
			"tv",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "highlight",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"color",
			"doc",
			"edit",
			"editing",
			"editor",
			"emphasize",
			"fill",
			"format",
			"highlight",
			"paint",
			"sheet",
			"spreadsheet",
			"style",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "highlight_alt",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"box",
			"click",
			"draw",
			"focus",
			"highlight",
			"pointer",
			"target"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "highlight_off",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"circle",
			"click",
			"close",
			"focus",
			"highlight",
			"off",
			"stop",
			"target",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "history",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"back",
			"backwards",
			"clock",
			"history",
			"refresh",
			"reverse",
			"rotate",
			"time"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "history_edu",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"document",
			"edu",
			"feather",
			"history",
			"letter",
			"paper",
			"pen",
			"quill",
			"story",
			"tools",
			"write",
			"writing"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "history_toggle_off",
		"version": 4,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"clock",
			"history",
			"off",
			"schedule",
			"time",
			"toggle"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "home",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"address",
			"architecture",
			"building",
			"estate",
			"home",
			"house",
			"place",
			"real",
			"residence",
			"residential",
			"shelter",
			"structure",
			"unit"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "home_repair_service",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"box",
			"equipment",
			"home",
			"kit",
			"mechanic",
			"repair",
			"repairing",
			"service",
			"tool",
			"toolbox",
			"tools",
			"workshop"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "home_work",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"architecture",
			"building",
			"estate",
			"home",
			"place",
			"real",
			"residence",
			"residential",
			"shelter",
			"work"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "horizontal_distribute",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"alignment",
			"distribute",
			"format",
			"horizontal",
			"layout",
			"lines",
			"paragraph",
			"rule",
			"rules",
			"style",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "horizontal_rule",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"gmail",
			"horizontal",
			"line",
			"novitas",
			"rule"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "horizontal_split",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bars",
			"horizontal",
			"lines",
			"split",
			"stacked"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "hot_tub",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"bath",
			"bathing",
			"bathroom",
			"bathtub",
			"hotel",
			"human",
			"jacuzzi",
			"person",
			"shower",
			"spa",
			"steam",
			"travel",
			"tub",
			"water"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "hotel",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"body",
			"hotel",
			"human",
			"people",
			"person",
			"sleep",
			"stay",
			"travel",
			"trip"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "hourglass_bottom",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Hourglass",
			"bottom",
			"countdown",
			"half",
			"loading",
			"minute",
			"minutes",
			"time",
			"wait",
			"waiting"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "hourglass_disabled",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"countdown",
			"disabled",
			"empty",
			"enabled",
			"hourglass",
			"loading",
			"minute",
			"minutes",
			"off",
			"on",
			"slash",
			"time",
			"wait",
			"waiting"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "hourglass_empty",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"countdown",
			"empty",
			"hourglass",
			"loading",
			"minute",
			"minutes",
			"time",
			"wait",
			"waiting"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "hourglass_full",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"countdown",
			"full",
			"hourglass",
			"loading",
			"minute",
			"minutes",
			"time",
			"wait",
			"waiting"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "hourglass_top",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Hourglass",
			"countdown",
			"half",
			"loading",
			"minute",
			"minutes",
			"time",
			"top",
			"wait",
			"waiting"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "house",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"architecture",
			"building",
			"estate",
			"family",
			"home",
			"homepage",
			"house",
			"place",
			"real",
			"residence",
			"residential",
			"shelter"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "house_siding",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"architecture",
			"building",
			"construction",
			"estate",
			"exterior",
			"facade",
			"home",
			"house",
			"place",
			"real",
			"residential",
			"siding"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "how_to_reg",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"account",
			"ballot",
			"check",
			"election",
			"face",
			"human",
			"ok",
			"people",
			"person",
			"poll",
			"profile",
			"register",
			"registration",
			"tick",
			"user",
			"vote"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "how_to_vote",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"ballot",
			"election",
			"poll",
			"vote"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "http",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"alphabet",
			"character",
			"font",
			"http",
			"letter",
			"symbol",
			"text",
			"transfer",
			"type",
			"url",
			"website"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "https",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"connection",
			"https",
			"key",
			"lock",
			"locked",
			"secure"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "hvac",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"air",
			"conditioning",
			"heating",
			"hvac",
			"ventilation"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "image",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"image",
			"landscape",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "image_aspect_ratio",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"aspect",
			"image",
			"photo",
			"photography",
			"picture",
			"ratio",
			"rectangle",
			"square"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "image_not_supported",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"disabled",
			"enabled",
			"image",
			"landscape",
			"mountain",
			"mountains",
			"not",
			"off",
			"on",
			"photo",
			"photography",
			"picture",
			"slash",
			"supported"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "image_search",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"find",
			"glass",
			"image",
			"landscape",
			"magnifying",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture",
			"search"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "import_contacts",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Import",
			"address",
			"book",
			"contacts",
			"friends",
			"info",
			"information",
			"open"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "import_export",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Import",
			"arrow",
			"arrows",
			"direction",
			"down",
			"explort",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "important_devices",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"Android",
			"OS",
			"desktop",
			"devices",
			"hardware",
			"iOS",
			"important",
			"mobile",
			"monitor",
			"phone",
			"star",
			"tablet",
			"web"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "inbox",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"archive",
			"email",
			"inbox",
			"incoming",
			"mail",
			"message"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "indeterminate_check_box",
		"version": 9,
		"unsupported_families": [],
		"categories": [
			"toggle"
		],
		"tags": [
			"box",
			"button",
			"check",
			"component",
			"control",
			"form",
			"indeterminate",
			"select",
			"selected",
			"selection",
			"square",
			"toggle",
			"ui",
			"undetermined"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "info",
		"version": 9,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"alert",
			"announcement",
			"bubble",
			"i",
			"info",
			"information"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "input",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"box",
			"download",
			"input",
			"move",
			"right"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "insert_chart",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"add",
			"analytics",
			"bar",
			"bars",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "insert_chart_outlined",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"add",
			"analytics",
			"bar",
			"bars",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "insert_comment",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"add",
			"bubble",
			"chat",
			"comment",
			"feedback",
			"message"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "insert_drive_file",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"doc",
			"drive",
			"file",
			"format",
			"insert",
			"sheet",
			"slide"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "insert_emoticon",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"account",
			"emoji",
			"emoticon",
			"face",
			"happy",
			"human",
			"people",
			"person",
			"profile",
			"sentiment",
			"smile",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "insert_invitation",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"calendar",
			"date",
			"day",
			"event",
			"mark",
			"month",
			"range",
			"remember",
			"reminder",
			"today",
			"week"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "insert_link",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"add",
			"attach",
			"clip",
			"file",
			"link",
			"mail",
			"media"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "insert_photo",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"image",
			"landscape",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "insights",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"analytics",
			"bar",
			"bars",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"insights",
			"measure",
			"metrics",
			"stars",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "integration_instructions",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"brackets",
			"clipboard",
			"code",
			"develop",
			"developer",
			"doc",
			"document",
			"engineer",
			"engineering",
			"instructions",
			"integration"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "invert_colors",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"colors",
			"drop",
			"droplet",
			"hue",
			"invert",
			"inverted",
			"palette",
			"tone",
			"water"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "invert_colors_off",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Invert",
			"color",
			"disabled",
			"drop",
			"droplet",
			"enabled",
			"hue",
			"inverted",
			"off",
			"on",
			"opacity",
			"palette",
			"slash",
			"tone",
			"water"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "iso",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"add",
			"edit",
			"editing",
			"effect",
			"image",
			"iso",
			"minus",
			"photography",
			"picture",
			"plus",
			"sensor",
			"shutter",
			"speed",
			"subtract"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "keyboard",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"computer",
			"device",
			"hardware",
			"input",
			"keyboard",
			"keypad",
			"letter",
			"office",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "keyboard_arrow_down",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"arrow",
			"arrows",
			"down",
			"keyboard"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "keyboard_arrow_left",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"arrow",
			"arrows",
			"keyboard",
			"left"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "keyboard_arrow_right",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"arrow",
			"arrows",
			"keyboard",
			"right"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "keyboard_arrow_up",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"arrow",
			"arrows",
			"keyboard",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "keyboard_backspace",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"arrow",
			"arrows",
			"backspace",
			"keyboard",
			"left"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "keyboard_capslock",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"arrow",
			"arrows",
			"capslock",
			"keyboard",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "keyboard_hide",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"arrow",
			"computer",
			"device",
			"down",
			"hardware",
			"hide",
			"input",
			"keyboard",
			"keypad",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "keyboard_return",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"arrow",
			"arrows",
			"keyboard",
			"left",
			"return"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "keyboard_tab",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"arrow",
			"arrows",
			"keyboard",
			"tab"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "keyboard_voice",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"keyboard",
			"mic",
			"microphone",
			"noise",
			"record",
			"recorder",
			"speaker",
			"voice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "king_bed",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"bed",
			"bedroom",
			"double",
			"full",
			"furniture",
			"home",
			"hotel",
			"house",
			"king",
			"night",
			"pillows",
			"queen",
			"rest",
			"room",
			"size",
			"sleep"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "kitchen",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"appliance",
			"cold",
			"food",
			"fridge",
			"home",
			"house",
			"ice",
			"kitchen",
			"place",
			"refrigerator",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "label",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"indent",
			"label",
			"stamp",
			"sticker",
			"tag"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "label_important",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"important",
			"indent",
			"label",
			"mail",
			"stamp",
			"sticker",
			"tag",
			"wing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "label_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"disabled",
			"enabled",
			"indent",
			"label",
			"off",
			"on",
			"slash",
			"stamp",
			"sticker",
			"tag"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "landscape",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"image",
			"landscape",
			"mountain",
			"mountains",
			"nature",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "language",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"globe",
			"language",
			"planet",
			"website",
			"world",
			"www"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "laptop",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"chrome",
			"computer",
			"desktop",
			"device",
			"hardware",
			"iOS",
			"laptop",
			"mac",
			"monitor",
			"web",
			"windows"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "laptop_chromebook",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"chrome",
			"chromebook",
			"computer",
			"desktop",
			"device",
			"hardware",
			"laptop",
			"monitor",
			"web"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "laptop_mac",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"OS",
			"computer",
			"desktop",
			"device",
			"hardware",
			"iOS",
			"laptop",
			"mac",
			"monitor",
			"web"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "laptop_windows",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"computer",
			"desktop",
			"device",
			"hardware",
			"laptop",
			"monitor",
			"web",
			"windows"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "last_page",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"chevron",
			"end",
			"forward",
			"last",
			"page",
			"right"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "launch",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"box",
			"launch",
			"new",
			"open",
			"window"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "layers",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"arrange",
			"disabled",
			"enabled",
			"interaction",
			"layers",
			"maps",
			"off",
			"on",
			"overlay",
			"pages",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "layers_clear",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"arrange",
			"clear",
			"delete",
			"disabled",
			"enabled",
			"interaction",
			"layers",
			"maps",
			"off",
			"on",
			"overlay",
			"pages",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "leaderboard",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"analytics",
			"bar",
			"bars",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"leaderboard",
			"measure",
			"metrics",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "leak_add",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"add",
			"leak",
			"link",
			"signals",
			"sync",
			"wave"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "leak_remove",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"disabled",
			"enabled",
			"leak",
			"link",
			"off",
			"on",
			"remove",
			"signals",
			"slash",
			"sync"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "legend_toggle",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"analytics",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"legend",
			"lines",
			"measure",
			"metrics",
			"monitoring",
			"stackdriver",
			"statistics",
			"toggle",
			"tracking"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "lens",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"circle",
			"full",
			"geometry",
			"moon"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "library_add",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Library",
			"add",
			"collection",
			"music",
			"plus",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "library_add_check",
		"version": 10,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"add",
			"approve",
			"check",
			"complete",
			"done",
			"library",
			"mark",
			"ok",
			"select",
			"tick",
			"verified",
			"yes"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "library_books",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Library",
			"add",
			"audio",
			"book",
			"books",
			"collection"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "library_music",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Library",
			"add",
			"collection",
			"music",
			"song"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "line_style",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"dash",
			"dotted",
			"line",
			"rule",
			"spacing",
			"style"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "line_weight",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"height",
			"line",
			"size",
			"spacing",
			"style",
			"thickness",
			"weight"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "linear_scale",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"Ui",
			"linear",
			"measure",
			"menu",
			"scale",
			"slider"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "link",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"chain",
			"clip",
			"connection",
			"link",
			"linked",
			"links",
			"multimedia",
			"url"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "link_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"chain",
			"clip",
			"connection",
			"disabled",
			"enabled",
			"link",
			"linked",
			"links",
			"multimedia",
			"off",
			"on",
			"slash",
			"url"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "linked_camera",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"camera",
			"connect",
			"image",
			"link",
			"linked",
			"photo",
			"photography",
			"picture",
			"signal",
			"signals",
			"sync",
			"wave"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "list",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"file",
			"format",
			"index",
			"list",
			"menu",
			"options"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "list_alt",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"List",
			"box",
			"contained",
			"format",
			"lines",
			"order",
			"reorder",
			"stacked",
			"title"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "live_help",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"?",
			"announcement",
			"help",
			"info",
			"information",
			"mark",
			"question",
			"support",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "live_tv",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"Android",
			"OS",
			"antennas hardware",
			"chrome",
			"desktop",
			"device",
			"iOS",
			"live",
			"mac",
			"monitor",
			"movie",
			"play",
			"stream",
			"television",
			"tv",
			"web",
			"window"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_activity",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"activity",
			"event",
			"local",
			"star",
			"things",
			"ticket"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_airport",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"air",
			"airplane",
			"airport",
			"flight",
			"plane",
			"transportation",
			"travel",
			"trip"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "local_atm",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"atm",
			"bill",
			"card",
			"cart",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"money",
			"online",
			"pay",
			"payment",
			"shopping",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_bar",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"alcohol",
			"bar",
			"bottle",
			"cocktail",
			"drink",
			"food",
			"liquor",
			"wine"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_cafe",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"bottle",
			"cafe",
			"coffee",
			"cup",
			"drink",
			"food",
			"restaurant",
			"tea"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_car_wash",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"auto",
			"car",
			"local",
			"vehicle",
			"wash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_convenience_store",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"24",
			"bill",
			"building",
			"business",
			"buy",
			"card",
			"cart",
			"cash",
			"coin",
			"commerce",
			"convenience",
			"credit",
			"currency",
			"dollars",
			"local",
			"market",
			"money",
			"online",
			"pay",
			"payment",
			"shop",
			"shopping",
			"store",
			"storefront"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_dining",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"dining",
			"eat",
			"food",
			"fork",
			"knife",
			"local",
			"meal",
			"restaurant",
			"spoon"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_drink",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"air",
			"attr",
			"fresh",
			"park",
			"tree"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_fire_department",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"911",
			"department",
			"fire",
			"firefighter",
			"flame",
			"hot"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_florist",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"florist",
			"flower",
			"local",
			"shop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_gas_station",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"auto",
			"car",
			"gas",
			"oil",
			"station",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_grocery_store",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"grocery",
			"market",
			"shop",
			"store"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_hospital",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"911",
			"aid",
			"cross",
			"emergency",
			"first",
			"hospital",
			"medicine"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_hotel",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_laundry_service",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"cleaning",
			"dry",
			"dryer",
			"hotel",
			"laundry",
			"service",
			"washer"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_library",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"book",
			"community",
			"library",
			"local",
			"read"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_mall",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"bill",
			"building",
			"business",
			"buy",
			"card",
			"cart",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"handbag",
			"mall",
			"money",
			"online",
			"pay",
			"payment",
			"shop",
			"shopping",
			"store",
			"storefront"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_movies",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_offer",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"deal",
			"discount",
			"offer",
			"price",
			"shop",
			"shopping",
			"store.",
			"tag"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_parking",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"alphabet",
			"auto",
			"car",
			"character",
			"font",
			"letter",
			"park",
			"parking",
			"symbol",
			"text",
			"type",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_pharmacy",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"911",
			"aid",
			"cross",
			"emergency",
			"first",
			"hospital",
			"medicine"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_phone",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"booth",
			"call",
			"communication",
			"phone",
			"telecommunication"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_pizza",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"drink",
			"fastfood",
			"food",
			"meal",
			"pizza"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_play",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_police",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"911",
			"badge",
			"law",
			"officer",
			"police",
			"security"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_post_office",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"delivery",
			"letter",
			"mail",
			"office",
			"package",
			"parcel",
			"post",
			"postal",
			"send",
			"shopping",
			"stamp"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_printshop",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_see",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"attraction",
			"explore",
			"local",
			"see",
			"shop",
			"store"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_shipping",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"delivery",
			"letter",
			"mail",
			"maps",
			"office",
			"package",
			"parcel",
			"post",
			"postal",
			"send",
			"shopping",
			"stamp",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "local_taxi",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"cab",
			"call",
			"car",
			"cars",
			"direction",
			"lyft",
			"maps",
			"public",
			"taxi",
			"transportation",
			"uber",
			"vehicle",
			"yellow"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "location_city",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"apartments",
			"architecture",
			"buildings",
			"business",
			"city",
			"estate",
			"home",
			"landscape",
			"location",
			"place",
			"real",
			"residence",
			"residential",
			"shelter",
			"town",
			"urban"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "location_disabled",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"destination",
			"direction",
			"disabled",
			"enabled",
			"location",
			"maps",
			"off",
			"on",
			"pin",
			"place",
			"pointer",
			"slash",
			"stop",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "location_off",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"destination",
			"direction",
			"disabled",
			"enabled",
			"location",
			"maps",
			"off",
			"on",
			"pin",
			"place",
			"slash",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "location_on",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"destination",
			"direction",
			"disabled",
			"enabled",
			"location",
			"maps",
			"off",
			"on",
			"pin",
			"place",
			"slash",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "location_searching",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"destination",
			"direction",
			"location",
			"maps",
			"pin",
			"place",
			"pointer",
			"stop",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "lock",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"connection",
			"key",
			"lock",
			"locked",
			"privacy",
			"private",
			"safe",
			"secure"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "lock_open",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"connection",
			"key",
			"lock",
			"locked",
			"open",
			"secure",
			"unlocked"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "login",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"access",
			"arrow",
			"enter",
			"input",
			"left",
			"log",
			"login",
			"sign in"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "looks",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"circle",
			"half",
			"looks",
			"rainbow"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "looks_3",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"3",
			"digit",
			"looks",
			"numbers",
			"square",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "looks_4",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"4",
			"digit",
			"looks",
			"numbers",
			"square",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "looks_5",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"5",
			"digit",
			"looks",
			"numbers",
			"square",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "looks_6",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"6",
			"digit",
			"looks",
			"numbers",
			"square",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "looks_one",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"1",
			"digit",
			"looks",
			"numbers",
			"square",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "looks_two",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"2",
			"digit",
			"looks",
			"numbers",
			"square",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "loop",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Loop",
			"arrow",
			"arrows",
			"music",
			"repeat",
			"rotate"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "loupe",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"add",
			"details",
			"focus",
			"glass",
			"loupe",
			"magnifying",
			"plus"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "low_priority",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"arrange",
			"arrow",
			"bottom",
			"low",
			"move backward",
			"order",
			"priority"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "loyalty",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"card",
			"credit",
			"heart",
			"loyalty",
			"membership",
			"miles",
			"points",
			"program",
			"tag",
			"travel",
			"trip"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "luggage",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"bag",
			"baggage",
			"carry",
			"luggage",
			"on",
			"suitcase",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mail",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"email",
			"envelop",
			"mail",
			"message",
			"send",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mail_outline",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "map",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"destination",
			"direction",
			"location",
			"maps",
			"pin",
			"place",
			"route",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "maps_ugc",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"add",
			"bubble",
			"chat",
			"destination",
			"direction",
			"location",
			"maps",
			"pin",
			"place",
			"plus",
			"route",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mark_chat_read",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"approve",
			"bubble",
			"chat",
			"check",
			"comment",
			"communicate",
			"complete",
			"done",
			"mark",
			"message",
			"ok",
			"read",
			"select",
			"sent",
			"speech",
			"tick",
			"verified",
			"yes"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "mark_chat_unread",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"bubble",
			"chat",
			"circle",
			"comment",
			"communicate",
			"mark",
			"message",
			"notification",
			"speech",
			"unread"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "mark_email_read",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"approve",
			"check",
			"complete",
			"done",
			"email",
			"envelop",
			"letter",
			"mail",
			"mark",
			"message",
			"note",
			"ok",
			"read",
			"select",
			"send",
			"sent",
			"tick",
			"yes"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "mark_email_unread",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"check",
			"circle",
			"email",
			"envelop",
			"letter",
			"mail",
			"mark",
			"message",
			"note",
			"notification",
			"send",
			"unread"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "markunread",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"email",
			"envelop",
			"mail",
			"mark",
			"message",
			"send",
			"text",
			"unread"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "markunread_mailbox",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"deliver",
			"envelop",
			"letter",
			"mail",
			"mailbox",
			"mark",
			"post",
			"postal",
			"postbox",
			"receive",
			"send",
			"unread"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "masks",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"air",
			"cover",
			"face",
			"hospital",
			"masks",
			"medical",
			"pollution",
			"protection",
			"respirator",
			"sick"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "maximize",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"line",
			"maximize",
			"shape"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mediation",
		"version": 9,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"alternative",
			"compromise",
			"mediation",
			"negotiation",
			"party",
			"structure"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "medical_services",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"aid",
			"emergency",
			"first",
			"kit",
			"medical",
			"services"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "meeting_room",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"door",
			"doorway",
			"entrance",
			"interior",
			"meeting",
			"open",
			"place",
			"room"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "memory",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"card",
			"chip",
			"digital",
			"memory",
			"micro",
			"processor",
			"sd",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "menu",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"hamburger",
			"line",
			"lines",
			"menu"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "menu_book",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"book",
			"dining",
			"food",
			"meal",
			"menu",
			"restaurant"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "menu_open",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"hamburger",
			"left",
			"line",
			"lines",
			"menu",
			"open"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "merge_type",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"arrow",
			"combine",
			"format",
			"margin",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "message",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Message",
			"bubble",
			"chat",
			"speech",
			"talk",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mic",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Mic",
			"hear",
			"hearing",
			"microphone",
			"noise",
			"record",
			"sound",
			"voice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mic_none",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Mic",
			"hear",
			"hearing",
			"microphone",
			"noise",
			"record",
			"sound",
			"voice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mic_off",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Mic",
			"disabled",
			"enabled",
			"hear",
			"hearing",
			"microphone",
			"noise",
			"off",
			"on",
			"record",
			"slash",
			"sound",
			"voice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "microwave",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"appliance",
			"cooking",
			"electric",
			"heat",
			"home",
			"house",
			"kitchen",
			"machine",
			"microwave"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "military_tech",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"army",
			"award",
			"badge",
			"honor",
			"medal",
			"merit",
			"military",
			"order",
			"privilege",
			"prize",
			"rank",
			"reward",
			"ribbon",
			"soldier",
			"star",
			"status",
			"tech",
			"trophy",
			"win",
			"winner"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "minimize",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"line",
			"minimize",
			"shape"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "miscellaneous_services",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "missed_video_call",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Missed",
			"arrow",
			"call",
			"record",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mms",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"chat",
			"image",
			"landscape",
			"message",
			"messaging",
			"mms",
			"mountain",
			"mountains",
			"multimedia",
			"photo",
			"photography",
			"picture",
			"service",
			"talk",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mobile_friendly",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"check",
			"device",
			"friendly",
			"mobile",
			"ok",
			"tick"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mobile_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"allowed",
			"device",
			"disabled",
			"enabled",
			"mobile",
			"not",
			"off",
			"on",
			"silence",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mobile_screen_share",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Mobile",
			"arrow",
			"device",
			"mirror",
			"monitor",
			"phone",
			"screen",
			"share",
			"tv"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mode_comment",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"bubble",
			"chat",
			"comment",
			"speech"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "model_training",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"bulb",
			"idea",
			"inprogress",
			"light",
			"load",
			"loading",
			"model",
			"refresh",
			"renew",
			"restore",
			"reverse",
			"rotate",
			"training"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "monetization_on",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"bill",
			"card",
			"cart",
			"cash",
			"circle",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"money",
			"online",
			"pay",
			"payment",
			"shopping",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "money",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"bill",
			"card",
			"cart",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"digit",
			"dollars",
			"money",
			"number",
			"online",
			"pay",
			"payment",
			"shopping",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "money_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"bill",
			"card",
			"cart",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"disabled",
			"dollars",
			"enabled",
			"money",
			"off",
			"on",
			"online",
			"pay",
			"payment",
			"shopping",
			"slash",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "monochrome_photos",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"black",
			"camera",
			"image",
			"monochrome",
			"photo",
			"photography",
			"picture",
			"white"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mood",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"emoji",
			"emotions",
			"expressions",
			"face",
			"feelings",
			"glad",
			"happiness",
			"happy",
			"like",
			"mood",
			"person",
			"pleased",
			"smile",
			"smiling",
			"social",
			"survey"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mood_bad",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"disappointment",
			"dislike",
			"emoji",
			"emotions",
			"expressions",
			"face",
			"feelings",
			"mood",
			"person",
			"social",
			"survey",
			"unhappiness",
			"unhappy",
			"unpleased",
			"unsmile",
			"unsmiling"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "moped",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"direction",
			"maps",
			"moped",
			"motorized",
			"public",
			"scooter",
			"transportation",
			"vehicle",
			"vespa"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "more",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"3",
			"dots",
			"etc",
			"indent",
			"label",
			"more",
			"stamp",
			"sticker",
			"tab",
			"tag",
			"three"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "more_horiz",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"3",
			"dots",
			"etc",
			"horiz",
			"horizontal",
			"ios",
			"more",
			"three"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "more_time",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"More",
			"time"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "more_vert",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"3",
			"android",
			"dots",
			"etc",
			"more",
			"three",
			"vert",
			"vertical"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "motion_photos_on",
		"version": 11,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"animation",
			"circle",
			"disabled",
			"enabled",
			"motion",
			"off",
			"on",
			"photos",
			"play",
			"slash",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "motion_photos_pause",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "motion_photos_paused",
		"version": 10,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"animation",
			"circle",
			"motion",
			"pause",
			"paused",
			"photos",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "mouse",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"click",
			"computer",
			"cursor",
			"device",
			"hardware",
			"mouse",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "move_to_inbox",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"archive",
			"arrow",
			"email",
			"inbox",
			"incoming",
			"mail",
			"message"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "movie",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Movie",
			"cinema",
			"film",
			"media",
			"slate",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "movie_creation",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"clapperboard",
			"creation",
			"film",
			"movie",
			"movies",
			"slate",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "movie_filter",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"clapperboard",
			"creation",
			"film",
			"movie",
			"movies",
			"slate",
			"stars",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "multiline_chart",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"analytics",
			"bar",
			"bars",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"multiple",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "multiple_stop",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"arrows",
			"directions",
			"dots",
			"left",
			"maps",
			"multiple",
			"right",
			"stop",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "museum",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"attraction",
			"event",
			"exhibition",
			"explore",
			"local",
			"museum",
			"see",
			"shop",
			"store",
			"tour"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "music_note",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"audio",
			"audiotrack",
			"key",
			"music",
			"note",
			"sound",
			"track"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "music_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"audio",
			"audiotrack",
			"disabled",
			"enabled",
			"key",
			"music",
			"note",
			"off",
			"on",
			"slash",
			"sound",
			"track"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "music_video",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Music",
			"band",
			"recording",
			"screen",
			"tv",
			"video",
			"watch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "my_location",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"destination",
			"direction",
			"location",
			"maps",
			"navigation",
			"pin",
			"place",
			"point",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "nat",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "nature",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"forest",
			"nature",
			"outdoor",
			"park",
			"tree",
			"wilderness"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "nature_people",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"activity",
			"body",
			"forest",
			"human",
			"nature",
			"outdoor",
			"park",
			"people",
			"person",
			"tree",
			"wilderness"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "navigate_before",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"arrow",
			"arrows",
			"before",
			"direction",
			"left",
			"navigate"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "navigate_next",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"navigate",
			"next",
			"right"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "navigation",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"destination",
			"direction",
			"location",
			"maps",
			"navigation",
			"pin",
			"place",
			"point",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "near_me",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"destination",
			"direction",
			"location",
			"maps",
			"navigation",
			"pin",
			"place",
			"point",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "near_me_disabled",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"destination",
			"direction",
			"disabled",
			"enabled",
			"location",
			"maps",
			"me",
			"navigation",
			"near",
			"off",
			"on",
			"pin",
			"place",
			"point",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "network_check",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"check",
			"connect",
			"connection",
			"internet",
			"meter",
			"network",
			"signal",
			"speed",
			"tick",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "network_locked",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"alert",
			"available",
			"cell",
			"cellular",
			"data",
			"error",
			"internet",
			"lock",
			"mobile",
			"network",
			"not",
			"notification",
			"phone",
			"restricted",
			"signal",
			"speed",
			"symbol",
			"warning",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "new_releases",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"!",
			"New",
			"alert",
			"attention",
			"burst",
			"caution",
			"danger",
			"error",
			"exclamation",
			"important",
			"mark",
			"notification",
			"release",
			"releases",
			"star",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "next_plan",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"calendar",
			"circle",
			"next",
			"plan",
			"right",
			"schedule"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "next_week",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"arrow",
			"briefcase",
			"calendar",
			"next",
			"schedule",
			"week",
			"work"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "nfc",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"communication",
			"data",
			"field",
			"mobile",
			"near",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "night_shelter",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"architecture",
			"bed",
			"building",
			"estate",
			"homeless",
			"house",
			"night",
			"place",
			"real",
			"shelter",
			"sleep"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "nights_stay",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"cloud",
			"crescent",
			"dark",
			"mode",
			"moon",
			"nights",
			"phases",
			"silence",
			"silent",
			"sky",
			"stay",
			"time",
			"weather"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "no_backpack",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"back",
			"backpack",
			"bag",
			"book",
			"bookbag",
			"disabled",
			"enabled",
			"knapsack",
			"np",
			"off",
			"on",
			"pack",
			"slash",
			"storage",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "no_cell",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"Android",
			"OS",
			"cell",
			"device",
			"disabled",
			"enabled",
			"hardware",
			"iOS",
			"mobile",
			"no",
			"off",
			"on",
			"phone",
			"slash",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "no_drinks",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"alcohol",
			"beverage",
			"bottle",
			"cocktail",
			"drink",
			"drinks",
			"food",
			"liquor",
			"no",
			"wine"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "no_encryption",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"disabled",
			"enabled",
			"encryption",
			"lock",
			"no",
			"off",
			"on",
			"password",
			"safety",
			"security",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "no_flash",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"bolt",
			"camera",
			"disabled",
			"enabled",
			"flash",
			"image",
			"lightning",
			"no",
			"off",
			"on",
			"photo",
			"photography",
			"picture",
			"slash",
			"thunderbolt"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "no_food",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"disabled",
			"drink",
			"enabled",
			"fastfood",
			"food",
			"hamburger",
			"meal",
			"no",
			"off",
			"on",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "no_luggage",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"bag",
			"baggage",
			"carry",
			"disabled",
			"enabled",
			"luggage",
			"no",
			"off",
			"on",
			"slash",
			"suitcase",
			"travel"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "no_meals",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"dining",
			"disabled",
			"eat",
			"enabled",
			"food",
			"fork",
			"knife",
			"meal",
			"meals",
			"no",
			"off",
			"on",
			"restaurant",
			"slash",
			"spoon"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "no_meeting_room",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"disabled",
			"door",
			"doorway",
			"enabled",
			"entrance",
			"interior",
			"meeting",
			"off",
			"on",
			"open",
			"place",
			"room",
			"slash",
			"unavailable"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "no_photography",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"camera",
			"disabled",
			"enabled",
			"image",
			"no",
			"off",
			"on",
			"photo",
			"photography",
			"picture",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "no_sim",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Sim",
			"camera",
			"card",
			"device",
			"eject",
			"insert",
			"memory",
			"phone",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "no_stroller",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"baby",
			"care",
			"carriage",
			"child",
			"children",
			"disabled",
			"enabled",
			"infant",
			"kid",
			"newborn",
			"no",
			"off",
			"on",
			"slash",
			"stroller",
			"toddler",
			"young"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "no_transfer",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"bus",
			"car",
			"cars",
			"direction",
			"disabled",
			"enabled",
			"maps",
			"no",
			"off",
			"on",
			"public",
			"slash",
			"transfer",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "north",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"directional",
			"north",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "north_east",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"east",
			"noth",
			"right",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "north_west",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"directional",
			"left",
			"north",
			"up",
			"west"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "not_accessible",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"accessibility",
			"accessible",
			"body",
			"handicap",
			"help",
			"human",
			"not",
			"person",
			"wheelchair"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "not_interested",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Not interested",
			"circle",
			"dislike",
			"no",
			"off",
			"x"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "not_listed_location",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"?",
			"destination",
			"help",
			"info",
			"information",
			"location",
			"maps",
			"pin",
			"place",
			"question mark",
			"stop",
			"support",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "not_started",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"circle",
			"not",
			"pause",
			"play",
			"started"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "note",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Note",
			"bookmark",
			"mark",
			"message",
			"paper"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "note_add",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"add",
			"comment",
			"doc",
			"documentation",
			"file",
			"new",
			"note",
			"plus"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "notes",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"comment",
			"doc",
			"document",
			"note",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "notification_important",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"alert"
		],
		"tags": [
			"!",
			"active",
			"alarm",
			"alert",
			"attention",
			"bell",
			"caution",
			"chime",
			"danger",
			"error",
			"exclamation",
			"important",
			"mark",
			"notification",
			"notifications",
			"notify",
			"reminder",
			"ringing",
			"sound",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "notifications",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"alarm",
			"alert",
			"bell",
			"notifications",
			"notify",
			"reminder",
			"sound"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "notifications_active",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"active",
			"alarm",
			"alert",
			"bell",
			"notifications",
			"notify",
			"reminder",
			"sound"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "notifications_none",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"alarm",
			"alert",
			"bell",
			"none",
			"notifications",
			"notify",
			"reminder",
			"sound"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "notifications_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"alarm",
			"alert",
			"bell",
			"disabled",
			"enabled",
			"notifications",
			"notify",
			"off",
			"on",
			"reminder",
			"slash",
			"sound"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "notifications_paused",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"alarm",
			"alert",
			"bell",
			"ignore",
			"notifications",
			"notify",
			"pause",
			"quiet",
			"reminder",
			"sleep",
			"snooze",
			"sound",
			"z",
			"zzz"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "offline_bolt",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bolt",
			"circle",
			"flash",
			"lightning",
			"offline",
			"spark"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "offline_pin",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"approve",
			"check",
			"checkmark",
			"circle",
			"offline",
			"ok",
			"pin",
			"select",
			"tick",
			"yes"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "ondemand_video",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"Android",
			"OS",
			"chrome",
			"demand",
			"desktop",
			"device",
			"hardware",
			"iOS",
			"mac",
			"monitor",
			"ondemand",
			"play",
			"television",
			"tv",
			"video",
			"web",
			"window"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "online_prediction",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bulb",
			"connection",
			"idea",
			"light",
			"network",
			"online",
			"prediction",
			"signal",
			"wireless"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "opacity",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"color",
			"drop",
			"droplet",
			"hue",
			"invert",
			"inverted",
			"opacity",
			"palette",
			"tone",
			"water"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "open_in_browser",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"box",
			"browser",
			"new",
			"open",
			"window"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "open_in_full",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"action",
			"arrow",
			"arrows",
			"expand",
			"full",
			"grow",
			"in",
			"move",
			"open"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "open_in_new",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"box",
			"export",
			"new",
			"open",
			"window"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "open_with",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"expand",
			"move",
			"open",
			"pan",
			"with"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "outbond",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "outdoor_grill",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"barbecue",
			"bbq",
			"charcoal",
			"cooking",
			"grill",
			"home",
			"house",
			"outdoor",
			"outside"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "outlet",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"circuit",
			"electrical",
			"electricity",
			"outlet",
			"plugs",
			"sockets",
			"wall"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "outlined_flag",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"country",
			"flag",
			"goal",
			"mark",
			"nation",
			"report",
			"start"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pages",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"article",
			"gplus",
			"pages",
			"paper",
			"post",
			"star"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pageview",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"doc",
			"document",
			"find",
			"glass",
			"magnifying",
			"page",
			"paper",
			"search",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "palette",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"art",
			"color",
			"colors",
			"filters",
			"paint",
			"palette"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pan_tool",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"fingers",
			"gesture",
			"hand",
			"hands",
			"human",
			"move",
			"pan",
			"scan",
			"stop",
			"tool"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "panorama",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"angle",
			"image",
			"mountain",
			"mountains",
			"panorama",
			"photo",
			"photography",
			"picture",
			"view",
			"wide"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "panorama_fish_eye",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"angle",
			"circle",
			"eye",
			"fish",
			"image",
			"panorama",
			"photo",
			"photography",
			"picture",
			"wide"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "panorama_horizontal",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"angle",
			"horizontal",
			"image",
			"panorama",
			"photo",
			"photography",
			"picture",
			"wide"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "panorama_vertical",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"angle",
			"image",
			"panorama",
			"photo",
			"photography",
			"picture",
			"vertical",
			"wide"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "panorama_wide_angle",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"angle",
			"image",
			"panorama",
			"photo",
			"photography",
			"picture",
			"wide"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "party_mode",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"camera",
			"image",
			"mode",
			"party",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pause",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Pause",
			"control",
			"controls",
			"music",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pause_circle_filled",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Pause",
			"control",
			"controls",
			"music",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pause_circle_outline",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Pause",
			"control",
			"controls",
			"music",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pause_presentation",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Presentation",
			"device",
			"pause",
			"present",
			"screen",
			"share"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "payment",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"card",
			"charge",
			"credit",
			"info",
			"information",
			"money",
			"pay",
			"payment"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "payments",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"bill",
			"card",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"money",
			"multiple",
			"online",
			"pay",
			"payment",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pedal_bike",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"bicycle",
			"bike",
			"car",
			"cars",
			"maps",
			"pedal",
			"public",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "pending",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "pending_actions",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"actions",
			"clipboard",
			"clock",
			"doc",
			"file",
			"pending",
			"remember",
			"save",
			"schedule",
			"time"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "people",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"accounts",
			"committee",
			"face",
			"family",
			"friends",
			"humans",
			"network",
			"people",
			"persons",
			"profiles",
			"social",
			"team",
			"users"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "people_alt",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"accounts",
			"committee",
			"face",
			"family",
			"friends",
			"humans",
			"network",
			"people",
			"persons",
			"profiles",
			"social",
			"team",
			"users"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "people_outline",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"accounts",
			"committee",
			"face",
			"family",
			"friends",
			"humans",
			"network",
			"outline",
			"people",
			"persons",
			"profiles",
			"social",
			"team",
			"users"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "perm_camera_mic",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"camera",
			"image",
			"microphone",
			"min",
			"perm",
			"photo",
			"photography",
			"picture",
			"speaker"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "perm_contact_calendar",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"calendar",
			"contact",
			"date",
			"face",
			"human",
			"information",
			"people",
			"perm",
			"person",
			"profile",
			"schedule",
			"time",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "perm_data_setting",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"data",
			"gear",
			"info",
			"information",
			"perm",
			"settings"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "perm_device_information",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"Android",
			"OS",
			"alert",
			"announcement",
			"device",
			"hardware",
			"i",
			"iOS",
			"info",
			"information",
			"mobile",
			"perm",
			"phone",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "perm_identity",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"human",
			"identity",
			"info",
			"information",
			"person",
			"profile",
			"save"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "perm_media",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"collection",
			"data",
			"doc",
			"document",
			"file",
			"folder",
			"folders",
			"image",
			"landscape",
			"media",
			"mountain",
			"mountains",
			"perm",
			"photo",
			"photography",
			"picture",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "perm_phone_msg",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bubble",
			"call",
			"cell",
			"chat",
			"comment",
			"communicate",
			"contact",
			"device",
			"message",
			"msg",
			"perm",
			"phone",
			"recording",
			"speech",
			"telephone",
			"voice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "perm_scan_wifi",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"alert",
			"announcement",
			"connection",
			"info",
			"information",
			"internet",
			"network",
			"perm",
			"scan",
			"service",
			"signal",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "person",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"account",
			"face",
			"human",
			"people",
			"person",
			"profile",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "person_add",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"+",
			"account",
			"add",
			"face",
			"human",
			"people",
			"person",
			"plus",
			"profile",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "person_add_alt_1",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "person_add_disabled",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"account",
			"add",
			"disabled",
			"enabled",
			"face",
			"human",
			"off",
			"on",
			"people",
			"person",
			"profile",
			"slash",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "person_outline",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"account",
			"face",
			"human",
			"outline",
			"people",
			"person",
			"profile",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "person_pin",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"account",
			"destination",
			"direction",
			"face",
			"human",
			"location",
			"maps",
			"people",
			"person",
			"pin",
			"place",
			"profile",
			"stop",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "person_pin_circle",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"account",
			"destination",
			"direction",
			"face",
			"human",
			"location",
			"maps",
			"people",
			"person",
			"pin",
			"place",
			"profile",
			"stop",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "person_remove",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"account",
			"delete",
			"face",
			"human",
			"minus",
			"people",
			"person",
			"profile",
			"remove",
			"unfriend",
			"user"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "person_remove_alt_1",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "person_search",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"account",
			"avatar",
			"face",
			"find",
			"glass",
			"human",
			"look",
			"magnify",
			"magnifying",
			"people",
			"person",
			"profile",
			"search",
			"user"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "personal_video",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"Android",
			"OS",
			"cam",
			"chrome",
			"desktop",
			"device",
			"hardware",
			"iOS",
			"mac",
			"monitor",
			"personal",
			"television",
			"tv",
			"video",
			"web",
			"window"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pest_control",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"bug",
			"control",
			"exterminator",
			"insects",
			"pest"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "pest_control_rodent",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"control",
			"exterminator",
			"mice",
			"pest",
			"rodent"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "pets",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"animal",
			"cat",
			"dog",
			"hand",
			"paw",
			"pet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phone",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Phone",
			"call",
			"chat",
			"device",
			"mobile",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phone_android",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"call",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"tablet",
			"talk"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phone_bluetooth_speaker",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"bluetooth",
			"call",
			"cell",
			"connect",
			"connection",
			"contact",
			"device",
			"hardware",
			"phone",
			"signal",
			"speaker",
			"symbol",
			"telephone"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phone_callback",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"arrow",
			"arrows",
			"back",
			"call",
			"cell",
			"contact",
			"device",
			"down",
			"hardware",
			"phone",
			"telephone"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phone_disabled",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"OS",
			"call",
			"chat",
			"device",
			"disabled",
			"enabled",
			"hardware",
			"iOS",
			"mobile",
			"off",
			"on",
			"phone",
			"slash",
			"tablet",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phone_enabled",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"OS",
			"call",
			"chat",
			"device",
			"enabled",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"tablet",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phone_forwarded",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"arrow",
			"arrows",
			"call",
			"cell",
			"contact",
			"device",
			"direction",
			"forwarded",
			"hardware",
			"phone",
			"right",
			"telephone"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phone_in_talk",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"call",
			"cell",
			"contact",
			"device",
			"hardware",
			"in",
			"phone",
			"signals",
			"sound",
			"speaker",
			"talk",
			"telephone",
			"wave"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phone_iphone",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"call",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"tablet",
			"talk"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phone_locked",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"call",
			"cell",
			"contact",
			"device",
			"hardware",
			"lock",
			"locked",
			"password",
			"phone",
			"safety",
			"security",
			"telephone"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phone_missed",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"arrows",
			"call",
			"cell",
			"contact arrow",
			"device",
			"hardware",
			"missed",
			"phone",
			"telephone"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phone_paused",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"call",
			"cell",
			"contact",
			"device",
			"hardware",
			"pause",
			"paused",
			"phone",
			"telephone"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phonelink",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"chrome",
			"computer",
			"connect",
			"desktop",
			"device",
			"hardware",
			"iOS",
			"link",
			"mac",
			"mobile",
			"phone",
			"sync",
			"tablet",
			"web",
			"windows"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phonelink_erase",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"OS",
			"call",
			"chat",
			"device",
			"erase",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"tablet",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phonelink_lock",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"OS",
			"call",
			"chat",
			"device",
			"hardware",
			"iOS",
			"lock",
			"mobile",
			"phone",
			"tablet",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phonelink_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"chrome",
			"computer",
			"connect",
			"desktop",
			"device",
			"disabled",
			"enabled",
			"hardware",
			"iOS",
			"link",
			"mac",
			"mobile",
			"off",
			"on",
			"phone",
			"slash",
			"sync",
			"tablet",
			"web",
			"windows"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phonelink_ring",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"OS",
			"call",
			"chat",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"ring",
			"tablet",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "phonelink_setup",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"OS",
			"call",
			"chat",
			"device",
			"hardware",
			"iOS",
			"info",
			"mobile",
			"phone",
			"setup. settings",
			"tablet",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "photo",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"image",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "photo_album",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"album",
			"bookmark",
			"image",
			"library",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "photo_camera",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"camera",
			"image",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "photo_filter",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"filter",
			"filters",
			"image",
			"photo",
			"photography",
			"picture",
			"star",
			"stars"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "photo_library",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"album",
			"image",
			"library",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "photo_size_select_actual",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"actual",
			"image",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture",
			"select",
			"size"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "photo_size_select_large",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"album",
			"edit",
			"editing",
			"image",
			"large",
			"library",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture",
			"select",
			"size"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "photo_size_select_small",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"album",
			"edit",
			"editing",
			"image",
			"library",
			"mountain",
			"mountains",
			"photo",
			"photography",
			"picture",
			"select",
			"size",
			"small"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "picture_as_pdf",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"alphabet",
			"character",
			"document",
			"file",
			"font",
			"image",
			"letter",
			"multiple",
			"pdf",
			"photo",
			"photography",
			"picture",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "picture_in_picture",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"crop",
			"cropped",
			"overlap",
			"photo",
			"picture",
			"position",
			"shape"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "picture_in_picture_alt",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"crop",
			"cropped",
			"overlap",
			"photo",
			"picture",
			"position",
			"shape"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pie_chart",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"analytics",
			"bar",
			"bars",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"pie",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pin_drop",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"destination",
			"direction",
			"location",
			"maps",
			"navigation",
			"pin",
			"place",
			"point",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "place",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"destination",
			"direction",
			"location",
			"maps",
			"navigation",
			"pin",
			"place",
			"point",
			"stop"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "plagiarism",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"doc",
			"document",
			"find",
			"glass",
			"look",
			"magnifying",
			"page",
			"paper",
			"plagiarism",
			"search",
			"see"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "play_arrow",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Play",
			"arrow",
			"control",
			"controls",
			"music",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "play_circle_filled",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Play",
			"arrow",
			"control",
			"controls",
			"music",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "play_circle_outline",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Play",
			"arrow",
			"control",
			"controls",
			"music",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "play_for_work",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"circle",
			"down",
			"google",
			"half",
			"play",
			"work"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "playlist_add",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Playlist",
			"add",
			"collection",
			"list",
			"music",
			"play",
			"plus"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "playlist_add_check",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Playlist",
			"add",
			"check",
			"checkmark",
			"collection",
			"list",
			"music",
			"ok",
			"play",
			"tick"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "playlist_play",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Playlist",
			"collection",
			"list",
			"music",
			"play"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "plumbing",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"fix",
			"plumbing",
			"tool",
			"wrench"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "plus_one",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"1",
			"add",
			"digit",
			"increase",
			"number",
			"one",
			"plus",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "point_of_sale",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"checkout",
			"cost",
			"machine",
			"merchant",
			"money",
			"of",
			"pay",
			"payment",
			"point",
			"pos",
			"retail",
			"sale",
			"system",
			"transaction"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "policy",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"certified",
			"document",
			"glass",
			"legal",
			"magnifying",
			"policy",
			"protection",
			"search",
			"secure",
			"security",
			"shield"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "poll",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"analytics",
			"bar",
			"bars",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"poll",
			"statistics",
			"survey",
			"tracking",
			"vote"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "polymer",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"emblem",
			"logo",
			"mark",
			"polymer"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pool",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"athlete",
			"athletic",
			"beach",
			"body",
			"entertainment",
			"exercise",
			"hobby",
			"human",
			"people",
			"person",
			"place",
			"pool",
			"sea. ocean",
			"sports",
			"swim",
			"swimming",
			"water"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "portable_wifi_off",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Wifi",
			"connected",
			"connection",
			"device",
			"disabled",
			"enabled",
			"internet",
			"off",
			"on",
			"portable",
			"service",
			"slash",
			"usage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "portrait",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"account",
			"face",
			"human",
			"people",
			"person",
			"photo",
			"picture",
			"portrait",
			"profile",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "post_add",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"+",
			"add",
			"doc",
			"document",
			"plus",
			"post",
			"text",
			"writing"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "power",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"charge",
			"cord",
			"electric",
			"electrical",
			"plug",
			"power"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "power_input",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"input",
			"lines",
			"power",
			"supply"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "power_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"charge",
			"cord",
			"disabled",
			"electric",
			"electrical",
			"enabled",
			"off",
			"on",
			"plug",
			"power",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "power_settings_new",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"info",
			"information",
			"off",
			"on",
			"power",
			"save",
			"settings",
			"shutdown"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "pregnant_woman",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"baby",
			"birth",
			"body",
			"female",
			"human",
			"lady",
			"maternity",
			"mom",
			"mother",
			"people",
			"person",
			"pregnant",
			"women"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "present_to_all",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Presentation",
			"arrow\nall",
			"device",
			"present",
			"screen",
			"share"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "preview",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"composer",
			"eye",
			"final",
			"output",
			"preview",
			"reveal",
			"see",
			"show",
			"view",
			"window"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "print",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"draft",
			"ink",
			"paper",
			"print",
			"printer",
			"send"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "print_disabled",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Print",
			"disabled",
			"enabled",
			"feed",
			"off",
			"on",
			"paper",
			"printer",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "priority_high",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"!",
			"alert",
			"attention",
			"caution",
			"danger",
			"error",
			"exclamation",
			"high",
			"important",
			"mark",
			"notification",
			"priority",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "privacy_tip",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"!",
			"alert",
			"attention",
			"caution",
			"certified",
			"danger",
			"error",
			"exclamation",
			"important",
			"mark",
			"notification",
			"privacy",
			"security",
			"shield",
			"symbol",
			"tip",
			"warning"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "psychology",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"behavior",
			"body",
			"brain",
			"cognitive",
			"function",
			"gear",
			"head",
			"human",
			"intellectual",
			"mental",
			"mind",
			"people",
			"person",
			"preferences",
			"psychiatric",
			"psychology",
			"science",
			"settings",
			"social",
			"therapy",
			"thinking",
			"thoughts"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "public",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"earth",
			"global",
			"globe",
			"map",
			"network",
			"planet",
			"public",
			"social",
			"space",
			"web",
			"world"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "public_off",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"disabled",
			"earth",
			"enabled",
			"global",
			"globe",
			"map",
			"network",
			"off",
			"on",
			"planet",
			"public",
			"slash",
			"social",
			"space",
			"web",
			"world"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "publish",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"arrow",
			"cloud",
			"file",
			"import",
			"publish",
			"up",
			"upload"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "published_with_changes",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"approve",
			"arrow",
			"changes",
			"check",
			"completed",
			"inprogress",
			"load",
			"loading",
			"mark",
			"ok",
			"published",
			"refresh",
			"renew",
			"replace",
			"rotate",
			"select",
			"tick",
			"yes"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "push_pin",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"location",
			"marker",
			"pin",
			"place",
			"push",
			"remember",
			"save"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "qr_code",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"barcode",
			"camera",
			"code",
			"media",
			"product",
			"qr",
			"quick",
			"response",
			"smartphone",
			"url",
			"urls"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "qr_code_2",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"barcode",
			"camera",
			"code",
			"media",
			"product",
			"qr",
			"quick",
			"response",
			"smartphone",
			"url",
			"urls"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "qr_code_scanner",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"barcode",
			"camera",
			"code",
			"media",
			"product",
			"qr",
			"quick",
			"response",
			"scanner",
			"smartphone",
			"url",
			"urls"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "query_builder",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"builder",
			"clock",
			"hour",
			"minute",
			"query",
			"save",
			"time"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "question_answer",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"answer",
			"bubble",
			"conversation",
			"converse",
			"question",
			"speech",
			"talk"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "queue",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Queue",
			"add",
			"collection",
			"list",
			"music",
			"playlist",
			"stream",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "queue_music",
		"version": 9,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Queue",
			"add",
			"collection",
			"list",
			"music",
			"playlist",
			"stream"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "queue_play_next",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Queue",
			"add",
			"arrow",
			"collection",
			"desktop",
			"device",
			"list",
			"monitor",
			"music",
			"next",
			"play",
			"playlist",
			"plus",
			"screen",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "quickreply",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bolt",
			"bubble",
			"chat",
			"comment",
			"communicate",
			"fast",
			"lightning",
			"message",
			"quickreply",
			"speech",
			"thunderbolt"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "radio",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Radio",
			"antenna",
			"device",
			"listen",
			"music",
			"player",
			"tune"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "radio_button_checked",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"toggle"
		],
		"tags": [
			"bullet",
			"button",
			"checked",
			"circle",
			"form",
			"off",
			"on",
			"point",
			"radio",
			"record",
			"select",
			"selected",
			"toggle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "radio_button_unchecked",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"toggle"
		],
		"tags": [
			"bullet",
			"button",
			"circle",
			"deselected",
			"form",
			"off",
			"on",
			"point",
			"radio",
			"record",
			"select",
			"toggle",
			"unchecked"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "rate_review",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"comment",
			"feedback",
			"pen",
			"pencil",
			"rate",
			"review",
			"stars",
			"write"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "read_more",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"arrow",
			"more",
			"read",
			"text"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "receipt",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bill",
			"credit",
			"invoice",
			"paper",
			"payment",
			"receipt",
			"sale"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "receipt_long",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"bill",
			"check",
			"document",
			"list",
			"paper",
			"paperwork",
			"receipt",
			"record",
			"store",
			"transaction"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "recent_actors",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Recent",
			"actors",
			"card",
			"cards",
			"carousel",
			"human",
			"profile",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "record_voice_over",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"face",
			"human",
			"over",
			"people",
			"person",
			"profile",
			"record",
			"recording",
			"speak",
			"speaking",
			"speech",
			"transcript",
			"user",
			"voice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "redeem",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bill",
			"card",
			"cart",
			"cash",
			"certificate",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"gift",
			"giftcard",
			"money",
			"online",
			"pay",
			"payment",
			"present",
			"redeem",
			"shopping"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "redo",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"arrow",
			"backward",
			"forward",
			"next",
			"redo",
			"repeat",
			"rotate",
			"undo"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "reduce_capacity",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"arrow",
			"body",
			"capacity",
			"decrease",
			"down",
			"human",
			"people",
			"person",
			"reduce"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "refresh",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"refresh",
			"right",
			"rotation",
			"turn"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "remove",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"can",
			"delete",
			"minus",
			"negative",
			"remove",
			"substract",
			"trash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "remove_circle",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"block",
			"can",
			"circle",
			"delete",
			"minus",
			"negative",
			"remove",
			"substract",
			"trash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "remove_circle_outline",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"block",
			"can",
			"circle",
			"delete",
			"minus",
			"negative",
			"remove",
			"substract",
			"trash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "remove_from_queue",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Queue",
			"collection",
			"device",
			"list",
			"monitor",
			"remove",
			"screen"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "remove_red_eye",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"eye",
			"iris",
			"look",
			"looking",
			"preview",
			"red",
			"remove",
			"see",
			"sight",
			"vision"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "remove_shopping_cart",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"card",
			"cart",
			"cash",
			"checkout",
			"coin",
			"commerce",
			"credit",
			"currency",
			"disabled",
			"dollars",
			"enabled",
			"off",
			"on",
			"online",
			"pay",
			"payment",
			"remove",
			"shopping",
			"slash",
			"tick"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "reorder",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"format",
			"lines",
			"list",
			"order",
			"reorder",
			"stacked"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "repeat",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Repeat",
			"arrow",
			"arrows",
			"control",
			"controls",
			"music",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "repeat_one",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"1",
			"Repeat",
			"arrow",
			"arrows",
			"control",
			"controls",
			"digit",
			"music",
			"number",
			"symbol",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "replay",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Replay",
			"arrow",
			"arrows",
			"control",
			"controls",
			"music",
			"repeat",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "replay_10",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"10",
			"Replay",
			"arrow",
			"arrows",
			"control",
			"controls",
			"digit",
			"music",
			"number",
			"repeat",
			"symbol",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "replay_30",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"30",
			"Replay",
			"arrow",
			"arrows",
			"control",
			"controls",
			"digit",
			"music",
			"number",
			"repeat",
			"symbol",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "replay_5",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"5",
			"Replay",
			"arrow",
			"arrows",
			"control",
			"controls",
			"digit",
			"music",
			"number",
			"repeat",
			"symbol",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "reply",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"arrow",
			"backward",
			"left",
			"mail",
			"message",
			"reply",
			"send",
			"share"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "reply_all",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"all",
			"arrow",
			"backward",
			"group",
			"left",
			"mail",
			"message",
			"reply",
			"send",
			"share"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "report",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"!",
			"alert",
			"attention",
			"caution",
			"danger",
			"error",
			"exclamation",
			"important",
			"mark",
			"notification",
			"octagon",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "report_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"!",
			"alert",
			"attention",
			"caution",
			"danger",
			"disabled",
			"enabled",
			"error",
			"exclamation",
			"important",
			"mark",
			"notification",
			"octagon",
			"off",
			"on",
			"slash",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "report_problem",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"!",
			"alert",
			"attention",
			"caution",
			"danger",
			"error",
			"exclamation",
			"feedback",
			"important",
			"mark",
			"notification",
			"problem",
			"report",
			"symbol",
			"triangle",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "request_page",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "request_quote",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"bill",
			"card",
			"cash",
			"coin",
			"commerce",
			"cost",
			"credit",
			"currency",
			"document",
			"dollars",
			"file",
			"money",
			"online",
			"pay",
			"payment",
			"price",
			"quote",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "restaurant",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"dining",
			"eat",
			"food",
			"fork",
			"knife",
			"local",
			"meal",
			"restaurant",
			"spoon"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "restaurant_menu",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"book",
			"dining",
			"eat",
			"food",
			"fork",
			"knife",
			"local",
			"meal",
			"menu",
			"restaurant",
			"spoon"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "restore",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"back",
			"backwards",
			"clock",
			"history",
			"refresh",
			"restore",
			"reverse",
			"rotate",
			"time"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "restore_from_trash",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"bin",
			"can",
			"delete",
			"garbage",
			"remove",
			"restore_from",
			"trash",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "restore_page",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"data",
			"doc",
			"file",
			"page",
			"paper",
			"refresh",
			"restore",
			"rotate",
			"sheet",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "rice_bowl",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"bowl",
			"food",
			"meal",
			"rice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "ring_volume",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Phone",
			"call",
			"device",
			"mobile",
			"ring",
			"ringer",
			"sound",
			"volume"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "roofing",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"architecture",
			"building",
			"chimney",
			"construction",
			"estate",
			"home",
			"house",
			"real",
			"residence",
			"residential",
			"roof",
			"roofing",
			"service",
			"shelter"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "room",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"map",
			"mark",
			"marker",
			"pin",
			"place",
			"room",
			"spot"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "room_preferences",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"door",
			"gear",
			"preferences",
			"room",
			"settings"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "room_service",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"alert",
			"bell",
			"delivery",
			"hotel",
			"notify",
			"room",
			"service"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "rotate_90_degrees_ccw",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"90",
			"arrow",
			"arrows",
			"ccw",
			"degrees",
			"direction",
			"edit",
			"editing",
			"image",
			"photo",
			"rotate",
			"turn"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "rotate_left",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"left",
			"rotate",
			"turn"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "rotate_right",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"arrow",
			"arrows",
			"direction",
			"right",
			"rotate",
			"turn"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "rounded_corner",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"adjust",
			"corner",
			"edit",
			"rounded",
			"shape",
			"square",
			"transform"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "router",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"box",
			"cable",
			"connection",
			"hardware",
			"internet",
			"network",
			"router",
			"signal",
			"wifi"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "rowing",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"activity",
			"boat",
			"body",
			"canoe",
			"human",
			"people",
			"person",
			"row",
			"rowing",
			"sport",
			"water"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "rss_feed",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Rss",
			"application",
			"blog",
			"feed",
			"website"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "rule",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"approve",
			"check",
			"completed",
			"composer",
			"incomplete",
			"line",
			"mark",
			"missing",
			"no",
			"ok",
			"rule",
			"select",
			"tick",
			"visibility",
			"x",
			"yes"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "rule_folder",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"approve",
			"check",
			"close",
			"code",
			"complete",
			"composer",
			"data",
			"done",
			"file",
			"folder",
			"mark",
			"ok",
			"remove",
			"rule",
			"select",
			"storage",
			"tick",
			"verified",
			"visibility",
			"x",
			"yes"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "run_circle",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"body",
			"circle",
			"exercise",
			"human",
			"people",
			"person",
			"run",
			"running"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "rv_hookup",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"arrow",
			"arrows",
			"attach",
			"automobile",
			"automotive",
			"back",
			"car",
			"cars",
			"connect",
			"direction",
			"hookup",
			"left",
			"maps",
			"public",
			"right",
			"rv",
			"trailer",
			"transportation",
			"travel",
			"truck",
			"van",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sanitizer",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"bacteria",
			"bottle",
			"clean",
			"disinfect",
			"germs",
			"pump",
			"sanitizer"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "satellite",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"images",
			"location",
			"maps",
			"mountain",
			"satellite"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "save",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"disk",
			"document",
			"file",
			"floppy",
			"multimedia",
			"save"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "save_alt",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"arrow",
			"disk",
			"document",
			"down",
			"file",
			"floppy",
			"multimedia",
			"save"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "scanner",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"copy",
			"device",
			"hardware",
			"machine",
			"scan",
			"scanner"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "scatter_plot",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"analytics",
			"bar",
			"bars",
			"chart",
			"circle",
			"data",
			"diagram",
			"dot",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "schedule",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"calendar",
			"clock",
			"date",
			"mark",
			"save",
			"schedule",
			"time"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "school",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"academy",
			"achievement",
			"cap",
			"class",
			"college",
			"education",
			"graduation",
			"hat",
			"knowledge",
			"learning",
			"school",
			"university"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "science",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"beaker",
			"chemical",
			"chemistry",
			"experiment",
			"flask",
			"glass",
			"laboratory",
			"research",
			"science",
			"tube"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "score",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"2k",
			"alphabet",
			"analytics",
			"bar",
			"bars",
			"character",
			"chart",
			"data",
			"diagram",
			"digit",
			"font",
			"graph",
			"infographic",
			"letter",
			"measure",
			"metrics",
			"number",
			"score",
			"statistics",
			"symbol",
			"text",
			"tracking",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "screen_lock_landscape",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"Android",
			"OS",
			"device",
			"hardware",
			"iOS",
			"landscape",
			"lock",
			"mobile",
			"phone",
			"rotate",
			"screen",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "screen_lock_portrait",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"Android",
			"OS",
			"device",
			"hardware",
			"iOS",
			"lock",
			"mobile",
			"phone",
			"portrait",
			"rotate",
			"screen",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "screen_lock_rotation",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"Android",
			"OS",
			"arrow",
			"device",
			"hardware",
			"iOS",
			"lock",
			"mobile",
			"phone",
			"rotate",
			"screen",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "screen_rotation",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"Android",
			"OS",
			"arrow",
			"device",
			"hardware",
			"iOS",
			"lock",
			"mobile",
			"phone",
			"rotate",
			"screen",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "screen_share",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"OS",
			"arrow",
			"desktop",
			"device",
			"hardware",
			"iOS",
			"laptop",
			"mirror",
			"monitor",
			"screen",
			"share",
			"web"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sd_card",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"camera",
			"card",
			"digital",
			"memory",
			"photos",
			"sd",
			"secure",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sd_storage",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"camera",
			"card",
			"data",
			"digital",
			"memory",
			"sd",
			"secure",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "search",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"filter",
			"look",
			"look up",
			"magnify",
			"magnifying glass",
			"search"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "search_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"cancel",
			"close",
			"disabled",
			"enabled",
			"find",
			"glass",
			"look",
			"magnify",
			"magnifying",
			"off",
			"on",
			"search",
			"see",
			"slash",
			"stop",
			"x"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "security",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"certified",
			"personal",
			"privacy",
			"private",
			"protect",
			"protection",
			"safe",
			"security",
			"shield"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "select_all",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"all",
			"select",
			"selection",
			"square",
			"tool"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "self_improvement",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"body",
			"calm",
			"care",
			"chi",
			"human",
			"improvement",
			"meditate",
			"meditation",
			"people",
			"person",
			"relax",
			"self",
			"sitting",
			"wellbeing",
			"yoga",
			"zen"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "send",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"airplane",
			"mail",
			"message",
			"paper",
			"plane",
			"reply",
			"right",
			"send"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sensor_door",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"home"
		],
		"tags": [],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sensor_window",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"home"
		],
		"tags": [],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sentiment_dissatisfied",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"angry",
			"disappointed",
			"dislike",
			"dissatisfied",
			"emotions",
			"expressions",
			"face",
			"feelings",
			"frown",
			"mood",
			"person",
			"sad",
			"sentiment",
			"survey",
			"unhappy",
			"unsatisfied",
			"upset"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sentiment_satisfied",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"emotions",
			"expressions",
			"face",
			"feelings",
			"glad",
			"happiness",
			"happy",
			"like",
			"mood",
			"person",
			"pleased",
			"satisfied",
			"sentiment",
			"smile",
			"smiling",
			"survey"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sentiment_satisfied_alt",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"account",
			"emoji",
			"face",
			"happy",
			"human",
			"people",
			"person",
			"profile",
			"satisfied",
			"sentiment",
			"smile",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sentiment_very_dissatisfied",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"angry",
			"disappointed",
			"dislike",
			"dissatisfied",
			"emotions",
			"expressions",
			"face",
			"feelings",
			"mood",
			"person",
			"sad",
			"sentiment",
			"sorrow",
			"survey",
			"unhappy",
			"unsatisfied",
			"upset",
			"very"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sentiment_very_satisfied",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"emotions",
			"expressions",
			"face",
			"feelings",
			"glad",
			"happiness",
			"happy",
			"like",
			"mood",
			"person",
			"pleased",
			"satisfied",
			"sentiment",
			"smile",
			"smiling",
			"survey",
			"very"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "set_meal",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"chopsticks",
			"fish",
			"food",
			"meal",
			"restaurant",
			"set",
			"teishoku"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"application",
			"change",
			"details",
			"gear",
			"info",
			"information",
			"options",
			"personal",
			"service",
			"settings"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_applications",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"application",
			"change",
			"details",
			"gear",
			"info",
			"information",
			"options",
			"personal",
			"service",
			"settings"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_backup_restore",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"back",
			"backup",
			"backwards",
			"refresh",
			"restore",
			"reverse",
			"rotate",
			"settings"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_bluetooth",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bluetooth",
			"connect",
			"connection",
			"connectivity",
			"device",
			"settings",
			"signal",
			"symbol"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_brightness",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"brightness",
			"dark",
			"filter",
			"light",
			"mode",
			"setting",
			"settings"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_cell",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"Android",
			"OS",
			"cell",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"settings",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_ethernet",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrows",
			"computer",
			"connect",
			"connection",
			"connectivity",
			"dots",
			"ethernet",
			"internet",
			"network",
			"settings",
			"wifi"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_input_antenna",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"airplay",
			"antenna",
			"arrows",
			"cast",
			"computer",
			"connect",
			"connection",
			"connectivity",
			"dots",
			"input",
			"internet",
			"network",
			"screencast",
			"settings",
			"stream",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_input_component",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"audio",
			"av",
			"cable",
			"cables",
			"component",
			"connect",
			"connection",
			"connectivity",
			"input",
			"internet",
			"plug",
			"points",
			"settings",
			"video",
			"wifi"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_input_composite",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"component",
			"connection",
			"connectivity",
			"input",
			"plug",
			"points",
			"settings"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_input_hdmi",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"cable",
			"connection",
			"connectivity",
			"definition",
			"hdmi",
			"high",
			"input",
			"plug",
			"plugin",
			"points",
			"settings",
			"video",
			"wire"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_input_svideo",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"cable",
			"connection",
			"connectivity",
			"definition",
			"input",
			"plug",
			"plugin",
			"points",
			"settings",
			"standard",
			"svideo",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_overscan",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrows",
			"expand",
			"image",
			"photo",
			"picture",
			"scan",
			"settings"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_phone",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"call",
			"cell",
			"contact",
			"device",
			"hardware",
			"mobile",
			"phone",
			"settings",
			"telephone"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_power",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"info",
			"information",
			"off",
			"on",
			"power",
			"save",
			"settings",
			"shutdown"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_remote",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bluetooth",
			"connection",
			"connectivity",
			"device",
			"remote",
			"settings",
			"signal",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_system_daydream",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"cloud",
			"daydream",
			"setting",
			"system"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "settings_voice",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"mic",
			"microphone",
			"record",
			"recorder",
			"settings",
			"speaker",
			"voice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "share",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"android",
			"connect",
			"contect",
			"link",
			"media",
			"multimedia",
			"multiple",
			"network",
			"options",
			"share",
			"shared",
			"sharing",
			"social"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "shop",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bag",
			"bill",
			"buy",
			"card",
			"cart",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"google",
			"money",
			"online",
			"pay",
			"payment",
			"play",
			"shop",
			"shopping",
			"store"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "shop_two",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"add",
			"arrow",
			"buy",
			"cart",
			"google",
			"play",
			"purchase",
			"shop",
			"shopping"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "shopping_bag",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"action",
			"bag",
			"bill",
			"business",
			"buy",
			"card",
			"cart",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"money",
			"online",
			"pay",
			"payment",
			"shop",
			"shopping",
			"store",
			"storefront"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "shopping_basket",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"add",
			"basket",
			"bill",
			"buy",
			"card",
			"cart",
			"cash",
			"checkout",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"money",
			"online",
			"pay",
			"payment",
			"shopping"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "shopping_cart",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"add",
			"bill",
			"buy",
			"card",
			"cart",
			"cash",
			"checkout",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"money",
			"online",
			"pay",
			"payment",
			"shopping"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "short_text",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"brief",
			"comment",
			"doc",
			"document",
			"note",
			"short",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "show_chart",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"analytics",
			"bar",
			"bars",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"line",
			"measure",
			"metrics",
			"presentation",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "shuffle",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Shuffle",
			"arrow",
			"arrows",
			"control",
			"controls",
			"music",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "shutter_speed",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"aperture",
			"camera",
			"duration",
			"image",
			"lens",
			"photo",
			"photography",
			"photos",
			"picture",
			"setting",
			"shutter",
			"speed",
			"stop",
			"time",
			"timer",
			"watch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sick",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"discomfort",
			"emotions",
			"expressions",
			"face",
			"feelings",
			"fever",
			"flu",
			"ill",
			"mood",
			"pain",
			"person",
			"sick",
			"survey",
			"upset"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "signal_cellular_4_bar",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"!",
			"alert",
			"attention",
			"caution",
			"cell",
			"cellular",
			"danger",
			"data",
			"error",
			"exclamation",
			"important",
			"internet",
			"mark",
			"mobile",
			"network",
			"notification",
			"phone",
			"signal",
			"speed",
			"symbol",
			"warning",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "signal_cellular_alt",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"cell",
			"cellular",
			"data",
			"internet",
			"mobile",
			"network",
			"phone",
			"signal",
			"speed",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "signal_cellular_connected_no_internet_4_bar",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"!",
			"alert",
			"attention",
			"caution",
			"cell",
			"cellular",
			"danger",
			"data",
			"error",
			"exclamation",
			"important",
			"internet",
			"mark",
			"mobile",
			"network",
			"notification",
			"phone",
			"signal",
			"speed",
			"symbol",
			"warning",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "signal_cellular_no_sim",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"cell",
			"cellular",
			"data",
			"disabled",
			"enabled",
			"internet",
			"mobile",
			"network",
			"off",
			"on",
			"phone",
			"signal",
			"sim",
			"slash",
			"speed",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "signal_cellular_null",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"cell",
			"cellular",
			"data",
			"internet",
			"mobile",
			"network",
			"null",
			"phone",
			"signal",
			"speed",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "signal_cellular_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"cell",
			"cellular",
			"data",
			"disabled",
			"enabled",
			"internet",
			"mobile",
			"network",
			"off",
			"on",
			"phone",
			"signal",
			"slash",
			"speed",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "signal_wifi_4_bar",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"cell",
			"cellular",
			"data",
			"internet",
			"mobile",
			"network",
			"phone",
			"signal",
			"speed",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "signal_wifi_4_bar_lock",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"cell",
			"cellular",
			"data",
			"internet",
			"lock",
			"mobile",
			"network",
			"phone",
			"signal",
			"speed",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "signal_wifi_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"cell",
			"cellular",
			"data",
			"disabled",
			"enabled",
			"internet",
			"mobile",
			"network",
			"off",
			"on",
			"phone",
			"signal",
			"slash",
			"speed",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sim_card",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Sim",
			"camera",
			"card",
			"device",
			"memory",
			"phone",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "single_bed",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"bed",
			"bedroom",
			"double",
			"full",
			"furniture",
			"home",
			"hotel",
			"house",
			"king",
			"night",
			"pillows",
			"queen",
			"rest",
			"room",
			"size",
			"sleep"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "skip_next",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Skip",
			"arrow",
			"control",
			"controls",
			"music",
			"next",
			"play",
			"previous",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "skip_previous",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Skip",
			"arrow",
			"control",
			"controls",
			"music",
			"next",
			"play",
			"previous",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "slideshow",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"movie",
			"photos",
			"play",
			"slideshow",
			"video",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "slow_motion_video",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Slow",
			"arrow",
			"control",
			"controls",
			"motion",
			"music",
			"play",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "smart_button",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"action",
			"auto",
			"button",
			"composer",
			"function",
			"smart"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "smartphone",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"call",
			"cell",
			"chat",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"tablet",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "smoke_free",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"cigarette",
			"disabled",
			"enabled",
			"free",
			"never",
			"no",
			"off",
			"on",
			"place",
			"prohibited",
			"slash",
			"smoke",
			"smoking",
			"tobacco",
			"warning",
			"zone"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "smoking_rooms",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"allowed",
			"cigarette",
			"place",
			"rooms",
			"smoke",
			"smoking",
			"tobacco",
			"zone"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sms",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"3",
			"bubble",
			"chat",
			"communication",
			"conversation",
			"dots",
			"message",
			"more",
			"service",
			"sms",
			"speech",
			"three"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sms_failed",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"!",
			"alert",
			"attention",
			"bubbles",
			"caution",
			"chat",
			"communication",
			"conversation",
			"danger",
			"error",
			"exclamation",
			"failed",
			"important",
			"mark",
			"message",
			"notification",
			"service",
			"sms",
			"speech",
			"symbol",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "snippet_folder",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"composer",
			"content",
			"data",
			"file",
			"folder",
			"snippet",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "snooze",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Snooze",
			"alarm",
			"clock",
			"set",
			"time",
			"timer",
			"z"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "soap",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"clean",
			"fingers",
			"gesture",
			"hand",
			"soap",
			"wash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sort",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"filter",
			"find",
			"list",
			"organize",
			"sort"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sort_by_alpha",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Sort",
			"alphabet",
			"alphabetize",
			"az",
			"character",
			"font",
			"letter",
			"list",
			"order",
			"organize",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "source",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"code",
			"composer",
			"content",
			"creation",
			"mode",
			"source",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "south",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"directional",
			"down",
			"south"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "south_east",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"directional",
			"down",
			"east",
			"right",
			"south"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "south_west",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"directional",
			"down",
			"left",
			"south",
			"west"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "spa",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"aromatherapy",
			"flower",
			"healthcare",
			"leaf",
			"massage",
			"meditation",
			"nature",
			"petals",
			"place",
			"relax",
			"spa",
			"wellbeing",
			"wellness"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "space_bar",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"bar",
			"keyboard",
			"line",
			"space"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "speaker",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"box",
			"electronic",
			"loud",
			"music",
			"sound",
			"speaker",
			"stereo",
			"system",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "speaker_group",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"box",
			"electronic",
			"group",
			"loud",
			"multiple",
			"music",
			"sound",
			"speaker",
			"stereo",
			"system",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "speaker_notes",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bubble",
			"chat",
			"comment",
			"communicate",
			"format",
			"list",
			"message",
			"notes",
			"speaker",
			"speech",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "speaker_notes_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bubble",
			"chat",
			"comment",
			"communicate",
			"disabled",
			"enabled",
			"format",
			"list",
			"message",
			"notes",
			"off",
			"on",
			"slash",
			"speaker",
			"speech",
			"text"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "speaker_phone",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"OS",
			"Speaker",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"sound",
			"tablet",
			"volume"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "speed",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Slow",
			"arrow",
			"control",
			"controls",
			"fast",
			"internet",
			"motion",
			"music",
			"play",
			"speed",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "spellcheck",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"a",
			"alphabet",
			"approve",
			"character",
			"check",
			"font",
			"letter",
			"mark",
			"ok",
			"processor",
			"select",
			"spell",
			"spellcheck",
			"symbol",
			"text",
			"tick",
			"type",
			"word",
			"write",
			"yes"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sports",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"blowing",
			"coach",
			"game",
			"instrument",
			"referee",
			"social",
			"sound",
			"sports",
			"warning",
			"whistle"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_bar",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"alcohol",
			"bar",
			"beer",
			"drink",
			"liquor",
			"pint",
			"pub",
			"sports"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sports_baseball",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"ball",
			"baseball",
			"entertainment",
			"exercise",
			"game",
			"hobby",
			"social",
			"sports"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_basketball",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"ball",
			"basketball",
			"entertainment",
			"exercise",
			"game",
			"hobby",
			"social",
			"sports"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_cricket",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"ball",
			"bat",
			"cricket",
			"entertainment",
			"exercise",
			"game",
			"hobby",
			"social",
			"sports"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_esports",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"controller",
			"entertainment",
			"esports",
			"game",
			"gamepad",
			"gaming",
			"hobby",
			"online",
			"social",
			"sports",
			"video"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_football",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"ball",
			"entertainment",
			"exercise",
			"football",
			"game",
			"hobby",
			"social",
			"sports"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_golf",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"ball",
			"club",
			"entertainment",
			"exercise",
			"game",
			"golf",
			"golfer",
			"golfing",
			"hobby",
			"social",
			"sports"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_handball",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"ball",
			"body",
			"entertainment",
			"exercise",
			"game",
			"handball",
			"hobby",
			"human",
			"people",
			"person",
			"social",
			"sports"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_hockey",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"entertainment",
			"exercise",
			"game",
			"hobby",
			"hockey",
			"social",
			"sports",
			"sticks"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_kabaddi",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"body",
			"combat",
			"entertainment",
			"exercise",
			"fighting",
			"game",
			"hobby",
			"human",
			"kabaddi",
			"people",
			"person",
			"social",
			"sports",
			"wrestle",
			"wrestling"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_mma",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"arts",
			"athlete",
			"athletic",
			"boxing",
			"combat",
			"entertainment",
			"exercise",
			"fighting",
			"game",
			"glove",
			"hobby",
			"martial",
			"mixed",
			"mma",
			"social",
			"sports"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_motorsports",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"automobile",
			"bike",
			"drive",
			"driving",
			"entertainment",
			"helmet",
			"hobby",
			"motorcycle",
			"motorsports",
			"protect",
			"social",
			"sports",
			"vehicle"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_rugby",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"ball",
			"entertainment",
			"exercise",
			"game",
			"hobby",
			"rugby",
			"social",
			"sports"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_soccer",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"ball",
			"entertainment",
			"exercise",
			"football",
			"game",
			"hobby",
			"soccer",
			"social",
			"sports"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_tennis",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"ball",
			"bat",
			"entertainment",
			"exercise",
			"game",
			"hobby",
			"racket",
			"social",
			"sports",
			"tennis"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sports_volleyball",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"athlete",
			"athletic",
			"ball",
			"entertainment",
			"exercise",
			"game",
			"hobby",
			"social",
			"sports",
			"volleyball"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "square_foot",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"construction",
			"feet",
			"foot",
			"inches",
			"length",
			"measurement",
			"ruler",
			"school",
			"set",
			"square"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "stacked_line_chart",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"analytics",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"line",
			"measure",
			"metrics",
			"stacked",
			"statistics",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "stairs",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"staircase",
			"stairs"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "star",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"toggle"
		],
		"tags": [
			"best",
			"bookmark",
			"favorite",
			"highlight",
			"ranking",
			"rate",
			"rating",
			"save",
			"star",
			"toggle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "star_border",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"toggle"
		],
		"tags": [
			"best",
			"bookmark",
			"border",
			"favorite",
			"highlight",
			"outline",
			"ranking",
			"rate",
			"rating",
			"save",
			"star",
			"toggle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "star_half",
		"version": 9,
		"unsupported_families": [],
		"categories": [
			"toggle"
		],
		"tags": [
			"bookmark",
			"favorite",
			"half",
			"highlight",
			"ranking",
			"rate",
			"rating",
			"save",
			"star",
			"toggle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "star_outline",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"toggle"
		],
		"tags": [
			"bookmark",
			"favorite",
			"half",
			"highlight",
			"ranking",
			"rate",
			"rating",
			"save",
			"star",
			"toggle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "star_rate",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"favorite",
			"grade",
			"likes",
			"love",
			"rate",
			"rated",
			"rating",
			"shape",
			"star"
		],
		"sizes_px": [
			18,
			24
		]
	},
	{
		"name": "stars",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"circle",
			"favorite",
			"like",
			"love",
			"rate",
			"rating",
			"star"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "stay_current_landscape",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"Landscape",
			"OS",
			"current",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"stay",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "stay_current_portrait",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"OS",
			"Portrait",
			"current",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"stay",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "stay_primary_landscape",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"Landscape",
			"OS",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"primary",
			"stay",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "stay_primary_portrait",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"OS",
			"Portrait",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"phone",
			"primary",
			"stay",
			"tablet"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sticky_note_2",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"2",
			"bookmark",
			"mark",
			"message",
			"note",
			"paper",
			"sticky",
			"text",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "stop",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Stop",
			"arrow",
			"control",
			"controls",
			"music",
			"play",
			"vide"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "stop_circle",
		"version": 9,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "stop_screen_share",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Android",
			"OS",
			"arrow",
			"desktop",
			"device",
			"disabled",
			"enabled",
			"hardware",
			"iOS",
			"laptop",
			"mirror",
			"monitor",
			"off",
			"on",
			"screen",
			"share",
			"slash",
			"web"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "storage",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"computer",
			"data",
			"drive",
			"memory",
			"storage"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "store",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bill",
			"building",
			"business",
			"buy",
			"card",
			"cart",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"money",
			"online",
			"pay",
			"payment",
			"shop",
			"shopping",
			"store",
			"storefront"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "store_mall_directory",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"directory",
			"mall",
			"store"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "storefront",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"business",
			"buy",
			"cafe",
			"commerce",
			"front",
			"market",
			"place",
			"restaurant",
			"retail",
			"sell",
			"shop",
			"shopping",
			"store",
			"storefront"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "straighten",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"length",
			"measure",
			"measurement",
			"ruler",
			"size",
			"straighten"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "streetview",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [],
		"sizes_px": [
			24
		]
	},
	{
		"name": "strikethrough_s",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"alphabet",
			"character",
			"cross",
			"doc",
			"edit",
			"editing",
			"editor",
			"font",
			"letter",
			"out",
			"sheet",
			"spreadsheet",
			"styles",
			"symbol",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "stroller",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"baby",
			"care",
			"carriage",
			"child",
			"children",
			"infant",
			"kid",
			"newborn",
			"stroller",
			"toddler",
			"young"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "style",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"booklet",
			"cards",
			"filter",
			"options",
			"style"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "subdirectory_arrow_left",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"directory",
			"down",
			"left",
			"sub",
			"subdirectory"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "subdirectory_arrow_right",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"directory",
			"down",
			"right",
			"sub",
			"subdirectory"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "subject",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"alignment",
			"doc",
			"document",
			"email",
			"full",
			"justify",
			"list",
			"note",
			"subject",
			"text",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "subscript",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"2",
			"editor",
			"gmail",
			"novitas",
			"subscript",
			"symbol",
			"text",
			"x"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "subscriptions",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Subscription",
			"enroll",
			"order",
			"signup",
			"subscribe",
			"subscriptions"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "subtitles",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Cc",
			"Subtitle",
			"accessibility",
			"accessible",
			"caption",
			"language",
			"subtitles",
			"translate"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "subtitles_off",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"accessibility",
			"accessible",
			"caption",
			"cc",
			"closed",
			"disabled",
			"enabled",
			"language",
			"off",
			"on",
			"slash",
			"subtitle",
			"subtitles",
			"translate",
			"video"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "subway",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"bike",
			"car",
			"cars",
			"maps",
			"rail",
			"scooter",
			"subway",
			"train",
			"transportation",
			"tunnel",
			"underground",
			"vehicle",
			"vespa"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "superscript",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"2",
			"editor",
			"gmail",
			"novitas",
			"superscript",
			"symbol",
			"text",
			"x"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "supervised_user_circle",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"avatar",
			"circle",
			"control",
			"face",
			"human",
			"parental",
			"parents",
			"people",
			"person",
			"profile",
			"supervised",
			"supervisor",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "supervisor_account",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"avatar",
			"control",
			"face",
			"human",
			"parental",
			"parental control",
			"parents",
			"people",
			"person",
			"profile",
			"supervised",
			"supervisor",
			"user"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "support",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"assist",
			"buoy",
			"help",
			"life",
			"lifebuoy",
			"rescue",
			"safe",
			"safety",
			"support"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "support_agent",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"agent",
			"care",
			"customer",
			"face",
			"headphone set",
			"person",
			"representative",
			"service",
			"support"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "surround_sound",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Sound",
			"circle",
			"speaker",
			"surround",
			"system",
			"volumn"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "swap_calls",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Swap",
			"arrow",
			"arrows",
			"call",
			"calls",
			"device",
			"direction",
			"mobile",
			"share"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "swap_horiz",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"arrows",
			"back",
			"forward",
			"horizontal",
			"swap"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "swap_horizontal_circle",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"arrows",
			"back",
			"circle",
			"forward",
			"horizontal",
			"swap"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "swap_vert",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"arrows",
			"back",
			"direction",
			"vertical"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "swap_vertical_circle",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"arrows",
			"circle",
			"down",
			"swap",
			"up",
			"vertical"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "switch_camera",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"arrow",
			"arrows",
			"camera",
			"photo",
			"photography",
			"picture",
			"switch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "switch_left",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"directional",
			"left",
			"navigation",
			"switch",
			"toggle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "switch_right",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"directional",
			"navigation",
			"right",
			"switch",
			"toggle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "switch_video",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"arrow",
			"arrows",
			"camera",
			"photography",
			"switch",
			"video",
			"videos"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sync",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"360",
			"alert",
			"arrow",
			"arrows",
			"direction",
			"error",
			"notification",
			"rotation",
			"symbol",
			"sync",
			"turn",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sync_alt",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"alt",
			"arrow",
			"arrows",
			"horizontal",
			"internet",
			"sync",
			"technology",
			"up",
			"update",
			"wifi"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "sync_disabled",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"360",
			"alert",
			"arrow",
			"arrows",
			"direction",
			"enabled",
			"error",
			"notification",
			"off",
			"on",
			"rotation",
			"slash",
			"symbol",
			"sync",
			"turn",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "sync_problem",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"!",
			"360",
			"alert",
			"arrow",
			"arrows",
			"attention",
			"caution",
			"danger",
			"direction",
			"error",
			"exclamation",
			"important",
			"mark",
			"notification",
			"rotation",
			"symbol",
			"sync",
			"turn",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "system_update",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"Android",
			"OS",
			"arrow",
			"arrows",
			"cell",
			"device",
			"direction",
			"down",
			"download",
			"hardware",
			"iOS",
			"install",
			"mobile",
			"phone",
			"system",
			"tablet",
			"update"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "system_update_alt",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"down",
			"download",
			"export",
			"system",
			"update"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tab",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"browser",
			"computer",
			"document",
			"documents",
			"folder",
			"internet",
			"tab",
			"tabs",
			"web",
			"website",
			"window",
			"windows"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tab_unselected",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"browser",
			"computer",
			"document",
			"documents",
			"folder",
			"internet",
			"tab",
			"tabs",
			"unselected",
			"web",
			"website",
			"window",
			"windows"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "table_chart",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"analytics",
			"bar",
			"bars",
			"chart",
			"data",
			"diagram",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"statistics",
			"table",
			"tracking"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "table_rows",
		"version": 11,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"layout",
			"lines",
			"rows",
			"stacked",
			"table"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "table_view",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"format",
			"grid",
			"group",
			"multiple",
			"table",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tablet",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"device",
			"hardware",
			"iOS",
			"ipad",
			"mobile",
			"tablet",
			"web"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tablet_android",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"device",
			"hardware",
			"iOS",
			"ipad",
			"mobile",
			"tablet",
			"web"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tablet_mac",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"device",
			"hardware",
			"iOS",
			"ipad",
			"mobile",
			"tablet",
			"web"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tag_faces",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"emoji",
			"emotion",
			"face",
			"faces",
			"happy",
			"satisfied",
			"smile",
			"tag"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tap_and_play",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"Android",
			"OS wifi",
			"cell",
			"connection",
			"device",
			"hardware",
			"iOS",
			"internet",
			"mobile",
			"network",
			"phone",
			"play",
			"signal",
			"tablet",
			"tap",
			"to",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tapas",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"appetizer",
			"food",
			"snack",
			"tapas"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "terrain",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"geography",
			"landscape",
			"mountain",
			"terrain"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "text_fields",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"T",
			"add",
			"alphabet",
			"character",
			"field",
			"font",
			"input",
			"letter",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "text_format",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"alphabet",
			"character",
			"font",
			"format",
			"letter",
			"square A",
			"style",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "text_rotate_up",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"A",
			"alphabet",
			"arrow",
			"character",
			"field",
			"font",
			"letter",
			"move",
			"rotate",
			"symbol",
			"text",
			"type",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "text_rotate_vertical",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"A",
			"alphabet",
			"arrow",
			"character",
			"down",
			"field",
			"font",
			"letter",
			"move",
			"rotate",
			"symbol",
			"text",
			"type",
			"vertical"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "text_rotation_angledown",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"A",
			"alphabet",
			"angledown",
			"arrow",
			"character",
			"field",
			"font",
			"letter",
			"move",
			"rotate",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "text_rotation_angleup",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"A",
			"alphabet",
			"angleup",
			"arrow",
			"character",
			"field",
			"font",
			"letter",
			"move",
			"rotate",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "text_rotation_down",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"A",
			"alphabet",
			"arrow",
			"character",
			"dow",
			"field",
			"font",
			"letter",
			"move",
			"rotate",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "text_rotation_none",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"A",
			"alphabet",
			"arrow",
			"character",
			"field",
			"font",
			"letter",
			"move",
			"none",
			"rotate",
			"symbol",
			"text",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "text_snippet",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"composer",
			"content",
			"data",
			"doc",
			"document",
			"file",
			"note",
			"snippet",
			"storage",
			"text",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "textsms",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Text",
			"bubble",
			"chat",
			"dots",
			"message",
			"sms",
			"speech",
			"talk"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "texture",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"diagonal",
			"lines",
			"stripes",
			"texture"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "theaters",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"film",
			"movie",
			"movies",
			"show",
			"showtimes",
			"theater",
			"theaters",
			"watch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "thumb_down",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"dislike",
			"down",
			"favorite",
			"fingers",
			"gesture",
			"hand",
			"hands",
			"like",
			"rate",
			"rating",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "thumb_down_alt",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"bad",
			"decline",
			"disapprove",
			"dislike",
			"down",
			"feedback",
			"hate",
			"negative",
			"no",
			"reject",
			"social",
			"thumb",
			"veto",
			"vote"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "thumb_up",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"dislike",
			"down",
			"favorite",
			"fingers",
			"gesture",
			"hand",
			"hands",
			"like",
			"rate",
			"rating",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "thumb_up_alt",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"agreed",
			"approved",
			"confirm",
			"correct",
			"favorite",
			"feedback",
			"good",
			"happy",
			"like",
			"okay",
			"positive",
			"satisfaction",
			"social",
			"thumb",
			"up",
			"vote",
			"yes"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "thumbs_up_down",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"dislike",
			"down",
			"favorite",
			"fingers",
			"gesture",
			"hands",
			"like",
			"rate",
			"rating",
			"thumbs",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "time_to_leave",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"destination",
			"direction",
			"drive",
			"estimate",
			"eta",
			"maps",
			"public",
			"transportation",
			"travel",
			"trip",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "timelapse",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"duration",
			"motion",
			"photo",
			"time",
			"timelapse",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "timeline",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"data",
			"history",
			"line",
			"movement",
			"point",
			"points",
			"timeline",
			"tracking",
			"trending",
			"zigzag"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "timer",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"duration",
			"stop",
			"time",
			"timer",
			"watch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "timer_10",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"10",
			"digits",
			"duration",
			"number",
			"numbers",
			"seconds",
			"time",
			"timer"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "timer_3",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"3",
			"digits",
			"duration",
			"number",
			"numbers",
			"seconds",
			"time",
			"timer"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "timer_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"disabled",
			"duration",
			"enabled",
			"off",
			"on",
			"slash",
			"stop",
			"time",
			"timer",
			"watch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "title",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"alphabet",
			"character",
			"font",
			"header",
			"letter",
			"subject",
			"symbol",
			"t",
			"text",
			"title",
			"type"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "toc",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"content",
			"format",
			"lines",
			"list",
			"order",
			"reorder",
			"stacked",
			"table",
			"title",
			"titles"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "today",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"calendar",
			"date",
			"day",
			"event",
			"mark",
			"month",
			"remember",
			"reminder",
			"schedule",
			"time",
			"today"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "toggle_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"toggle"
		],
		"tags": [
			"active",
			"component",
			"configuration",
			"control",
			"disable",
			"inable",
			"inactive",
			"off",
			"on",
			"selection",
			"settings",
			"slider",
			"switch",
			"toggle",
			"ui",
			"website"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "toggle_on",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"toggle"
		],
		"tags": [
			"active",
			"component",
			"configuration",
			"control",
			"disable",
			"inable",
			"inactive",
			"off",
			"on",
			"selection",
			"settings",
			"slider",
			"switch",
			"toggle",
			"ui",
			"website"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "toll",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bill",
			"booth",
			"car",
			"card",
			"cash",
			"coin",
			"commerce",
			"credit",
			"currency",
			"dollars",
			"highway",
			"money",
			"online",
			"pay",
			"payment",
			"ticket",
			"toll"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tonality",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"circle",
			"edit",
			"editing",
			"image",
			"photography",
			"picture",
			"tonality"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "topic",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"file"
		],
		"tags": [
			"articles",
			"composer",
			"content",
			"data",
			"drive",
			"file",
			"folder",
			"folders",
			"storage",
			"topic",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "touch_app",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"app",
			"command",
			"fingers",
			"gesture",
			"hand",
			"press",
			"tap",
			"touch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tour",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"destination",
			"flag",
			"places",
			"tour",
			"travel",
			"visit"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "toys",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"games",
			"toys",
			"windmill"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "track_changes",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bullseye",
			"changes",
			"circle",
			"evolve",
			"lines",
			"movement",
			"rotate",
			"shift",
			"target",
			"track"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "traffic",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"direction",
			"light",
			"map",
			"signal",
			"street",
			"traffic"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "train",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"direction",
			"maps",
			"public",
			"rail",
			"subway",
			"train",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tram",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"car",
			"cars",
			"direction",
			"maps",
			"public",
			"rail",
			"subway",
			"train",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "transfer_within_a_station",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"arrow",
			"body",
			"direction",
			"human",
			"left",
			"people",
			"person",
			"public",
			"right",
			"route",
			"station",
			"stop",
			"transfer",
			"transportation",
			"vehicle",
			"walk"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "transform",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"crop",
			"edit",
			"editing",
			"image",
			"photo",
			"picture",
			"transform"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "transit_enterexit",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"arrow",
			"direction",
			"map",
			"public",
			"route",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "translate",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"language",
			"speaking",
			"speech",
			"translate",
			"translator",
			"words"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "trending_down",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"analytics",
			"arrow",
			"data",
			"diagram",
			"down",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"movement",
			"rate",
			"rating",
			"statistics",
			"tracking",
			"trending"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "trending_flat",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"change",
			"data",
			"flat",
			"metric",
			"movement",
			"rate",
			"track",
			"tracking",
			"trending"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "trending_up",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"analytics",
			"arrow",
			"data",
			"diagram",
			"graph",
			"infographic",
			"measure",
			"metrics",
			"movement",
			"rate",
			"rating",
			"statistics",
			"tracking",
			"trending",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "trip_origin",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"circle",
			"departure",
			"origin",
			"trip"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tty",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"call",
			"cell",
			"contact",
			"deaf",
			"device",
			"hardware",
			"mobile",
			"phone",
			"speech-impaired",
			"talk",
			"telephone",
			"text",
			"tty"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tune",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"adjust",
			"edit",
			"editing",
			"options",
			"setting",
			"settings",
			"tune"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "turned_in",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bookmark",
			"in",
			"remember",
			"save",
			"turned"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "turned_in_not",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bookmark",
			"in",
			"not",
			"outline",
			"remember",
			"save",
			"turned"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tv",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"device",
			"display",
			"monitor",
			"screen",
			"screencast",
			"stream",
			"television",
			"tv",
			"video",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "tv_off",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"Android",
			"OS",
			"chrome",
			"desktop",
			"device",
			"disabled",
			"enabled",
			"hardware",
			"iOS",
			"mac",
			"monitor",
			"off",
			"on",
			"slash",
			"television",
			"tv",
			"web",
			"window"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "two_wheeler",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"automobile",
			"bike",
			"car",
			"cars",
			"direction",
			"maps",
			"motorcycle",
			"public",
			"scooter",
			"sport",
			"transportation",
			"vehicle"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "umbrella",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"protection",
			"rain",
			"sun",
			"umbrella"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "unarchive",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"archive",
			"arrow",
			"inbox",
			"mail",
			"store",
			"undo",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "undo",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"arrow",
			"backward",
			"previous",
			"redo",
			"repeat",
			"rotate",
			"undo"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "unfold_less",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"chevron",
			"collapse",
			"direction",
			"expand",
			"expandable",
			"inward",
			"less",
			"list",
			"unfold",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "unfold_more",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"arrows",
			"chevron",
			"collapse",
			"direction",
			"down",
			"expand",
			"expandable",
			"list",
			"more",
			"unfold"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "unpublished",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"approve",
			"check",
			"circle",
			"completed",
			"disabled",
			"enabled",
			"mark",
			"off",
			"ok",
			"on",
			"select",
			"slash",
			"tick",
			"unpublished",
			"yes"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "unsubscribe",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Unsubscribe",
			"close",
			"envelop",
			"mail",
			"newsletter",
			"off",
			"subscribe"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "update",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"back",
			"backwards",
			"clock",
			"forward",
			"history",
			"load",
			"refresh",
			"reverse",
			"rotate",
			"schedule",
			"time",
			"update"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "update_disabled",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"back",
			"backwards",
			"clock",
			"disabled",
			"enabled",
			"forward",
			"history",
			"load",
			"off",
			"on",
			"refresh",
			"reverse",
			"rotate",
			"schedule",
			"slash",
			"time",
			"update"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "upgrade",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"export",
			"instal",
			"line",
			"replace",
			"up",
			"update",
			"upgrade"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "usb",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"cable",
			"connection",
			"device",
			"usb",
			"wire"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "verified",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"audit",
			"badge",
			"certified",
			"check",
			"checkmark",
			"ok",
			"security",
			"tick",
			"user",
			"verified"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "verified_user",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"audit",
			"certified",
			"check",
			"checkmark",
			"ok",
			"security",
			"shield",
			"tick",
			"user",
			"verified"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "vertical_align_bottom",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"arrow",
			"bottom",
			"doc",
			"down",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "vertical_align_center",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"arrow",
			"center",
			"doc",
			"down",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"up",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "vertical_align_top",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"align",
			"alignment",
			"arrow",
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"text",
			"top",
			"type",
			"up",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "vertical_distribute",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"alignment",
			"distribute",
			"format",
			"layout",
			"lines",
			"paragraph",
			"rule",
			"rules",
			"style",
			"text",
			"vertical"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "vertical_split",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"document",
			"format",
			"paragraph",
			"split",
			"text",
			"vertical",
			"website",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "vibration",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"Android",
			"OS",
			"alert",
			"cell",
			"device",
			"hardware",
			"iOS",
			"mobile",
			"mode",
			"motion",
			"notification",
			"phone",
			"silence",
			"silent",
			"tablet",
			"vibrate",
			"vibration"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "video_call",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Video",
			"call",
			"camera",
			"chat",
			"conference",
			"plus",
			"screen"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "video_label",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Video",
			"device",
			"label",
			"screen"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "video_library",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Video",
			"camera",
			"collection",
			"library",
			"play"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "video_settings",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Video",
			"camera",
			"collection",
			"gear",
			"play",
			"screen",
			"setting",
			"settings"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "videocam",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Video",
			"camera",
			"chat",
			"conference",
			"screen"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "videocam_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Video",
			"camera",
			"chat",
			"conference",
			"disabled",
			"enabled",
			"off",
			"on",
			"screen",
			"slash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "videogame_asset",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"asset",
			"console",
			"controller",
			"device",
			"game",
			"gamepad",
			"gaming",
			"playstation",
			"video"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_agenda",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"agenda",
			"cards",
			"format",
			"stacked",
			"view",
			"website"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_array",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"array",
			"format",
			"view",
			"website"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_carousel",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"banner",
			"cards",
			"carousel",
			"format",
			"images",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_column",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"column",
			"format",
			"grid",
			"vertical",
			"view",
			"website"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_comfy",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"comfy",
			"grid",
			"layout",
			"pattern",
			"squares",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_compact",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"comfy",
			"grid",
			"layout",
			"pattern",
			"squares",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_day",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"calendar",
			"cards",
			"carousel",
			"day",
			"format",
			"view",
			"week"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_headline",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"format",
			"headline",
			"paragraph",
			"text",
			"view",
			"website"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_list",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"format",
			"lines",
			"list",
			"order",
			"reorder",
			"stacked",
			"title",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_module",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"format",
			"grid",
			"module",
			"order",
			"reorder",
			"square",
			"squares",
			"stacked",
			"title",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_quilt",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"format",
			"grid",
			"order",
			"quilt",
			"reorder",
			"square",
			"squares",
			"stacked",
			"title",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_sidebar",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"format",
			"grid",
			"layout",
			"sidebar",
			"view"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "view_stream",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"format",
			"lines",
			"list",
			"order",
			"reorder",
			"stacked",
			"stream",
			"title",
			"view"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "view_week",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"bars",
			"columns",
			"day",
			"format",
			"view",
			"week"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "vignette",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"border",
			"edit",
			"editing",
			"gradient",
			"image",
			"photo",
			"photography",
			"setting",
			"vignette"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "visibility",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"eye",
			"on",
			"reveal",
			"see",
			"show",
			"view",
			"visability"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "visibility_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"disabled",
			"enabled",
			"eye",
			"off",
			"on",
			"reveal",
			"see",
			"show",
			"slash",
			"view",
			"visability"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "voice_chat",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"bubble",
			"cam",
			"camera",
			"chat",
			"facetime",
			"message",
			"sms",
			"talk",
			"video",
			"voice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "voice_over_off",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"account",
			"disabled",
			"enabled",
			"face",
			"human",
			"off",
			"on",
			"over",
			"people",
			"person",
			"profile",
			"recording",
			"slash",
			"speak",
			"speaking",
			"speech",
			"transcript",
			"user",
			"voice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "voicemail",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Voicemail",
			"call",
			"device",
			"message",
			"missed",
			"mobile",
			"phone",
			"recording",
			"voice"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "volume_down",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Volume",
			"audio",
			"control",
			"down",
			"music",
			"sound",
			"tv"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "volume_mute",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Volume",
			"audio",
			"control",
			"music",
			"mute",
			"sound",
			"tv"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "volume_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Volume",
			"audio",
			"control",
			"disabled",
			"enabled",
			"music",
			"off",
			"on",
			"slash",
			"sound",
			"tv"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "volume_up",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Volume",
			"audio",
			"control",
			"music",
			"sound",
			"tv",
			"up"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "vpn_key",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"Vpn",
			"code",
			"key",
			"lock",
			"passcode",
			"password",
			"unlock"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "vpn_lock",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"earth",
			"globe",
			"lock",
			"network",
			"password",
			"private",
			"safety",
			"security",
			"virtual",
			"vpn",
			"world"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wallpaper",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"background",
			"image",
			"landscape",
			"wallpaper"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "warning",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"alert"
		],
		"tags": [
			"!",
			"alert",
			"attention",
			"caution",
			"danger",
			"error",
			"exclamation",
			"important",
			"mark",
			"notification",
			"symbol",
			"triangle",
			"warning"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wash",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"clean",
			"fingers",
			"gesture",
			"hand",
			"wash"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "watch",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"hardware"
		],
		"tags": [
			"Android",
			"OS",
			"ar",
			"clock",
			"gadget",
			"iOS",
			"time",
			"vr",
			"watch",
			"wearables",
			"web",
			"wristwatch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "watch_later",
		"version": 8,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"clock",
			"hour",
			"minute",
			"time",
			"watch"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "water_damage",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"architecture",
			"building",
			"damage",
			"drop",
			"droplet",
			"estate",
			"house",
			"leak",
			"plumbing",
			"real",
			"residence",
			"residential",
			"shelter",
			"water"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "waves",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"beach",
			"ocean",
			"pool",
			"sea",
			"swim",
			"water",
			"wave",
			"waves"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wb_auto",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"A",
			"W",
			"alphabet",
			"auto",
			"automatic",
			"balance",
			"character",
			"edit",
			"editing",
			"font",
			"image",
			"letter",
			"photo",
			"photography",
			"symbol",
			"text",
			"type",
			"white",
			"wp"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wb_cloudy",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"balance",
			"cloud",
			"cloudy",
			"edit",
			"editing",
			"white",
			"wp"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wb_incandescent",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"balance",
			"bright",
			"edit",
			"editing",
			"incandescent",
			"light",
			"lighting",
			"setting",
			"settings",
			"white",
			"wp"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wb_iridescent",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"balance",
			"bright",
			"edit",
			"editing",
			"iridescent",
			"light",
			"lighting",
			"setting",
			"settings",
			"white",
			"wp"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wb_sunny",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"image"
		],
		"tags": [
			"balance",
			"bright",
			"light",
			"lighting",
			"sun",
			"sunny",
			"wb",
			"white"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wc",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"bathroom",
			"closet",
			"female",
			"male",
			"man",
			"restroom",
			"room",
			"wash",
			"water",
			"wc",
			"women"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "web",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Web",
			"browser",
			"internet",
			"page",
			"screen",
			"site",
			"website",
			"www"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "web_asset",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"av"
		],
		"tags": [
			"Web",
			"asset",
			"browser",
			"download",
			"image",
			"internet",
			"screen",
			"video",
			"website",
			"www"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "weekend",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"calendar",
			"chair",
			"couch",
			"furniture",
			"living",
			"lounge",
			"next",
			"room",
			"schedule",
			"week",
			"weekend"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "west",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"navigation"
		],
		"tags": [
			"arrow",
			"directional",
			"left",
			"west"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "whatshot",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"social"
		],
		"tags": [
			"arrow",
			"direction",
			"fire",
			"frames",
			"hot",
			"round",
			"whatshot"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wheelchair_pickup",
		"version": 3,
		"unsupported_families": [],
		"categories": [
			"places"
		],
		"tags": [
			"accessibility",
			"accessible",
			"body",
			"handicap",
			"help",
			"human",
			"person",
			"pickup",
			"wheelchair"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "where_to_vote",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"content"
		],
		"tags": [
			"ballot",
			"check",
			"checkmark",
			"election",
			"location",
			"ok",
			"pin",
			"poll",
			"tick",
			"vote"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "widgets",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"app",
			"box",
			"menu",
			"setting",
			"square",
			"ui",
			"widgets"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wifi",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"cell",
			"cellular",
			"data",
			"internet",
			"mobile",
			"network",
			"phone",
			"signal",
			"speed",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wifi_calling",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"communication"
		],
		"tags": [
			"call",
			"calling",
			"device",
			"mobile",
			"phone",
			"wifi"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "wifi_lock",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"cell",
			"cellular",
			"data",
			"internet",
			"lock",
			"mobile",
			"network",
			"phone",
			"speed",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wifi_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"notification"
		],
		"tags": [
			"cell",
			"cellular",
			"data",
			"disabled",
			"enabled",
			"internet",
			"mobile",
			"network",
			"off",
			"on",
			"phone",
			"signal",
			"slash",
			"speed",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wifi_protected_setup",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"around",
			"arrow",
			"arrows",
			"protected",
			"setup",
			"wifi"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "wifi_tethering",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"device"
		],
		"tags": [
			"cell",
			"cellular",
			"data",
			"internet",
			"mobile",
			"network",
			"phone",
			"speed",
			"tethering",
			"wifi",
			"wireless"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wine_bar",
		"version": 1,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"alcohol",
			"bar",
			"cocktail",
			"cup",
			"drink",
			"glass",
			"liquor",
			"wine"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "work",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"briefcase",
			"business",
			"job",
			"suit",
			"suitcase",
			"work"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "work_off",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"briefcase",
			"disabled",
			"enabled",
			"job",
			"off",
			"on",
			"slash",
			"suit",
			"suitcase",
			"work"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "work_outline",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"briefcase",
			"job",
			"suit",
			"suitcase",
			"work"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wrap_text",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"editor"
		],
		"tags": [
			"doc",
			"edit",
			"editing",
			"editor",
			"sheet",
			"spreadsheet",
			"text",
			"type",
			"wrap",
			"writing"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "wrong_location",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"destination",
			"direction",
			"error",
			"location",
			"maps",
			"no",
			"pin",
			"place",
			"stop",
			"wrong",
			"x"
		],
		"sizes_px": [
			20,
			24
		]
	},
	{
		"name": "wysiwyg",
		"version": 2,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"composer",
			"mode",
			"site",
			"software",
			"system",
			"view",
			"visibility",
			"web",
			"website",
			"window",
			"wysiwyg"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "youtube_searched_for",
		"version": 6,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"arrow",
			"back",
			"backwards",
			"find",
			"glass",
			"history",
			"inprogress",
			"load",
			"loading",
			"look",
			"magnify",
			"magnifying",
			"refresh",
			"renew",
			"restore",
			"reverse",
			"rotate",
			"search",
			"see",
			"youtube"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "zoom_in",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"big",
			"bigger",
			"find",
			"glass",
			"grow",
			"in",
			"look",
			"magnify",
			"magnifying",
			"plus",
			"scale",
			"search",
			"see",
			"size",
			"zoom"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "zoom_out",
		"version": 5,
		"unsupported_families": [],
		"categories": [
			"action"
		],
		"tags": [
			"find",
			"glass",
			"look",
			"magnify",
			"magnifying",
			"minus",
			"negative",
			"out",
			"scale",
			"search",
			"see",
			"size",
			"small",
			"smaller",
			"zoom"
		],
		"sizes_px": [
			24
		]
	},
	{
		"name": "zoom_out_map",
		"version": 7,
		"unsupported_families": [],
		"categories": [
			"maps"
		],
		"tags": [
			"arrow",
			"destination",
			"in",
			"location",
			"maps",
			"move",
			"out",
			"pin",
			"place",
			"stop",
			"zoom"
		],
		"sizes_px": [
			24
		]
	}
]

mock.onGet('/api/icons').reply(config => {
	/*
    For Reduce the icons object
    let data = _.map(iconsDB, (item) => _.pick(item, ['properties', 'icon.tags']));
    data = _.map(data, (item) => ({...item.properties, ...item.icon}));
    return [200, data];
    */
	return [200, iconsDB];
});
