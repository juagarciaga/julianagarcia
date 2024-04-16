"use client";
import Intro from "./components/intro";
import Skills from "./components/skills";
import AboutMe from "./components/about-me";
import Certifications from "./components/certifications";
import { greyBg, bgWater } from "./constants";
import Blog from "./components/blog";

export default function Home() {
  const bgImg = (bg: string) => (
    {
    backgroundImage: `url(/${bg}.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });

  const leftColumClassName = "col-span-12 lg:col-span-3 bg-slate-300 flex flex-col items-center gap-1 text-black text-center py-3 px-10"

  return (
    <main className="grid grid-cols-12 w-100 min-h-screen text-black ">
      <div
        className={leftColumClassName}
        style={{ background: greyBg }}
      >
        <Intro />
      </div>
      <div
        className="col-span-12 lg:col-span-9 bg-white flex flex-col justify-around items-center p-10"
        style={bgImg("bg") }
      >
        <AboutMe />
      </div>
      <div
        className={leftColumClassName}
        style={{ background: greyBg }}
      />
      <div
        className="col-span-12 lg:col-span-9  flex flex-col justify-around items-center p-10"
        style={{ background: greyBg }}
      >
        <Skills />
      </div>
      <div
        className={leftColumClassName}
        style={{ background: greyBg }}
      />
      <div
        className="col-span-12 lg:col-span-9 flex flex-col justify-around items-center p-10"
        style={{ background: bgWater }}
      >
        <Certifications />
      </div>
      <div
        className={leftColumClassName}
        style={{ background: greyBg }}
      />
      <div
        className="col-span-12 lg:col-span-9 flex flex-col justify-around items-center p-10"
        style={{ background: greyBg }}
      >
        <Blog />
      </div>
    </main>
  );
}
