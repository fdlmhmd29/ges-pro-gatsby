/** @jsx jsx */
import { jsx, Box, Container, MenuButton, Flex, Button } from "theme-ui";
import { Fragment, useState } from "react";
import { GrClose } from "react-icons/gr";
import Sticky from "react-stickynode";
import { keyframes } from "@emotion/react";

// Components
import Logo from "../logo";
import { Topbar } from "../index";
import { NavLink } from "../link";
import menuItems from "./header.data";

export default function Header() {
	const [mobileMenu, setMobileMenu] = useState(false);

	const openMobileMenu = () => {
		setMobileMenu(true);
	};

	const closeMobileMenu = () => {
		setMobileMenu(false);
	};

	return (
		<Fragment>
			<Topbar />
			<Box as={"div"} sx={styles.headerWrapper}>
				<Sticky
					id="sticky-header"
					enabled={true}
					top={0}
					activeClass="is-sticky"
					innerZ={100}
				>
					<Box
						id="header"
						as="header"
						variant="layout.header"
						className={mobileMenu ? "is-mobile-menu" : ""}
					>
						<Container id="header-container">
							<Box sx={styles.headerInner}>
								<Logo isWhite={mobileMenu} />

								<Flex
									as="nav"
									sx={styles.navbar}
									className={
										mobileMenu ? "navbar active" : "navbar"
									}
								>
									<Box
										as="ul"
										sx={styles.navList}
										className={mobileMenu ? "active" : ""}
									>
										{menuItems.map(({ path, label }, i) => (
											<li key={i}>
												<NavLink
													path={path}
													label={label}
													onClick={closeMobileMenu}
												/>
											</li>
										))}
									</Box>
									<Button
										variant="primaryMd"
										sx={styles.explore}
									>
										Hubungi Kami
									</Button>
								</Flex>

								{mobileMenu ? (
									<Button
										variant="text"
										sx={styles.closeButton}
									>
										<GrClose
											onClick={closeMobileMenu}
											color="white"
											size="20px"
										/>
									</Button>
								) : (
									<MenuButton
										aria-label="Toggle Menu"
										onClick={openMobileMenu}
									/>
								)}
							</Box>
						</Container>
					</Box>
				</Sticky>
			</Box>
		</Fragment>
	);
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
	headerWrapper: {
		fontWeight: "body",
		py: 4,
		width: "100%",
		position: "absolute",
		backgroundColor: "transparent",
		transition: "all 0.1s ease-in-out 0s",
		animation: `${positionAnim} 0.4s ease-in`,
		".is-sticky": {
			header: {
				"::before": {
					boxShadow: "0 6px 13px rgba(38, 78, 118, 0.1)",

					height: "100%",
				},
			},
		},
	},
	headerInner: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		"@media only screen and (max-width: 768px)": {
			".navbar": {
				position: "absolute",
				top: "100%",
				backgroundColor: "text",
				width: "100%",
				left: 0,
				p: "20px 30px",
				display: "block",
				boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
				opacity: 0,
				visibility: "hidden",
				minHeight: "calc(100vh - 77px)",
				transition: "all 0.3s ease-in-out 0s",
				"&.active": {
					opacity: 1,
					visibility: "visible",
				},
				ul: {
					display: "block",
					"li + li": {
						marginTop: 5,
					},
					a: {
						color: "white",
					},
				},
			},
		},
	},
	navbar: {
		alignItems: "center",
		flexGrow: 1,
		justifyContent: "center",
	},
	navList: {
		display: ["flex"],
		listStyle: "none",
		marginLeft: "auto",
		p: 0,
		".nav-item": {
			cursor: "pointer",
			fontWeight: 400,
			padding: 0,
			margin: "0 20px",

			"&:hover": {
				textDecoration: "underline",
			},
		},
		".active": {
			color: "primary",
		},
	},
	explore: {
		display: ["block", "block", "block", "block", "none"],
		position: "absolute",
		bottom: 40,
		left: "50%",
		transform: "translateX(-50%)",
	},
	closeButton: {
		height: "32px",
		padding: "4px",
		minHeight: "auto",
		width: "32px",
		ml: "3px",
		path: {
			stroke: "#fff",
		},
	},
};
