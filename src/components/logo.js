/** @jsx jsx */
import { jsx, Image } from "theme-ui";

// Components
import { Link } from "./link";
import { Logo, LogoWhite } from "../images";

export default function MainLogo({ isWhite }) {
    return (
        <Link
            path="/"
            sx={{
                variant: "links.logo",
            }}
        >
            <Image
                src={isWhite ? LogoWhite : Logo}
                alt="startup landing logo"
            />
        </Link>
    );
}
