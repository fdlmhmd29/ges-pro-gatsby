import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Banner from "../section/banner";
import Features from "../section/features";
import Services from "../section/services";
import Profile from "../section/profile";
import TeamSection from "../section/team-section";
import BlogSection from "../section/blog-section";
import Clients from "../section/clients";

import "react-multi-carousel/lib/styles.css";

const IndexPage = () => (
  <Layout>
    <Seo title="Beranda" />
    <Banner />
    <Clients />
    <Features />
    <Services />
    <Profile />
    <TeamSection />
    <BlogSection />
  </Layout>
);

export default IndexPage;
