import React from "react";
import Image from "next/image";
import ArrowBullet from "@/public/common/arrow-bullet.svg";
import { TechnologyExpertise } from "@/src/data/technology-expertise.data";

const TechnologyExpertiseCard = ({
  technologyExpertiseItem,
}: {
  technologyExpertiseItem: TechnologyExpertise;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
  {/* Left Section */}
  <div className="bg-[#2D7DBA] flex flex-col items-center justify-center px-6 py-8 text-center">
    <Image
      src={technologyExpertiseItem.image}
      alt={technologyExpertiseItem.title}
      className="h-12 w-auto mb-4"
    />

    <h2 className="text-white text-[21px] font-semibold leading-tight">
      {technologyExpertiseItem.title}
    </h2>
  </div>

  {/* Right Section */}
  <div className="flex items-center px-6 py-6">
    <ul className="space-y-2">
      {technologyExpertiseItem.data.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-2 text-[14px] text-black font-regular"
        >
          <Image
            src={ArrowBullet}
            alt=""
            className="mt-1 h-3 w-3 shrink-0"
          />
          <span className="text-[16px] text-[#333333]">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
  );
};

export default TechnologyExpertiseCard;