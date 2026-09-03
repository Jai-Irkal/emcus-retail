import FireLifeSafety from "@/public/about-us/Fire.svg";
import ProductDevelopment from "@/public/about-us/ProductDevelopment.svg";
import DedicatedTeam from "@/public/about-us/DedicatedTeams.svg";
import StandardsCompliance from "@/public/about-us/StandardsCompliance.svg";
import FullStackEngineering from "@/public/about-us/FullStack.svg";
import OnTimeDelivery from "@/public/about-us/OnTimeDelivery.svg";
import CompleteVisibility from "@/public/about-us/CompleteVisibility.svg";
import QualityAsHabit from "@/public/about-us/Quality.svg";
import RetailTech from "@/public/about-us/RetailTechnologySpecialization.svg"
import Expertise from "@/public/about-us/RFIDExpertise.svg";
import SystemsIntegration from "@/public/about-us/SystemIntegration.svg";

export type Difference = {
    id:number,
    image:string,
    title:string,
    description:string
}

export const WHAT_MAKES_EMCUS_DIFFERENT: Difference[] = [
    {
        id:1,
        image:RetailTech,
        title:"Retail Technology Specialization",
        description:"Skills in RFID, Auto ID, POS, mobility and IoT technology enabled retail."
    },
    {
        id:2,
        image:ProductDevelopment,
        title:"End-To-End Product Development",
        description:"Through conception & architectural design to development, implementation, & deployment."
    },
    {
        id:3,
        image:DedicatedTeam,
        title:"Dedicated R&D Teams",
        description:"Engineers that work smoothly within your team and development process."
    },
    {
        id:4,
        image:Expertise,
        title:"RFID & IoT Expertise",
        description:"Solid knowledge on RFID, sensors, wireless communications, gateways and cloud-connected devices."
    },
    {
        id:5,
        image:FullStackEngineering,
        title:"Full Stack Engineering",
        description:"One Engineering Team For Hardware, Embedded, Mobile, Desktop, Web, Cloud and UI/UX."
    },
    {
        id:6,
        image:OnTimeDelivery,
        title:"Agile, On-Time Delivery",
        description:"Guaranteed deliveries with consistent quality in each development sprint cycle."
    },
    {
        id:7,
        image:SystemsIntegration,
        title:"Complete Visibility",
        description:"Incorporation with POS, ERP, cloud computing, APIs, handheld devices, gateways, and enterprise."
    },
    {
        id:8,
        image:QualityAsHabit,
        title:"Quality As A Habit",
        description:"Reliable engineering quality through process structure, validation, and continuous improvement."
    },
]