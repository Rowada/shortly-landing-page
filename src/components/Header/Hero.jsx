// @ts-nocheck
import React from "react";
import { Section } from "../Section/Section";
import banner from "../../assets/images/illustration-working.svg";

export const Hero = () => {
  return (
    <Section>
      <section>
        <div className="mx-auto grid gap-6 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mx-auto place-self-end lg:order-last lg:col-span-6">
            <img
              className="w-96 md:w-128 lg:w-full"
              src={banner}
              alt="illustration"
            />
          </div>
          <div className="place-self-center text-center md:text-start lg:order-first lg:col-span-6 lg:justify-self-start">
            <h1 className="mb-1 text-4xl font-bold text-text sm:max-w-md md:text-5xl xl:max-w-xl xl:text-7xl ">
              More than just
              <br />
              shorter links
            </h1>
            <p className="max-w-md font-medium text-accent md:text-base lg:mb-8 lg:text-lg">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="mt-4 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-center text-base font-semibold text-white lg:mt-0">
              Get started
            </button>
          </div>
        </div>
      </section>
    </Section>
  );
};
