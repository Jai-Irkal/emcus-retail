import Image from "next/image";
import React from "react";

import icon from "@/public/iso-icon/ISO.svg";

const ISOComponent = () => {
  return (
    <section className="pointer-events-none relative z-0 flex shrink-0 items-center justify-end gap-3 lg:mr-0 xl:mr-4 xl:justify-start">
      {/* Vertical Line - Desktop only */}
      <div className="hidden h-10 w-[1px] bg-[#000000] lg:block" />

      {/* Text - Desktop only */}
      <div className="hidden items-center lg:flex">
        <p className="text-[8px] text-[#000000]">
          AN ISO9001:2015 CERTIFIED COMPANY
        </p>
      </div>

      {/* ISO Icon */}
      <Image
        src={icon}
        alt="ISO Certification"
        width={38}
        height={10}
        className="object-contain ml-0 lg:ml-0"
      />
    </section>
  );
};

export default ISOComponent;
