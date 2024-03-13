"use client";

import { IBM_Plex_Sans } from "next/font/google";
import { ContactText } from "@/HardCodeStings/Contact";
import { Element } from "react-scroll";
import { useLanguage } from "@/store/orderStore";
const IbmPlexSans = IBM_Plex_Sans({ weight: "500", subsets: ["latin"] });
import { motion } from "framer-motion";
import { MarkGithubIcon } from "@primer/octicons-react";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { LiaLinkedin, LiaWhatsapp } from "react-icons/lia";

export default function Contact() {
  const { Language } = useLanguage((state) => state);

  return (
    <Element
      className=" w-full h-dvh flex flex-col justify-center items-center "
      name="contact"
    >
      <div className={IbmPlexSans.className + " text-5xl py-4 text-bg-main"}>
        {ContactText[Language].Title}
      </div>
      <div className="text-lg">{ContactText[Language].SubTitle}</div>
      <a
        href={ContactText[Language].Link}
        target="blank"
        className=" w-1/4 h-14 max-w-screen-xl rounded-lg mt-6 border-2 border-border-gray flex items-center px-6 justify-between"
      >
        <div className="flex items-center">
          <LiaWhatsapp size={26} fill="#25D366" />
          <div className="ml-4">Whatsapp</div>
        </div>
        <FiExternalLink size={16} color="#817C7C" />
      </a>

      <a
        href="https://www.linkedin.com/in/horacio-albornoz-82606923a/"
        target="blank"
        className=" w-1/4 h-14 max-w-screen-xl rounded-lg mt-6 border-2 border-border-gray flex items-center px-6 justify-between"
      >
        <div className="flex items-center">
          <FaLinkedin size={22} color="0077b5" />
          <div className="ml-4">Linkedin</div>
        </div>
        <FiExternalLink size={16} color="#817C7C" />
      </a>
      <a
        href="https://github.com/horacio-a"
        target="blank"
        className=" w-1/4 h-14 max-w-screen-xl rounded-lg mt-6 border-2 border-border-gray flex items-center px-6 justify-between"
      >
        <div className="flex items-center">
          <MarkGithubIcon size={22} />
          <div className="ml-4">Github</div>
        </div>
        <FiExternalLink size={16} color="#817C7C" />
      </a>
      <a
        href="https://discord.com/users/237268062183751682"
        target="blank"
        className=" w-1/4 h-14 max-w-screen-xl rounded-lg mt-6 border-2 border-border-gray flex items-center px-6 justify-between"
      >
        <div className="flex items-center">
          <FaDiscord size={22} fill="#5865F2" />
          <div className="ml-4">Discord</div>
        </div>
        <FiExternalLink size={16} color="#817C7C" />
      </a>
    </Element>
  );
}
