"use client";

import { MeText } from "@/HardCodeStings/Me";
import { ProjectText } from "@/HardCodeStings/Project";
import { useLanguage, useProjectCarusel } from "@/store/orderStore";
import Flicking from "@egjs/react-flicking";

export default function Carousel() {
  const { Language } = useLanguage((state) => state);
  const { showCarusel, changeCaruselState } = useProjectCarusel(
    (state) => state
  );
  const handelClose = () => {
    changeCaruselState();
  };
  if (showCarusel) {
    return (
      <>
        <div
          id="carusel"
          className="fixed z-50 w-full h-full backdrop-blur-sm flex justify-center items-center "
        >
          <div className="w-5/6 h-[70%] p-8 bg-black">
            <Flicking align="prev" bound={true}>
              {Object.keys(ProjectText[Language]).map((projectId) => (
                <div key={projectId} className="w-[100%]">
                  <h2>{ProjectText[Language][projectId].name}</h2>
                  <p>{ProjectText[Language][projectId].Stack.join(", ")}</p>
                  <p>
                    <a href={ProjectText[Language][projectId].linkGithub}>
                      {ProjectText[Language][projectId].linkGithub}
                    </a>
                  </p>
                  <p>
                    Enlace al sitio web:{" "}
                    <a href={ProjectText[Language][projectId].linkWeb}>
                      {ProjectText[Language][projectId].linkWeb}
                    </a>
                  </p>
                  <p>{ProjectText[Language][projectId].textPresen}</p>
                </div>
              ))}
            </Flicking>
          </div>
          <div
            className="w-full h-[100%] fixed z-60 "
            onClick={handelClose}
          ></div>
        </div>
      </>
    );
  }
}
