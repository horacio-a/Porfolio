"use client";
import { AutoPlay } from "@egjs/flicking-plugins";

import { Element } from "react-scroll";
import { useLanguage } from "@/store/orderStore";
const IbmPlexSans = IBM_Plex_Sans({ weight: "500", subsets: ["latin"] });
import { IBM_Plex_Sans } from "next/font/google";
import { MeText } from "@/HardCodeStings/Me";
import Flicking, { MoveEvent, WillChangeEvent } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking-inline.css";

export default function Me() {
  const { Language } = useLanguage((state) => state);
  const _plugins = [new AutoPlay({ duration: 2000 })];
  return (
    <Element
      className=" w-full h-dvh flex flex-col justify-center items-center "
      name="me"
    >
      <div className=" w-5/6 h-full flex items-center justify-center">
        <div className="w-[35%]">
          <div className="w-[100%] py-4  text-lg ">
            {MeText[Language].Introduction}
          </div>
          <div className=" w-[100%]  py-4 px-4 text-lg overflow-hidden">
            <Flicking align="prev" circular={true} plugins={_plugins}>
              {MeText[Language].Tecnologia.map((item) => {
                return (
                  <div
                    style={{
                      backgroundColor: `${item.color}`,
                      color: `${item.textColor}`,
                    }}
                    className={` w-[33%] h-[50px] mx-4 rounded-lg	`}
                    key={item.name}
                  >
                    <div className="w-[100%] h-[100%] flex justify-evenly	items-center ">
                      <img style={{ height: item.size }} src={item.Img} />
                      <div>{item.name}</div>
                    </div>
                  </div>
                );
              })}
            </Flicking>
          </div>
        </div>
        <div className="w-[35%]">
          <div className="w-[100%] py-4  text-lg ">
            <div>
              <svg
                id="infinity"
                width="300px"
                height="200px"
                viewBox="0 0 187.3 93.7"
              >
                <defs>
                  <linearGradient id="0" x1="0" y1="0.5" x2="1" y2="0.5">
                    <stop offset="0%" stopColor="#edf481" />
                    <stop offset="24.25%" stopColor="#f5d9ab" />
                    <stop offset="48.5%" stopColor="#f0c3b3" />
                    <stop offset="97%" stopColor="#e397c3" />
                  </linearGradient>
                </defs>
                <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
                <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
              </svg>
              <svg
                id="infinity"
                width="300px"
                height="200px"
                viewBox="0 0 187.3 93.7"
              >
                <defs>
                  <linearGradient id="0" x1="0" y1="0.5" x2="1" y2="0.5">
                    <stop offset="0%" stopColor="#edf481" />
                    <stop offset="24.25%" stopColor="#f5d9ab" />
                    <stop offset="48.5%" stopColor="#f0c3b3" />
                    <stop offset="97%" stopColor="#e397c3" />
                  </linearGradient>
                </defs>
                <path
                  stroke="url(#0)"
                  d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                />
                <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
