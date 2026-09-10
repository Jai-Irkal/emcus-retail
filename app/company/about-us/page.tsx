import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import GlobalPresence from "@/public/about-us/GlobalPresence.svg"
import OurMission from "@/public/about-us/OurMission.svg";
import OurVision from "@/public/about-us/OurVision.svg";
import { WHAT_MAKES_EMCUS_DIFFERENT } from "@/src/data/emcus-different.data";
import DifferenceCard from "@/src/components/cards/DifferenceCard";

export default function AboutUs() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="ABOUT US" />
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] 2xl:h-[600px] 2xl:bottom-0 overflow-hidden bg-[#011E62]">
          <div className="relative h-full w-full origin-[72%_48%]">
            <Image
              src={GlobalPresence}
              alt="Home Banner"
              fill
              priority
              className="object-contain lg:object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/50"></div>

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 animate-fade-in-up">
            <div className="flex max-w-5xl flex-col items-center text-center">
              <h1 className="px-2 text-lg font-medium leading-tight text-white sm:text-2xl lg:px-20 lg:text-4xl">
                YOUR <span className='font-bold'>GLOBAL PARTNER</span> FOR SAFER,
                <br className="" />
                SMARTER <span className='font-bold'>FIRE & SAFETY PRODUCTS</span>
              </h1>

              <div className="my-4 h-px w-full bg-white lg:my-6" />

              <span className="max-w-3xl px-2 text-[12px] leading-relaxed text-white sm:px-4 sm:text-[14px] lg:px-0 lg:text-[18px]">
                We work with customers around the world to turn complex fire & safety challenges into reliable, market-ready solutions.
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-[21px] text-[#2D7DBA] font-bold text-center w-full mt-8 px-10">ABOUT EMCUS</h1>
        <div className="w-full flex justify-center mt-1">
          <span className="px-10 text-justify lg:text-[18px] text-[#333333] font-regular">
            EMCUS Technology Solutions is a partner that specializes in designing and developing technologies for retail using solutions provided by OEMs and solution providers. We design and develop technologies for retail that include RFIDs, Auto-IDs, and POS solutions as well as IoT, mobility, and smart stores solutions. We offer services throughout the entire product lifecycle starting from the concept to development and deployment.
          </span>
        </div>
        <div className="lg:px-10 px-4 mt-6">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <div className="w-full rounded-2xl border-[#E2E2E2] bg-[#E6F4FF] border-1 py-6 px-6 shadow-l">
              <div className="flex items-center gap-4">
                <div className="lg:w-[50px] lg:h-[48px] bg-[#2D7DBA] p-1 px-2 rounded-[8px] flex items-center justify-center">
                  <Image
                    src={OurVision}
                    alt="Our Vision"
                    className="w-8 h-10 object-contain"
                  />
                </div>
                <h1 className="text-center text-[28px] font-bold text-black">Our Vision</h1>
              </div>
              <div className="mt-4 relative px-0 lg:pr-12 text-left lg:text-left font-regular">
                <p>
                  To be the technology partner fire & safety companies trust most—known
                  for engineering excellence, quality, compliance, & innovation.
                </p>
              </div>
            </div>
            <div className="w-full rounded-2xl border-[#E2E2E2] bg-[#E6EEFF] border-1 py-6 px-6 shadow-l">
              <div className="flex items-center gap-4">
                <div className="lg:w-[50px] lg:h-[48px] bg-[#2C4A94] p-1 px-2 rounded-[8px] flex items-center justify-center">
                  <Image
                    src={OurMission}
                    alt="Our Mission"
                    className="w-8 h-10 object-contain"
                  />
                </div>
                <h1 className="text-center text-[28px] font-bold text-black">Our Mission</h1>
              </div>
              <div className="mt-4 relative px-0 lg:pr-22 text-left lg:text-left font-regular">
                <p>Helping fire & safety businesses build safer, smarter, and more connected products through world-class engineering.</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[21px] text-[#2D7DBA] font-bold text-center w-full mt-8 px-10">WHAT MAKES EMCUS DIFFERENT</h1>
        <div className="w-full flex flex-wrap justify-center items-center gap-3 py-6">
          {WHAT_MAKES_EMCUS_DIFFERENT.map((item) => (
            <DifferenceCard
              item={item}
              key={item.id}
            />
          ))}
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
