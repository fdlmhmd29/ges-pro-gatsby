/** @jsx jsx */
import {
	jsx,
	Box,
	Container,
	Heading,
	Text,
	Button,
	Link,
	Image as Img,
} from "theme-ui";
import { rgba } from "polished";
import { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

// Images
import { slider1, slider2, slider3, slider4, bannerBg } from "../images";

// Components
import Progressbar from "../components/progressbar";

const data = {
	gallery: [
		{
			id: 1,
			image: slider1,
			title: "Studi AMDAL",
			desc: "Mahakam Ulu, Kaltim",
		},
		{
			id: 2,
			image: slider2,
			title: "Konsultasi Publik",
			desc: "Studi AMDAL, Sunter Agung",
		},
		{
			id: 3,
			image: slider3,
			title: "Laporan Monitoring UKL-UPL",
			desc: "PT. Ajinomoto Bakery, Indonesia",
		},
		{
			id: 4,
			image: slider4,
			title: "Pembangunan IPAL",
			desc: "De Heus Indonesia",
		},
	],
};

const Banner = () => {
	const isPause = useRef(false);
	const swiperRef = useRef(null);
	const [togglePlay, setTogglePlay] = useState(false);
	const [currentWidth, setCurrentWidth] = useState(0);

	let time = 3;
	let tick, percentTime;

	function startProgressbar() {
		resetProgressbar();
		percentTime = 0;
		tick = setInterval(interval, 10);
	}

	function interval() {
		if (isPause.current === false) {
			percentTime += 1 / (time + 0.1);
			setCurrentWidth(percentTime);
			if (percentTime >= 100) {
				swiperRef.current && swiperRef.current.swiper.slideNext();
				startProgressbar();
			}
		}
	}

	function resetProgressbar() {
		setCurrentWidth(0);
		clearTimeout(tick);
	}

	useEffect(() => {
		startProgressbar();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleToggle = () => {
		isPause.current = !isPause.current;
		setTogglePlay(prev => !prev);
	};

	return (
		<Box id="beranda" as="section" sx={styles.bannerBg}>
			<Container>
				<Box sx={styles.contentWrapper}>
					<Box sx={styles.content}>
						<Heading sx={styles.title}>
							Layanan Konsultasi Lingkungan
						</Heading>

						<Text as="p" sx={styles.text}>
							Memberikan pelayanan profesional terbaik dengan
							metode yang tepat, efisien dan efektif dari berbagai
							aspek adalah pondasi utama perusahaan
						</Text>

						<Link
							sx={styles.button}
							href="mailto:pt.greenfield@gmail.com"
						>
							<Button aria-label="Hubungi Kami" variant="primary">
								Hubungi Kami
							</Button>
						</Link>
					</Box>
					<Box sx={styles.rightContent}>
						<Progressbar
							sx={styles.progressbar}
							togglePlay={togglePlay}
							handleClick={handleToggle}
							currentWidth={currentWidth}
						/>
						<Swiper
							loop={true}
							ref={swiperRef}
							spaceBetween={0}
							slidesPerView={1}
							modules={[EffectFade]}
							effect="fade"
						>
							{data?.gallery?.map(item => (
								<SwiperSlide key={item.id}>
									<Box as="figure" sx={styles.image}>
										<Img
											loading="lazy"
											src={item.image}
											alt=""
										/>
										<Box as="figcaption">
											<Box>
												<Heading as="h4">
													{item.title}
												</Heading>
												<Text as="p">{item.desc}</Text>
											</Box>
										</Box>
									</Box>
								</SwiperSlide>
							))}
						</Swiper>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Banner;

const styles = {
	bannerBg: {
		background: `transparent url(${bannerBg}) no-repeat center top / cover`,
	},
	contentWrapper: {
		display: [null, null, null, "grid"],
		gridTemplateColumns: [
			null,
			null,
			null,
			"0.9fr 1.1fr",
			"repeat(2, 1fr)",
		],
		alignItems: "center",
		justifyContent: "center",
		minHeight: [null, null, null, null, null, "100vh"],
		pt: [100, null, null, 120, 130, 120, 5],
	},
	content: {
		maxWidth: [507, 507, 507, 324, 450],
	},
	title: {
		fontWeight: "bold",
		fontSize: ["30px", null, null, null, "42px", "40px", "60px"],
		lineHeight: 1.33,
		letterSpacing: "-1px",
		color: "textSecondary",
	},
	text: {
		fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
		lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2],
		color: "textSecondary",
		mt: ["14px", "19px"],
	},
	button: {
		textDecoration: "none",
		display: ["none", "flex"],
		mt: [45, 45, 45, 25, 25],
	},
	clients: {
		display: "flex",
		alignItems: "center",
		mt: ["20px", "45px", "45px", "30px", "45px"],
		img: {
			maxWidth: ["80px", "100%", "100%", "100%"],
			"+ img": {
				ml: ["14px", "28px", "28px", "20px"],
			},
		},
	},
	illustration: {
		mt: ["30px", "30px", 0],
		mb: ["60px", "60px", 0],
		img: {
			maxWidth: [null, null, null, null, "90%", "90%", "100%"],
		},
	},
	rightContent: {
		position: "relative",
		mt: [6, 6, 6, 6, 6],
		maxWidth: "100%",
		".swiper-pagination-bullets": {
			bottom: 20,
		},
		".swiper-pagination-bullet": {
			backgroundColor: "rgba(255,255,255,0.5)",
			width: 10,
			height: 10,
			opacity: 1,
			mx: 5,
			":focus": {
				outline: 0,
			},
		},
		".swiper-pagination-bullet-active": {
			backgroundColor: "rgba(255,255,255,1)",
		},
	},
	progressbar: {
		position: "absolute",
		left: [15, 25],
		top: [46, 53],
		zIndex: 2,
	},
	progressBar: {
		position: "relative",
		mr: 4,
	},
	toggleButton: {
		backgroundColor: "transparent",
		border: 0,
		cursor: "pointer",
		display: "flex",
		padding: 0,
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		"&:focus": {
			outline: "0 none",
		},
	},
	image: {
		position: "relative",
		display: "flex",
		alignItems: "flex-start",
		"> img": {
			borderRadius: 10,
		},
		figcaption: {
			backgroundColor: "primary",
			display: "flex",
			alignItems: "center",
			position: "absolute",
			left: 0,
			top: 30,
			borderRadius: 5,
			color: "#fff",
			padding: ["20px 20px 20px 80px", "25px 25px 25px 90px"],
			h4: {
				lineHeight: 1,
				fontWeight: "bold",
				fontSize: [14, 18],
				letterSpacing: "heading",
			},
			p: {
				fontSize: [13, 16],
				fontWeight: 500,
				letterSpacing: "heading",
				color: rgba("#fff", 0.6),
				marginTop: [2],
			},
		},
	},
};
