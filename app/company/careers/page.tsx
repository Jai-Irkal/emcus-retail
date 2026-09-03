"use client";

import { useMemo, useState } from "react";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import VivekBanner from "@/public/vivek/Career.webp"
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import { OPEN_ROLES } from "@/src/data/careers.data";
import { CareerCard } from "@/src/components/cards/CareerCard";
import CareersBanner from "@/public/banners/CareersPageBanner.svg";
import SearchIcon from "@/public/blogs/search.svg";

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = useMemo(() => {
    return OPEN_ROLES.filter((job) => {
      const query = searchQuery.toLowerCase().trim();

      return (
        job.role.toLowerCase().includes(query) ||
        job.location?.toLowerCase().includes(query) ||
        job.role_type?.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="CAREERS" />

        <div className="relative h-[300px] w-full lg:h-[360px] 2xl:h-[600px]">
          <Image
            src={VivekBanner}
            alt="Careers Banner"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 animate-fade-in-up">
            <div className="flex max-w-5xl flex-col items-center text-center">
              <h1 className="px-2 text-lg font-medium leading-tight text-white sm:text-2xl lg:text-4xl">
                BE <span className="font-bold">PART</span> OF <span className="font-bold">SOMETHING BIG!</span>
              </h1>

              <div className="my-4 h-px w-32 bg-white sm:w-48 lg:my-6 lg:w-206 xl:w-200" />

              <span className="max-w-3xl px-2 text-[12px] leading-relaxed text-white sm:px-4 sm:text-[14px] lg:text-[18px]">
                EMCUS Technology Solutions takes great pride in creating positive changes and stimulating dynamic growth to businesses.
              </span>
            </div>
          </div>
        </div>

        <h1 className="mt-10 w-full text-center text-[25px] font-bold text-[#2D7DBA]">
          JOIN US
        </h1>

        <div className="flex flex-col md:flex-row md:items-center justify-between px-8 mt-3">
          {/* <h2 className="font-bold lg:mt-4 lg:text-[22px] text-[#000000]">Engineering</h2> */}
          <h2 className="text-[21px] text-[#333333] font-bold">
          Open Positions ({filteredJobs.length})
        </h2>

          <div className="flex h-8 md:h-12 w-full md:w-[400px] items-center rounded-xl border border-[#333333] px-4 mt-4 md:mt-0">
            <Image
              src={SearchIcon}
              alt="Search"
              className="mr-3 h-4 w-4 md:h-5 md:w-5 shrink-0"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for jobs"
              className="w-full bg-transparent text-base text-[#333333] outline-none placeholder:text-[#333333] text-[14px] md:text-lg"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-0 px-6 py-5">
          {filteredJobs.map((item, index) => (
            <div key={item.id}>
              <CareerCard item={item} />

              {index < filteredJobs.length - 1 && <hr />}
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <p className="py-10 text-center text-[#333333]">
              No jobs found.
            </p>
          )}
        </div>
        <p className="text-[12px] md:text-[18px] text-[#333333] text-center pb-8 font-semibold">
          Click the APPLY button to upload your resume.
          <br />
          Alternatively, email your resume to{" "}
          <a
            href="mailto:career@emcus.co.in"
            className="text-[#2D7DBA] font-semibold hover:underline cursor-pointer"
          >
            career@emcus.co.in
          </a>
        </p>

        <FooterComponent />
      </main>
    </div>
  );
}