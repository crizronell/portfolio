import React from "react";
import { BannerDetails } from "../Banner/BannerDetails";
import Image from "next/image";
import bg from "@/public/bg.jpg";

function About() {
  return (
    <section
      className=" min-h-screen w-full  bg-bg grid place-items-center "
      id="About">
      <div className="container mx-auto px-4 ">
        <div className="text-center font-bold text-3xl p-4">
          {" "}
          <h1>About Me</h1>
        </div>
        <div className=" ">
          <Image
            src={bg}
            className="md:max-w-md mx-auto p-4 rounded-full "
            quality={100}
            priority
            alt=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
        </div>
        <div className=" h-fit p-4 font-serif text-lg  text-justify max-w-3xl  mx-auto">
          <p>
            A dedicated IT graduate who seeks experience to develop my skills by
            finding opportunities in the IT field. Willing to learn new things
            to contribute to the company at the same time to grow
            professionally. Currently I primarily used React JS, Tailwind CSS
            and Next JS in building Website/Web App.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
