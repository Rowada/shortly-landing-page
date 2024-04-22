import React from "react";
import { Section } from "../Section/Section";
import { Card } from "./Card";
import { LineChart } from "lucide-react";
import { CircleGauge } from "lucide-react";
import { PenTool } from "lucide-react";

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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-8">
          <Card
            icon={<LineChart size={28} />}
            title={"Brand Recognition"}
            content={`Boost your brand recognition with each click. 
              Generic links don't mean a thing. 
              Branded links help instil confidence in your content.`}
          />
          <Card
            icon={<CircleGauge size={28} />}
            title={"Detailed Records"}
            content={`Gain insights into who is clicking your links. 
            Knowing when and where people engage with your content helps inform better decisions.`}
          />
          <Card
            icon={<PenTool size={28} />}
            title={"Fully Customizable"}
            content={`Improve brand awareness and content discoverability 
            through customizable links, supercharging audience engagement.`}
          />
        </div>
      </Section>
    </div>
  );
};
