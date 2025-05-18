import Link from "next/link";
import { DotBackground } from "./ui/Dotbackground";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="pb-20 pt-36">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <DotBackground />

      <div className="flex justify-center relative my-20 z-10">
        <div className="mas-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Here is how I work with Next.js!
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Kourosh, a Next.js Developer based in Austria.
          </p>

          <Link href="#about">
            <MagicButton
              title="see my work"
              icon={<FaLocationArrow />}
              iconPosition="right"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
