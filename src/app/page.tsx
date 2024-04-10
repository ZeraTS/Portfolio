import { Bricolage_Grotesque } from "next/font/google";
import { TypewriterEffect } from "./components/typewriter-effect";
import { TextGenerateEffect } from "./components/text-generate-effect";
import { FloatingNav } from "./components/floating-navbar";
import { EvervaultCard, Icon } from "./components/evervault-card";
import { IconLayout2, IconMail, IconUsers, IconArrowRight, IconBolt, IconCopyright } from "@tabler/icons-react";
import { WavyBackground } from "./components/wavy-background";
import { TracingBeam } from "./components/tracing-beam";
import { InfiniteMovingCards } from "./components/infinite-moving-cards";
import { HoverEffect } from "./components/card-hover-effects";
import "./globals.css";
import { Tabs } from "./components/tabs";
import { Button } from "./components/moving-border";
import { Lanyard } from "./components/discord-info";



const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });
const tabs = [
  {
    title: "Data",
    value: "Fencing Tracker",
    content: (
      <div className="flex flex-col border border-neutral-800 bg-black rounded-xl gap-y-4 items-start p-6">
        <h1 className="text-2xl font-bold text-white">Fencing Tracker</h1>
        <p className="text-lg font-normal text-neutral-500">This is a product which scrapes and analyzes fencing data and provides it to its userbase for completely free.</p>
        <Button
        borderRadius="1.75rem"
        className="bg-transparent dark:bg-slate-900 text-xl px-5 text-white border-neutral-800 "
      >
        Website
      </Button>
        </div>
    ),
  },
  {
    title: "Security",
    value: "pathwise",
    content: (
      <div className="flex flex-col border border-neutral-800 bg-black rounded-xl gap-y-4 items-start p-6">
        <h1 className="text-2xl font-bold text-white">Pathwise AI</h1>
        <p className="text-lg font-normal text-neutral-500">The attempt of breaking into the security industry with my friend. Would detect unusual mouse movements on applications.</p>
        <Button
        borderRadius="1.75rem"
        className="bg-transparent dark:bg-slate-900 text-xl px-5 text-white border-neutral-800 "
      >
        Website
      </Button>
        </div>
    ),
  },
  {
    title: "Study",
    value: "AI Research",
    content: (
      <div className="flex flex-col border border-neutral-800 bg-black rounded-xl gap-y-4 items-start p-6">
        <h1 className="text-2xl font-bold text-white">AI Research</h1>
        <p className="text-lg font-normal text-neutral-500">An endeavor of me studying the methodology and effectiveness of neural networks and sub systems.</p>
        <Button
        borderRadius="1.75rem"
        className="bg-transparent dark:bg-slate-900 text-xl px-5 text-white border-neutral-800 "
      >
        Website
      </Button>
        </div>
    ),
  },
  {
    title: "Other",
    value: "wip",
    content: (
      <div className="flex flex-col border border-neutral-800 bg-black rounded-xl gap-y-4 items-start p-6">
        <h1 className="text-2xl font-bold text-white">Fencing Clubs</h1>
        <p className="text-lg font-normal text-neutral-500">Dedicated website towards helping fencers enter clubs for more experience.</p>
        <button
        className="bg-transparent dark:bg-slate-900 text-xl px-5 text-white border border-neutral-800 py-4 px-10 rounded-full cursor-not-allowed" 
        
      >
        Website
      </button>
        </div>
    ),
  },
];

 const socials = [
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
      link: "#home",
      icon: <IconLayout2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconBolt className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
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
        "Paul is one of the best UI designers in the market, and behind some of your favorite designs. One of the most trusted people when it comes to UI design. 10/10",
      name: "ShowerheadFD",
      title: "Nexus Pipe Developer",
    },
    {
      quote:
        "The best you can get for this kind of work. Paul's imagination is great, his prices are hard to beat, he will make sure that his clients are satisfied.",
      name: "Thundermods",
      title: "Entrepeneur",
    },
    {
      quote: "Definetely the best UI designer I've ever worked with. He's very professional and his work is amazing. Worth the price!",
      name: "John Doe",
      title: "Anonymous",
    },
    {
      quote:
        "Paul is a great UI designer. He's very professional and his work is amazing. I would recommend him to anyone.",
      name: "Jane Doe",
      title: "Anonymous",
    },
    {
      quote:
        "A cool guy, very professional and his work is amazing. I love working with him.",
      name: "John Doe",
      title: "Developer",
    },
  ];
  
  return ( <>

<main className={`${bricolageGrotesque.className} w-full items-center min-h-screen flex-col`}>
  <FloatingNav navItems={navItems} />  
  <TracingBeam className="min-h-screen overflow-y-hidden">
  <div className="flex flex-col w-full">

  <WavyBackground className="max-w-4xl h-auto mx-auto" id="home">
  <div className="h-[70rem] sm:h-[60rem] w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-[80%] sm:w-[70%] pt-20 md:pt-0">
        <div className="px-3 py-2 text-rose-600 justify-center ml-3 sm:ml-[180px] mb-5 text-center w-[90%] sm:w-[40%] items-center border-neutral-800 rounded-full shadow-lg opacity">
          <span> Thank God for Aceternity </span>
        </div>
      <TypewriterEffect  words={heading} />
        <TextGenerateEffect words={subheading} className="mt-5 text-white text-opacity-90"/>
        <div className="flex flex-row space-x-4 mt-10 justify-center">
        <button className="border text-md font-medium flex flex-row items-center relative border-neutral-800 dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-full transition hover:border-neutral-500">
          <span>Learn more</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-rose-600 to-transparent  h-px" />
          <IconArrowRight className="h-4 w-4 text-neutral-300 dark:text-white ml-2" />
        </button>
        </div>
      </div>
    </div>
  </WavyBackground>
  <div className="flex flex-col items-center w-full justify-center gap-y-[50px] mb-10" id="testimonials">
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
    <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-4 sm:grid-rows-1 sm:gap-x-4 gap-y-10 scale-90 sm:scale-100">
    <div className="border border-white/[0.2] dark:border-white/[0.2] bg-black flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-rose-600" />
 
      <EvervaultCard text=".NET" />
 
      <h2 className="dark:text-white text-white mb-10 text-sm px-5 font-light">
        .NET is a free, cross-platform, open source developer platform for building many different types of applications.
      </h2>

    </div>    
    <div className="border border-white/[0.2] dark:border-white/[0.2] bg-black flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-rose-600" />
 
      <EvervaultCard text="Framer" />
 
      <h2 className="dark:text-white text-white mb-10 px-5 text-sm font-light">
        Framer is a prototyping tool for teams to design, prototype, and collaborate all in one place.
      </h2>

    </div>    
    
    <div className="border border-white/[0.2] dark:border-white/[0.2] bg-black flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-rose-600" />
 
      <EvervaultCard text="Figma" />
 
      <h2 className="dark:text-white text-white mb-10 px-5  text-sm font-light">
        Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features.
      </h2>

    </div>    
    <div className="border border-white/[0.2] dark:border-white/[0.2] bg-black flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-rose-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-rose-600" />
 
      <EvervaultCard text="Next.JS" />
 
      <h2 className="dark:text-white text-white mb-10 px-5 text-sm font-light">
        Next.js is an open-source React front-end development web framework that empowers web development.
      </h2>

    </div>    
    </div>
  </div>

  <div className="flex flex-col items-center w-full justify-center gap-y-[30px] mb-[100px] sm:mb-[300px]" id="projects">
    <div className="flex flex-col items-center text-center sm:w-full justify-center w-[70%]">
    <h2 className="text-5xl dark:text-white font-bold text-white">Projects</h2>
    <p className="text-xl dark:text-white text-neutral-500 mt-2">Here are some of the projects Ive worked on.</p>
      </div>
    <div className="pt-[50px] mb-[600px]">
    <Tabs tabs={tabs} />
      </div>
    </div>
    <div className="flex flex-col items-center w-full justify-center gap-y-[0px] sm:gap-y-[30] mb-[50px] sm:mb-[100px]" id="contact">
    <div className="flex flex-col items-center text-center sm:w-[70%] justify-center w-[70%]">
    <h2 className="text-5xl dark:text-white font-bold text-white">Contact me</h2>
    <p className="text-xl dark:text-white text-neutral-500 mt-2 mb-[-100px] sm:mb-[-50px] sm:w-[70%] scale-90">If you want to get in touch</p>
      </div>
      <HoverEffect className="scale-[80%] sm:scale-[80%]" items={socials} />
    </div>

    <div className='flex sm:flex-row flex-col overflow-x-hidden items-center h-[130px] sm:h-[90px] justify-center gap-x-1 border border-neutral-800 border-t-1 border-l-0 border-r-0 border-b-0' id='footer'>
          <a className='flex flex-row items-center w-auto h-auto gap-x-2' href='https://instagram.com'>
            <IconCopyright className='h-6 w-6 text-white text-opacity-50 dark:text-white' />
            <span className='text-white text-opacity-50 font-normal '>Copyright 2024, Paulsoftworks llc</span>
            </a>
            <div className="flex flex-row items-center py-3 px-3  justify-end gap-x-4">
        <Lanyard/>
          </div>
    </div>

  </div>
  </TracingBeam>
    </main>

  </>
  );
}
