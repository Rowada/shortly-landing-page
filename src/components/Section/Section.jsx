import React from "react";

export const Section = ({ children }) => {
  return (
    <section className="mx-auto max-w-full px-6 py-2 md:max-w-5xl lg:max-w-7xl lg:px-8">
      {children}
    </section>
  );
};
