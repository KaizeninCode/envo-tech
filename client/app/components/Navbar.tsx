'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const router = useRouter()
  
  const handleContactClick = () => router.push('/contact')

  const navlinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Our Services", url: "/our-services" },
    { name: "Contact Us", url: "/contact" },
  ];
  return (
    <nav className="max-lg:hidden bg-inherit w-full flex items-center justify-between flex-1 px-8 py-2">
      <div className="bg-[url(/logo-no-bg.png)] bg-contain bg-no-repeat bg-center w-48 h-16" />
      <div>
        {navlinks.map((l, i) => (
          <Link
            href={l.url}
            key={i}
            className="mx-8 transition duration-500 ease-in-out hover:text-sky-400 text-lg"
          >
            {l.name}
          </Link>
        ))}
      </div>
      <button className="bg-sky-600 rounded-lg p-2 transition duration-500 ease-in-out cursor-pointer hover:bg-white hover:text-sky-600" onClick={handleContactClick}>
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
