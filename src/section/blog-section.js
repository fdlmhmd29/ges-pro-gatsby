/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import Carousel from "react-multi-carousel";

// Components
import SectionHeading from "../components/section-header";
import PostCard from "../components/cards/post-card";
import ButtonGroup from "../components/button-group";

// Images
import { graphql, useStaticQuery } from "gatsby";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 992 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 992, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function BlogSection() {
  const { posts } = useStaticQuery(graphql`
    {
      posts: allGraphCmsPost(sort: { fields: createdAt, order: ASC }) {
        nodes {
          id
          author {
            fullName
            designation
          }
          title
          image {
            url
          }
          createdAt
          slug
        }
      }
    }
  `);

  return (
    <section id="blog" sx={{ variant: "section.news" }}>
      <Container>
        <SectionHeading
          title="Blog"
          description="Dapatkan tulisan terbaru dari author berbakat kami"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {posts.nodes.map(post => (
              <PostCard
                key={post.id}
                src={post.image.url}
                alt={post.title}
                postLink={`/posts/${post.slug}`}
                title={post.title}
                authorName={post.author.fullName}
                date={post.createdAt}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

export default BlogSection;

const styles = {
  carouselWrapper: {
    ".carousel-container": {
      mx: -3,
    },
  },
};
