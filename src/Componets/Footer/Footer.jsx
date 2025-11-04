import React from "react";
import "boxicons/css/boxicons.min.css";
import { footer } from "framer-motion/client";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between lg:mt-[15%] mt-[25%] py-8 lg:px-32 md:px-16 px-8 border-t-[0.3px] border-[#babaff]">
      <img src="/images/illu-text.png" alt="" className="h-10" />
      <img src="/images/illu-logo.png" alt="" className="h-16 md:inline hidden" />
      <div className="flex gap-4">
        <a
          href="#"
          className="text-2xl md:text-3xl hover:text-violet-600 duration-300"
        >
          <i className="bxr  bx-x"></i>
        </a>
      </div>
      <a
        href="#"
        className="text-2xl md:text-3xl hover:text-violet-600 duration-300"
      >
        <i className="bxl bx-discord"></i>
      </a>
      <a
        href="#"
        className="text-2xl md:text-3xl hover:text-violet-600 duration-300"
      >
        <i className="bxl bx-linkedin"></i>
      </a>
      <a
        href="#"
        className="text-2xl md:text-3xl hover:text-violet-600 duration-300"
      >
        <i className="bxl bx-youtube"></i>
      </a>
    </footer>
  );
};

export default Footer;
