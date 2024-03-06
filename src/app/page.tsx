import { Bricolage_Grotesque } from "next/font/google";
import { TypewriterEffect } from "./components/typewriter-effect";
import { TextGenerateEffect } from "./components/text-generate-effect";
import { FloatingNav } from "./components/floating-navbar";
import { EvervaultCard, Icon } from "./components/evervault-card";
import { IconLayout2, IconMail, IconUsers, IconArrowRight, IconBolt, IconCopyright } from "@tabler/icons-react";
import { WavyBackground } from "./components/wavy-background";
import { TracingBeam } from "./components/tracing-beam";
import { InfiniteMovingCards } from "./components/infinite-moving-cards";
import { PinContainer } from "./components/3d-pin";
import { HoverEffect } from "./components/card-hover-effects";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });


 const projects = [
  {
    title: "Instagram",
    description:
      "A photo and video-sharing social networking service owned by Meta Platforms.",
    link: "https://instagram.com",
  },
  {
    title: "Discord",
    description:
      "A proprietary freeware VoIP application and digital distribution platform designed for creating communities.",
    link: "https://discord.com",
  },
  {
    title: "GitHub",
    description:
      "A global company that provides hosting for software development and version control using Git.",
    link: "https://google.com",
  },
  {
    title: "LinkedIn",
    description:
      "A business and employment-oriented online service that operates via websites and mobile apps.",
    link: "https://meta.com",
  },
  {
    title: "Telegram",
    description:
      "A freeware, cross-platform, cloud-based instant messaging software and application service.",
    link: "https://amazon.com",
  },
  {
    title: "WhatsApp",
    description:
      "A freeware, cross-platform messaging and Voice over IP service owned by Meta Platforms.",
    link: "https://microsoft.com",
  },
];


export default function Home() {

  
  const navItems = [
    {
      name: "Home",
      link: "/home",
      icon: <IconLayout2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
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

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return ( <>
  <TracingBeam className="">
<main className={`${bricolageGrotesque.className} w-full items-center flex-col`}>
  <FloatingNav navItems={navItems} />  
  
  <WavyBackground className="max-w-4xl mx-auto">
  <div className="h-[70rem] sm:h-[60rem] w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-[80%] sm:w-[70%] pt-20 md:pt-0">
      <TypewriterEffect  words={heading} />
        <TextGenerateEffect words={subheading} className="mt-5 text-white text-opacity-90"/>
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
  <div className="flex flex-col items-center w-full justify-center gap-y-[50px] mb-10" id="about">
  <div className="flex flex-col items center text-center  sm:w-full justify-center w-[70%]">
    <h2 className="text-5xl dark:text-white font-bold text-white">Testimonials</h2>
    <p className="text-xl dark:text-white text-neutral-500 mt-2">Reputable commentary coming from people Ive worked with. </p>
   </div>
      <div className="flex flex-col items-center antialiased overflow-hidden w-full justify-center mb-[300px]" id="testimonials">
    <InfiniteMovingCards items={testimonials} direction="right" speed="normal"/>
    </div>
    </div>

  <div className="flex flex-col items-center text-center w-full justify-center gap-y-[50px] mb-[300px]" id="skills">
    <div className="flex flex-col items center sm:w-full justify-center w-[70%]">
    <h2 className="text-5xl dark:text-white font-bold text-white">Skills</h2>
    <p className="text-xl dark:text-white text-neutral-500 mt-2">Here are some of the technologies I&apos;ve worked with.</p>
      </div>
    <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-4 sm:grid-rows-1 sm:gap-x-4 gap-y-10 scale-80 sm:scale-100">
    <div className="border border-white/[0.2] dark:border-white/[0.2] bg-black flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
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
    <div className="border border-white/[0.2] dark:border-white/[0.2] bg-black flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
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
    <div className="border border-white/[0.2] dark:border-white/[0.2] bg-black flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
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
    <div className="border border-white/[0.2] dark:border-white/[0.2] bg-black flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
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

  <div className="flex flex-col items-center w-full justify-center gap-y-[30px] mb-[50px] sm:mb-[300px]" id="projects">
    <div className="flex flex-col items-center text-center sm:w-full justify-center w-[70%]">
    <h2 className="text-5xl dark:text-white font-bold text-white">Projects</h2>
    <p className="text-xl dark:text-white text-neutral-500 mt-2">Here are some of the projects Ive worked on.</p>
      </div>
    <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-3 sm:grid-rows-1 sm:gap-x-4 sm:scale-125">
    <PinContainer
        title="https://fluxteam.xyz/"
        href="https://fluxteam.xyz/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[8rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Fluxus ROBLOX
          </h3>
          <div className="text-base font-normal">
            <span className="text-white text-opacity-70 text-sm ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="https://fencingtracker.com/"
        href="https://fencingtracker.com/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[8rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Fencing Tracker
          </h3>
          <div className="text-base font-normal">
            <span className="text-white text-opacity-70 text-sm ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="https://fluxteam.xyz/"
        href="https://fluxteam.xyz/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[8rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Fluxus ROBLOX
          </h3>
          <div className="text-base font-normal">
            <span className="text-white text-opacity-70 text-sm ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
        </div>
      </PinContainer>
      </div>
    </div>
    <div className="flex flex-col items-center w-full justify-center gap-y-[0px] sm:gap-y-[30] mb-[50px] sm:mb-[300px]" id="contact">
    <div className="flex flex-col items-center text-center sm:w-[70%] justify-center w-[70%]">
    <h2 className="text-5xl dark:text-white font-bold text-white">Contact me</h2>
    <p className="text-xl dark:text-white text-neutral-500 mt-2 sm:w-[70%] scale-90">If you want to get in touch</p>
      </div>
      <HoverEffect className="scale-[80%] sm:scale-[100%]" items={projects} />
    </div>

    <div className='flex flex-row items-center h-[100px] justify-center gap-x-4 border border-neutral-800 border-t-1 border-l-0 border-r-0 border-b-0' id='footer'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center justify-start gap-x-4'>
          <a className='flex flex-row items-center w-auto h-auto gap-x-2' href='https://instagram.com'>
            <IconCopyright className='h-6 w-6 text-white text-opacity-50 dark:text-white' />
            <span className='text-white text-opacity-50 font-normal '>Copyright 2024, Paulsoftworks llc</span>
            </a>
        </div>
      </div>
    </div>
    </main>
    </TracingBeam>

  </>
  );
}
