"use client";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFirstName(e.target.value);
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhoneNumber(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  // toast configuration
  const successNotification = () =>
    toast.success("We've received your message! We'll get back to you soon.");
  const failureNotification = () =>
    toast.error("Seems like there's a problem. Let's try that again.");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const data = {
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      };
      const r = await axios.post(
        "https://envo-tech.onrender.com/db/add-to-db",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (r.status === 201) {
        successNotification();
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      } else failureNotification();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex-1 lg:p-8 p-4 pt-24 lg:w-full min-h-screen">
      <div className="grid lg:grid-cols-2 lg:gap-8 gap-4 w-4/5 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="mb-8">
            <p className="font-vietnam mb-3 text-white">Get in touch</p>
            <h1 className="font-zilla text-sky-600 font-bold lg:text-6xl text-3xl">
              We would like to hear from you
            </h1>
          </div>
          <div className="flex justify-center lg:gap-8 gap-4">
            <div className="flex flex-col justify-center items-start w-full">
              <input
                type="text"
                name="firstname"
                id="fname"
                className="border-b border-white w-[100%] lg:p-3 p-2 outline-0 font-zilla"
                placeholder="First Name"
                onChange={handleFirstNameChange}
                value={firstName}
                required
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full">
              <input
                type="text"
                name="lastname"
                id="lname"
                className="border-b border-white w-[100%] lg:p-3 p-2 outline-0 font-zilla"
                placeholder="Last Name"
                onChange={handleLastNameChange}
                value={lastName}
                required
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-full">
            <input
              type="email"
              name="email"
              id="email"
              className="border-b border-white w-[100%] lg:p-3 p-2 outline-0 font-zilla"
              placeholder="email@example.com"
              onChange={handleEmailChange}
              value={email}
              required
            />
          </div>
          <div className="flex flex-col justify-center items-start w-full">
            <input
              type="text"
              name="phone"
              id="phone"
              className="border-b border-white w-[100%] lg:p-3 p-2 outline-0 font-zilla"
              placeholder="+1-234-567890"
              onChange={handlePhoneNumberChange}
              value={phoneNumber}
              required
            />
          </div>
          <div className="flex flex-col justify-center items-start w-full">
            <textarea
              name="message"
              id="message"
              className="border-b border-white w-[100%] lg:p-3 p-2 outline-0 font-zilla"
              placeholder="Your message here"
              onChange={handleMessageChange}
              value={message}
              required
            />
          </div>
          <>
            <button
              type="submit"
              className="font-zilla p-2 rounded-lg bg-sky-600 border-sky-600 text-white transition duration-700 ease-in-out hover:bg-white hover:text-sky-600 hover:cursor-pointer"
            >
              Send Message
            </button>
            <ToastContainer position="bottom-left" />
          </>
        </form>
        <div className="grid grid-rows-16 grid-cols-8 gap-5">
          <div className="bg-[url(/services1.png)] bg-cover bg-center row-span-8 col-span-5 rounded-xl transition duration-1000 hover:scale-101" />
          <div className="bg-[url(/services2.png)] bg-cover bg-center row-span-8 col-span-3 rounded-xl transition duration-1000 hover:scale-101" />
          <div className="bg-[url(/services3.png)] bg-cover bg-center row-span-8 row-start-9 col-span-3 rounded-xl transition duration-1000 hover:scale-101" />
          <div className="bg-[url(/services4.png)] bg-cover bg-center row-span-8 row-start-9 col-span-5 rounded-xl transition duration-1000 hover:scale-101" />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
