/** @jsx jsx */
import { jsx, Box, Container, Grid } from "theme-ui";
import TrackVisibility from "react-on-screen";
import { graphql, useStaticQuery } from "gatsby";

// Components
import { SectionHeading, Service, StatItem } from "../components";

const data = {
    stats: [
        {
            id: 1,
            value: 254,
            suffix: "",
            title: "Successful Project",
        },
        {
            id: 2,
            value: 3783,
            suffix: "",
            title: "People Impacted",
        },
        {
            id: 3,
            value: 8,
            suffix: "M",
            title: "Money Donated",
        },
        {
            id: 4,
            value: 60,
            suffix: "+",
            title: "Volunteer Involved",
        },
    ],
};

function Services() {
    const { services } = useStaticQuery(graphql`
        {
            services: allGraphCmsServicePost {
                nodes {
                    id
                    icon {
                        url
                    }
                    shortTitle
                    excerpt
                    slug
                }
            }
        }
    `);

    return (
        <Box as="section" id="services" sx={styles.section}>
            <Container>
                <SectionHeading
                    title="Jasa layanan kami"
                    description="Mencakup berbagaimacam kebutuhan"
                />
                <Grid sx={styles.serviceGrid}>
                    {services.nodes.map(service => (
                        <Service key={service.id} service={service} />
                    ))}
                </Grid>
                <Grid sx={styles.statsGrid}>
                    {data.stats.map(stat => (
                        <TrackVisibility key={stat.id} once>
                            <StatItem stat={stat} />
                        </TrackVisibility>
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
        pt: [6, null, null, 8, 10, null, 6],
        pb: [6, null, null, null, 10, null, 6],
    },
    serviceGrid: {
        backgroundColor: "white",
        boxShadow: "0px 0px 25px rgba(54, 91, 125, 0.04)",
        borderRadius: 10,
        gap: [8, null, null, "60px 40px", "50px 30px", "60px 40px"],
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
