import React from "react";
import Link from "next/link";

function Button() {
  return (
    <div>
      <Link
        href="/#Contact"
        className="text-md  bg-blue-900  hover:bg-blue-500 inline-block my-2 py-2 p-4 rounded text-white ">
        <span>Let's Talk</span>
      </Link>
    </div>
  );
}

export default Button;
