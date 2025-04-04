"use client";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter();
  const handleFindClick = () => router.push("/our-services");
  const handleContactClick = () => router.push("/contact");
  return (
    <section className="flex-1 flex justify-center items-center lg:p-8 p-4 bg-[url(/hero1.png)] bg-center bg-cover min-h-screen">
      <div className="absolute inset-0 bg-black opacity-70 z-0 max-md:h-[115.9%] lg:h-[111%]" />
        <div className="mx-auto relative flex flex-col items-center justify-center lg:w-4/5 md:p-4">
          <h1 className="lg:text-6xl md:text-4xl text-xl font-bold text-center">
            We are committed to protecting, developing and managing our most
            precious natural resource,{" "}
            <span className="text-sky-400 font-extrabold">water</span>.
          </h1>
          <div className="flex justify-center gap-10 lg:w-4/5 lg:mx-auto mt-8 lg:text-lg text-sm">
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
    </section>
  );
};

export default HomePage;
