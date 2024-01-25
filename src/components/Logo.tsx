import { Orbitron } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
});

interface Logo {
  path: string;
}

const Logo = (props: Logo) => {
  return (
    <Link
      href="/"
      className={`${orbitron.className} ${
        props.path === "/"
          ? "bg-primary500 text-primary900"
          : "bg-main50 text-main950"
      }  font-extrabold rounded p-1`}
    >
      gd
    </Link>
  );
};

export default Logo;
