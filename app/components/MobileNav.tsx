"use client";
import React from "react";
import Link from "next/link";

const MobileNav = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("menu");
    menu?.classList.toggle("hidden");
  };

  const navlinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="w-full p-8 flex justify-between items-center lg:hidden absolute">
      <div className="bg-[url(/logo-no-bg.png)] bg-contain bg-center bg-no-repeat w-32 h-8" />
      {/* add icon here */}
      <div className="text-white" onClick={toggleMenu}>
        &#9776;
      </div>
      {/* menu overlay */}
      <div
        id="menu"
        className="transition duration-500 ease-in-out hidden absolute right-0 top-0 p-4 bg-stone-100 rounded-lg shadow-lg max-md:w-1/2 md:w-1/4 h-fit mt-16 mr-8"
      >
        <ul className="flex flex-col gap-4">
          {navlinks.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="hover:text-sky-600 transition ease-in-out duration-500 text-sky-600 text-sm"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
