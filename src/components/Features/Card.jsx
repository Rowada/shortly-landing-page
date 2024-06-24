import React from "react";

export const Card = ({ icon, title, content }) => {
  return (
    <div className="mt-6 flex w-full flex-col rounded-md bg-white bg-clip-border text-gray-700 shadow-sm md:w-96">
      <div className="p-6">
        <div className="relative -top-6 flex items-center justify-center md:justify-start">
          <span className="absolute rounded-full bg-background p-3 text-white">
            {icon}
          </span>
        </div>

        <h5 className="mb-2 mt-6 block text-xl font-bold leading-snug tracking-normal text-text antialiased">
          {title}
        </h5>
        <p className="block text-sm font-semibold leading-relaxed text-accent antialiased">
          {content}
        </p>
      </div>
    </div>
  );
};
