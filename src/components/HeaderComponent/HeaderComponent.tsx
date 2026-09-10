"use client";

import React, { useEffect, useRef, useState } from "react";
import icon from "@/public/header/emcus-icon.png";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { NAVIGATION, NavItem } from "@/lib/navigation";
import ISOComponent from "../ISOComponent/ISOComponent";

type HeaderProps = {
    active: string; // example: "HOME", "Blog", "Careers"
};

const HeaderComponent = ({ active }: HeaderProps) => {

    const router = useRouter();
    const pathname = usePathname();

    const routes: Record<string, string> = {
        HOME: "/",
        "WHAT WE DO": "/what-we-do/our-services",
        SERVICES: "/what-we-do/our-services",
        TECHNOLOGYEXPOERTISE: "/what-we-do/technology-expertise",
        "HOW WE WORK": "/how-we-work",
        "OUR TEAM": "/our-team",
        BLOG: "/resources/blog",
        "ABOUT US": "/company/about-us",
        CAREERS: "/company/careers",
        "CONTACT US": "/company/contact-us",
    };

    const handleNavigation = (path: string) => {
        router.push(path);
        setIsOpen(false);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    React.useEffect(() => {
        if (!isOpen) return;

        const closeMenu = () => setIsOpen(false);

        window.addEventListener("wheel", closeMenu, { passive: true });
        window.addEventListener("touchmove", closeMenu, { passive: true });

        return () => {
            window.removeEventListener("wheel", closeMenu);
            window.removeEventListener("touchmove", closeMenu);
        };
    }, [isOpen]);

    return (
        <>
            {/* HEADER */}
            <div
                className={`
    bg-white
    w-full
    fixed
    top-0
    left-0
    right-0
    z-50
    overflow-visible
    shadow-b-sm
    transition-all
    duration-300
    2xl:w-[65.8%] 2xl:mx-auto
    ${isScrolled && !isOpen
                        ? "h-[60px] md:h-[70px]"
                        : "h-[80px] md:h-[90px]"
                    }
  `}
            >
                <div className="w-full h-full flex items-center justify-between gap-4 px-4 md:px-6 lg:px-10 lg:justify-center min-[1150px]:gap-24 xl:gap-12 2xl:gap-16">
                    {/* Logo */}
                    <Image
                        src={icon}
                        alt="Emcus Logo"
                        className={`shrink-0 transition-all duration-300 
                        ${isScrolled && !isOpen
                                ? "w-[100px] md:w-[120px] lg:w-[140px]"
                                : "w-[130px] md:w-[160px] lg:w-[180px]"
                            }`}
                        priority
                    />

                    {/* Desktop Menu */}
                    {/* Desktop Navigation */}
                    <div className="relative z-20 hidden h-full min-w-max items-center gap-1 lg:flex">
                        {NAVIGATION.map((group) => {
                            if (group.title === "MAIN") {
                                return group.items.map((item) => {
                                    if (item.children) {
                                        return (
                                            <DesktopDropdown
                                                key={item.label}
                                                title={item.label}
                                                items={item.children}
                                                active={active}
                                                onNavigate={handleNavigation}
                                            />
                                        );
                                    }

                                    return (
                                        <NavButton
                                            key={item.label}
                                            label={item.label}
                                            path={item.path!}
                                            active={active}
                                            onNavigate={handleNavigation}
                                        />
                                    );
                                });
                            }

                            return (
                                <DesktopDropdown
                                    key={group.title}
                                    title={group.title}
                                    items={group.items}
                                    active={active}
                                    onNavigate={handleNavigation}
                                />
                            );
                        })}
                    </div>

                    {/* Right side */}
                    <div className="flex shrink-0 items-center gap-2 md:gap-3 lg:gap-0">
                        <ISOComponent />

                        {/* Hamburger - Mobile + Tablet */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-20 flex h-8 w-8 shrink-0 flex-col items-center justify-center lg:hidden"
                        >
                            <span
                                className={`absolute w-6 h-[2px] bg-black transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"
                                    }`}
                            />
                            <span
                                className={`absolute w-6 h-[2px] bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`absolute w-6 h-[2px] bg-black transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed top-[80px] md:top-[90px] left-1/2 -translate-x-1/2
  w-full bg-white z-40 shadow-xl
  transition-all duration-300 ease-in-out
  ${isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col pt-4">
                    {NAVIGATION.map((group) => {
                        if (group.title === "MAIN") {
                            return group.items.map((item) => {
                                if (item.children) {
                                    return (
                                        <MobileDropdown
                                            key={item.label}
                                            title={item.label}
                                            items={item.children}
                                            active={active}
                                            isOpen={whatWeDoOpen}
                                            toggle={() => setWhatWeDoOpen((v) => !v)}
                                            onNavigate={handleNavigation}
                                        />
                                    );
                                }

                                return (
                                    <MobileItem
                                        key={item.label}
                                        title={item.label}
                                        path={item.path!}
                                        active={active}
                                        onNavigate={handleNavigation}
                                    />
                                );
                            });
                        }

                        return (
                            <MobileDropdown
                                key={group.title}
                                title={group.title}
                                items={group.items}
                                active={active}
                                isOpen={
                                    group.title === "RESOURCES"
                                        ? resourcesOpen
                                        : companyOpen
                                }
                                toggle={() =>
                                    group.title === "RESOURCES"
                                        ? setResourcesOpen((v) => !v)
                                        : setCompanyOpen((v) => !v)
                                }
                                onNavigate={handleNavigation}
                            />
                        );
                    })}
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/20 lg:hidden"
                    onClick={() => setIsOpen(false)}
                    onWheel={() => setIsOpen(false)}
                    onTouchMove={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default HeaderComponent;

/* ---------------- Desktop Components ---------------- */

const NAV_ACTIVE_CLASS = "bg-[#2D7DBA] text-white";
const NAV_INACTIVE_CLASS = "text-black hover:text-[#2D7DBA]";

const NavButton = ({
    label,
    path,
    active,
    onNavigate,
}: {
    label: string;
    path: string;
    active: string;
    onNavigate: (path: string) => void;
}) => (
    <button
        onClick={() => onNavigate(path)}
        className={`h-[40px] rounded-md px-8 lg:px-[12px] 2xl:px-4 flex items-center text-[12px] transition-colors font-semibold cursor-pointer
        ${active === label ? NAV_ACTIVE_CLASS : NAV_INACTIVE_CLASS}`}
    >
        {label}
    </button>
);



const isFinePointer = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const DesktopDropdown = ({
    title,
    items,
    active,
    onNavigate,
}: {
    title: string;
    items: NavItem[];
    active: string;
    onNavigate: (path: string) => void;
}) => {

    const pathname = usePathname();
    const rootRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const isParentActive =
        title === active ||
        items.some(
            (item) =>
                item.label === active ||
                item.path === pathname
        );

    useEffect(() => {
        if (!open) return;

        const onPointerDown = (event: PointerEvent) => {
            if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("pointerdown", onPointerDown);
        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [open]);

    return (
        <div
            ref={rootRef}
            className="group relative h-full"
            onMouseLeave={() => {
                if (isFinePointer()) setOpen(false);
            }}
        >
            <button
                type="button"
                aria-expanded={open}
                aria-haspopup="menu"
                onClick={() => setOpen((value) => !value)}
                className="relative z-20 flex h-full cursor-pointer touch-manipulation items-center text-[12px] transition-colors"
            >
                <div
                    className={`group flex h-[40px] items-center gap-1 rounded-md px-3 lg:px-[12px] font-semibold transition-colors
      ${isParentActive || open ? NAV_ACTIVE_CLASS : NAV_INACTIVE_CLASS}`}
                >
                    <p>{title}</p>

                    <svg
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>

            <div
                className={`absolute left-0 top-full z-[100] min-w-38 flex-col rounded-lg bg-white shadow-lg p-2 ${open
                    ? "flex"
                    : "hidden [@media(hover:hover)_and_(pointer:fine)]:group-hover:flex"
                    }`}
            >
                {items.map((item) => (
                    <button
                        key={item.label}
                        type="button"
                        onClick={() => {
                            setOpen(false);
                            onNavigate(item.path!);
                        }}
                        className={`w-full cursor-pointer rounded-lg px-4 py-2 text-left text-[14px] transition-colors font-semibold
                        ${active === item.label || item.path === pathname
                                ? NAV_ACTIVE_CLASS
                                : NAV_INACTIVE_CLASS
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
};


/* ---------------- Mobile Components ---------------- */

const MobileItem = ({
    title,
    path,
    active,
    onNavigate,
}: {
    title: string;
    path: string;
    active: string;
    onNavigate: (path: string) => void;
}) => (
    <button
        onClick={() => onNavigate(path)}
        className={`block w-full text-left px-6 py-3 font-bold text-[14px] transition-colors
      ${active === title ? NAV_ACTIVE_CLASS : NAV_INACTIVE_CLASS}`}
    >
        {title}
    </button>
);


const MobileDropdown = ({
    title,
    items,
    isOpen,
    toggle,
    active,
    onNavigate,
}: {
    title: string;
    items: NavItem[];
    isOpen: boolean;
    toggle: () => void;
    active: string;
    onNavigate: (path: string) => void;
}) => {
    const pathname = usePathname();

    const isParentActive =
        title === active ||
        items.some(
            (item) =>
                item.label === active ||
                item.path === pathname
        );

    return (
        <div>
            <button
                onClick={toggle}
                className={`w-full flex justify-between items-center px-6 py-3 font-bold text-[14px] transition-colors
                    ${isParentActive || isOpen
                        ? NAV_ACTIVE_CLASS
                        : NAV_INACTIVE_CLASS
                    }`}
            >
                {title}
                <Chevron rotate={isOpen} />
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60" : "max-h-0"
                    }`}
            >
                {items.map((item) => {
                    const isChildActive =
                        active === item.label ||
                        item.path === pathname;

                    return (
                        <button
                            key={item.label}
                            onClick={() => onNavigate(item.path!)}
                            className={`block w-full text-left pl-10 pr-6 py-2 text-[14px] transition-colors
                                ${isChildActive
                                    ? NAV_ACTIVE_CLASS
                                    : `${NAV_INACTIVE_CLASS} font-semibold`
                                }`}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};


/* ---------------- Chevron ---------------- */

const Chevron = ({
    rotate = false,
    active = false,
}: {
    rotate?: boolean;
    active?: boolean;
}) => (
    <svg
        className={`w-3 h-3 transition-transform duration-200 ${rotate ? "rotate-180" : ""
            }`}
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
