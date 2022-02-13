import { useState } from "react";
/** @jsx jsx */
import {
    jsx,
    Container,
    Box,
    Grid,
    Text,
    Heading,
    Button,
    Image,
} from "theme-ui";
import { keyframes } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import ModalVideo from "react-modal-video";
// import { useStaticQuery, graphql } from "gatsby";
import { IoIosPlay } from "react-icons/io";

import TextFeature from "../components/text-feature";

import Smart from "../images/sections/profile/smart.svg";
import Secure from "../images/sections/profile/secure.svg";

const data = {
    subTitle: "Profil Perusahaan",
    title: "PT. Greenfield Environment Solution",
    features: [
        {
            id: 1,
            imgSrc: Smart,
            altText: "Visi",
            title: "Visi",
            text: "Menawarkan jasa konsultansi lingkungan kepada perusahaan yang membutuhkan jasa penyusunan berbagai jenis dokumen lingkungan yang berkualitas, implementatif dan adaptif dengan regulasi.",
        },
        {
            id: 2,
            imgSrc: Secure,
            altText: "Misi",
            title: "Misi",
            text: "Menjadi perusahaan jasa konsultansi lingkungan yang terpercaya, berintegritas tinggi, berorientasi kepada kepuasan dan kebutuhan klien dalam mewujudkan  pembangunan berwawasan lingkungan.",
        },
    ],
};

export default function Profile() {
    // modal popup video handler
    const [videoOpen, setVideoOpen] = useState(false);
    const handleClick = e => {
        e.preventDefault();
        setVideoOpen(true);
    };
    return (
        <section sx={styles.profile}>
            <Container sx={styles.containerBox}>
                <Box sx={styles.thumbnail}>
                    <StaticImage
                        src="../images/sections/profile/service-thumb.png"
                        alt="Visi dan Misi PT. Greenfield Environment Solution"
                    />
                    <Button
                        sx={styles.videoBtn}
                        onClick={handleClick}
                        aria-label="Play Button"
                    >
                        <span>
                            <IoIosPlay />
                        </span>
                    </Button>
                </Box>
                <Box sx={styles.contentBox}>
                    <TextFeature subTitle={data.subTitle} title={data.title} />

                    <Grid sx={styles.grid}>
                        {data.features.map(item => (
                            <Box sx={styles.card} key={item.id}>
                                <Image
                                    src={item.imgSrc}
                                    alt={item.altText}
                                    sx={styles.icon}
                                />

                                <Box sx={styles.wrapper}>
                                    <Heading sx={styles.wrapper.title}>
                                        {item.title}
                                    </Heading>
                                    <Text sx={styles.wrapper.subTitle}>
                                        {item.text}
                                    </Text>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Container>
            <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="5K-jSaZmlGI"
                onClose={() => setVideoOpen(false)}
            />
        </section>
    );
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
    profile: {
        pt: [7, 7, 7, 7, 8],
        pb: [7, 7, 7, 7, 0],
    },
    coreFeature: {
        py: [0, null, null, 2, null, 7],
        position: "relative",
    },
    containerBox: {
        display: "flex",
        alignItems: ["flex-start", null, null, "center"],
        justifyContent: ["flex-start", null, null, "space-between"],
        flexDirection: ["column", null, null, "row"],
        pb: [0, null, null, null, null, 7],
    },
    thumbnail: {
        mr: ["auto", null, null, 6, 60, 85],
        order: [2, null, null, 0],
        ml: ["auto", null, null, 0],
        display: "inline-flex",
        position: "relative",
        width: ["100%", null, 620, 375, 510, 605, null, 620],
        "> img": {
            position: "relative",
            zIndex: 1,
            height: [310, "auto"],
        },
    },
    shapeBox: {
        position: "absolute",
        bottom: -68,
        left: -160,
        zIndex: -1,
        display: ["none", null, null, null, null, "inline-block"],
    },
    videoBtn: {
        zIndex: 2,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: ["60px", null, "80px", null, "100px"],
        height: ["60px", null, "80px", null, "100px"],
        p: "0px !important",
        backgroundColor: "transparent",
        "&::before": {
            position: "absolute",
            content: '""',
            left: "50%",
            top: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            display: "block",
            width: ["60px", null, "80px", null, "100px"],
            height: ["60px", null, "80px", null, "100px"],
            backgroundColor: "transparent",
            borderRadius: "50%",
            animation: `${playPluse} 1.5s ease-out infinite`,
            opacity: 0.5,
        },
        "> span": {
            backgroundColor: "rgba(255,255,255,0.5)",
            width: "inherit",
            height: "inherit",
            textAlign: "center",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "all 0.5s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
        },
        svg: {
            fontSize: [40, null, 48, null, 62],
        },
    },
    contentBox: {
        width: ["100%", null, null, 315, 390, 450, null, 500],
        flexShrink: 0,
        mb: [7, null, 60, 0],
        textAlign: ["center", null, null, "left"],
    },
    grid: {
        pr: [2, 0, null, null, 6, "70px"],
        pl: [2, 0],
        pt: [2, null, null, null, 3],
        mx: "auto",
        width: ["100%", 370, 420, "100%"],
        gridGap: ["35px 0", null, null, null, "50px 0"],
        gridTemplateColumns: ["repeat(1,1fr)"],
    },
    card: {
        display: "flex",
        alignItems: "flex-start",
        transition: "all 0.3s",
    },

    icon: {
        width: ["45px", null, null, null, "55px"],
        height: "auto",
        flexShrink: 0,
        mr: [3, null, null, null, 4],
    },
    wrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        mt: "-5px",
        title: {
            fontSize: 3,
            color: "heading_secondary",
            lineHeight: 1.4,
            fontWeight: 700,
            mb: [2, null, 3, 2, 3],
        },

        subTitle: {
            fontSize: [1, null, null, "14px", 1],
            fontWeight: 400,
            lineHeight: 1.9,
        },
    },
    videoWrapper: {
        maxWidth: "100%",
        position: "relative",
        width: "900px",
        "&:before": {
            content: '""',
            display: "block",
            paddingTop: "56.25%",
        },
        iframe: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
        },
    },
};