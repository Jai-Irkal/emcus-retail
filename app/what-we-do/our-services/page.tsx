import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import HomeBanner from "@/public/banners/home-banner.jpeg"
import VivekBanner from "@/public/vivek/Hero_WhatWeDo_Services.webp"
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { OUR_SERVICES } from "@/src/data/our-services.data";
import OurServiceComponent from "@/src/components/OurServiceComponent/OurServiceComponent";
import Banner from "@/public/banners/what-we-do-banner.svg";

export default function WhatWeDo() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="WHAT WE DO" />
        <div className="relative w-full h-[300px] lg:h-[480px] 2xl:h-[600px] 2xl:bottom-0">
          <Image
            src={VivekBanner}
            alt="Banner"
            fill
            priority
            className="object-cover "
          />

          <div className="absolute inset-0 bg-black/30" />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 animate-fade-in-up">
            <div className="flex max-w-5xl flex-col items-center text-center">
              <h1 className="px-2 text-lg font-medium leading-tight text-white sm:text-2xl lg:px-20 lg:text-4xl">
                <span className='font-bold'>EFFICIENT</span> AND <span className='font-bold'>HIGH-QUALITY</span>
                <br className="" />
                FIRMWARE/SOFTWARE/TESTING SERVICES
              </h1>

              <div className="my-4 h-px w-32 bg-white sm:w-48 lg:my-6 lg:w-206 xl:w-200" />

              <span className="max-w-3xl px-2 text-[12px] leading-relaxed text-white sm:px-4 sm:text-[14px] lg:px-0 lg:text-[18px]">
                EMCUS is dedicated to offering efficient and reliable solutions to
                projects of any scale, while ensuring the highest level of quality in
                every deliverable.
              </span>
            </div>
          </div>
        </div>


        <div className="py-10 2xl:py-10 lg:pt-16 lg:pb-0">
          <div className="mx-auto flex w-full max-w-7xl flex-col px-6 sm:px-8 lg:px-0 md:gap-10 lg:gap-0">

            {OUR_SERVICES.map((item) => {
              return (
                <OurServiceComponent key={item.id} serviceItem={item} />
              );
            })}

          </div>
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
