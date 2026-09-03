"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel } from "@/src/data/carousel.data";

import LeftArrow from "@/public/carousel/carousel-left.svg";
import RightArrow from "@/public/carousel/carousel-right.svg";

export default function CarouselComponent() {
    const [active, setActive] = useState(0);
    const [animate, setAnimate] = useState(true);

    const nextSlide = () => {
        setAnimate(false);

        setTimeout(() => {
            setActive((prev) => (prev + 1) % Carousel.length);
            setAnimate(true);
        }, 250);
    };

    const prevSlide = () => {
        setAnimate(false);

        setTimeout(() => {
            setActive((prev) =>
                prev === 0 ? Carousel.length - 1 : prev - 1
            );
            setAnimate(true);
        }, 250);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000);

        return () => clearInterval(timer);
    }, []);

    const item = Carousel[active];

    return (
        <section className="relative w-full h-[500px] md:h-[600px] lg:h-[570px] overflow-hidden">
            {/* Background */}
            <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                className="object-cover transition-all duration-700"
            />

            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center lg:-mt-12 -mt-32 2xl:mt-16 lg:bottom-30">

                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="hidden md:flex absolute left-4 lg:left-6 z-30 
               w-12 h-12 lg:w-16 lg:h-16 
               rounded-full bg-[#b33020] hover:bg-[#962516] 
               transition items-center justify-center 
               border border-white/50 cursor-pointer"
                >
                    <Image
                        src={LeftArrow}
                        alt="Previous"
                        className="w-5 h-5 lg:w-7 lg:h-7"
                    />
                </button>

                {/* Text */}
                <div
                    key={item.id}
                    className="w-full max-w-6xl px-6 sm:px-8 md:px-32 lg:px-20 text-center animate-carouselText"
                >
                    <h1 className="text-white font-bold uppercase leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[44px]">
                        {item.title}
                    </h1>

                    <div className="w-full max-w-4xl mx-auto h-px bg-white/40 my-4 lg:my-5" />

                    <p
                        className={`mx-auto text-white font-semibold leading-snug
          text-base sm:text-lg md:text-2xl lg:text-[34px]
          ${item.id === 1
                                ? "max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-3xl"
                                : "max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
                            } px-3`}
                    >
                        {item.description}
                    </p>
                </div>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    className="hidden md:flex absolute right-4 lg:right-6 z-30 
               w-12 h-12 lg:w-16 lg:h-16 
               rounded-full bg-[#b33020] hover:bg-[#962516] 
               transition items-center justify-center 
               border border-white/50 cursor-pointer"
                >
                    <Image
                        src={RightArrow}
                        alt="Next"
                        className="w-5 h-5 lg:w-7 lg:h-7"
                    />
                </button>
            </div>
            <div className="absolute top-90 left-0 right-0 z-30 flex md:hidden justify-center gap-4">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-[#b33020] hover:bg-[#962516]
                   transition flex items-center justify-center
                   border border-white/50"
                >
                    <Image
                        src={LeftArrow}
                        alt="Previous"
                        className="w-5 h-5"
                    />
                </button>

                <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-[#b33020] hover:bg-[#962516]
                   transition flex items-center justify-center
                   border border-white/50"
                >
                    <Image
                        src={RightArrow}
                        alt="Next"
                        className="w-5 h-5"
                    />
                </button>
            </div>
        </section>
    );
}