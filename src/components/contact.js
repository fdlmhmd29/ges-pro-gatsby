/**@jsx jsx */
import { jsx, Box, Container, Paragraph } from "theme-ui";

const contact = () => {
	return (
		<Box id="hubungi-kami" sx={styles.contactWrapper} as={"section"}>
			<Container sx={styles.container}>
				<Box as={"div"} sx={styles.detail}>
					<Paragraph as={"p"} sx={styles.title}>
						Hubungi team kami
					</Paragraph>
					<Box as={"div"} sx={styles.address}>
						<svg
							sx={styles.svg}
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
						>
							<path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
						</svg>
						<Paragraph as={"p"} sx={styles.addressDetail}>
							JL. Babakan Ciparay
						</Paragraph>
					</Box>
					<Box as={"div"} sx={styles.address}>
						<svg
							sx={styles.svg}
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
						>
							<path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
						</svg>
						<Paragraph as={"p"} sx={styles.addressDetail}>
							pt.greenfield@gmail.com
						</Paragraph>
					</Box>
					<Box as={"div"} sx={styles.address}>
						<svg
							sx={styles.svg}
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
						>
							<path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
						</svg>
						<Paragraph as={"p"} sx={styles.addressDetail}>
							+62 812-898-9000
						</Paragraph>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default contact;

const styles = {
	contactWrapper: {
		pt: "4rem",
		py: 4,
		backgroundColor: "#e2ffda",
		textColor: "background",
	},
	container: {
		maxWidth: "container",
		mx: "auto",
		display: "flex",
		flexDirection: ["row", "column"],
		my: ["3rem", "10rem"],
	},
	detail: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: [null, "2rem"],
	},
	title: {
		fontSize: ["1.5rem", "3rem"],
		lineHeight: "2.25rem",
		fontWeight: "bold",
		my: "1rem",
		lineHeight: [1.375, 1.625],
	},
	address: {
		fontFamily: "body",
		fontSize: ["0.875rem", "1.25rem"],
		lineHeight: ["1.25rem", "1.75rem"],
		my: ["0.5rem", "1rem"],
		display: "flex",
		alignItems: "center",
	},
	svg: {
		display: "inline-block",
		fill: "currentColor",
		mr: "0.5rem",
	},
};
