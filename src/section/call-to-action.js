import React from "react";
import { Box, Container, Heading, Button } from "theme-ui";
import { button, shape } from "../images";
const CallToAction = () => {
	return (
		<Box sx={styles.wrapper}>
			<Container sx={styles.container}>
				<Box sx={styles.inner}>
					<Heading as="h3">
						Membutuhkan jasa penyusunan <br />
						dokumen lingkungan?
					</Heading>
					<Box sx={styles.btnWrapper}>
						<Button sx={styles.btn}>
							<a href="mailto:pt.greenfield@gmail.com">
								HUBUNGI KAMI
							</a>
						</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default CallToAction;

const styles = {
	wrapper: {
		my: ["2rem", null, null, null, null, 6, "4rem"],
	},
	inner: {
		padding: ["45px 30px 50px", null, null, "45px 50px", null, "45px 70px"],
		mt: ["-40px", null, null, null, "-80px"],
		position: "relative",
		zIndex: "10",
		backgroundColor: "primary",
		backgroundImage: ["none", null, null, null, null, `url(${shape})`],
		backgroundRepeat: "no-repeat",
		backgroundPosition: "60% center",
		borderRadius: "10px",
		display: "flex",
		alignItems: "center",
		textAlign: ["center", null, null, "left"],
		flexDirection: ["column", null, null, "row"],
		justifyContent: ["center", null, null, "space-between"],
		h3: {
			color: "#fff",
			fontWeight: "bold",
			fontSize: [3, null, 4, null, null, 6, 5],
			lineHeight: [1.24, null, 1.53],
			padding: ["0 15px", "0"],
			marginBottom: ["50px", null, null, "0"],
			br: {
				display: ["none", null, null, "inherit"],
			},
		},
	},
	btn: {
		backgroundColor: "#fff",
		color: "primary",
		borderRadius: "5px",
		fontSize: [0, 1, null, null, null, null, "17px"],

		letterSpacing: "0.1em",
		fontFamily: "body",
		padding: ["10px 24px", null, null, null, null, "15px 44px"],
		position: "relative",
		outline: "none",
		webkitAppearance: "none",
		"&:before, &:after": {
			content: '""',
			position: "absolute",
			width: "73px",
			height: "26px",
			backgroundImage: `url(${button})`,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			bottom: "calc(100% + 10px)",
			left: "50%",
			transform: "translateX(-50%)",
		},
		"&:after": {
			bottom: "auto",
			top: "calc(100% + 10px)",
			transform: "translateX(-50%) rotate(180deg)",
		},
		"&:hover": {
			backgroundColor: "#f5b314",
			color: "#fff",
		},
		a: {
			color: "text",
			cursor: "pointer",
			textDecoration: "none",
			fontWeight: "700",
		},
	},
};
