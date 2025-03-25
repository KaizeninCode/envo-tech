import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FaMeta, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const quicklinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/our-services" },
    { name: "Contact Us", href: "/contact" },
  ];

  const contactInfo = [
    {
      icon: <MdOutlineMail />,
      name: "Email",
      value: "info@envotechnologies.com",
    },
    {
      icon: <FaMeta />,
      name: "Facebook",
      value: "envotech",
    },
    {
      icon: <FaXTwitter />,
      name: "Twitter/X",
      value: "envotech",
    },
  ];
  return (
    <>
      <hr className="border border-white" />
      <footer className="grid lg:grid-cols-2 gap-8 py-6 px-12 shadow-lg bg-transparent text-white">
        <div className="grid gap-4">
          <Image
            src={"/logo-no-bg.png"}
            alt="Envo Technlogies Logo"
            width={400}
            height={1000}
          />

          <div>
            <p className="max-lg:text-sm font-zilla text-white max-lg:text-center">
              &copy; Copyright Envo Technologies 2025. All Rights Reserved
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mx-auto">
          <div className="flex flex-col lg:gap-5 gap-2 items-start justify-center font-vietnam text-md">
            <h3 className="uppercase font-extrabold text-sky-600 font-zilla">
              Quick Links
            </h3>
            {quicklinks.map((link, i) => (
              <Link
                href={link.href}
                key={i}
                className="hover:text-sky-600 transition ease-in-out duration-700 max-lg:text-sm text-white font-extralight"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="grid gap-5">
            {contactInfo.map((c, i) => (
              <div key={i} className="flex gap-4 items-center ">
                <div className="p-2 rounded-full text-white">{c.icon}</div>
                <div>
                  <h1 className="text-lg font-zilla font-bold text-sky-600">
                    {c.name}
                  </h1>
                  <p className="lg:text-lg font-extralight">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
