import React from "react";
import { Box, Container, Flex, Heading, Text, Image } from "theme-ui";

// Images
import image1 from "../images/sections/features/features-1.svg";
import image2 from "../images/sections/features/features-2.svg";
import image3 from "../images/sections/features/features-3.svg";

const FEATURES_DATA = {
    title: "Go beyond ultimate features",
    text: "Ideal solutions for you",
    posts: [
        {
            image: image3,
            title: "For Individuals",
            text: "Get your info tests delivered at home collect a sample from the your pogress tests.",
        },
        {
            image: image2,
            title: "For Small Team",
            text: "Get your info tests delivered at home collect a sample from the your pogress tests.",
        },
        {
            image: image1,
            title: "For Organization",
            text: "Get your info tests delivered at home collect a sample from the your pogress tests.",
        },
    ],
};
const Features = () => {
    const { title, text, posts } = FEATURES_DATA;
    return (
        <Box as="section" id="features" sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.sectionTitle}>
                    <Text as="p">{text}</Text>
                    <Heading as="h2">{title}</Heading>
                </Box>
                <Flex sx={styles.flex}>
                    {posts.map(({ image, title, text }, index) => (
                        <Box sx={styles.post} key={`feature-post-key-${index}`}>
                            <Box className="image">
                                <Image
                                    width="70"
                                    height="70"
                                    src={image}
                                    alt={title}
                                />
                            </Box>
                            <Box sx={styles.postContent}>
                                <Heading as="h3">{title}</Heading>
                                <Text as="p">{text}</Text>
                            </Box>
                        </Box>
                    ))}
                </Flex>
            </Container>
        </Box>
    );
};

export default Features;

const styles = {
    section: {
        overflow: "hidden",
        pt: ["70px", null, null, "100px"],
        pb: ["40px", null, null, "70px"],
    },
    container: {},
    flex: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
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
        flexDirection: ["column", null, null, null, "row"],
        justifyContent: ["center", null, "flex-start"],
        textAlign: ["center", null, null, "left"],
        ">.image": {
            flexShrink: 0,
            width: "70px",
            height: "70px",
            mx: ["auto", null, null, "0"],
        },
    },
    postContent: {
        ml: ["0", null, null, null, "30px"],
        mt: ["20px", null, null, null, "0"],
        h3: {
            fontSize: "18px",
            fontWeight: 700,
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
