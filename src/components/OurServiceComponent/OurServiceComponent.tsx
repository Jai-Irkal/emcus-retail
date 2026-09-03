import { ServiceItem } from '@/src/data/our-services.data';
import Image from 'next/image';
import ArrowBullet from '@/public/common/arrow-bullet.svg';
import React from 'react';

const OurServiceComponent = ({
    serviceItem,
}: {
    serviceItem: ServiceItem;
}) => {
    return (
        <div
            className={`
                flex w-full flex-col items-center
                lg:flex-row lg:items-stretch
                ${serviceItem.id % 2 === 0 ? 'lg:flex-row-reverse' : ''}
                gap-6 lg:gap-10
                my-4
                md:my-0
            `}
        >
            {/* Image - First on mobile */}
            <div className="order-1 w-full lg:order-2 lg:flex-1">
                <div className="mx-auto w-full max-w-3xl overflow-hidden lg:max-w-none lg:overflow-visible">
                    {/* Mobile Image */}
                    <Image
                        src={serviceItem.mobileImage}
                        alt={serviceItem.title}
                        className="block h-auto w-full translate-x-[3.5%] rounded-xl lg:hidden lg:translate-x-0"
                    />

                    {/* Desktop Image */}
                    <Image
                        src={serviceItem.image}
                        alt={serviceItem.title}
                        className="hidden h-auto w-full lg:block"
                    />
                </div>
            </div>

            {/* Data - Below image on mobile */}
            <div className={`order-2 w-full lg:order-1 lg:flex-1 ${serviceItem.id % 2 === 0 ? 'lg:-ml-5' : 'lg:pl-4'}`}>
                <h2
                    className={`
        hidden
        lg:block
        text-[21px]
        lg:text-[21px]
        font-bold
        text-[#2D7DBA]
        ${serviceItem.id % 2 === 0 ? '' : 'lg:pl-4'}
    `}
                >
                    {serviceItem.title ===
                        "UI/UX DESIGN SERVICES (MOBILE/WEB/DESKTOP/EMBEDDED UI)" ? (
                        <>
                            UI/UX DESIGN SERVICES (MOBILE/<br />WEB/DESKTOP/
                            EMBEDDED UI)
                        </>
                    ) : serviceItem.title ===
                        "VERIFICATION & VALIDATION SERVICES (V&V)" ? (
                        <>
                            VERIFICATION & VALIDATION
                            <br />
                            SERVICES (V&V)
                        </>
                    ) : serviceItem.title ===
                        "SOFTWARE DEVELOPMENT SERVICES (MOBILE/WEB/DESKTOP/CLOUD)" ? (
                        <>
                            SOFTWARE DEVELOPMENT
                            <br />
                            SERVICES (MOBILE/WEB/
                            <br />
                            DESKTOP/CLOUD)
                        </>
                    ) : serviceItem.title ===
                        "CERTIFICATION SUPPORT/ STANDARDS EXPERTISE" ? (
                        <>
                            CERTIFICATION SUPPORT/
                            <br />
                            STANDARDS EXPERTISE
                        </>
                    ) : serviceItem.title ===
                        "MECHANICAL INDUSTRIAL DESIGN (ID) SERVICES" ? (
                        <>
                            MECHANICAL INDUSTRIAL
                            <br />
                            DESIGN (ID) SERVICES
                        </>
                    ) : (
                        serviceItem.title
                    )}
                </h2>

                <div
                    className={`
                        grid grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-2
                        gap-6
                        lg:mt-4
                        -mt-6
                        ${serviceItem.id % 2 === 0 ? 'lg:relative lg:right-3' : ''}
                    `}
                >
                    {/* Left Items */}
                    <div className={`space-y-3 md:-mt-10 lg:mt-0 ml-3`}>
                        {serviceItem.leftItems.map((item, index) => (
                            <div
                                key={`left-${index}`}
                                className="flex items-start gap-2"
                            >
                                <Image
                                    src={ArrowBullet}
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="mt-1 shrink-0"
                                />

                                <p className="text-[#333333] text-[16px] font-regular">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Items */}
                    <div className="space-y-3 -mt-4 lg:mt-0 xl:mt-0 2xl:mt-0 md:-mt-10">
                        {serviceItem.rightItems.map((item, index) => (
                            <div
                                key={`right-${index}`}
                                className="flex items-start gap-2 ml-3 md:ml-0"
                            >
                                <Image
                                    src={ArrowBullet}
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="mt-1 shrink-0"
                                />

                                <p className="text-[#333333] text-[16px] font-regular">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServiceComponent;