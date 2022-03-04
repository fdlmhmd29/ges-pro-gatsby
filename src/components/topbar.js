/** @jsx jsx */
import { jsx, Box, Text, Container } from "theme-ui";
import { MdEmail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const TopBar = () => {
	return (
		<Box as="section" sx={styles.topbar}>
			<Container sx={styles.content}>
				<Box as={"div"}>
					<Text as="span" className="caption">
						<MdEmail size={18} />{" "}
						<a href="mailto:pt.greenfield@gmail.com">
							pt.greenfield@gmail.com
						</a>
					</Text>

					<Text as="span" className="caption">
						<FaPhoneAlt size={16} />{" "}
						<a href="tel:(021)-7815225">(021)-7815225</a>
					</Text>
				</Box>
				<Box as={"div"} sx={styles.gmaps}>
					<Text as="span" className="caption">
						<SiGooglemaps size={18} />{" "}
						<a
							href="https://goo.gl/maps/WRi3jGvkzCaXXveG7"
							target={"_blank"}
							rel={"noopener noreferrer"}
						>
							Arahan Google Maps
						</a>
					</Text>
				</Box>
			</Container>
		</Box>
	);
};

export default TopBar;

const styles = {
	topbar: {
		backgroundColor: "#f2f2f2",
		px: [0, null, null, null, 0],
		py: ["1rem", "0.7rem"],
		borderBottom: "0.5px solid rgba(0, 0, 0, 0.1)",
	},
	gmaps: {
		mt: ["1rem", 0],
	},
	content: {
		display: "flex",
		flexDirection: ["column", "row"],
		alignItems: "start",
		justifyContent: ["space-around", null, null, "center", "space-between"],
		fontSize: ["13px"],
		fontWeight: 400,
		maxWidth: 780,
		m: "0 auto",
		textAlign: "center",
		span: {
			"+ span": {
				ml: [4],
			},
		},
		".caption": {
			// Border left
			borderLeft: "0.5px solid rgba(0, 0, 0, 0.1)",
			display: "inline-flex",
			alignItems: "center",
			backgroundColor: "rgba(255, 255, 255, 0.1)",
			color: "gray",
			fontWeight: 500,
			justifyContent: "center",
			lineHeight: "1",
			padding: "0.3rem",
			textAlign: "center",
			width: ["aut0", null, null, "auto"],
			overflow: ["hidden", null, null, "unset"],
			whiteSpace: ["nowrap", null, null, "unset"],
			textOverflow: ["ellipsis", null, null, "unset"],

			transition: "all 0.3s ease-in-out",

			"&:hover": {
				backgroundColor: "rgba(255, 255, 255, 0.2)",
			},

			svg: {
				mr: [2, null, null, 3],

				minWidth: 20,
			},
		},

		a: {
			color: "gray",
			cursor: "pointer",
			fontSize: ["12px"],
			alignItems: "center",
			display: "inline-flex",
			textDecoration: "none",

			// Hover animation
			transition: "0.3s ease-in-out 0s",
			"&:hover": {
				textDecoration: "underline",
			},
		},
	},
};
