import React from "react";
import { FaMeta, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const ServicesPage = () => {
  const features = [
    "Short construction period (Maximum 90 days for large systems and 30 days for small systems). ",
    "Easily Expandable system without need to do a new treatment works (Jusdt add an identical unit)",
    "Higher efficiency than conventional water treatment system. ",
    "Lifetime of more than 20 years. ",
    "Low carbon footprint",
    "Reduction of backwash water  by over 30% when compared to a conventional system.",
    "The dosing device is designed to use a single mixer with a single chemical barrel making dosage control stable and accurate. ",
    "The tanks are made of PE. ",
  ];

  const list = [
    "Off-grid operation: Operates independently of the grid.",
    "Variable speed pumping.",
    "Low maintenance.",
    "Customizable solutions: Tailored to your water needs, whether for irrigation, livestock, or domestic use.",
    "Environmentally friendly: Reduces carbon footprint by utilizing clean, renewable solar energy.",
    "Water conservation: Efficient pumping reduces water waste, optimizing resource use.",
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
      <section className="flex-1 lg:p-8 p-4 bg-[url(/services5.png)] bg-center bg-cover min-h-screen">
        <div className="absolute inset-0 bg-black opacity-70 z-0 max-md:h-[115.9%] lg:h-[111%]" />
        {/* Services Page hero section */}
        <div className="relative lg:mt-48 mt-24 grid lg:grid-cols-2 lg:gap-16 w-full h-[100%]">
          <div className="p-4 space-y-8 text-white">
            <h1 className="lg:text-6xl text-4xl font-bold ">
              Our <span className="text-sky-600">Services.</span>
            </h1>
            <p className="lg:text-xl text-sm">
              According to the United Nations, water use has grown at more than
              twice the rate of population increase in the last century and the
              world&apos;s population is predicted to grow by more than two
              billion by the mid-21st Century. That growth means water security
              is one of the world&apos;s most pressing and challenging issues,
              particularly in Sub-saharan Africa, where energy-intensive water
              schemes are essential to meeting rising demand.
            </p>
          </div>
        </div>
      </section>
      {/* second section */}
      <section className="lg:my-24 my-8 flex-1 p-8">
        <div className="lg:w-3/5 mx-auto">
          <div className="space-y-8">
            <p className="lg:text-2xl text-lg font-extralight">
              Our water systems portfolio provides three broad range of
              services:
            </p>
          </div>
          {/* <div className="bg-[url(/about2.png)] bg-contain bg-no-repeat h-96 bg-center rounded-md"/> */}
        </div>
      </section>
      {/* service description 1*/}
      <section className="lg:my-24 my-8 flex-1 p-8">
        <div className="grid lg:grid-cols-2 lg:w-4/5 mx-auto gap-16">
          <div className="bg-[url(/services1.png)] bg-cover bg-center rounded-xl" />
          <div className="space-y-5">
            <h1 className="lg:text-5xl text-3xl font-bold text-sky-600">
              Water Treatment
            </h1>
            <p className="font-extralight text-lg">
              We have over 10 years of experience in design of water treatment
              systems, installation,configuration, technology development,
              training and commissioning of our plants and equipment. <br />
              <br />
              We work with clients to design water production systems that meet
              individual needs based on demand (ranging from 200 cubic meters
              per day to 500,000 cubic meters per day). <br />
              <br />
              Our systems are plug and play meaning they are manufactured in our
              factory and installed on site, significantly reducing the time
              required to make water flowing to customers. <br />
              <br />
              Our systems are cost effective (less that 50% of convenctional
              treatment systems guaranteed), are easy to operate and maintain
              and come with a 5 year warranty under normal operation and
              maintenance conditions. They can be 100% solar powered making them
              convenient for rural water supply schemes.
            </p>
          </div>
        </div>
      </section>
      {/* product highlight 1*/}
      <section className="lg:my-24 my-8 flex-1 p-8">
        <div className="grid lg:grid-cols-2 lg:w-4/5 mx-auto gap-16">
          <div className="space-y-5">
            <h1 className="lg:text-5xl text-3xl font-bold">
              Product Spotlight:{" "}
              <span className="text-sky-600 italic">
                The Envo Smartwater Treatment System
              </span>
            </h1>
            <p className="font-extralight text-lg">
              Our Smartwater Treatment System is designed for river, streams,
              lakes, dams and other natural sources. The systems can typically
              produce a wide range of volumes from the small (200 cubic meters
              paer day) to medium (up to 50,000 cubic meters per day) to large
              systems (Up to 500,000 cubic meters per day) of clean and potable
              water.
            </p>
            <ul className="lg:text-xl text-sm font-extralight list-disc lg:pl-8 pl-4 space-y-4">
              {features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[url(/services3.png)] bg-cover bg-center rounded-xl" />
        </div>
      </section>
      {/* service description 2*/}
      <section className="lg:my-24 my-8 flex-1 p-8">
        <div className="grid lg:grid-cols-2 lg:w-4/5 mx-auto gap-16">
          <div className="bg-[url(/services2.png)] bg-cover bg-center rounded-xl" />
          <div className="space-y-5">
            <h1 className="lg:text-5xl text-3xl font-bold text-sky-600">
              Solarization of water systems
            </h1>
            <p className="font-extralight text-lg">
              Our Solar Solutions offer a sustainable and cost-effective way to
              access water, tailored to the needs of various sectors. Whether
              you are aiming to reduce operational costs, ensure water
              availability during outages, or promote sustainability, our
              solution provides a reliable and environmentally friendly water
              pumping system in various fields to meet our growing client
              demand. <br />
              <br />
              Our water pump solarization solutions are perfect for homesteads,
              hospitals, hotels, schools, institutions, communities, and
              processing industries. Powered by solar energy, these systems
              ensure continuous and sustainable water supply for various needs,
              from irrigation to water distribution, offering a reliable and
              environmentally friendly alternative to grid electricity.
            </p>
          </div>
        </div>
      </section>
      {/* product highlight 2*/}
      <section className="lg:my-24 my-8 flex-1 p-8">
        <div className="grid lg:grid-cols-2 lg:w-4/5 mx-auto gap-16">
          <div className="space-y-5">
            <h1 className="lg:text-5xl text-3xl font-bold">
              Product Spotlight
            </h1>
            <p className="font-extralight text-lg">
              Our water pump solarization solutions combine solar power with
              efficient water pumping technology to provide a reliable and
              sustainable water supply.
            </p>
            <h1 className="text-sky-600 text-xl">Key Product Features</h1>
            <ul className="lg:text-xl text-sm font-extralight list-disc lg:pl-8 pl-4 space-y-4">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[url(/services4.png)] bg-cover bg-center rounded-xl" />
        </div>
      </section>
      {/* service description 3*/}
      <section className="lg:my-24 my-8 flex-1 p-8">
        <div className="grid lg:grid-cols-2 lg:w-4/5 mx-auto gap-16">
          <div className="bg-[url(/services6.png)] bg-cover bg-center rounded-xl" />
          <div className="space-y-5">
            <h1 className="lg:text-5xl text-3xl font-bold text-sky-600">
              Technology, Data and AI solutions
            </h1>
            <p className="font-extralight text-lg">
              As a technology enterprise, we provide utilities with innovative
              technologies that enable them to have more options for water
              management. <br />
              <br />
              We suport adoption and expansion of smart water management systems
              and real-time monitoring sensors that boost operational efficiency
              and reduce water losses. <br />
              <br />
              Added to this, our data scientists equip utility clients to plan,
              build, monitor and improve vast public networks. This AI-driven
              approach boosts profitability and performance, from capacity
              planning to incident tracking to regulatory compliance. <br />
              <br />
              We also provide the resources utilities need in data analytics,
              digging deeper into market metrics and enterprise information,
              uncovering opportunities that traditional analyses &apos;t define
              or recommend and supporting measures on how to use data analytics
              for automation to achieve greater operational efficiencies.
            </p>
          </div>
        </div>
      </section>
      {/* service description 4*/}
      <section className="lg:my-24 my-8 flex-1 p-8">
        <div className="grid lg:grid-cols-2 lg:w-4/5 mx-auto gap-16">
          <div className="space-y-5">
            <h1 className="lg:text-5xl text-3xl font-bold text-sky-600">
              Utility management and operations for sustainability
            </h1>
            <p className="font-extralight text-lg">
              Because the financial sustainability of water utilities is
              essential for ongoing operations and necessary investments in
              infrastructure and technology, we have developed a range of robust
              financial, operations and management models vital for achieving
              long-term viability and sustainability of water systems, both
              small and large. <br />
              <br />
              Some of these models have included exploring alternative funding
              mechanisms to use private-sector investment in water
              infrastructure projects especially for community and public water
              systems to setting up of emergency operations and maintenance
              funds to cover costs for unexepcetd breakdowns.
            </p>
          </div>
          <div className="bg-[url(/services7.png)] bg-cover bg-center rounded-xl" />
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

export default ServicesPage;
