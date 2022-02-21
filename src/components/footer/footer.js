/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import { Link } from "../link";
import FooterLogo from "../../images/logo.png";

const menuItem = {
  href: "google.com",
  label:
    "Gedung Hastacentra Lantai 2, Jl. Raya Tanjung Barat No. 07, Pasar Minggu, Jakarta 12510",
};

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Box sx={styles.footer.logo}>
            <Link path="/">
              <Image src={FooterLogo} alt="Logo" />
            </Link>
          </Box>
          <Box sx={styles.footer.menus}>
            <nav>
              <Link
                path={menuItem.path}
                label={menuItem.label}
                sx={styles.footer.link}
              />
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} PT. Greenfield Environment
            Solution
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      display: "flex",
      pt: [7, null, 7],
      pb: ["40px", null, 7],
      textAlign: "center",
      flexDirection: "column",
    },
    logo: {
      mx: "auto",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
};
