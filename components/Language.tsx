"use client";
import { useLanguage } from "@/store/orderStore";
import { useState } from "react";

export default function Language() {
  const { Language, changeToEn, changeToEs } = useLanguage((state) => state);
  const [open, setopen] = useState(false);

  const handleEn = () => {
    if (open) {
      setopen(false);
      changeToEn();
    }
  };

  const handleEs = () => {
    if (open) {
      setopen(false);
      changeToEs();
    }
  };

  return (
    <div
      onClick={() => {
        open ? setopen(false) : setopen(true);
      }}
      className={`${
        open ? " h-[96px]" : "h-[48px] "
      } transition-all flex flex-col-reverse  fixed z-10 bottom-0 w-[48px] left-10 mb-[2%] border-2 border-border-gray rounded-lg p-3 cursor-pointer overflow-hidden text-border-gray `}
    >
      <div
        onClick={() => {
          Language === "En" ? handleEn() : handleEs();
        }}
        className="w-[48px] h-[48px] mt-[5px] hover:text-white	"
      >
        {Language}
      </div>
      <div
        onClick={() => {
          Language === "En" ? handleEs() : handleEn();
        }}
        className="w-[48px] h-[48px] hover:text-white	"
      >
        {Language === "En" ? "Es" : "En"}
      </div>
    </div>
  );
}
