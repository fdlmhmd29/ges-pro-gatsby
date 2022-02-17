import React from "react";
import Footer from "./footer/footer-blog";
import Header from "../components/header/header-blog";
import SEO from "./seo";

function Layout({ children }) {
  return (
    <React.Fragment>
      <SEO />
      <div className="flex flex-col min-h-screen">
        <div className="max-w-3xl mx-auto lg:max-w-5xl w-full">
          <Header />
        </div>
        <div className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl w-full">
          <main className="flex-grow mb-8">{children}</main>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
