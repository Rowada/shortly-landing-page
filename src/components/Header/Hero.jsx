// @ts-nocheck
import React from "react";
import { Section } from "../Section/Section";

import banner from "../../assets/images/illustration-working.svg";
export const Hero = () => {
  return (
    <Section>
      <section>
        <div className="mx-auto grid gap-6 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="lg:order-last lg:col-span-6">
            <img src={banner} alt="illustration" />
          </div>
          <div className="place-self-center text-center md:text-start lg:order-first lg:col-span-6">
            <h1 className="mb-4 max-w-xl text-4xl font-bold leading-none  md:text-5xl xl:text-7xl ">
              More than just shorter links
            </h1>
            <p className="mb-6 max-w-md font-light md:text-base lg:mb-8 lg:text-lg">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-center text-base font-semibold text-white focus:ring-4">
              Get started
            </button>
          </div>
        </div>
      </section>
    </Section>
  );
};
