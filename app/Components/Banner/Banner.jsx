import React from "react";
import { BannerDetails } from "./BannerDetails";
import bg from "@/public/bg.jpg";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
function Banner() {
  return (
    <section
      className=" min-h-screen w-full  bg-bg2 grid place-items-center  "
      id="Home">
      <div className=" grid  items-center xl:grid-cols-2">
        <div>
          <Image
            src={bg}
            className="sm:max-w-sm mx-auto p-4 rounded-full "
            quality={100}
            priority
            alt=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
        </div>

        <div className=" h-fit p-4 font-mono  ">
          {BannerDetails.map((item) => (
            <div key={item.id}>
              <h1 className="text-2xl leading-loose">Hi I'm {item.name}</h1>
              <p className="text-xl">{item.title}</p>
              <p className="text-lg">{item.description}</p>
              <Button />
              <div className="flex justify-between w-24 mt-2">
                <Link href={item.githublink} target="_blank">
                  {item.github}
                </Link>
                <Link href={item.linkedinlink} target="_blank">
                  {item.linkedin}
                </Link>
              </div>
              <div className="flex justify-between items-center w-52 mt-4 ">
                <h1 className="text-xl italic ">Skills:</h1>
                {item.html}
                {item.tailwind}
                {item.reactJS}
                {item.nextJS}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Banner;
