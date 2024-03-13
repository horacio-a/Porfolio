"use client";
import { Events, scroller } from "react-scroll";

import {
  CopilotIcon,
  GitBranchIcon,
  CommentDiscussionIcon,
  TerminalIcon,
} from "@primer/octicons-react";
import { motion } from "framer-motion";
import { HeaderText } from "@/HardCodeStings/Header";
import { useLanguage } from "@/store/orderStore";

export default function Header() {
  const { Language } = useLanguage((state) => state);
  const scrollTo = (name: string) => {
    let goToContainer = new Promise<void>((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo(name, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  };

  return (
    <motion.header
      initial={{ width: "10%" }}
      animate={{ width: "83%" }}
      transition={{
        duration: 0.2,
      }}
      className="backdrop-blur-3xl fixed z-10 w-5/6 h-14 max-w-screen-xl rounded-lg mt-6 border-2 border-border-gray flex items-center justify-end"
    >
      <div className="w-[50%] h-[100%] flex items-center">
        <div className="ml-[5%] mr-2">
          <TerminalIcon size={24} fill="#C8BFBF" />
        </div>
        <div className="text-icons-gray">./HA</div>
      </div>
      <div className="w-[45%] mr-[5%] h-[100%] flex items-center justify-end">
        <motion.div
          whileHover={{ width: "auto" }}
          className="conteinerIcon w-[24px] h-[24px] ml-[5%] text-icons-gray flex cursor-pointer"
          onClick={() => {
            scrollTo("me");
          }}
        >
          <CopilotIcon size={24} fill="#C8BFBF" />
          <div className="ml-2">{HeaderText[Language].me}</div>
        </motion.div>
        <motion.div
          whileHover={{ width: "auto" }}
          className="conteinerIcon w-[24px] h-[24px] ml-[5%] text-icons-gray flex cursor-pointer"
          onClick={() => {
            scrollTo("project");
          }}
        >
          <GitBranchIcon size={24} fill="#C8BFBF" />
          <div className="ml-2">{HeaderText[Language].project}</div>
        </motion.div>
        <motion.div
          whileHover={{ width: "auto" }}
          className="conteinerIcon w-[24px] h-[24px] ml-[5%] text-icons-gray flex cursor-pointer"
          onClick={() => {
            scrollTo("contact");
          }}
        >
          <CommentDiscussionIcon size={24} fill="#C8BFBF" />
          <div className="ml-2">{HeaderText[Language].contact}</div>
        </motion.div>
      </div>
    </motion.header>
  );
}
