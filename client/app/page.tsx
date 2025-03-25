"use client";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter();
  const handleFindClick = () => router.push("/our-services");
  const handleContactClick = () => router.push("/contact");
  return (
    <section className="flex-1 lg:p-8 p-4 bg-[url(/hero1.png)] bg-center bg-cover min-h-screen">
      <div className="absolute inset-0 bg-black opacity-70 z-0 max-md:h-[115.9%] lg:h-[111%]" />
      <div className="relative grid lg:grid-cols-2 items-center max-lg:mt-24">
        <div className="mx-auto mt-48">
          <h1 className="lg:text-5xl text-xl font-bold">
            We are committed to protecting, developing and managing our most
            precious natural resource,{" "}
            <span className="text-sky-400 font-extrabold">water</span>.
          </h1>
          <div className="flex justify-start gap-10 lg:w-3/5 mt-8 lg:text-lg text-sm">
            <button
              className="bg-sky-600 rounded-lg p-2 transition duration-500 ease-in-out cursor-pointer hover:bg-white hover:text-sky-600"
              onClick={handleFindClick}
            >
              Find Out How
            </button>
            <button
              className="bg-sky-600 rounded-lg p-2 transition duration-500 ease-in-out cursor-pointer hover:bg-white hover:text-sky-600"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
