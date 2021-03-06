const theme = {
	// example colors with dark mode
	colors: {
		text: "#343D48", // body color and primary color
		textSecondary: "#02073E", // secondary body color
		heading: "#0F2137", // primary heading color
		headingSecondary: "#343D48", // heading color
		background: "#FFFFFF", // body background color
		backgroundSecondary: "#e2ffda", // secondary background color
		borderColor: "#F3F4F5", // border color
		primary: "#26b600", // primary button and link color
		secondary: "#EF9E48", // secondary color - can be used for hover states
		muted: "#7B8188", // muted color
		accent: "#609", // a contrast color for emphasizing UI
		dark: "#10132D",
		link: "#4F96FF", // default link color
	},
	fonts: {
		body: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
		heading: "Montserrat",
		// heading: 'Bree Serif',
		monospace: "IBM Plex Mono, monospace",
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.25,
	},
	letterSpacings: {
		body: "normal",
		caps: "0.2em",
		heading: "-0.5px",
	},
	space: [0, 4, 8, 12, 16, 32, 48, 64, 96, 128],
	sizes: {},
	breakpoints: [
		"480px",
		"640px",
		"768px",
		"1024px",
		"1200px",
		"1367px",
		"1440px",
	],

	section: {
		news: {
			backgroundColor: "backgroundSecondary",
			py: ["3rem", 7, 7, 7, "4rem", "4rem", "4rem"],
		},
	},

	// variants can use custom, user-defined names
	layout: {
		container: {
			maxWidth: ["100%", null, null, null, "970px", "1140px", "1260px"],
			paddingLeft: [20, 30],
			paddingRight: [20, 30],
			m: "0 auto",
		},
		header: {
			position: "fixed",
			left: 0,
			right: 0,
			padding: "20px 0",
			transition: "background-color 0.3s ease-in-out 0s",
			"::before": {
				backgroundColor: "#fff",
				content: `''`,
				position: "absolute",
				left: 0,
				top: 0,
				right: 0,
				height: 0,
				transition: "all 0.3s ease-in-out 0s",
				zIndex: "-1",
			},
			"&.is-mobile-menu": {
				backgroundColor: "text",
				"::before": {
					backgroundColor: "text",
				},
			},
		},
		toolbar: {
			display: "flex",
			alignItems: "center",
		},

		footer: {
			backgroundColor: "#F9FAFC",
			pt: 6,
		},
	},
	text: {
		heading: {
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "bold",
		},
	},
	links: {
		blog: {
			display: "block",
			px: 0,
			color: "inherit",
			textDecoration: "none",
			fontSize: "inherit",
			transition: "color 0.25s",
			"&:hover": {
				color: "primary",
			},
		},
		bold: {
			fontWeight: "bold",
		},
		logo: {
			display: "inline-flex",
		},

		nav: {
			display: ["none", null, "inline-flex"],
			p: 2,
		},
		footer: {
			display: "flex",
			px: 0,
			color: "inherit",
			textDecoration: "none",
			fontSize: "14px",
			lineHeight: 2.5,
		},
	},
	images: {
		avatar: {
			width: 48,
			height: 48,
			borderRadius: 99999,
		},
	},
	// variants for buttons
	buttons: {
		menu: {
			display: ["block", null, null, null, "none"],
			svg: {
				width: "32px",
			},
		}, // default variant for MenuButton
		// you can reference other values defined in the theme
		default: {
			backgroundColor: "transparent",
			fontFamily: "body",
			fontWeight: "bold",
			borderRadius: "5px",
			cursor: "pointer",
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			transition: "0.3s ease-in-out 0s",
			whiteSpace: "nowrap",
		},
		primary: {
			variant: "buttons.default",
			color: "white",
			bg: "primary",
			minHeight: ["50px", "50px", "50px", "50px", "50px"],
			padding: ["0 25px", "0 25px", "0 25px", "0 30px"],
			"&:hover": {
				bg: "dark",
			},
		},
		primaryMd: {
			variant: "buttons.primary",
			minHeight: "50px",
			px: "25px",
		},
		secondary: {
			cursor: "pointer",
			fontFamily: "body",
			color: "text",
			bg: "secondary",
			transition: "0.3s ease-in-out 0s",
		},
		muted: {
			variant: "buttons.default",
			backgroundColor: "#EDF0F2",
			color: "text",
			":hover": {
				backgroundColor: "primary",
				color: "#fff",
			},
		},
		white: {
			variant: "buttons.default",
			backgroundColor: "white",
			color: "#020718",
		},
		text: {
			variant: "buttons.default",
			color: "text",
		},
	},
	cards: {
		primary: {
			padding: 2,
			borderRadius: 4,
			// boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
		},
		offer: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			flex: ["1 1 calc(50% - 16px)", "1 1 20%"],
			minHeight: 130,
			m: 2,
			background: "#FFFFFF",
			border: "1px solid #EDEFF6",
			borderRadius: 5,
		},
		featureCard: {
			display: "flex",
			alignItems: ["center", "flex-start"],
			flexDirection: ["column", "row"],
			p: [0, 3],
		},
	},
	forms: {
		label: {
			fontSize: 1,
			fontWeight: "bold",
		},
		input: {
			borderRadius: 8,
			borderColor: "borderColor",
			height: 60,
			"&:focus": {
				borderColor: "primary",
				boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
				outline: "none",
			},
		},
	},

	badges: {
		primary: {
			color: "background",
			bg: "#28A5FF",
			borderRadius: 30,
			p: "3px 11px",
			fontSize: 1,
			letterSpacing: "-0.5px",
		},
		outline: {
			color: "primary",
			bg: "transparent",
			boxShadow: "inset 0 0 0 1px",
		},
	},

	styles: {
		// To add base, top-level styles to the <body> element, use theme.styles.root.
		root: {
			textDecoration: "none",
			fontFamily: "body",
			lineHeight: "body",
			fontWeight: "body",
		},
		// h1-h6 Heading styles
		h1: {
			variant: "text.heading",
			fontSize: 6,
		},
		h2: {
			variant: "text.heading",
			fontSize: 5,
		},
		h3: {
			variant: "text.heading",
			fontSize: 4,
		},
		h4: {
			variant: "text.heading",
			fontSize: 3,
		},
		h5: {
			variant: "text.heading",
			fontSize: 2,
		},
		h6: {
			variant: "text.heading",
			fontSize: 1,
		},
		// Divider styles
		hr: {
			border: 0,
			borderBottom: "1px solid",
			borderColor: "#D9E0E7",
		},

		// Ordered List
		ol: {
			listStyleType: "decimal",
			listStylePosition: "outside",
			listStyleImage: "none",
			fontSize: [2, 3],
			m: 0,
			p: 0,
		},

		// List Items (li) styles
		li: {
			textAlign: "left",
			ml: ["2rem", "3rem"],
			pb: ["0.7rem", "1rem"],
		},

		p: {
			pb: "0.5rem",
			fontSize: ["1rem", 3],
		},

		srOnly: {
			border: "0 !important",
			clip: "rect(1px, 1px, 1px, 1px) !important",
			clipPath: "inset(50%) !important",
			height: "1px !important",
			margin: "-1px !important",
			overflow: "hidden !important",
			padding: "0 !important",
			position: "absolute !important",
			width: "1px !important",
			whiteSpace: "nowrap !important",
		},
	},
};

export default theme;
