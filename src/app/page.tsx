import Image from "next/image";
import '@radix-ui/themes/styles.css';
import { Bricolage_Grotesque } from "next/font/google";
import { TypewriterEffect } from "./components/typewriter-effect";
import { TextGenerateEffect } from "./components/text-generate-effect";
import { FloatingNav } from "./components/floating-navbar";
import { IconLayout2, IconMail, IconUsers, IconArrowRight, IconBolt } from "@tabler/icons-react";
import { WavyBackground } from "./components/wavy-background";
import { EvervaultCard, Icon } from "./components/evervault-card";
import { TracingBeam } from "./components/tracing-beam";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });


export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconLayout2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: <IconBolt className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  const subheading = `Hello, I'm a front-end developer stationed in the USA. I specialize in building and designing websites. My favorite food is Subway and my favorite animals are dogs.`;

  const heading = [
    {
      text: "Welcome",
      className: "text-white text-4xl sm:text-6xl",
    },
    {
      text: "to",
      className: "text-white text-4xl sm:text-6xl",

    },
    {
      text: "Paul's",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-rose-500 dark:from-[#f9a8d4] dark:to-[#f8b0c7] dark:text-white text-4xl sm:text-6xl",
    },
    {
      text: "Portfolio.",
      className: "text-white text-4xl sm:text-6xl",

    },
  ];
  const TitleComponent = ({
    title,
  }: {
    title: string;
  }) => (
    <div className="flex space-x-2 items-center">
      <p>{title}</p>
    </div>
  );
  return ( <>

<main className={`${bricolageGrotesque.className} w-full items-center flex-col`}>
  <FloatingNav navItems={navItems} />  
  <TracingBeam className="">
  
  <WavyBackground className="max-w-4xl mx-auto">
  <div className="h-[70rem] sm:h-[60rem] w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-[80%] sm:w-[70%] pt-20 md:pt-0">
      <TypewriterEffect  words={heading} />
        <TextGenerateEffect words={subheading} className="mt-5"/>
        <div className="flex flex-row space-x-4 mt-5 justify-center">
        <button className="border text-md font-medium flex flex-row items-center relative border-neutral-800 dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-full transition hover:border-neutral-500">
          <span>Learn more</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-rose-600 to-transparent  h-px" />
          <IconArrowRight className="h-4 w-4 text-neutral-300 dark:text-white ml-2" />
        </button>
        </div>
      </div>
    </div>
  </WavyBackground>
  <div className="flex flex-col items-center text-center w-full justify-center gap-y-[50px] mb-10" id="about">

    </div>
  <div className="flex flex-col items-center text-center w-full justify-center gap-y-[50px] mb-10" id="skills">
    <div className="flex flex-col items center sm:w-full justify-center w-[70%]">
    <h2 className="text-5xl dark:text-white font-bold text-white">Skills</h2>
    <p className="text-xl dark:text-white text-neutral-500 mt-2">Here are some of the technologies I&apos;ve worked with.</p>
      </div>
    <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-4 sm:grid-rows-1 sm:gap-x-4 gap-y-10">
    <div className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-rose-600" />
 
      <EvervaultCard text=".NET" />
 
      <h2 className="dark:text-white text-white mb-10 text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>

    </div>    
    <div className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-rose-600" />
 
      <EvervaultCard text="XAML" />
 
      <h2 className="dark:text-white text-white mb-10  text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>

    </div>    
    <div className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-rose-600" />
 
      <EvervaultCard text="Figma" />
 
      <h2 className="dark:text-white text-white mb-10  text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>

    </div>    
    <div className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-rose-600" />
 
      <EvervaultCard text="Next.JS" />
 
      <h2 className="dark:text-white text-white mb-10 text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>

    </div>    
    </div>
  </div>
  </TracingBeam>
    </main>
  </>
  );
}
