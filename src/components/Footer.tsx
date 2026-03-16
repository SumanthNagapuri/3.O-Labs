import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
  { href: "/services", label: "Services" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="bg-black text-white pt-16 pb-32 relative overflow-hidden min-h-[300px]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Image
              src="/3.0labs-logo.png"
              alt="3.0 Labs"
              width={110}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="flex gap-8 text-sm text-gray-300 flex-wrap justify-center">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:underline">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <hr className="border-white-700 my-6 w-full opacity-100" />

        <div className="text-xs text-gray-400 text-center">
          ©{year} 3.0 Labs. All Rights Reserved
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[-40px] flex justify-center opacity-40 pointer-events-none">
        <Image
          src="/3.0 Labs.png"
          alt="3.0 Labs"
          width={900}
          height={300}
          className="max-w-none translate-y-1/6"
          priority={false}
        />
      </div>
    </footer>
  );
}