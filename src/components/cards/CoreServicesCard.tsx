import React from "react";
import Image from "next/image";
import ArrowBullet from "@/public/common/arrow-bullet.svg";
import { CoreService } from "@/src/data/core-services.data";

const CoreServicesCard = ({
  coreServiceItem,
}: {
  coreServiceItem: CoreService;
}) => {
  return (
    <div className="w-full h-full min-h-[220px] rounded-xl bg-white border border-[#e5e5e5] flex flex-col pt-3 pb-6 overflow-visible">
      <div className="h-[72px] w-full flex items-center gap-3 px-6">
        <Image
          src={coreServiceItem.imgSrc}
          alt={coreServiceItem.title}
          className="h-[42px] w-auto"
        />

        <h2 className="text-[#2D7DBA] text-[18px] md:text-[21px] font-bold">
          {coreServiceItem.title}
        </h2>
      </div>

      <div className="px-6 py-2 md:py-0">
        <ul className="space-y-1">
          {coreServiceItem.data.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-[14px] md:text-[16px] font-normal text-black py-1.5"
            >
              <Image
                src={ArrowBullet}
                alt=""
                className="mt-1 h-4 w-4 shrink-0"
              />

              <span className="text-[#333333]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoreServicesCard;