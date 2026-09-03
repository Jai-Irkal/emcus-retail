"use client";

import { RETAIL_SYSTEMS_PORTFOLIO } from "@/src/data/portfolio.data";
import Image from "next/image";
import { useState } from "react";

export default function PortfolioComponent() {
  const [activeId, setActiveId] = useState(1);

  const activeItem =
    RETAIL_SYSTEMS_PORTFOLIO.find((item) => item.id === activeId) ??
    RETAIL_SYSTEMS_PORTFOLIO[0];

  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-sm bg-[#3592CF]">
        <div className="flex min-h-[470px] flex-col lg:flex-row">

          {/* LEFT SIDE */}
          <div className="w-full bg-white lg:w-[38%]">
            {RETAIL_SYSTEMS_PORTFOLIO.map((item) => {
              const isActive = item.id === activeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`
                    group flex w-full items-center gap-4
                    border-b border-[#C8D0D8]
                    border-b-[1px]
                    border-t-[1px]
                    px-5 py-4
                    text-left
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#3592CF]"
                        : "bg-white hover:bg-white"
                    }
                  `}
                >
                  {/* ICON */}
                  <div
                    className={`
                      flex h-8 w-8 shrink-0 items-center justify-center
                      rounded-md
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-[#3592CF]"
                          : "bg-[#3592CF]"
                      }
                    `}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={17}
                      height={17}
                      className="h-[17px] w-[17px] object-contain"
                    />
                  </div>

                  {/* TITLE */}
                  <span
                    className={`
                      text-[21px] font-semibold leading-[1.35]
                      transition-colors duration-200
                      ${
                        isActive
                          ? "text-white"
                          : "text-[#66758F]"
                      }
                    `}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full bg-[#3592CF] px-7 py-8 sm:px-10 lg:w-[62%] lg:px-22 lg:py-10">
            
            {/* TITLE */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center">
                <Image
                  src={activeItem.icon}
                  alt=""
                  width={42}
                  height={42}
                  className="h-10 w-10 object-contain brightness-0 invert"
                />
              </div>

              <h2 className="text-[27px] font-semibold leading-tight text-white sm:text-[30px]">
                {activeItem.title}
              </h2>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2">
              
              {/* LEFT CONTENT */}
              <div className="space-y-2">
                {activeItem.leftData.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex items-start gap-2 text-[16px] leading-[1.5] text-white"
                  >
                    <span className="mt-[1px] shrink-0 text-[22px] leading-none">
                      ›
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* RIGHT CONTENT */}
              {activeItem.rightData.length > 0 && (
                <div className="space-y-2">
                  {activeItem.rightData.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex items-start gap-2 text-[16px] leading-[1.5] text-white"
                    >
                      <span className="mt-[1px] shrink-0 text-[22px] leading-none">
                        ›
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}