import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Avatar, Box, Heading, Image, Paragraph, Flex, Button } from "theme-ui";

import { rgb } from "polished";
import moment from "moment";
import { BsDownload } from "react-icons/bs";
import LayoutBlog from "../components/layout-blog";
import { Seo } from "../components";

function BlogPostTemplate({ pageContext: { page } }) {
	return (
		<LayoutBlog>
			<Seo title={page.title} description={page.description} />
			<Box id="blog-wrapper" sx={styles.sectionWrapper}>
				<Flex sx={styles.sectionInfo}>
					<Box>
						<time dateTime={page.createdAt}>
							{moment(page.createdAt).format("D MMMM, YYYY")}
						</time>
					</Box>
				</Flex>
				<Heading id="blog-heading" sx={styles.header}>
					<Heading as={"h1"} sx={styles.title}>
						{page.title}
					</Heading>
					<Flex sx={styles.authorWrapper}>
						<Avatar
							sx={styles.authorAvatar}
							src={page.author.photo.url}
							alt={page.author.fullName}
						/>
						<Flex sx={styles.authorDetails}>
							<Paragraph sx={styles.authorName}>
								{page.author.fullName}
							</Paragraph>
							<Paragraph sx={styles.authorDesignation}>
								{page.author.designation}
							</Paragraph>
						</Flex>
					</Flex>
				</Heading>
				<Box as={"div"}>
					<Box sx={styles.contentWrapper}>
						<Image sx={styles.contentImage} src={page.image.url} />
						<Paragraph id="content" sx={styles.content}>
							<MDXRenderer>
								{page.content.markdownNode.childMdx.body}
							</MDXRenderer>
						</Paragraph>
						<Flex sx={styles.downloadButton}>
							<a href={page.attachments.url}>
								<Button>
									<BsDownload size={20} />
								</Button>
							</a>
						</Flex>
					</Box>
				</Box>
			</Box>
		</LayoutBlog>
	);
}

const styles = {
	sectionWrapper: {
		overflow: "hidden",
		pt: "5rem",

		maxWidth: ["100%", null, null, null, "970px", "1140px", "1260px"],
		paddingLeft: [20, 30],
		paddingRight: [20, 30],
		m: "0 auto",
	},
	sectionInfo: {
		justifyContent: "start",
		fontSize: [1, 1, 1, 1, 2],
		lineHeight: "1.5rem",
		flexDirection: "row",
		gap: "1rem",
		alignItems: "center",
	},
	title: {
		fontSize: ["1.3em", "2em"],
		lineHeight: ["2.5rem", "3.3rem"],
		letterSpacing: "-0.025rem",
		fontWeight: 800,
		my: [4, 7, 7, 7, 5],
		color: rgb(17, 24, 39),
	},
	authorWrapper: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		mb: [4, 7, 7, 7, 5],
	},
	authorAvatar: {
		width: [30, 40, 40, 40, 42],
		height: [30, 40, 40, 40, 42],
		mr: [3, 4, 4, 4, 4],
	},
	authorDetails: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		flex: 1,
	},
	authorName: {
		fontSize: [1, 1, 1, 1, 2],
		// fontWeight: 700,
		color: rgb(17, 24, 39),
	},
	authorDesignation: {
		fontSize: 1,
		color: rgb(17, 24, 39),
	},
	contentWrapper: {
		mb: [4, 7, 7, 7, 5],
	},
	contentImage: {
		// Responsive image
		width: "100%",
		height: "auto",
		maxWidth: ["100%", "100%", "100%", "100%", "100%", "100%", "50%"],
		maxHeight: ["100%", "100%", "100%", "100%", "100%", "100%", "50%"],
		objectFit: "cover",
		objectPosition: "center",

		display: "block",
	},
	content: {
		lineHeight: ["2rem", "2.3rem"],
		textAlign: "left",
		textJustify: "none",
		maxWidth: ["100%", "100%", "100%", "100%", "100%", "100%", "50%"],
	},
	downloadButton: {
		justifyContent: "flex-start",
	},
};

export default BlogPostTemplate;
