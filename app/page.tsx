import HeaderComponent from "../src/components/HeaderComponent/HeaderComponent";
import TextBanner from "@/src/components/HomeComponents/TextBanner";
import Image from "next/image";
import { RETAIL_SYSTEMS_PORTFOLIO } from "@/src/data/portfolio.data";
import { CORE_SERVICES } from "@/src/data/core-services.data";
import { WHY_EMCUS } from "@/src/data/why-emcus.data";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import PortfolioComponent from "@/src/components/PortfolioComponent/PortfolioComponent";
import CoreServiceBanner from "@/public/core-services/core-services-img.svg"
import CoreServicesCard from "@/src/components/cards/CoreServicesCard";
import CarouselComponent from "@/src/components/Carousel/CarouselComponent";
import ScrollFadeIn from "@/src/animated-components/ScrollFadeIn/ScrollFadeIn";
import One from "@/public/carousel/one.svg";
import CoreServicesScrollSection from "@/src/components/CoreServiceScrollSection/CoreServicesScrollSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="HOME" />
        <div className="relative w-full h-[300px] lg:h-[480px] 2xl:h-[600px] 2xl:bottom-0">
          <Image
            src={One}
            alt="Banner"
            fill
            priority
            className="object-cover "
          />

          <div className="absolute inset-0 bg-black/30" />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
            <div className="flex max-w-5xl flex-col items-center text-center animate-fade-in-up">
              <h1 className="px-2 text-lg font-medium leading-tight text-white sm:text-2xl lg:px-20 lg:text-4xl">
                UNIQUE <span className='font-bold'>SOLUTIONS</span> FOR A UNIQUE <span className='font-bold'>YOU</span>
              </h1>

              <div className="my-4 h-px w-32 bg-white sm:w-48 lg:my-6 lg:w-206 xl:w-200" />

              <span className="max-w-3xl px-2 text-[12px] leading-relaxed text-white sm:px-4 sm:text-[14px] lg:px-0 lg:text-[18px]">
                We at EMCUS understand that every requirement is unique, and we tailor our solutions to your specific needs.
              </span>
            </div>
          </div>
        </div>
        <TextBanner text="EMCUS Scanning & Mobility is a software-focused company specializing in top-tier software development tailored for the retail industry." />
        <h1 className="text-[21px] xl:text-[21px] text-[#2D7DBA] font-bold text-center w-full mt-10 lg:-mt-35 leading-none">RETAIL SYSTEMS PORTFOLIO</h1>
        {/* Portfolio Grid */}
        <div className=" lg:mt-0 py-6">
          <PortfolioComponent />
        </div>

        {/* Pin / Sticky Section Container */}
        <CoreServicesScrollSection />

        <div className="mt-6 2xl:-mt-0 2xl:z-200 2xl:-mt-25">
          <h1 className="text-[21px] text-[#2D7DBA] font-bold text-center w-full">WHY EMCUS?</h1>
          <div className="flex flex-col md:flex-row justify-center gap-0 mt-3">

            {WHY_EMCUS.map((item) => {
              return (
                <div key={item.id} className={`${item.id % 2 !== 0 ? 'bg-[#2D7DBA]' : 'bg-[#2C4A94]'} text-center md:text-left px-8 py-10 flex-1`}>
                  <h2 className="text-[18px] font-bold text-center text-white">
                    {item.title}
                  </h2>

                  <p className="text-[18px] mt-3 font-regular text-white">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
