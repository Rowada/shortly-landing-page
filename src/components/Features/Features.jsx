import React from "react";
import { Section } from "../Section/Section";
import { Card } from "./Card";
import { LineChart } from "lucide-react";
import { CircleGauge } from "lucide-react";
import { PenTool } from "lucide-react";
import { UrlList } from "../Form/UrlList";
import { CleanForm } from "../Form/CleanForm";

export const Features = () => {
  return (
    <div className="mt-20 w-full bg-features py-40">
      <Section>
        <div className="relative -top-60 -mb-28">
          <CleanForm />
          <UrlList />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="py-3 text-2xl font-bold text-text md:text-3xl">
            Advanced Statistics
          </h2>
          <p className="max-w-md text-center text-sm font-medium text-accent md:text-base lg:mb-8 ">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="my-10 flex flex-wrap items-center justify-center gap-10 md:gap-8">
          <div className="translate-y-0">
            <Card
              icon={<LineChart size={28} />}
              title={"Brand Recognition"}
              content={`Boost your brand recognition with each click. 
              Generic links don't mean a thing. 
              Branded links help instil confidence in your content.`}
            />
          </div>
          <div className="translate-y-8">
            <Card
              icon={<CircleGauge size={28} />}
              title={"Detailed Records"}
              content={`Gain insights into who is clicking your links. 
            Knowing when and where people engage with your content helps inform better decisions.`}
            />
          </div>
          <div className="translate-y-16">
            <Card
              icon={<PenTool size={28} />}
              title={"Fully Customizable"}
              content={`Improve brand awareness and content discoverability 
            through customizable links, supercharging audience engagement.`}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
