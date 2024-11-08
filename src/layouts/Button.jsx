import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        className={`${props.backgroundColor} text-black rounded-full px-8 py-2 font-medium hover:bg-[#8482ff] hover:text-white transition-all`}
      >
        {props.title}
      </button>
    </div>
  );
}
