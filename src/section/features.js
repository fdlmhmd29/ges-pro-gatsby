import React from "react";
import { Box, Container, Flex, Heading, Image } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import SectionHeading from "../components/section-header";

function Features() {
	const { features } = useStaticQuery(graphql`
		{
			features: allGraphCmsFeature {
				nodes {
					id
					title
					icon {
						url
					}
				}
			}
		}
	`);

	return (
		<Box as="section" id="features" sx={styles.section}>
			<Container sx={styles.container}>
				<SectionHeading
					title={"Melayani jasa penyusunan dokumen lingkungan"}
					slogan={"Diberbagai sektor kegiatan"}
				/>
				<Flex sx={styles.flex}>
					{features.nodes.map(feature => (
						<Box sx={styles.post} key={feature.id}>
							<Box className="image">
								<Image
									width="70"
									height="70"
									src={feature.icon.url}
									alt={feature.title}
								/>
							</Box>
							<Box sx={styles.postContent}>
								<Heading as="h3">{feature.title}</Heading>
							</Box>
						</Box>
					))}
				</Flex>
			</Container>
		</Box>
	);
}

export default Features;

const styles = {
	heading: {
		textAlign: "center",
		maxWidth: 580,
		margin: "0 auto 60px",
	},
	title: {
		color: "heading",
		fontWeight: 500,
		fontSize: ["24px", "30px"],
		lineHeight: [1.25, 2],
		letterSpacing: "heading",
		img: {
			ml: ["15px"],
			position: "relative",
			top: "8px",
			maxWidth: [25, null, null, "100%"],
		},
	},
	description: {
		color: "heading",
		fontSize: ["14px", "16px"],
		lineHeight: [1.85, 2],
		mt: "10px",
	},
	section: {
		overflow: "hidden",
		backgroundColor: "white",
		pt: [6, null, null, 8, 10, null, 6],
		pb: [6, null, null, null, 10, null, 6],
	},
	container: {},
	flex: {
		display: "flex",
		flexWrap: "wrap",

		justifyContent: "center",
	},
	sectionTitle: {
		textAlign: "center",
		mb: ["40px", null, null, "70px"],
		h2: {
			color: "#0F2137",
			fontWeight: 500,
			fontSize: ["22px", null, null, "24px"],
			lineHeight: 1,
			letterSpacing: "-0.5px",
			mt: "15px",
		},
		p: {
			color: "secondary",
			fontSize: "16px",
			lineHeight: 1.87,
		},
	},
	post: {
		mb: "30px",
		mx: ["0", null, null, null, null, "15px"],
		display: "flex",
		flex: ["0 0 100%", null, null, "0 0 calc(33.333% - 30px)"],
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		">.image": {
			flexShrink: 0,
			width: "70px",
			height: "70px",
			mx: ["auto", null, null, "0"],
		},
	},
	postContent: {
		mt: ["1rem", "2rem"],
		h3: {
			fontSize: "18px",
			fontWeight: 500,
			lineHeight: 1,
			color: "#0F2137",
			mb: "15px",
		},
		p: {
			color: "#343D48",
			lineHeight: 1.87,
			fontSize: ["14px", null, null, "16px"],
			maxWidth: ["100%", "300px", null, "100%"],
			mx: [null, "auto", null],
		},
	},
};
