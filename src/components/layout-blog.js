import React from "react";
import Footer from "./footer/footer-blog";
import Header from "../components/header/header-blog";
import { BottomBar } from ".";

function Layout({ children }) {
	return (
		<React.Fragment>
			<Header />
			<main className="flex-grow mb-8">{children}</main>
			<Footer />
			<BottomBar />
		</React.Fragment>
	);
}

export default Layout;
