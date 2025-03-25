import React from "react";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { FaMeta } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const AboutPage = () => {
  const strategycards = [
    {
      name: "Focus",
      description:
        "An integrated player covering the whole water, waste water and solid waste value chains.",
      imgUrl: "/strategy1-no-bg.png",
    },
    {
      name: "Differentiation",
      description:
        "Expertise in Smart Innovative technologies focused on Water, Environment and Renewable energy.",
      imgUrl: "/strategy2-no-bg.png",
    },
    {
      name: "Value Creation",
      description:
        "We have operational commitments as part of our sustainable development roadmap in various categories.",
      imgUrl: "/strategy3-no-bg.png",
    },
  ];

  const values = [
    "Investment in innovation",
    "Efficiency",
    "Cost effectiveness",
    "Integration of technology into people's everyday lives",
    "Providing eco-friendly water, waste water and solid waste management systems",
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
      <section className="flex-1 lg:p-8 p-4 bg-[url(/about1.png)] bg-center bg-cover min-h-screen">
        <div className="absolute inset-0 bg-black opacity-70 z-0 max-md:h-[115.9%] lg:h-[111%]" />
        {/* About Page hero section */}
        <div className="relative lg:mt-40 mt-24 grid lg:grid-cols-2 lg:gap-16 w-full h-[100%]">
          <div className="p-4 space-y-8 text-white">
            <h1 className="lg:text-6xl text-4xl font-bold ">
              About <span className="text-sky-600">Envo Technologies.</span>
            </h1>
            <p className="lg:text-xl text-sm">
              We are a leading Technology and Engineering firm in the global
              south that provides integrated solutions in water, environment and
              renewable energy. Our service delivery model is built on
              delivering seamless, high quality, consistent and cost effective
              yet sustainable solutions to water utilities, municipalities,
              national and county governments, private companies.
            </p>
          </div>
          <p className="lg:mt-40 max-lg:p-4 lg:w-4/5 lg:text-xl text-sm">
            Our approach is simple — we believe that with the right technologies
            and people, we can address our water and environmental challenges
            through sustainable and cost-effective solutions that transform
            lives. Our solutions are end-to-end scalable, designed to integrate
            seamlessly with our proprietary AI platform, and proven across a
            broad range of clients and sectors.
          </p>
        </div>
      </section>
      {/* second section */}
      <section className="lg:my-24 my-8 flex-1 p-8">
        <div className="lg:w-3/5 mx-auto">
          <div className="space-y-8">
            <h1 className="lg:text-5xl text-3xl font-extrabold">
              Our <span className="text-sky-600">Purpose</span>
            </h1>
            <p className="lg:text-2xl text-lg font-extralight">
              We are committed to protect, develop and manage our most precious
              natural resource, water for our generation and the future. We will
              do these in ways that protect our environment too. <br />
              <br /> Our singular purpose for doing this is to transform lives.
            </p>
          </div>
          {/* <div className="bg-[url(/about2.png)] bg-contain bg-no-repeat h-96 bg-center rounded-md"/> */}
        </div>
      </section>
      {/* strategy section */}
      <section className="flex-1 p-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center lg:w-4/5 mx-auto">
          {strategycards.map((c, i) => (
            <div className="grid gap-5 p-4 text-center" key={i}>
              <Image src={c.imgUrl} alt="strategy" width={300} height={300} />
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-sky-400">
                  {c.name}
                </h3>
                <p className="text-extralight">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* strategy description 1*/}
      <section className="lg:my-24 my-8 flex-1 p-8">
        <div className="grid lg:grid-cols-2 lg:w-4/5 mx-auto gap-16">
          <div className="bg-[url(/strat1.png)] bg-cover bg-center h-96 rounded-xl" />
          <div className="space-y-5">
            <h1 className="lg:text-5xl text-3xl font-bold text-sky-600">
              Focus
            </h1>
            <p className="font-extralight text-lg">
              We are an integrated player covering the whole water, waste water
              and solid waste value chain from the water resources, to
              production, distribution networks, customer services, waste water
              and stormwater collection systems to waste water treatment and
              reuse, solid waste segregation, collection, recycling, re-use and
              value addition. <br />
              <br />
              All our solutions emphasize on renewable energy including solar,
              biogas and hydropower.
            </p>
          </div>
        </div>
      </section>
      {/* strategy description 2*/}
      <section className="lg:my-24 my-8 flex-1 p-8">
        <div className="grid lg:grid-cols-2 lg:w-4/5 mx-auto gap-16">
          <div className="space-y-5">
            <h1 className="lg:text-5xl text-3xl font-bold text-sky-600">
              Differentiation
            </h1>
            <p className="font-extralight text-lg">
              We possess expertise in Smart Innovative technologies focused on
              Water, Environment and Renewable energy. <br />
              <br />
              We provide leadership in digital solutions and innovation in ways
              that enable our clients to have a wide range of options to choose
              from. <br />
              <br />
              Added to this, our data scientists equip utility clients to plan,
              build, monitor and improve vast public networks.
            </p>
          </div>
          <div className="bg-[url(/strat2.png)] bg-cover bg-center h-96 rounded-xl" />
        </div>
      </section>
      {/* strategy description 3*/}
      <section className="lg:my-24 my-8 flex-1 p-8">
        <div className="grid lg:grid-cols-2 lg:w-4/5 mx-auto gap-16">
          <div className="bg-[url(/about1.png)] bg-cover bg-center h-96 rounded-xl" />
          <div className="space-y-5">
            <h1 className="lg:text-5xl text-3xl font-bold text-sky-600">
              Value Creation
            </h1>
            <p className="font-extralight text-lg">
              Through our strategy, we strive to create value for all our
              shareholders, clients and society. <br />
              <br />
              Our broader contribution to society is enshrined in our ambitious
              ESG policy, which is an integral part of our strategy. <br />
              <br />
              We have operational commitments as part of our sustainable
              development roadmap, in three categories: climate, nature and
              social development.
            </p>
          </div>
        </div>
      </section>
      {/* values*/}
      <section className="lg:my-24 my-8 flex-1 p-8">
        <div className="lg:w-3/5 mx-auto">
          <div className="space-y-8">
            <h1 className="lg:text-5xl text-3xl font-extrabold">
              Our <span className="text-sky-600">Values</span>
            </h1>
            <p className="lg:text-2xl text-lg font-extralight">
              As a leader, Envo Technologies is committed to client
              satisfaction, environmental and social responsibility, with
              emphasis on:
            </p>
            <ul className="lg:text-xl text-sm font-extralight list-disc lg:pl-8 pl-4 space-y-4">
              {values.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Get in Touch */}
      <section className="lg:p-16 p-4 flex-1 grid lg:grid-cols-2 lg:gap-48 gap-4 w-4/5 mx-auto">
        <div className="space-y-8">
          <p>Connect</p>
          <h1 className="lg:text-5xl text-3xl font-zilla font-bold text-sky-600">
            Get In Touch
          </h1>
          <h3 className="lg:text-lg">
            We are here to assist you with any questions or inquiries. Reach out
            to us.
          </h3>
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
      </section>
    </>
  );
};

export default AboutPage;
