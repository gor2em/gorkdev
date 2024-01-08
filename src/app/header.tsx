import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-16 mb-10 ">
      <div className="fixed top-0 flex items-center justify-center w-full h-16 border-b backdrop-blur-sm border-b-slate-900 bg-black/20">
        <Link href="/">
          <h2 className="text-lg font-bold tracking-widest text-emerald-400">gork.dev</h2>
        </Link>
      </div>
    </header>
  );
}
