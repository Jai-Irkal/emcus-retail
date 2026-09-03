"use client";

import { TECHNOLOGY_TOOLS } from "@/src/data/technology-skillset.data";
import Image from "next/image";

export default function TechnologyTools() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {TECHNOLOGY_TOOLS.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-[10px] border border-[#BFC5CC] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.12)]"
          >
            {/* HEADER */}
            <div className="flex min-h-[55px] items-center gap-3 bg-[#447FBA] px-4 py-3">
              <Image
                src={item.image}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 shrink-0 object-contain brightness-0 invert"
              />

              <h3 className="text-[21px] font-bold leading-[1.3] text-white">
                {item.title}
              </h3>
            </div>

            {/* CONTENT */}
            <div className="min-h-[142px] bg-white px-5 py-5">
              <ul className="space-y-[3px]">
                {item.data.map((tool, index) => (
                  <li
                    key={`${item.id}-${index}`}
                    className="flex items-start text-[16px] leading-[1.35] text-[#333333]"
                  >
                    <span className="mr-2 shrink-0 text-[19px] leading-[16px] text-[#3F7FBA]">
                      ›
                    </span>

                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}