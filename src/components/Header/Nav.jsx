import React from "react";
import { Section } from "../Section/Section";
import { Menu } from "lucide-react";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const MENU_ITEMS = [
    {
      id: 1,
      item: "Features",
    },
    {
      id: 2,
      item: "Pricing",
    },
    {
      id: 3,
      item: "Resources",
    },
  ];

  return (
    <Section>
      <nav>
        <div className="flex h-16 items-center justify-between">
          <div className="flex shrink-0 items-center">
            <img src={logo} alt="shortly logo" />

            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                {MENU_ITEMS.map((items) => (
                  <li key={items.id}>
                    <a className="font-semibold text-accent" href="#">
                      {items.item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              <button className="font-semibold text-accent">Login</button>
              <button className="rounded-full bg-primary px-4 py-1 font-semibold text-white">
                Sign Up
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} type="button">
              <Menu size={32} color="hsl(257, 7%, 63%)" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute inset-x-0 z-50 m-auto w-[90%] md:hidden">
            <div className="mx-auto flex w-full flex-col items-center justify-around space-y-4 rounded-lg bg-background py-4">
              <ul className="flex flex-col items-center space-y-4">
                {MENU_ITEMS.map((items) => (
                  <li key={items.id}>
                    <a className="font-semibold text-white" href="#">
                      {items.item}
                    </a>
                  </li>
                ))}
              </ul>
              <span className="h-0.5 w-4/5 rounded-md bg-accent/30 px-2 "></span>
              <button className="font-semibold text-white">Login</button>
              <button className="w-4/5 rounded-full bg-primary px-3 py-1 font-semibold text-white">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </Section>
  );
};
