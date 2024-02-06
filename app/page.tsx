import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex items-center justify-between px-10 py-5">
      <Link href="/" className="text-[#111827] text-lg font-semibold">
        Bask Health
      </Link>
      <Link href="/e-prescription" className="bg-[#111827] text-white text-sm py-3 px-5 rounded-md">
        Get Started
      </Link>
    </main>
  );
}
