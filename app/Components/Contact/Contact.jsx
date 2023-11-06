import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <section className="min-h-screen  bg-bg2 flex items-center" id="Contact">
      <div className="container mx-auto px-4  ">
        <div className="text-center font-bold text-3xl p-4">
          {" "}
          <h1>Contact Me</h1>
        </div>
        <div className="w-fit mx-auto rounded-2xl shadow-2xl ">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
