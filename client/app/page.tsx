import React from "react";

const HomePage = () => {
  return (
    <section className="flex-1 lg:p-8 p-4 bg-[url(/hero1.png)] bg-center bg-cover min-h-screen">
      <div className="absolute inset-0 bg-black opacity-70 z-0 max-md:h-[115.9%] lg:h-[111%]" />
      <div className="relative grid grid-rows-6 items-center max-lg:mt-24">
        <div className="bg-[url(/logo-no-bg.png)] bg-cover bg-no-repeat bg-center row-span-3 lg:w-3/5 w-64 mx-auto lg:h-64 h-20 lg:mt-16" />
        <div className="md:w-3/5 mx-auto row-span-3">
          <h1 className="lg:text-5xl text-xl text-center font-extralight">
            We are committed to protect, develop and manage our most precious
            natural resource,{" "}
            <span className="text-sky-400 font-bold">water</span>.
          </h1>
          <div className="flex justify-evenly lg:w-3/5 mx-auto mt-8 lg:text-lg text-sm">
            <button className="border rounded-lg p-2 transition duration-500 ease-in-out cursor-pointer hover:bg-white hover:text-sky-800">
              Find Out How
            </button>
            <button className="border rounded-lg p-2 transition duration-500 ease-in-out cursor-pointer hover:bg-white hover:text-sky-800">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
