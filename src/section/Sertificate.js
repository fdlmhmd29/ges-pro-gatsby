/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Image, Text } from "theme-ui";
import { IoIosCheckmarkCircle } from "react-icons/io";

import sertificate from "../images/sections/sertificate.svg";
import TextFeature from "../components/text-feature";

const data = {
	subTitle: "Sertifikasi Perusahaan",
	title: "Kementerian Lingkungan Hidup dan Kehutanan",
};

const list = ["0049", "LPJ", "AMDAL-1", "LRK/KLHK"];

const Sertificate = () => {
	return (
		<Box as="section" id="support" sx={styles.section}>
			<Container>
				<Box sx={styles.grid}>
					<Box sx={styles.illustration}>
						<Image
							width="675"
							height="706"
							src={sertificate}
							alt="Sertifikat Kementerian Lingkungan Hidup dan Kehutanan"
						/>
					</Box>
					<Box sx={styles.content}>
						<TextFeature
							subTitle={data.subTitle}
							title={data.title}
						/>
						<Text as="p" sx={styles.summary}>
							Lembaga Penyedia Jasa AMDAL PT. Greenfield
							Environment Solution telah disetujui
						</Text>

						<Grid sx={styles.list} as="ul">
							{list.map((item, i) => (
								<Text as="li" key={i}>
									<IoIosCheckmarkCircle
										sx={{ color: "#3CC68A", mr: 2 }}
										size="20px"
									/>
									{item}
								</Text>
							))}
						</Grid>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Sertificate;

const styles = {
	section: {
		py: ["1rem", 7, 7, 7, 7, 7, 5],
	},
	grid: {
		gap: [null, null, null, null, "0 10px"],
		display: ["flex", null, null, "grid"],
		flexDirection: ["column-reverse", null, null, "unset"],
		alignItems: "center",
		gridTemplateColumns: [
			"1fr",
			null,
			null,
			"1fr",
			"470px 1fr",
			"600px 1fr",
			"680px 1fr",
		],
	},
	illustration: {
		textAlign: "center",
		position: "relative",
		display: "flex",
		alignItems: "center",
		right: "30px",
		mt: [2, null, null, 0, 4, 0],
		maxWidth: ["100%", null, null, "80%", "none"],
		ml: ["auto", null, null, "auto", "0"],
		mr: ["auto", null, null, "auto", "0"],
	},
	content: {
		marginTop: [null, null, null, null, null, -16],
		maxWidth: [null, null, null, 560, "none"],
		textAlign: ["center", null, null, "left"],
		m: [null, null, null, "0 auto", "unset"],
	},
	slogan: {
		color: "#00A99D",
		fontSize: "16px",
		textAlign: ["center", null, null, null, "left"],
		fontWeight: 500,
		display: "block",
	},
	title: {
		color: "heading",
		fontWeight: 500,
		fontSize: [5, null, null, 10, null, null, 11],
		lineHeight: 1.53,
		letterSpacing: ["-0.5px", null, null, "-1px"],
		mb: "20px",
		textAlign: ["center", null, null, null, "left"],
		span: {
			backgroundSize: "cover",
			px: 2,
		},
	},
	summary: {
		color: "textSecondary",
		fontSize: [1, null, null, 2, "15px", 2],
		lineHeight: [1.86, null, null, null, 1.86, 2.25],
		maxWidth: 470,
		m: [null, null, null, "20px auto 0", "15px 0 0", null, "unset"],
		textAlign: ["center", null, null, null, "left"],
	},
	list: {
		gap: "0 18px",
		gridTemplateColumns: [
			"repeat(2, 160px)",
			null,
			null,
			"repeat(2, 200px)",
		],
		justifyContent: ["center", null, null, "center", "unset"],
		listStyle: "none",
		mt: [4, null, null, 5, 4, 5],
		p: 0,
		li: {
			fontSize: [0, 1, null, 2, "15px", 2],
			fontWeight: 500,
			alignItems: "center",
			color: "textSecondary",
			display: "flex",
			lineHeight: [2.81, null, null, null, 2.2, 2.81],
		},
	},
};
