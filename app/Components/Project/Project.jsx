import React from "react";
import { ProjectDetails } from "./ProjectDetails";
import Image from "next/image";
import Link from "next/link";

function Project() {
  return (
    <section
      className="min-h-screen w-full flex items-center p-4 bg-bg "
      id="Project">
      <div className="container mx-auto ">
        <div className="text-center font-bold text-3xl ">
          <h1>Project</h1>
        </div>
        <div className="  grid grid-cols-template gap-4 mt-4 ">
          {ProjectDetails.map((item) => (
            <div
              className=" h-full w-full  aspect-video bg-white shadow-2xl rounded-2xl p-4  "
              key={item.id}>
              <Image
                className="h-fit  rounded-xl "
                src={item.img}
                priority
                quality={100}
                alt=""
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
              <div className=" p-4 ">
                <Link href={`${item.link}`} target="_blank">
                  <h1 className="text-center text-lg font-bold font-serif  underline decoration-sky-500 text-sky-500">
                    {item.title}
                  </h1>
                </Link>
                <p className="text-justify  ">{item.description}</p>
                <div className="flex justify-between items-center mt-4  ">
                  {item.stack1}
                  {item.stack2}
                  {item.stack3}
                  {item.stack4}
                  {item.stack5}
                  <Link href={`${item.githublink}`} target="_blank">
                    <span> {item.github}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
