/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, Box, Heading, Text, Image } from "theme-ui";

const SectionHeading = ({ title, slogan, description, emoji, ...props }) => {
  return (
    <Box sx={styles.heading} {...props}>
      {slogan && (
        <Text as="p" sx={styles.slogan}>
          {slogan}
        </Text>
      )}
      <Heading as="h3" sx={styles.title}>
        {emoji ? <span>{title}</span> : title}
        {emoji && <Image src={emoji} alt="emoji" />}
      </Heading>
      <Text as="p" sx={styles.description}>
        {description}
      </Text>
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    textAlign: "center",
    maxWidth: 580,
    margin: "0 auto 60px",
  },
  slogan: {
    color: "primary",
    fontWeight: "bold",
    fontSize: 2,
    lineHeight: 2.5,
  },
  title: {
    color: "heading",
    fontWeight: "bold",
    fontSize: ["24px", "30px"],
    lineHeight: [1.25, 1.5],
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
    lineHeight: [1.85, 2.2],
    mt: "10px",
  },
};
