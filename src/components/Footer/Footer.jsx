import React from "react";
import logo from "../../assets/images/logo-footer.svg";
import { Section } from "../Section/Section";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-foreground py-6">
      <Section>
        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          <img src={logo} alt="logo footer" />

          <div className="flex w-full flex-col items-center justify-center gap-6 text-center md:flex-row md:items-start md:gap-20 md:text-justify">
            <div>
              <h4 className="mb-3 font-semibold text-white">Features</h4>
              <ul className="leading-relaxed text-accent">
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white">Resources</h4>
              <ul className="leading-relaxed text-accent">
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white">Company</h4>
              <ul className="leading-relaxed text-accent">
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <button>
              {" "}
              <Facebook color="#fff" />
            </button>
            <button>
              <Twitter color="#fff" />
            </button>
            <button>
              {" "}
              <Youtube color="#fff" />
            </button>
            <button>
              {" "}
              <Instagram color="#fff" />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};
