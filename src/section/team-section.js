/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";

import SectionHeading from "../components/section-header";
import TeamCard from "../components/cards/team-card";

function TeamSection() {
	const { teams } = useStaticQuery(graphql`
		{
			teams: allGraphCmsTeam {
				nodes {
					fullName
					id
					designation
					photo {
						url
					}
				}
			}
		}
	`);

	return (
		<section sx={styles.section}>
			<Container>
				<SectionHeading
					slogan="Team Kami"
					title="Individu yang paling berkualitas dan berbakat"
				/>

				<Grid sx={styles.grid}>
					{teams.nodes.map(team => (
						<TeamCard
							key={team.id}
							src={team.photo.url}
							altText={team.fullName}
							title={team.fullName}
							designation={team.designation}
						/>
					))}
				</Grid>
			</Container>
		</section>
	);
}

export default TeamSection;

const styles = {
	section: {
		py: ["4rem", 7, 7, 7, 7, 7, 0],
	},
	grid: {
		mt: [0, null, -6, null, -4],
		gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
		gridTemplateColumns: [
			"repeat(2,1fr)",
			null,
			"repeat(2,1fr)",
			null,
			"repeat(3,1fr)",
		],
	},
};
