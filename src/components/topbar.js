/** @jsx jsx */
import { jsx, Box, Text, Container } from "theme-ui";
import { MdEmail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const TopBar = () => {
	return (
		<Box as="section" sx={styles.topbar}>
			<Container sx={styles.content}>
				<Box as={"div"} className="caption">
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
				<Box as={"div"}>
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
		backgroundColor: "#f5b314",
		px: [0, null, null, null, 0],
		py: 2,
	},
	content: {
		display: "flex",
		flexDirection: ["column", "row"],
		alignItems: ["center", "start"],
		justifyContent: ["space-around", null, null, "center", "space-between"],
		color: "white",
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
			display: "inline-flex",
			alignItems: "center",

			width: ["aut0", null, null, "auto"],
			overflow: ["hidden", null, null, "unset"],
			whiteSpace: ["nowrap", null, null, "unset"],

			svg: {
				mr: [2, null, null, 3],

				minWidth: 20,
			},
		},

		a: {
			color: "#fff",
			cursor: "pointer",
			fontSize: ["13px"],
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
