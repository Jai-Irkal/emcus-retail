import { Fragment } from "react";
import HeaderComponent from "@/src/components/HeaderComponent/HeaderComponent";
import VivekBanner from "@/public/vivek/Hero_HowWeWork.webp"
import Image from "next/image";
import FooterComponent from "@/src/components/FooterComponent/FooterComponent";
import ClientFocus from "@/public/how-we-work/our-positioning/ClientFocus.svg"
import Star from "@/public/how-we-work/our-positioning/Star.svg";
import BlueArrowBullet from "@/public/common/blue-arrow-bullet.svg"
import RedArrow from "@/public/common/arrow-bullet.svg"
import { EngagementLifeCycle } from "@/src/data/lifecycle.data";
import EngagementLifeCycleComponent from "@/src/components/EngagementLifeCycleComponent/EngagementLifeCycleComponent";
import LifeCycleArrow from "@/public/how-we-work/EngagementLifeCycle/EngagementLifecycleArrow.svg";
import { PRODUCT_DEVELOPMENT_LIFECYCLE } from "@/src/data/product-development-lifecycle.data";
import ProductDevelopmentLifeCycleComponent from "@/src/components/ProductDevelopmentLifeCycleComponent/ProductDevelopmentLifeCycleComponent";

export default function HowWeWork() {

  const allSteps = PRODUCT_DEVELOPMENT_LIFECYCLE.flatMap((section) =>
    section.Steps.map((step) => ({
      ...step,
      section: section.section,
      sectionId: section.id,
    }))
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white pt-[80px] md:pt-[90px]">
        <HeaderComponent active="HOW WE WORK" />
        <div className="relative w-full h-[300px] lg:h-[480px] 2xl:h-[600px] 2xl:bottom-0">
          <Image
            src={VivekBanner}
            alt="Banner"
            fill
            priority
            className="object-cover object-top"
          />

          <div className="absolute inset-0 bg-black/30" />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 animate-fade-in-up">
            <div className="flex max-w-5xl flex-col items-center text-center">
              <h1 className="px-2 text-lg font-normal leading-tight text-white sm:text-2xl lg:text-4xl">
                <span className="font-medium">CLIENT <span className="font-bold">FOCUS</span> & TECHNICAL <span className="font-bold">EXCELLENCE</span></span>
              </h1>

              <div className="my-4 h-px w-32 bg-white sm:w-48 lg:my-6 lg:w-206 xl:w-200" />

              <span className="max-w-3xl px-2 text-[12px] leading-relaxed text-white sm:px-4 sm:text-[14px] lg:px-0 lg:text-[18px]">
                We adapt our processes to match yours, ensuring a seamless project experience. We execute projects using Agile, Waterfall, V-Model, and SAFe methodologies.
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-[21px] text-[#2D7DBA] font-bold text-center w-full mt-10">OUR POSITIONING</h1>
        <div className="py-8 lg:py-8 lg:px-20">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 lg:px-0 items-center">
            <div className="w-full rounded-2xl border-[#E2E2E2] bg-[#E6F4FF] border-1 py-6 px-6 shadow-l">
              <div className="flex items-center gap-4">
                <div className="lg:w-[60px] lg:h-[48px] bg-[#2D7DBA] rounded-xl flex items-center justify-center p-2">
                  <Image
                    src={ClientFocus}
                    alt="Client Focus"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h1 className="text-center text-[21px] lg:text-[21px] font-bold text-black">Client Focus</h1>
              </div>
              <div className="mt-4 relative">
                <ul className=" space-y-2 text-[18px]">
                  <div className="flex items-start gap-1">
                    <div className="shrink-0 pt-0.5">
                      <Image
                        src={RedArrow}
                        alt=""
                        className="h-5 w-5 scale-100"
                      />
                    </div>

                    <li className="text-[16px] font-medium lg:text-[16px]">
                      To excel in the delivery of software services in customer's ecosystem.
                    </li>
                  </div>
                  <div className="flex items-start gap-1">
                    <div className="shrink-0 pt-0.5">
                      <Image
                        src={RedArrow} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="text-[16px] lg:mt-0 lg:text-[16px] font-medium lg:pr-4">Simple team structure with strong commitment to customer service.</li>
                  </div>
                  <div className="flex items-start gap-1">
                    <div className="shrink-0 pt-0.5">
                      <Image
                        src={RedArrow} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="text-[15px] lg:mt-0 lg:text-[16px] font-medium">Solid understanding of business processes, trends and best practices in the industry.</li>
                  </div>
                  <div className="flex items-start gap-1">
                    <div className="shrink-0 pt-0.5">
                      <Image
                        src={RedArrow} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="text-[15px] lg:mt-0 lg:text-[16px] font-medium">Hassle-free project execution, less trouble with process.</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="w-full rounded-2xl border-[#E2E2E2] bg-[#E6EEFF] border-1 py-6 px-6 shadow-l">
              <div className="flex items-center gap-4">
                <div className="lg:w-[60px] lg:h-[48px] bg-[#2C4A94] rounded-xl flex items-center justify-center p-2">
                  <Image
                    src={Star}
                    alt="Technical Excellence"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h1 className="text-center text-[21px] lg:text-[21px] font-bold text-black">Technical Excellence</h1>
              </div>
              <div className="mt-4 relative pr-10">
                <ul className=" space-y-2 text-[18px]">
                  <div className="flex items-start gap-1">
                    <div className="shrink-0 pt-0.5">
                      <Image
                        src={BlueArrowBullet} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="text-[15px] lg:mt-0 lg:text-[16px] font-medium">Full-time teams dedicated to development and testing.</li>
                  </div>
                  <div className="flex items-start gap-1">
                    <div className="shrink-0 pt-0.5">
                      <Image
                        src={BlueArrowBullet} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="-mt-1 text-[15px] lg:mt-0 lg:text-[16px] font-medium">Disciplined processes and cutting-edge methodologies.</li>
                  </div>
                  <div className="flex items-start gap-1">
                    <div className="shrink-0 pt-0.5">
                      <Image
                        src={BlueArrowBullet} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="-mt-1 text-[15px] lg:mt-0 lg:text-[16px] font-medium">Attention to technical details to provide robust solutions.</li>
                  </div>
                  <div className="flex items-start gap-1">
                    <div className="shrink-0 pt-0.5">
                      <Image
                        src={BlueArrowBullet} alt={""} className="h-5 w-5" />
                    </div>
                    <li className="-mt-1 text-[15px] lg:mt-0 lg:text-[16px] font-medium">Staying ahead of market demands with continuous improvement.</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[25px] text-[#2D7DBA] font-bold text-center w-full mt-5">ENGAGEMENT LIFECYCLE</h1>
        <div className="2xl:py-10 lg:py-15 py-10 lg:px-20 px-4 flex flex-col gap-0">
          {
            EngagementLifeCycle.map((item, index) => {
              return (
                <div key={item.id} className="flex flex-col">
                  <EngagementLifeCycleComponent item={item} />
                  {item.id < 4 && (
                    <Image
                      src={LifeCycleArrow}
                      alt=""
                      className="relative z-10 block mx-auto -mb-5 lg:-mt-0 lg:ml-22 lg:mx-0"
                    />
                  )}
                </div>
              )
            })
          }
        </div>
        <h1 className="text-[21px] text-[#2D7DBA] font-bold text-center w-full py-5">OUR PRODUCT DEVELOPMENT LIFECYCLE</h1>
        <div className="relative grid w-full grid-cols-1 [--sidebar:110px] xl:[--sidebar:150px] lg:grid-cols-[var(--sidebar)_1fr]">
          <div
            aria-hidden
            className="
      pointer-events-none
      absolute
      z-[1]
      left-[36px]
      lg:left-[calc((100%+var(--sidebar))/2)]
      -translate-x-1/2
      top-[calc(3rem+50px)]
      bottom-[calc(3rem+50px)]
      w-px
      border-l-2
      border-dashed
      border-[#666666]
    "
          />

          {PRODUCT_DEVELOPMENT_LIFECYCLE.map((item) => (
            <Fragment key={item.id}>
              <div className="hidden items-center  justify-center bg-[#2D7DBA] px-1 lg:flex">
                <span className="-rotate-90 translate-x-8 whitespace-nowrap text-[18px] lg:text-[21px] xl:text-[21px] font-bold tracking-wider text-white uppercase">
                  {item.section}
                </span>
              </div>

              <div
                className={`flex w-full flex-col items-center py-12 ${item.id % 2 === 0 ? "bg-[#E6E6E6]" : "bg-[#F2F2F2]"
                  }`}
              >
                <ProductDevelopmentLifeCycleComponent section={item} />
              </div>
            </Fragment>
          ))}
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
