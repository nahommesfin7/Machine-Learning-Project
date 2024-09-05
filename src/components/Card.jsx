import React from "react";

const Card = ({Name}) => {
  return (
    <div className="flex flex-col  items-center">
      <div class="relative w-[4.5rem] h-[4.5rem]  text-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg
          class="absolute w-[5rem] h-[5rem] text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="py-5">
        <h1 className="text-xl">{Name}</h1>
      </div>
    </div>
  );
};

export default Card;
