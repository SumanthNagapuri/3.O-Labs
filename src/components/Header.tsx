"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <section className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center gap-20 bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-full px-10 py-3">

        {/* Left Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <Link href="/" className="px-4 py-1 rounded-full font-medium hover:text-black">Home</Link>

          <Link
            href="/services"
            className="px-4 py-1 rounded-full font-medium hover:text-black"
          >
            Services
          </Link>

          <Link href="/portfolio" className="px-4 py-1 rounded-full font-medium hover:text-black">Portfolio</Link>
          <Link href="/teams" className="px-4 py-1 rounded-full font-medium hover:text-black">Teams</Link>
        </nav>

        {/* Logo */}
        <Link href="/">
          <Image
            src="/3.0labs-logo.png"
            alt="3.0Labs"
            width={90}
            height={30}
            style={{ marginRight: "80%" }}
          />
        </Link>

        {/* Contact */}
        <Link
          href="/contact"
          className="bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-gray-900"
        >
          Contact us
        </Link>

      </div>
    </section>
  );
}