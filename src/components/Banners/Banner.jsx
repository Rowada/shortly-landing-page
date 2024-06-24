import React from "react";
import { Section } from "../Section/Section";

export const Banner = () => {
  return (
    <div className="flex h-80 w-full flex-col items-center justify-center gap-3 bg-background bg-[url('src/assets/images/bg-boost-desktop.svg')] bg-cover bg-center bg-no-repeat text-center">
      <Section>
        <h3 className="py-3 text-2xl font-bold text-white md:text-3xl">
          Boost your links today
        </h3>
        <button className="inline-flex focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent items-center justify-center rounded-full bg-primary px-4 py-2 text-center text-base font-semibold text-white">
          Get started
        </button>
      </Section>
    </div>
  );
};
