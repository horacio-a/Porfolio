"use client";
import { useLanguage, useProjectCarusel } from "@/store/orderStore";
import { ProjectText } from "@/HardCodeStings/Project";
import { IBM_Plex_Sans } from "next/font/google";
import { Chip, Carousel } from ".";
const IbmPlexSans = IBM_Plex_Sans({ weight: "500", subsets: ["latin"] });
import { Element } from "react-scroll";
import { motion } from "framer-motion";

export default function Project() {
  const { Language } = useLanguage((state) => state);
  const { changeCaruselState } = useProjectCarusel((state) => state);

  const handelProjectClick = () => {
    changeCaruselState();
  };

  return (
    <>
      <Element
        className="w-full  flex flex-col justify-center items-center"
        name="project"
      >
        <div className="w-[100vh] h-[125vh] max-w-screen-lg grid grid-cols-3 grid-rows-4 gap-5">
          <motion.div
            onClick={handelProjectClick}
            whileHover={{ scale: 1.05 }}
            className=" cursor-pointer col-span-2 border-2 border-border-gray overflow-hidden rounded-lg flex justify-between	"
          >
            <img
              className="rounded-lg aspect-square h-[100%]"
              src="/imgs/legrandpatron.png"
              alt=""
            />
            <div className="w-[50%]">
              <div
                className={
                  IbmPlexSans.className +
                  " font-medium text-3xl text-center mt-4"
                }
              >
                {ProjectText[Language].LGP.name}
              </div>
              <div className="flex justify-center my-4">
                {ProjectText[Language].LGP.Stack.map((item) => {
                  return <Chip key={item} Text={item} />;
                })}
              </div>
              <div className="text-center text-[1.5vh] px-8">
                {ProjectText[Language].LGP.textPresen}
              </div>
            </div>
          </motion.div>
          <motion.div
            onClick={handelProjectClick}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer row-span-2 col-start-3 border-2 border-border-gray overflow-hidden rounded-lg"
          >
            <img
              className="rounded-lg aspect-square w-[100%]"
              src="/imgs/mindfulmind.png"
              alt=""
            />
            <div className="h-[50%]">
              <div
                className={
                  IbmPlexSans.className +
                  " font-medium text-3xl text-center mt-4"
                }
              >
                {ProjectText[Language].MFM.name}
              </div>
              <div className="flex justify-center my-4">
                {ProjectText[Language].MFM.Stack.map((item) => {
                  return <Chip key={item} Text={item} />;
                })}
              </div>
              <div className="text-center text-[1.5vh] px-8">
                {ProjectText[Language].MFM.textPresen}
              </div>
            </div>
          </motion.div>
          <motion.div
            onClick={handelProjectClick}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer row-span-2 row-start-2 border-2 border-border-gray overflow-hidden rounded-lg"
          >
            <img
              className="rounded-lg aspect-square w-[100%]"
              src="/imgs/mindfulmind.png"
              alt=""
            />
            <div className="h-[50%]">
              <div
                className={
                  IbmPlexSans.className +
                  " font-medium text-3xl text-center mt-4"
                }
              >
                {ProjectText[Language].NC.name}
              </div>
              <div className="flex justify-center my-4">
                {ProjectText[Language].NC.Stack.map((item) => {
                  return <Chip key={item} Text={item} />;
                })}
              </div>
              <div className="text-center text-[1.5vh] px-8">
                {ProjectText[Language].NC.textPresen}
              </div>
            </div>
          </motion.div>
          <motion.div
            onClick={handelProjectClick}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer row-start-2 border-2 border-border-gray overflow-hidden rounded-lg"
          >
            <div
              className={
                IbmPlexSans.className + " font-medium text-3xl text-center mt-4"
              }
            >
              {ProjectText[Language].CP.name}
            </div>
            <div className="flex justify-center my-4">
              {ProjectText[Language].CP.Stack.map((item) => {
                return <Chip key={item} Text={item} />;
              })}
            </div>
            <div className="text-center text-[1.5vh] px-8">
              {ProjectText[Language].CP.textPresen}
            </div>
          </motion.div>
          <motion.div
            onClick={handelProjectClick}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer col-span-2 col-start-2 row-start-3 border-2 border-border-gray overflow-hidden rounded-lg flex justify-between"
          >
            <img
              className="rounded-lg aspect-square h-[100%]"
              src="/imgs/legrandpatron.png"
              alt=""
            />
            <div className="w-[50%]">
              <div
                className={
                  IbmPlexSans.className +
                  " font-medium text-3xl text-center mt-4"
                }
              >
                {ProjectText[Language].WT.name}
              </div>
              <div className="flex justify-center my-4">
                {ProjectText[Language].WT.Stack.map((item) => {
                  return <Chip key={item} Text={item} />;
                })}
              </div>
              <div className="text-center text-[1.5vh] px-8">
                {ProjectText[Language].WT.textPresen}
              </div>
            </div>
          </motion.div>
          <motion.div
            onClick={handelProjectClick}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer col-span-2 row-start-4 border-2 border-border-gray overflow-hidden rounded-lg flex justify-between"
          >
            <img
              className="rounded-lg aspect-square h-[100%]"
              src="/imgs/legrandpatron.png"
              alt=""
            />
            <div className="w-[50%]">
              <div
                className={
                  IbmPlexSans.className +
                  " font-medium text-3xl text-center mt-4"
                }
              >
                {ProjectText[Language].CW.name}
              </div>
              <div className="flex justify-center my-4">
                {ProjectText[Language].CW.Stack.map((item) => {
                  return <Chip key={item} Text={item} />;
                })}
              </div>
              <div className="text-center text-[1.5vh] px-8">
                {ProjectText[Language].CW.textPresen}
              </div>
            </div>
          </motion.div>
          <motion.div
            onClick={handelProjectClick}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer col-start-3 row-start-4 border-2 border-border-gray overflow-hidden rounded-lg"
          >
            <div
              className={
                IbmPlexSans.className + " font-medium text-3xl text-center mt-4"
              }
            >
              {ProjectText[Language].UH.name}
            </div>
            <div className="flex justify-center my-4">
              {ProjectText[Language].UH.Stack.map((item) => {
                return <Chip key={item} Text={item} />;
              })}
            </div>
            <div className="text-center text-[1.5vh] px-8">
              {ProjectText[Language].UH.textPresen}
            </div>
          </motion.div>
        </div>
      </Element>
    </>
  );
}
