import * as React from "react";

import {
	Layout,
	Seo,
	Clients,
	Banner,
	Features,
	Services,
	TeamSection,
	BlogSection,
	Profile,
	Sertificate,
	CallToAction,
} from "../components";

import "react-multi-carousel/lib/styles.css";

const IndexPage = () => (
	<Layout>
		<Seo title="Beranda" />
		<Banner />
		<Features />
		<Services />
		<Profile />
		<TeamSection />
		<Sertificate />
		<Clients />
		<CallToAction />
		<BlogSection />
	</Layout>
);

export default IndexPage;
