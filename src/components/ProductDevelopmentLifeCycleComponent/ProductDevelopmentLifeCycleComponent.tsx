import { ProductDevelopmentSection, Steps } from '@/src/data/product-development-lifecycle.data';
import React, { Fragment } from 'react';
import HegxagonComponent from '../HexagonComponent/HegxagonComponent';
import HorizontalLine from "@/public/common/HorizontalLine.svg";
import Image from 'next/image';

const StepCard = ({ item }: { item: Steps }) => (
    <div className="
        flex items-center gap-3
        sm:gap-4
        bg-white
        rounded-[28px]
        shadow-xl
        px-4 py-4
        sm:px-6 sm:py-5
        lg:px-4 lg:py-3.5
        xl:px-6 xl:py-5
        w-full
        lg:max-w-[340px]
        xl:max-w-[420px]
        xl:w-[420px]
        min-h-[100px]
        lg:min-h-[90px]
        xl:min-h-[110px]
    ">
        <div className="shrink-0">
            <Image
                src={item.image}
                alt={item.title}
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-9 lg:h-9 xl:w-12 xl:h-12"
            />
        </div>

        <div className="min-w-0">
            <h3 className="
                text-[#2D7DBA]
                text-lg
                sm:text-xl
                lg:text-[21px]
                xl:text-[21px]
                font-semibold
            ">
                {item.title}
            </h3>

            <p className="
                text-[#333333]
                text-sm
                sm:text-base
                lg:text-[16px]
                lg:leading-5
                xl:text-[18px]
                xl:leading-7
                mt-1
            ">
                {item.description}
            </p>
        </div>
    </div>
);

const ProductDevelopmentLifeCycleComponent = ({
    section,
}: {
    section: ProductDevelopmentSection;
}) => {
    return (
        <div className="grid w-full grid-cols-[40px_1fr] items-center gap-x-3 gap-y-6 px-4 lg:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] lg:gap-x-0 lg:gap-y-4 lg:px-0">
            {/* Section title - Mobile only */}
            {/* <div className="relative lg:hidden">
                <h2 className="absolute left-1/2 -translate-x-1/2 text-center text-[21px] font-bold uppercase whitespace-nowrap">
                    {section.section}
                </h2>
            </div> */}
            {section.Steps.map((item) => {
                const isEven = item.id % 2 === 0;

                return (
                    <Fragment key={item.id}>
                        {/* Left column on desktop / tablet landscape */}
                        <div className={`hidden w-full lg:flex items-center justify-end ${isEven ? "" : "lg:invisible"}`}>
                            {isEven && (
                                <>
                                    <StepCard item={item} />
                                    <Image
                                        src={HorizontalLine}
                                        alt=""
                                        className="shrink-0 lg:w-6 xl:w-auto"
                                    />
                                </>
                            )}
                        </div>

                        {/* Hexagon icon */}
                        <div className="relative z-[2] flex justify-center col-start-1 lg:col-start-2">
                            <HegxagonComponent num={item.id} />
                        </div>

                        {/* Right column */}
                        <div className={`flex w-full items-center justify-start col-start-2 lg:col-start-3 ${isEven ? "lg:hidden" : ""}`}>
                            {!isEven && (
                                <Image
                                    src={HorizontalLine}
                                    alt=""
                                    className="hidden lg:block shrink-0 lg:w-6 xl:w-auto"
                                />
                            )}
                            <StepCard item={item} />
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
};

export default ProductDevelopmentLifeCycleComponent;