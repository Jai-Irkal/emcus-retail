'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import CoreServicesCard from '@/src/components/cards/CoreServicesCard';
import CoreServiceBanner from '@/public/core-services/core-services-img.svg';
import { CORE_SERVICES } from '@/src/data/core-services.data';

export default function CoreServicesScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pinState, setPinState] = useState<'before' | 'pinned' | 'after'>('before');
  const [isDesktop, setIsDesktop] = useState(false);

  // Group services into pairs of 2 for desktop view
  const pairs: (typeof CORE_SERVICES)[] = [];
  for (let i = 0; i < CORE_SERVICES.length; i += 2) {
    pairs.push(CORE_SERVICES.slice(i, i + 2));
  }

  // Detect viewport size (Desktop vs Mobile/Tablet)
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Pinned scrolling logic (Desktop only)
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const headerHeight = 90;
      const viewportHeight = window.innerHeight;
      const contentHeight = viewportHeight - headerHeight;

      if (rect.top > headerHeight) {
        setPinState('before');
        setActiveIndex(0);
      } else if (rect.bottom < viewportHeight) {
        setPinState('after');
        setActiveIndex(pairs.length - 1);
      } else {
        setPinState('pinned');

        const totalScrollableDistance = rect.height - contentHeight;
        const currentScroll = headerHeight - rect.top;
        const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableDistance));

        const index = Math.min(
          Math.floor(progress * pairs.length),
          pairs.length - 1
        );
        setActiveIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop, pairs.length]);

  return (
    <section
      ref={sectionRef}
      style={{ height: isDesktop ? `${pairs.length * 90}vh` : 'auto' }}
      className="relative w-full 2xl:z-10"
    >
      {/* Outer Wrapper */}
      <div
        className={`w-full flex flex-col justify-between py-6 bg-white ${
          isDesktop
            ? pinState === 'pinned'
              ? 'fixed top-[90px] left-0 right-0 h-[calc(100vh-90px)] z-10 overflow-hidden 2xl:max-w-7xl 2xl:mx-auto 2xl:px-4'
              : pinState === 'after'
              ? 'absolute bottom-0 left-0 right-0 h-[calc(100vh-90px)] overflow-hidden'
              : 'absolute top-0 left-0 right-0 h-[calc(100vh-90px)] overflow-hidden'
            : 'relative h-auto'
        }`}
      >
        <h1 className="text-[21px] lg:text-[21px] text-[#2D7DBA] font-bold text-center w-full flex-shrink-0 my-2">
          CORE SERVICES
        </h1>

        {/* --- MOBILE & TABLET VIEW (< lg) --- */}
        {!isDesktop ? (
          <div className="w-full px-4 sm:px-6 my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CORE_SERVICES.map((item) => (
                <div
                  key={item.id}
                  className="w-full min-h-[220px] overflow-hidden rounded-xl bg-white"
                >
                  <CoreServicesCard coreServiceItem={item} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* --- DESKTOP VIEW (>= lg) --- */
          <div className="w-full 2xl:-mt-46  grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center flex-grow max-h-[calc(100vh-60px)]">
            
            {/* Left Column: Stacked 2-card pairs */}
            <div className="pl-10 pr-8 relative h-[400px] flex items-center justify-center">
              {pairs.map((pair, pairIdx) => (
                <div
                  key={pairIdx}
                  className={`absolute inset-x-0 left-10 right-8 grid grid-cols-2 gap-6 transition-all duration-500 ease-out ${
                    pairIdx === activeIndex
                      ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
                      : pairIdx < activeIndex
                      ? 'opacity-0 -translate-y-6 pointer-events-none scale-95'
                      : 'opacity-0 translate-y-6 pointer-events-none scale-95'
                  }`}
                >
                  {pair.map((item) => (
                    <div
                      key={item.id}
                      className="w-full min-h-[260px] overflow-hidden rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <CoreServicesCard coreServiceItem={item} />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Right Column: Tall Banner (Desktop Only) */}
            <div className="hidden lg:flex justify-end items-center h-full max-h-[520px] pl-4 pr-0">
              <div className="relative w-full h-full overflow-hidden rounded-l-[36px] shadow-xl">
                <Image
                  src={CoreServiceBanner}
                  alt="Core Service Banner"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}