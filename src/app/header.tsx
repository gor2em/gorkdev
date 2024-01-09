import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-16">
      <div className="fixed top-0 flex items-center justify-center w-full h-16 mx-auto border-b h backdrop-blur-lg border-b-main950">
        <Link href="/">
          <h2 className="text-xl font-semibold tracking-widest text-primary400">gork.dev</h2>
        </Link>
      </div>
    </header>
  );
}
