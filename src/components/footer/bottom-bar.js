/** @jsx jsx */
import { jsx, Box, Text, Container } from "theme-ui";

const TopBar = () => {
	return (
		<Box as="section" sx={styles.bottomBar}>
			<Container sx={styles.content}>
				<Text sx={styles.copyright}>
					Copyright &copy; {new Date().getFullYear()} PT. Greenfield
					Environment Solution
				</Text>
			</Container>
		</Box>
	);
};

export default TopBar;

const styles = {
	bottomBar: {
		backgroundColor: "#f5b314",
		px: [0, null, null, null, 0],
		py: ["1rem", "2rem"],
	},
	content: {
		display: "flex",
		flexDirection: ["column", "row"],
		alignItems: ["center", "start"],
		justifyContent: "center",
		color: "white",
		fontSize: "1rem",
		fontWeight: 500,
		m: "auto",
		textAlign: "center",
		span: {
			"+ span": {
				ml: [4],
			},
		},
	},
};
