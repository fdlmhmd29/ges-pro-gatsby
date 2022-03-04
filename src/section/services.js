/** @jsx jsx */
import { jsx, Box, Container, Grid } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";

// Components
import { SectionHeading, Service } from "../components";

function Services() {
	const { services } = useStaticQuery(graphql`
		{
			services: allGraphCmsService(sort: { fields: title, order: ASC }) {
				nodes {
					id
					description
					title
					icon {
						url
					}
				}
			}
		}
	`);

	return (
		<Box as="section" id="services" sx={styles.section}>
			<Container>
				<SectionHeading
					slogan="Jasa layanan kami"
					title="Mencakup berbagai macam kebutuhan penyusunan dokumen lingkungan"
				/>
				<Grid sx={styles.serviceGrid}>
					{services.nodes.map(service => (
						<Service key={service.id} service={service} />
					))}
				</Grid>
			</Container>
		</Box>
	);
}

export default Services;

const styles = {
	section: {
		backgroundColor: "#e2ffda",
		py: [6, null, null, 8, "4rem", null, 6],
	},
	serviceGrid: {
		backgroundColor: "white",
		boxShadow: "0px 0px 25px rgba(54, 91, 125, 0.04)",
		borderRadius: 10,
		gap: ["3rem", null, null, "60px 40px", "50px 30px", "60px 40px"],
		justifyContent: "center",
		gridTemplateColumns: [
			"repeat(1, 250px)",
			null,
			null,
			"repeat(2, 260px)",
			"repeat(3, 258px)",
			"repeat(3, 300px)",
		],
		pt: [6, null, null, 7],
		pb: [6, null, null, 7],
	},
	statsGrid: {
		gap: [6, null, null, "60px 30px", "60px 80px", "60px 110px"],
		justifyContent: "center",
		pt: [5, null, null, 6],
		gridTemplateColumns: [
			"repeat(2, 120px)",
			null,
			null,
			"repeat(4, 130px)",
			"repeat(4, 150px)",
		],
		mt: [],
	},
};
