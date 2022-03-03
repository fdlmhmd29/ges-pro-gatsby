/** @jsx jsx */
import { jsx, Box, Container, Image, Text, Paragraph, Link } from "theme-ui";
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Yellow
import FooterLogo from "../../images/logo.png";

export default function Footer() {
	return (
		<Container sx={styles.wrapper}>
			<Box id="map-wrapper" as={"div"} sx={styles.mapArea}>
				<iframe
					title="Lokasi PT. Greenfield Environment Solution"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.8423555183867!2d106.8443231!3d-6.2844437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f26b998157e5%3A0x1c00c5eb4d033c80!2sWest%20Pejaten%2C%20Pasar%20Minggu%2C%20South%20Jakarta%20City%2C%20Jakarta%2012510!5e0!3m2!1sen!2sid!4v1646296877320!5m2!1sen!2sid"
					className="map"
					loading="lazy"
				></iframe>
			</Box>

			<Box id="about-wrapper" sx={styles.aboutWrapper}>
				<Box id="logo" sx={styles.logo}>
					<Link href="/">
						<Image src={FooterLogo} alt="Logo" />
					</Link>
				</Box>
				<Box as={"div"} id="about" sx={styles.about}>
					<Paragraph as={"h4"} sx={styles.aboutTitle}>
						Tentang Kami
					</Paragraph>
					<Text as={"p"} sx={styles.aboutText}>
						PT. Greenfield Environment Solution berkomitmen untuk
						memberikan Layanan dan Jasa konsultasi lingkungan hidup
						profesional terbaik dengan metode yang tepat, efisien
						dan efektif dari berbagai aspek yang merupakan pondasi
						utama perusahaan kami.
					</Text>
				</Box>
				<Box as={"div"} sx={styles.about}>
					<Paragraph as={"h4"} sx={styles.aboutTitle}>
						Temukan Kami
					</Paragraph>
					<Box as={"div"} sx={styles.addressWrapper}>
						<SiGooglemaps />
						<Text as={"p"} sx={styles.description}>
							<Link
								sx={styles.a}
								href="https://goo.gl/maps/EZGsGAa4EGbmtoUVA"
								target={"_blank"}
							>
								Gedung Hastacentra Lantai 2, Jalan Raya Tanjung
								Barat, No. 07, Pasar Minggu, Jakarta 12510
							</Link>
						</Text>
					</Box>

					<Box as={"div"} sx={styles.addressWrapper}>
						<FaPhoneAlt />
						<Text as={"p"} sx={styles.description}>
							<Link
								sx={styles.a}
								href="tel:pt.greenfield@gmail.com"
							>
								(021)-7815225
							</Link>
						</Text>
					</Box>

					<Box as={"div"} sx={styles.addressWrapper}>
						<MdEmail />
						<Text as={"p"} sx={styles.description}>
							<Link
								sx={styles.a}
								href="mailto:pt.greenfield@gmail.com"
							>
								pt.greenfield@gmail.com
							</Link>
						</Text>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}

const styles = {
	wrapper: {
		display: "flex",
		flexDirection: ["column", "row"],
		justifyContent: "start",
		py: ["3rem", "4rem"],
		backgroundColor: "background",
		color: "text",
	},
	mapArea: {
		color: "text",
		width: "100%",
		mb: ["2rem", 0],

		"& .map": {
			width: "100%",
			height: "100%",
			borderRadius: "12px",
			border: "0px",
		},
	},

	aboutWrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "start",
		width: "100%",
		height: "100%",
		pl: [null, "1rem"],
	},

	aboutTitle: {
		fontSize: ["1.125rem", "1rem"],
		fontWeight: "bold",
		color: "text",
		my: "1rem",
	},
	aboutText: {
		fontSize: ["1rem", "0.875rem"],
		color: "text",
		maxWidth: "80ch",
	},
	description: {
		ml: "1em",
		fontSize: ["1rem", "0.875rem"],
		overflow: "hidden",
		textOverflow: "ellipsis",
		maxWidth: ["28ch", "42ch"],
		whiteSpace: "nowrap",
		color: "text",
	},
	a: {
		color: "text",
		cursor: "pointer",
		textDecoration: "none",
		// Hover animation
		"&:hover": {
			textDecoration: "underline",
		},
	},
	addressWrapper: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		mt: "0.5rem",
	},
};
