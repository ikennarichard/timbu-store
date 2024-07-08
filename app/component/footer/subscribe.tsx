import React from "react";

export default function Subscribe() {
  return (
    <form>
      <p className="bg-white w-fit rounded-md py-1 px-1">
        <input type="text" className="outline-none px-4 py-2" placeholder="Subscribe" />{" "}
        <button className="bg-blue-700 px-8 py-2 rounded-md text-white">Subscribe</button>
      </p>
    </form>
  );
}
