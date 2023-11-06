"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Form() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bisa8co",
        "template_vcz4m3p",
        form.current,
        "OvtM0z18NkuocS-es"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast.success("Sent Successfuly");
  };
  return (
    <form className=" text-xl p-12" ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        className="mt-10 px-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="email"
        className="mt-10  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
        placeholder="Your Email"
        required
      />
      <textarea
        className="mt-10 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
        placeholder="Your Message"
        name="message"
        rows="4"
        cols="50"
        required
      />
      <button
        className="mt-5 h-10 px-6 font-semibold rounded-md bg-white text-black hover:bg-blue-400"
        type="submit">
        Send
      </button>
    </form>
  );
}

export default Form;
