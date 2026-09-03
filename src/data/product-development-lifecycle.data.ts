import Requirements from "@/public/how-we-work/ProductDevelopmentLifeCycle/RequirementsGathering.svg";
import SystemArchitecture from "@/public/how-we-work/ProductDevelopmentLifeCycle/SystemArchitecturePlanning.svg";
import HWSWFWMD from "@/public/how-we-work/ProductDevelopmentLifeCycle/Design.svg";
import Implementation from "@/public/how-we-work/ProductDevelopmentLifeCycle/ImplementationDevelopment.svg";
import SystemIntegration from "@/public/how-we-work/ProductDevelopmentLifeCycle/SystemIntegration.svg";
import VerificationValidation from "@/public/how-we-work/ProductDevelopmentLifeCycle/VerificationValidation.svg";
import CertificationSupport from "@/public/how-we-work/ProductDevelopmentLifeCycle/CertificationSupport.svg";
import ProductRelease from "@/public/how-we-work/ProductDevelopmentLifeCycle/ProductionRelease.svg";
import SustenanceEngineering from "@/public/how-we-work/ProductDevelopmentLifeCycle/SustenanceEngineering.svg";

export type Steps = {
    id:number,
    title:string,
    image:string,
    description:string
}

export type ProductDevelopmentSection = {
    id:number,
    section:string,
    Steps: Steps[]
}

export const PRODUCT_DEVELOPMENT_LIFECYCLE: ProductDevelopmentSection[] = [
    {
        id:1,
        section: "PLANNING",
        Steps: [
            {
                id: 1,
                title: "Requirement Gathering",
                image: Requirements,
                description: "Defining scope, user needs & project goals."
            },
            {
                id: 2,
                title: "System Architecture & Planning",
                image: SystemArchitecture,
                description: "Defining the overall system structure, technical specifications & milestones."
            },
            {
                id: 3,
                title: "HW/FW/SW/Mechanical Design",
                image: HWSWFWMD,
                description: "Detailed, parallel engineering across all disciplines."
            },
        ]
    },
    {
        id:2,
        section: "DEVELOPMENT",
        Steps: [
            {
                id: 4,
                title: "Implementation & Development",
                image: Implementation,
                description: "Turning designs into physical components & written code."
            },
            {
                id: 5,
                title: "System Integration",
                image: SystemIntegration,
                description: "Assembling components into a functionality system."
            },
        ]
    },
    {
        id:3,
        section: "QUALITY & COMPLIANCE",
        Steps: [
            {
                id: 6,
                title: "Verification & Validation",
                image: VerificationValidation,
                description: "Testing against specifications & real-world user needs."
            },
            {
                id: 7,
                title: "Certification Support",
                image: CertificationSupport,
                description: "Ensuring compliance with regulatory standards."
            },
        ]
    },
    {
        id:4,
        section: "RELEASE & SUPPORT",
        Steps: [
            {
                id: 8,
                title: "Product Release",
                image: ProductRelease,
                description: "Handing off & launch."
            },
            {
                id: 9,
                title: "Sustenance Engineering",
                image: SustenanceEngineering,
                description: "Ongoing maintenance, bug fixes, updates & feature enhancements."
            },
        ]
    },
]