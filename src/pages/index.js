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
  </Layout>
);

export default IndexPage;
