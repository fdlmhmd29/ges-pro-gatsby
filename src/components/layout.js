/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { BottomBar } from ".";
export default function Layout({ children }) {
	return (
		<React.Fragment>
			<Header />
			<main variant="layout.main">{children}</main>
			<Footer />
			<BottomBar />
		</React.Fragment>
	);
}
