/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";

import SectionHeading from "../components/section-header";
import TeamCard from "../components/cards/team-card";

import Member1 from "../images/sections/team/member-1.png";
import Member2 from "../images/sections/team/member-2.png";
import Member3 from "../images/sections/team/member-3.png";
import Member4 from "../images/sections/team/member-4.png";
import Member5 from "../images/sections/team/member-5.png";
import Member6 from "../images/sections/team/member-6.png";

const data = [
    {
        id: 1,
        imgSrc: Member1,
        altText: "Saimon Harmer",
        title: "Saimon Harmer",
        designation: "CEO and Founder",
        socialProfile: [
            {
                id: 1,
                name: "facebook",
                path: "#",
                icon: <FaFacebookF />,
            },
            {
                id: 2,
                name: "twitter",
                path: "#",
                icon: <FaTwitter />,
            },
            {
                id: 3,
                name: "instagram",
                path: "#",
                icon: <FaInstagram />,
            },
        ],
    },
    {
        id: 2,
        imgSrc: Member2,
        altText: "Aaron Nunez",
        title: "Aaron Nunez",
        designation: "Founder",
        socialProfile: [
            {
                id: 1,
                name: "facebook",
                path: "#",
                icon: <FaFacebookF />,
            },
            {
                id: 2,
                name: "twitter",
                path: "#",
                icon: <FaTwitter />,
            },
            {
                id: 3,
                name: "instagram",
                path: "#",
                icon: <FaInstagram />,
            },
        ],
    },
    {
        id: 3,
        imgSrc: Member3,
        altText: "Aaron Nunez",
        title: "Aaron Nunez",
        designation: "Web Designer",
        socialProfile: [
            {
                id: 1,
                name: "facebook",
                path: "#",
                icon: <FaFacebookF />,
            },
            {
                id: 2,
                name: "twitter",
                path: "#",
                icon: <FaTwitter />,
            },
            {
                id: 3,
                name: "instagram",
                path: "#",
                icon: <FaInstagram />,
            },
        ],
    },
    {
        id: 4,
        imgSrc: Member4,
        altText: "Lina Jutila",
        title: "Lina Jutila",
        designation: "Web Developer",
        socialProfile: [
            {
                id: 1,
                name: "facebook",
                path: "#",
                icon: <FaFacebookF />,
            },
            {
                id: 2,
                name: "twitter",
                path: "#",
                icon: <FaTwitter />,
            },
            {
                id: 3,
                name: "instagram",
                path: "#",
                icon: <FaInstagram />,
            },
        ],
    },
    {
        id: 5,
        imgSrc: Member5,
        altText: "Saimon Harmer",
        title: "Saimon Harmer",
        designation: "CEO and Founder",
        socialProfile: [
            {
                id: 1,
                name: "facebook",
                path: "#",
                icon: <FaFacebookF />,
            },
            {
                id: 2,
                name: "twitter",
                path: "#",
                icon: <FaTwitter />,
            },
            {
                id: 3,
                name: "instagram",
                path: "#",
                icon: <FaInstagram />,
            },
        ],
    },
    {
        id: 6,
        imgSrc: Member6,
        altText: "Aaron Nunez",
        title: "Aaron Nunez",
        designation: "Web Designer",
        socialProfile: [
            {
                id: 1,
                name: "facebook",
                path: "#",
                icon: <FaFacebookF />,
            },
            {
                id: 2,
                name: "twitter",
                path: "#",
                icon: <FaTwitter />,
            },
            {
                id: 3,
                name: "instagram",
                path: "#",
                icon: <FaInstagram />,
            },
        ],
    },
];

function TeamSection() {
    const { teams } = useStaticQuery(graphql`
        {
            teams: allGraphCmsTeam {
                nodes {
                    id
                    fullName
                    designation
                }
            }
        }
    `);

    return (
        <section>
            <Container>
                <SectionHeading
                    title="Team Kami"
                    description="Individu yang paling berkualitas dan berbakat"
                />

                <Grid sx={styles.grid}>
                    {teams.nodes.map(team => (
                        <TeamCard
                            key={team.id}
                            src={team.imgSrc}
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
