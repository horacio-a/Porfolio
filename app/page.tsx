import {
  Header,
  HomePage,
  Scroll,
  Language,
  Project,
  Contact,
  Me,
  Carousel,
} from "@/components/index";

export default function Home() {
  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950"
          style={{
            backgroundImage:
              "linear-gradient(38.73deg,rgba(227, 151, 195, 0.05)  0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(237, 244, 129, 0.05)  100%)",
          }}
        ></div>
      </div>
      <div className="flex flex-col  items-center">
        <Header />
        <Scroll />
        <Language />
        <Carousel />
        <div className="relative z-0">
          <HomePage />
          <Me />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
}
