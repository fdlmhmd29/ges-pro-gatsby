import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Banner from "../section/banner";
import Features from "../section/features";
import Services from "../section/services";
import Profile from "../section/profile";

import "react-multi-carousel/lib/styles.css";
import "react-modal-video/css/modal-video.min.css";
import TeamSection from "../section/team-section";
import BlogSection from "../section/blog-section";

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Banner />
        <Features />
        <Services />
        <Profile />
        <TeamSection />
        <BlogSection />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
        />
        <p>
            <Link to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
            <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
            <Link to="/using-dsg">Go to "Using DSG"</Link>
        </p>
    </Layout>
);

export default IndexPage;
