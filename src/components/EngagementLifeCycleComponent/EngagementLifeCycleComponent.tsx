import { EngagementLifeCycleItem } from '@/src/data/lifecycle.data'
import React from 'react'
import TickBullet from "@/public/common/tick-bullet.svg"
import Image from "next/image";
import ArrowBullet from "@/public/common/arrow-bullet.svg";

const EngagementLifeCycleCard = ({
  item,
}: {
  item: EngagementLifeCycleItem;
}) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] -mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr]">
        {/* Left Section */}
        <div className="bg-[#2D7DBA] flex flex-col items-center justify-center text-center px-6 py-15">
          <Image
            src={item.img}
            alt={item.title}
            className="w-14 h-14 object-contain"
          />

          <h2 className="text-white text-[21px] font-bold mt-0">
            {item.title}
          </h2>

          <p className="text-white/95 text-[16px] leading-6 mt-3 lg:max-w-[240px]">
            {item.description}
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Column One */}
          <div className="px-8 py-8">
            <h3 className="text-[#2D7DBA] text-[21px] font-bold mb-5">
              {item.one.title}
            </h3>

            <ul className="space-y-3">
              {item.one.data.map((value, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-[16px] text-[#222]"
                >
                  <Image
                    src={TickBullet}
                    alt=""
                    className="w-4 h-4 mt-1 shrink-0"
                  />

                  <span className='font-medium text-[16px] text-[#333333]'>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="relative px-8 py-8">
            <div
              className="absolute left-6 right-6 top-0 h-px bg-gray-200 md:left-0 md:right-auto md:top-6 md:bottom-6 md:h-auto md:w-px"
            />

            <h3 className="text-[#2D7DBA] text-[21px] font-bold mb-5">
              {item.two.title}
            </h3>

            <ul className="space-y-3">
              {item.two.data.map((value, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-[16px]"
                >
                  <Image
                    src={TickBullet}
                    alt=""
                    className="w-4 h-4 mt-1 shrink-0"
                  />

                  <span className='font-medium text-[16px] text-[#333333]'>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementLifeCycleCard;