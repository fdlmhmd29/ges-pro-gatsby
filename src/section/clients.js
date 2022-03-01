/** @jsx jsx */
import { jsx, Box, Button, Container, Image } from "theme-ui";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "../css/slick.min.css";
import { SectionHeading } from "../components";
import {
	deheus,
	kai,
	gagnikel,
	bridgestone,
	basf,
	suryacipta,
	ajinomoto,
	asianpaints,
	akr,
	tol,
	bayer,
	pupr,
	adp,
	hyundai,
} from "../images";

const clients = [
	{
		id: 1,
		name: "PT. Hyundai Motor Indonesia Logo",
		logo: hyundai,
	},
	{
		id: 2,
		name: "PT. Kereta Api Indonesia Logo",
		logo: kai,
	},
	{
		id: 3,
		name: "PT. Ajinomoto Indonesia Logo",
		logo: ajinomoto,
	},
	{
		id: 4,
		name: "PT. Bridgestone Tire Indonesia Logo",
		logo: bridgestone,
	},
	{
		id: 5,
		name: "Kementerian Pekerjaan Umum dan Perumahan Rakyat Logo",
		logo: pupr,
	},
	{
		id: 6,
		name: "PT Suryacipta Swadaya Logo",
		logo: suryacipta,
	},
	{
		id: 7,
		name: "PT Asian Paints Color Indonesia Logo",
		logo: asianpaints,
	},
	{
		id: 8,
		name: "PT. Gag Nikel Logo",
		logo: gagnikel,
	},
	{
		id: 9,
		name: "PT. AKR Corporindo Tbk Logo",
		logo: akr,
	},
	{
		id: 10,
		name: "PT. Citra Karya Jabar Tol Logo",
		logo: tol,
	},
	{
		id: 11,
		name: "Bayer AG Logo",
		logo: bayer,
	},
	{
		id: 12,
		name: "PT. BASF Care Chemical Indonesia Logo",
		logo: basf,
	},
	{
		id: 13,
		name: "Adhi Persada Properti Logo",
		logo: adp,
	},
	{
		id: 14,
		name: "De Heus Indonesia (PT. Universal Agri Bisnisindo) Logo",
		logo: deheus,
	},
];

function SlickArrow({ className, onClick, control }) {
	return (
		<Button
			variant="text"
			className={className}
			sx={styles.paginationButton}
			onClick={onClick}
		>
			{control === "prev" ? (
				<BsArrowLeft size="32px" />
			) : (
				<BsArrowRight size="32px" />
			)}
		</Button>
	);
}

const Clients = () => {
	const settings = {
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 500,
		nextArrow: <SlickArrow control="next" />,
		prevArrow: <SlickArrow control="prev" />,
		responsive: [
			{
				breakpoint: 100000,
				settings: {
					infinite: false,
					slidesToShow: 6,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					infinite: false,
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
		],
	};

	return (
		<Box id="clients" as="section" sx={styles.section}>
			<Container>
				<SectionHeading
					slogan="Klien Kami"
					title="Perusahaan yang menggunakan layanan kami dan mereka bahagia"
				/>
				<Slider sx={styles.clients} {...settings}>
					{clients?.map(client => (
						<Box key={client.id} as="figure" sx={styles.logo}>
							<Image
								loading="lazy"
								src={client.logo}
								alt={client.name}
							/>
						</Box>
					))}
				</Slider>
			</Container>
		</Box>
	);
};

export default Clients;

const styles = {
	section: {
		pt: 2,
		pb: 8,
	},
	clients: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		pt: [0, 0, 25, 25, 25, 5],
		"&.slick-slider": {
			marginBottom: "40px",
		},
		".slick-track": {
			display: "flex",
			alignItems: "center",
		},
	},
	logo: {
		display: "flex !important",
		justifyContent: "center",
		mx: "10px",
		":focus": {
			outline: "none",
		},
	},
	pagination: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 5,
	},
	paginationButton: {
		minHeight: "30px",
		padding: 0,
		position: "absolute",
		bottom: "-60px",
		":focus": {
			outline: "0 none",
		},
		svg: {
			transition: "all 0.2s ease-in-out 0s",
		},
		"&.slick-disabled": {
			color: "#BBC7D7",
			svg: {
				transform: "scale(0.7)",
			},
		},
		"&.slick-prev": {
			left: "calc(50% - 16px)",
			transform: "translateX(-50%)",
		},
		"&.slick-next": {
			transform: "translateX(50%)",
			right: "calc(50% - 16px)",
		},
	},
};
