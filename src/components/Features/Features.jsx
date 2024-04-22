import React from "react";
import { Section } from "../Section/Section";

export const Features = () => {
  return (
    <div className="w-full bg-features">
      <Section>
        <div className="flex flex-col items-center justify-center">
          <h2 className="py-3 text-2xl font-bold text-text md:text-3xl">
            Advanced Statistics
          </h2>
          <p className="max-w-md text-center text-sm font-medium text-accent md:text-base lg:mb-8 ">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </Section>
    </div>
  );
};
