import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Avatar,
  Box,
  Heading,
  Image,
  Paragraph,
  Flex,
  Button,
  Link,
} from "theme-ui";

import { rgb } from "polished";
import moment from "moment";
import { BsDownload } from "react-icons/bs";
import LayoutBlog from "../components/layout-blog";
import { Seo } from "../components";

function BlogPostTemplate({ pageContext: { nextPost, page, previousPost } }) {
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
        <div>
          <Box sx={styles.contentWrapper}>
            <Image sx={styles.contentImage} src={page.image.url} />
            <Box sx={styles.contentImageDescription}>
              <dt>
                Keterangan gambar: <dd>{page.description ?? null}</dd>
              </dt>
            </Box>
            <Paragraph sx={styles.content}>
              <MDXRenderer>
                {page.content.markdownNode.childMdx.body}
              </MDXRenderer>
            </Paragraph>
            <Flex sx={styles.downloadButton}>
              <a href={page.attachments.url}>
                <Button className="rounded-full">
                  <BsDownload size={20} />
                </Button>
              </a>
            </Flex>
          </Box>
          <Box
            sx={styles.footer}
            className="text-sm font-medium leading-5 divide-y divide-gray-200 lg:col-start-1 lg:row-start-2"
          >
            {(nextPost || previousPost) && (
              <div className="space-y-8 py-8">
                {nextPost && (
                  <div>
                    <h2 className="text-xs tracking-wide uppercase text-gray-500">
                      Selanjutnya
                    </h2>
                    <div className="text-purple-500 hover:text-purple-600">
                      <Link href={`/posts/${nextPost.slug}`}>
                        {nextPost.title}
                      </Link>
                    </div>
                  </div>
                )}
                {previousPost && (
                  <div>
                    <h2 className="text-xs tracking-wide uppercase text-gray-500">
                      Sebelumnya
                    </h2>
                    <div className="text-purple-500 hover:text-purple-600">
                      <Link href={`/posts/${previousPost.slug}`}>
                        {previousPost.title}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="pt-8">
              <Link href="/" className="text-purple-500 hover:text-purple-600">
                &larr; Kembali ke halaman utama
              </Link>
            </div>
          </Box>
        </div>
      </Box>
    </LayoutBlog>
  );
}

const styles = {
  sectionWrapper: {
    overflow: "hidden",
    pt: "5rem",
    mx: ["0.6rem", "8rem"],
  },
  sectionInfo: {
    justifyContent: "start",
    fontSize: [1, 1, 1, 1, 2],
    lineHeight: "1.5rem",
    fontWeight: "bold",
    flexDirection: "row",
    gap: "1rem",
    alignItems: "center",
  },
  header: {},
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
    fontWeight: 700,
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
    width: "100%",
    height: "auto",
    mb: [4],
    borderRadius: "0.5rem",
  },
  contentImageDescription: {
    borderRadius: "0.5rem",
    p: [2, 3, 3, 3, 4],
    fontSize: ["0.7rem", "0.8rem"],
    backgroundColor: "#fafafa",
    fontWeight: 200,
    color: rgb(97, 97, 97),
    mb: [4],
  },
  content: {
    fontSize: ["1.1rem", "1.2rem"],
    lineHeight: ["2rem", "2.3rem"],
    textAlign: "left",
    textJustify: "none",
    my: 2,
  },
  downloadButton: {
    justifyContent: "flex-start",
  },
  footer: {
    fontSize: ["0.875rem"],
    lineHeight: "1.5rem",
    fontWeight: "bold",
    borderTop: "0px solid #eaeaea",
    borderBottom: "1px solid rgb(229, 231, 235);",
  },
};

export default BlogPostTemplate;
