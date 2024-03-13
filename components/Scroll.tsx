"use client";

export default function Scroll() {
  return (
    <div className="fixed bottom-0 right-3	w-fit h-[20%] mb-[2%]">
      <div className="table-cell align-middle w-[100%] h-[100%]">
        <div className="text-white rotate-90 mb-[45px] text-xs tracking-[0.3rem] font-medium uppercase text-center">
          Scroll
        </div>
        <div id="scroll-down"></div>
      </div>
    </div>
  );
}
