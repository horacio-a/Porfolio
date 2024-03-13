"use client";

import { IBM_Plex_Sans } from "next/font/google";
const IbmPlexSans = IBM_Plex_Sans({ weight: "500", subsets: ["latin"] });
import { useLanguage } from "@/store/orderStore";
import { HomeText } from "@/HardCodeStings/Home";

export default function Home() {
  const { Language } = useLanguage((state) => state);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1
        className={
          IbmPlexSans.className + " max-w-[1000px] px-36 text-6xl text-center"
        }
      >
        {HomeText[Language].Title}
      </h1>
      <h2
        className={IbmPlexSans.className + " px-36 text-2xl pt-5 text-center"}
      >
        {HomeText[Language].SubTitle}
      </h2>
    </div>
  );
}
