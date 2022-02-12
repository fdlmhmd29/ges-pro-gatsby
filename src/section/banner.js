/** @jsx jsx */
import {
    jsx,
    Box,
    Container,
    Heading,
    Text,
    Button,
    Image as Img,
} from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

// Images
import { kai, bridgestone, gagnikel } from "../images";

function Banner() {
    const { teams } = useStaticQuery(graphql`
        {
            teams: allGraphCmsTeam {
                nodes {
                    id
                    fullName
                }
            }
        }
    `);

    return (
        <Box id="home" as="section" variant="section.banner">
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.content}>
                        {teams.nodes.map(team => (
                            <Heading sx={styles.title} key={team.id}>
                                {team.fullName}
                            </Heading>
                        ))}
                        <Text as="p" sx={styles.text}>
                            Memberikan pelayanan profesional terbaik dengan
                            metode yang tepat, efisien dan efektif dari berbagai
                            aspek adalah pondasi utama perusahaan.
                        </Text>
                        <Button variant="primary" sx={styles.button}>
                            Hubungi Kami
                        </Button>
                        <Box sx={styles.clients}>
                            <Img src={kai} alt="PT. Kereta Api Indonesia" />
                            <Img
                                src={bridgestone}
                                alt="PT. Bridgestone Tire Indonesia"
                            />
                            <Img src={gagnikel} alt="PT. GAG Nikel" />
                        </Box>
                    </Box>
                    <Box as="figure" sx={styles.illustration}>
                        <StaticImage
                            src="../images/sections/banner/banner.png"
                            alt="banner"
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Banner;

const styles = {
    contentWrapper: {
        display: [null, null, null, "grid"],
        gridTemplateColumns: [
            null,
            null,
            null,
            "0.9fr 1.1fr",
            "repeat(2, 1fr)",
        ],
        alignItems: "center",
        justifyContent: "center",
        minHeight: [null, null, null, null, null, "100vh"],
        pt: [100, null, null, 120, 130, 120, 0],
    },
    content: {
        maxWidth: [507, 507, 507, 324, 450],
    },
    title: {
        fontWeight: "bold",
        fontSize: ["30px", null, null, null, "42px", "40px", "60px"],
        lineHeight: 1.33,
        letterSpacing: "-1px",
        color: "textSecondary",
    },
    text: {
        fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
        lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
        color: "textSecondary",
        mt: ["14px", "19px"],
    },
    button: {
        display: ["none", "flex"],
        mt: [45, 45, 45, 25, 25],
    },
    clients: {
        display: "flex",
        alignItems: "center",
        mt: ["20px", "45px", "45px", "30px", "45px"],
        img: {
            maxWidth: ["80px", "100%", "100%", "100%"],
            "+ img": {
                ml: ["14px", "28px", "28px", "20px"],
            },
        },
    },
    illustration: {
        mt: ["30px", "30px", 0],
        mb: ["60px", "60px", 0],
        img: {
            maxWidth: [null, null, null, null, "90%", "90%", "100%"],
        },
    },
};
