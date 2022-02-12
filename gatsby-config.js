require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `PT Greenfield Environment Solution Company Profile and Blog`,
        description: `Situs Profil Perusahaan PT Greenfield Environment Solution Company yang bergerak di bidang pengembangan dan pengelolaan lingkungan.`,
        author: `@fdlmhmd29`,
        siteUrl: `https://ges-consultant.co.id`,
    },
    plugins: [
        "gatsby-plugin-theme-ui",
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: process.env.GA_TRACK_ID,
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "https://ges-consultant.co.id",
            },
        },
        {
            resolve: "gatsby-source-graphcms",
            options: {
                endpoint: process.env.GRAPHCMS_ENDPOINT,
                token: process.env.GRAPHCMS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`IBM Plex Sans\:400,400i,700,700i`],
                display: "swap",
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://ges-consultant.co.id",
                sitemap: "https://ges-consultant.co.id/sitemap.xml",
                policy: [{ userAgent: "*", allow: "/" }],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ges-cp-project`,
                short_name: `profile`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/ges-favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
