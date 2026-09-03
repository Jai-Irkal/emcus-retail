import FooterComponent from '@/src/components/FooterComponent/FooterComponent';
import OurServiceComponent from '@/src/components/OurServiceComponent/OurServiceComponent';
import { OUR_SERVICES } from '@/src/data/our-services.data';
import React from 'react'
import Image from 'next/image';
import HeaderComponent from '@/src/components/HeaderComponent/HeaderComponent';
import Banner from "@/public/banners/what-we-do-banner.svg"
import VivekBanner from "@/public/vivek/Hero_WhatWeDo_TechnologyExpertise.webp";
import { TECHNOLOGY_TOOLS } from '@/src/data/technology-skillset.data';
import TechnologyExpertiseCard from '@/src/components/cards/TechnologyExpertiseCard';
import { TECHNOLOGY_EXPERTISE } from '@/src/data/technology-expertise.data';
import TechnologyTools from '@/src/components/cards/TechnologyToolsCard';

const page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="WHAT WE DO" />
        <div className="relative w-full h-[300px] lg:h-[480px] 2xl:h-[600px]">
          <Image
            src={VivekBanner}
            alt="Banner"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 animate-fade-in-up">
            <div className="flex max-w-5xl flex-col items-center text-center">
              <h1 className="px-2 text-lg font-medium leading-tight text-white sm:text-2xl lg:px-20 lg:text-4xl">
                FROM <span className='font-bold'>ENGINEERING CHALLENGES</span>
                <br className="hidden sm:block" />
                TO <span className='font-bold'>MARKET-READY SOLUTIONS{" "}</span>
              </h1>

              <div className="my-4 h-px w-32 bg-white sm:w-48 lg:my-6 lg:w-206 xl:w-200" />

              <p className="max-w-3xl px-2 text-[12px] leading-relaxed text-white sm:px-4 sm:text-[14px] lg:px-0 lg:text-[18px]">
                EMCUS brings together hardware, embedded, software, mechanical, IoT and validation expertise to engineer reliable, scalable and market-ready technology solutions.
              </p>
            </div>
          </div>
        </div>


        <div className="2xl:py-10 lg:pt-8 lg:pb-0 py-10">
          <h1 className='text-[#2D7DBA] font-bold text-[24px] text-center'>TECHNOLOGY EXPERTISE</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 py-6 px-4">
            {TECHNOLOGY_EXPERTISE.map((item) => (
              <TechnologyExpertiseCard
                key={item.id}
                technologyExpertiseItem={item}
              />
            ))}
          </div>
        </div>
        <div className="2xl:py-10 lg:pt-8 lg:pb-0 py-10">
          <h1 className='text-[#2D7DBA] font-bold text-[24px] text-center'>TOOLS & SOFTWARE</h1>
          <div className="mt-6 py-6 px-4">
            <TechnologyTools/>
          </div>
        </div>
        <FooterComponent />
      </main>
    </div>
  )
}

export default page