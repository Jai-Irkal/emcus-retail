"use client";

import { useEffect, useRef, useState } from "react";

import PortfolioComponent from "../PortfolioComponent/PortfolioComponent";
import { RETAIL_SYSTEMS_PORTFOLIO } from "@/src/data/portfolio.data";

export default function PortfolioScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeId, setActiveId] = useState(
    RETAIL_SYSTEMS_PORTFOLIO[0]?.id ?? 1
  );

  const [pinState, setPinState] = useState<
    "before" | "pinned" | "after"
  >("before");

  const [isDesktop, setIsDesktop] = useState(false);

  const portfolioCount = RETAIL_SYSTEMS_PORTFOLIO.length;

  // Detect desktop
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();

    window.addEventListener("resize", checkDesktop);

    return () => {
      window.removeEventListener("resize", checkDesktop);
    };
  }, []);

  // Desktop pinned scrolling
  useEffect(() => {
    if (!isDesktop) {
      setPinState("before");
      return;
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const headerHeight = 90;
      const viewportHeight = window.innerHeight;
      const contentHeight = viewportHeight - headerHeight;

      /*
       * Before section reaches header
       */
      if (rect.top > headerHeight) {
        setPinState("before");
        setActiveId(RETAIL_SYSTEMS_PORTFOLIO[0]?.id ?? 1);
        return;
      }

      /*
       * After section has completely passed
       */
      if (rect.bottom < viewportHeight) {
        setPinState("after");
        setActiveId(
          RETAIL_SYSTEMS_PORTFOLIO[portfolioCount - 1]?.id ??
            RETAIL_SYSTEMS_PORTFOLIO[0]?.id ??
            1
        );
        return;
      }

      /*
       * Section is currently pinned
       */
      setPinState("pinned");

      const totalScrollableDistance =
        rect.height - contentHeight;

      if (totalScrollableDistance <= 0) return;

      const currentScroll = headerHeight - rect.top;

      const progress = Math.max(
        0,
        Math.min(
          1,
          currentScroll / totalScrollableDistance
        )
      );

      const index = Math.min(
        Math.floor(progress * portfolioCount),
        portfolioCount - 1
      );

      const item = RETAIL_SYSTEMS_PORTFOLIO[index];

      if (item) {
        setActiveId(item.id);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop, portfolioCount]);

  return (
    <section
      ref={sectionRef}
      style={{
        height: isDesktop
          ? `${portfolioCount * 90}vh`
          : "auto",
      }}
      className="relative w-full"
    >
      <div
        className={`
          w-full bg-white py-6

          ${
            isDesktop
              ? pinState === "pinned"
                ? `
                  fixed
                  top-[90px]
                  left-0
                  right-0
                  z-10
                  h-[calc(100vh-90px)]
                  overflow-hidden

                  2xl:max-w-7xl
                  2xl:mx-auto
                  2xl:px-4
                `
                : pinState === "after"
                ? `
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-[calc(100vh-90px)]
                  overflow-hidden
                `
                : `
                  absolute
                  top-0
                  left-0
                  right-0
                  h-[calc(100vh-90px)]
                  overflow-hidden
                `
              : `
                relative
                h-auto
              `
          }
        `}
      >
        <PortfolioComponent
          activeId={activeId}
          onActiveIdChange={setActiveId}
        />
      </div>
    </section>
  );
}