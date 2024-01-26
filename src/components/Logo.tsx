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
      className={`${orbitron.className} text-primary950  font-extrabold`}
    >
      gork.dev
    </Link>
  );
};

export default Logo;
