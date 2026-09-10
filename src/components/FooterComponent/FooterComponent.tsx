"use client";

import React from "react";
import icon from "@/public/footer-assets/footer-logo.png";
import pin from "@/public/footer-assets/pin-icon.svg";
import phoneIcon from "@/public/footer-assets/phone.svg";
import mailIcon from "@/public/footer-assets/mail.svg";
import linkedinIcon from "@/public/footer-assets/linkedin.svg";
import { NAVIGATION } from "@/lib/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FooterComponent = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <footer className="bg-[#29abe2] text-white py-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-8 md:gap-8 lg:gap-12 items-start">

                {/* LEFT — ADDRESS */}
                <div>
                    <Image
                        src={icon}
                        alt="Company Logo"
                        className="w-40 object-contain"
                        priority
                    />
                    <div className="flex items-start gap-3 mt-6">
                        <Image
                            src={pin}
                            alt="Location Pin"
                            className="w-5 object-contain mt-1 shrink-0"
                            priority
                        />
                        <p className="text-[14px] leading-relaxed max-w-sm">
                            Novel MSR Park, 93/9, Varthur Main Road, Munnekolalu, Marathahalli,
                            Bengaluru 560037. INDIA
                        </p>
                    </div>
                </div>

                {/* 2-COLUMN GRID ON MOBILE (Quick Links + Resources, Company + Contact) / 4 SEPARATE COLUMNS ON MD+ */}
                <div className="grid grid-cols-2 gap-6 text-sm md:contents">

                    {/* Quick Links (MAIN) */}
                    <div>
                        <h3 className="font-bold mb-4 text-[16px] text-[#ffffff]">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {NAVIGATION.find((g) => g.title === "MAIN")?.items.map((item) => (
                                <li key={item.label}>
                                    {item.children ? (
                                        <div>
                                            <p className="mb-2 font-medium">
                                                {item.label}
                                            </p>

                                            <ul className="ml-4 space-y-2">
                                                {item.children.map((child) => (
                                                    <li
                                                        key={child.label}
                                                        onClick={() => handleNavigation(child.path || "")}
                                                        className="flex items-center gap-2 cursor-pointer hover:text-[#000000] transition-colors"
                                                    >
                                                        <svg
                                                            className="w-3 h-3 shrink-0"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M7 5l6 5-6 5V5z" />
                                                        </svg>

                                                        <span>{child.label}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <span
                                            onClick={() =>
                                                handleNavigation(item.path || "")
                                            }
                                            className="cursor-pointer hover:text-[#000000] transition-colors"
                                        >
                                            {item.label}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-bold mb-4 text-[16px] text-[#ffffff]">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            {NAVIGATION.find(g => g.title === "RESOURCES")?.items.map((item) => (
                                <li
                                    key={item.label}
                                    onClick={() => handleNavigation(item.path || '')}
                                    className="cursor-pointer hover:text-[#000000] transition-colors"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold mb-4 text-[16px] text-[#ffffff]">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {NAVIGATION.find(g => g.title === "COMPANY")?.items.map((item) => (
                                <li
                                    key={item.label}
                                    onClick={() => handleNavigation(item.path || '')}
                                    className="cursor-pointer hover:text-[#000000] transition-colors"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT — CONTACT (Beside Company on mobile, rightmost column on md+) */}
                    <div className="text-sm md:text-base">
                        <h3 className="font-bold mb-4 text-[16px] text-[#ffffff]">
                            Contact
                        </h3>

                        <ul className="space-y-4">
                            {/* Phone */}
                            <li className="flex items-center gap-3">
                                <Image
                                    src={phoneIcon}
                                    alt="Phone"
                                    className="hidden md:block md:h-6 md:w-8 object-contain shrink-0"
                                />
                                <a
                                    href="tel:+917022616214"
                                    className="hover:underline text-sm md:text-base"
                                >
                                    +91 70226 16214
                                </a>
                            </li>

                            {/* Email */}
                            <li className="flex items-center gap-3">
                                <Image
                                    src={mailIcon}
                                    alt="Email"
                                    className="hidden md:block md:h-6 md:w-8 object-contain shrink-0"
                                />
                                <a
                                    href="mailto:info@emcus.co.in"
                                    className="hover:underline break-all text-sm md:text-base"
                                >
                                    info@emcus.co.in
                                </a>
                            </li>

                            {/* LinkedIn */}
                            <li className="flex items-center gap-3">
                                <Image
                                    src={linkedinIcon}
                                    alt="LinkedIn"
                                    className="hidden md:block md:h-8 md:w-8 object-contain shrink-0"
                                />
                                <a
                                    href="https://www.linkedin.com/company/emcus-retail"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer hover:underline text-sm md:text-base"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default FooterComponent;