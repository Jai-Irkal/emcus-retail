"use client";

import React, { useEffect, useRef, useState } from "react";

import {
    getCountries,
    getCountryCallingCode,
} from "react-phone-number-input";

import type { Country, Value } from "react-phone-number-input";

import flags from "react-phone-number-input/flags";
import countryNames from "react-phone-number-input/locale/en.json";

interface CustomPhoneInputProps {
    value?: Value;
    onChange: (value?: Value) => void;
    defaultCountry?: Country;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

const CustomPhoneInput = ({
    value,
    onChange,
    defaultCountry = "IN",
    placeholder = "00000 00000",
    disabled = false,
    className = "",
}: CustomPhoneInputProps) => {
    const [country, setCountry] = useState<Country>(defaultCountry);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const countries = getCountries();

    // Filter using COUNTRY NAME
    const filteredCountries = countries.filter((countryCode) => {
        const countryName =
            countryNames[countryCode as keyof typeof countryNames];

        return countryName
            ?.toLowerCase()
            .includes(search.toLowerCase());
    });

    const handleCountryChange = (selectedCountry: Country) => {
        setCountry(selectedCountry);
        setIsOpen(false);
        setSearch("");
    };

    return (
        <div
            ref={dropdownRef}
            className={`
    relative flex h-12 w-full items-center
    rounded-lg
    border border-[#C1C1C1]
    bg-[#FBFBFB]
    focus-within:border-[#E4312D]
    focus-within:ring-1
    focus-within:ring-[#E4312D]
    ${className}
  `}
        >
            {/* Country Selector */}
            <div className="relative h-full">
                <button
                    type="button"
                    disabled={disabled}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="
                        flex
                        h-full
                        items-center
                        gap-2
                        border-r
                        border-[#C1C1C1]
                        px-3
                        outline-none
                        disabled:cursor-not-allowed
                    "
                >
                    {flags[country] && (
                        <span className="flex h-6 w-8 shrink-0 items-center justify-center [&>svg]:h-6 [&>svg]:w-8">
                            {React.createElement(flags[country])}
                        </span>
                    )}

                    <span className="text-sm font-semibold text-black">
                        +{getCountryCallingCode(country)}
                    </span>

                    <svg
                        className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                            }`}
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Country Dropdown */}
                {isOpen && (
                    <div
                        className="
                            absolute
                            left-0
                            top-[52px]
                            z-50
                            w-[280px]
                            overflow-hidden
                            rounded-lg
                            border
                            border-[#D1D5DB]
                            bg-white
                            shadow-lg
                        "
                    >
                        {/* Search */}
                        <div className="border-b border-[#E5E7EB] p-2">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search country..."
                                autoFocus
                                className="
                                    h-9
                                    w-full
                                    rounded-md
                                    border
                                    border-[#D1D5DB]
                                    px-3
                                    text-sm
                                    outline-none
                                    focus:border-[#4590CA]
                                "
                            />
                        </div>

                        {/* Scrollable Countries */}
                        <div className="max-h-60 overflow-y-auto">
                            {filteredCountries.length > 0 ? (
                                filteredCountries.map((countryCode) => {
                                    const Flag = flags[countryCode];

                                    const countryName =
                                        countryNames[
                                        countryCode as keyof typeof countryNames
                                        ];

                                    return (
                                        <button
                                            key={countryCode}
                                            type="button"
                                            onClick={() =>
                                                handleCountryChange(
                                                    countryCode
                                                )
                                            }
                                            className="
                                                flex
                                                w-full
                                                items-center
                                                gap-3
                                                px-3
                                                py-2.5
                                                text-left
                                                text-sm
                                                hover:bg-[#F3F4F6]
                                            "
                                        >
                                            {/* Flag */}
                                            <span className="flex h-5 w-7 shrink-0 items-center justify-center">
                                                {Flag &&
                                                    React.createElement(Flag)}
                                            </span>

                                            {/* Country Name */}
                                            <span className="flex-1 text-[#333333]">
                                                {countryName}
                                            </span>

                                            {/* Calling Code */}
                                            <span className="text-[#333333]">
                                                +
                                                {getCountryCallingCode(
                                                    countryCode
                                                )}
                                            </span>
                                        </button>
                                    );
                                })
                            ) : (
                                <p className="px-3 py-4 text-center text-sm text-[#333333]">
                                    No countries found
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Phone Number */}
            <input
                type="tel"
                value={value || ""}
                disabled={disabled}
                placeholder={placeholder}
                inputMode="numeric"
                onChange={(e) => {
                    const input = e.target.value.replace(/\D/g, "").slice(0, 10);
                    onChange(input as Value);
                }}
                className="
    h-full
    min-w-0
    flex-1
    rounded-r-lg
    bg-[#FBFBFB]
    px-4
    text-base
    text-[#333333]
    outline-none
    placeholder:text-[#333333]
    disabled:cursor-not-allowed
  "
            />
        </div>
    );
};

export default CustomPhoneInput;