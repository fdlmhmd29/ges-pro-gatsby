/** @jsx jsx */
import { jsx, Link as A } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import { Link as MenuLink } from "react-scroll";
import { HiOutlineChevronRight } from "react-icons/hi";

export function NavLink({ path, label, children, ...rest }) {
	return (
		<MenuLink
			to={path}
			spy={true}
			offset={-70}
			smooth={true}
			duration={500}
			className="nav-item"
			activeClass="active"
			{...rest}
		>
			{label}
		</MenuLink>
	);
}

export function Link({ path, label, children, ...rest }) {
	return (
		<A as={GatsbyLink} to={path} {...rest}>
			{children ? children : label}
		</A>
	);
}

export function LearnMore({ path, label, children, ...rest }) {
	return (
		<A href={path} sx={styles.learnMore} {...rest}>
			{label ?? "Pelajari Selengkapnya"} <HiOutlineChevronRight />
		</A>
	);
}

const styles = {
	learnMore: {
		color: "link",
		textDecoration: "none",
		cursor: "pointer",
		fontWeight: 500,
		display: "inline-flex",
		alignItems: "center",
		svg: {
			transition: "margin-left 0.3s ease-in-out 0s",
			ml: "3px",
		},
		":hover": {
			svg: {
				ml: "8px",
			},
		},
	},
};
