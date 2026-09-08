"use client";

import { RETAIL_SYSTEMS_PORTFOLIO } from "@/src/data/portfolio.data";
import type { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type PortfolioComponentProps = {
  activeId: number;
  onActiveIdChange: Dispatch<SetStateAction<number>>;
};

export default function PortfolioComponent({
  activeId,
  onActiveIdChange,
}: PortfolioComponentProps) {
  const activeItem =
    RETAIL_SYSTEMS_PORTFOLIO.find(
      (item) => item.id === activeId
    ) ?? RETAIL_SYSTEMS_PORTFOLIO[0];

  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-sm bg-[#3592CF]">

        {/* ================================================= */}
        {/* MOBILE / TABLET */}
        {/* ================================================= */}

        <div className="block lg:hidden">

          {RETAIL_SYSTEMS_PORTFOLIO.map((item) => {
            const isActive = item.id === activeId;

            return (
              <div key={item.id}>

                {/* ITEM HEADER */}
                <button
                  type="button"
                  onClick={() => onActiveIdChange(item.id)}
                  className={`
                    flex w-full items-center gap-4
                    border-b border-[#C8D0D8]
                    px-4 py-4
                    text-left
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#3592CF]"
                        : "bg-white"
                    }
                  `}
                >
                  {/* ICON */}
                  <div
                    className="
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-md
                      bg-[#3592CF]
                    "
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px] object-contain"
                    />
                  </div>

                  {/* TITLE */}
                  <span
                    className={`
                      flex-1
                      text-[18px]
                      sm:text-[20px]
                      font-semibold
                      leading-[1.35]
                      transition-colors duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-[#66758F]"
                      }
                    `}
                  >
                    {item.title}
                  </span>

                  {/* CHEVRON */}
                  <span
                    className={`
                      shrink-0
                      text-[22px]
                      transition-transform duration-300
                      ${
                        isActive
                          ? "rotate-180 text-white"
                          : "rotate-0 text-[#66758F]"
                      }
                    `}
                  >
                    ↓
                  </span>
                </button>

                {/* EXPANDED CONTENT */}
                <div
                  className={`
                    grid transition-[grid-template-rows] duration-500 ease-in-out
                    ${
                      isActive
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">

                    <div className="bg-[#3592CF] px-5 py-7 sm:px-8 sm:py-8">

                      {/* TITLE */}
                      <div className="mb-6 flex items-center gap-4">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                          <Image
                            src={item.icon}
                            alt=""
                            width={40}
                            height={40}
                            className="
                              h-9 w-9
                              object-contain
                              brightness-0
                              invert
                            "
                          />
                        </div>

                        <h2
                          className="
                            text-[23px]
                            font-semibold
                            leading-tight
                            text-white
                            sm:text-[27px]
                          "
                        >
                          {item.title}
                        </h2>

                      </div>

                      {/* CONTENT */}
                      <div
                        className="
                          grid
                          grid-cols-1
                          gap-x-8
                          gap-y-2
                          sm:grid-cols-2
                        "
                      >

                        {/* LEFT CONTENT */}
                        <div className="space-y-2">
                          {item.leftData.map(
                            (content, index) => (
                              <div
                                key={`${content}-${index}`}
                                className="
                                  flex
                                  items-start
                                  gap-2
                                  text-[15px]
                                  leading-[1.5]
                                  text-white
                                  sm:text-[16px]
                                "
                              >
                                <span
                                  className="
                                    mt-[1px]
                                    shrink-0
                                    text-[21px]
                                    leading-none
                                  "
                                >
                                  ›
                                </span>

                                <span>{content}</span>
                              </div>
                            )
                          )}
                        </div>

                        {/* RIGHT CONTENT */}
                        {item.rightData.length > 0 && (
                          <div className="space-y-2">
                            {item.rightData.map(
                              (content, index) => (
                                <div
                                  key={`${content}-${index}`}
                                  className="
                                    flex
                                    items-start
                                    gap-2
                                    text-[15px]
                                    leading-[1.5]
                                    text-white
                                    sm:text-[16px]
                                  "
                                >
                                  <span
                                    className="
                                      mt-[1px]
                                      shrink-0
                                      text-[21px]
                                      leading-none
                                    "
                                  >
                                    ›
                                  </span>

                                  <span>{content}</span>
                                </div>
                              )
                            )}
                          </div>
                        )}

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>


        {/* ================================================= */}
        {/* DESKTOP */}
        {/* ================================================= */}

        <div className="hidden lg:flex lg:h-[calc(100vh-138px)] lg:min-h-0">

          {/* LEFT SIDE */}
          <div className="w-[38%] bg-white">

            {RETAIL_SYSTEMS_PORTFOLIO.map((item) => {
              const isActive = item.id === activeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    onActiveIdChange(item.id)
                  }
                  className={`
                    group flex w-full items-center gap-4
                    border-b border-[#C8D0D8]
                    border-t-[1px]
                    px-5 py-[10px]
                    2xl:py-[32.5px]
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
                    className="
                      flex h-8 w-8 shrink-0
                      items-center justify-center
                      rounded-md
                      bg-[#3592CF]
                    "
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={17}
                      height={17}
                      className="
                        h-[17px]
                        w-[17px]
                        object-contain
                      "
                    />
                  </div>

                  {/* TITLE */}
                  <span
                    className={`
                      text-[21px]
                      font-semibold
                      leading-[1.35]
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
          <div
            className="
              flex
              h-full
              w-[62%]
              items-center
              bg-[#3592CF]
              px-7
              py-8
              sm:px-10
              lg:px-22
              lg:py-10
            "
          >

            <div className="w-full">

              {/* TITLE */}
              <div className="mb-6 flex items-center gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center">
                  <Image
                    src={activeItem.icon}
                    alt=""
                    width={42}
                    height={42}
                    className="
                      h-10
                      w-10
                      object-contain
                      brightness-0
                      invert
                    "
                  />
                </div>

                <h2
                  className="
                    text-[27px]
                    font-semibold
                    leading-tight
                    text-white
                    sm:text-[30px]
                  "
                >
                  {activeItem.title}
                </h2>

              </div>


              {/* CONTENT */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-x-10
                  gap-y-2
                  md:grid-cols-2
                "
              >

                <div className="space-y-2">
                  {activeItem.leftData.map(
                    (item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className="
                          flex
                          items-start
                          gap-2
                          text-[16px]
                          leading-[1.5]
                          text-white
                        "
                      >
                        <span
                          className="
                            mt-[1px]
                            shrink-0
                            text-[22px]
                            leading-none
                          "
                        >
                          ›
                        </span>

                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>


                {activeItem.rightData.length > 0 && (
                  <div className="space-y-2">
                    {activeItem.rightData.map(
                      (item, index) => (
                        <div
                          key={`${item}-${index}`}
                          className="
                            flex
                            items-start
                            gap-2
                            text-[16px]
                            leading-[1.5]
                            text-white
                          "
                        >
                          <span
                            className="
                              mt-[1px]
                              shrink-0
                              text-[22px]
                              leading-none
                            "
                          >
                            ›
                          </span>

                          <span>{item}</span>
                        </div>
                      )
                    )}
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}