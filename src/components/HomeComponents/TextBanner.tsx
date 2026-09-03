"use client";

type TextBannerProps = {
    text: string;
};

const TextBanner = (props: TextBannerProps) => {
    return (
        <div
            className="relative w-full h-[114px] xl:h-[120px] z-0 flex items-center justify-between px-6 shadow-xl lg:bottom-50 2xl:bottom-50
             bg-gradient-to-r from-[#369DD8] to-[#2C4A94] -mt-5 lg:mt-38 2xl:mt-40 md:-mt-5"
        >
            <div className="w-full">
                <h2 className="text-center text-white font-semibold text-[14px] lg:text-[21px] lg:px-[80px] xl:text-[20px] 2xl:px-50">
                    {props.text}
                </h2>
            </div>
        </div>
    );
};

export default TextBanner;