import HardwareDesign from "@/public/technology-expertise/HardwareDesign.svg";
import MechanicalDesign from "@/public/technology-expertise/MechanicalDesign.svg";
import Embedded from "@/public/technology-expertise/EmbeddedFirmware.svg";
import SoftwareDevelopment from "@/public/technology-expertise/SoftwareDevelopment.svg";
import Verification from "@/public/technology-expertise/Validation.svg";
import Connectivity from "@/public/technology-expertise/Connectivity.svg";
import UI from "@/public/technology-expertise/UI.svg";
import MID from "@/public/technology-expertise/MID.svg"
import RFIDHWDEV from "@/public/technology-expertise/RFIDHardware_Development.svg";
import RFIDSWDEV from "@/public/technology-expertise/RFIDSoftware_Development.svg";
import RFIDFirmware from "@/public/technology-expertise/RFIDFirmwareEmbeddedDevelopment.svg";
import RFIDStandards from "@/public/technology-expertise/RFIDStandardProtocols.svg";
import RFIDEnterprise from "@/public/technology-expertise/EnterpriseIntegration.svg";
import RFIDSecurity from "@/public/technology-expertise/RFIDSecurity.svg";
import RFIDApplications from "@/public/technology-expertise/RFIDApplications.svg";



export type TechnologyExpertise = {
    id: number,
    title:string,
    image:string,
    data: string[]
}

export const TECHNOLOGY_EXPERTISE: TechnologyExpertise[] = [
    {
        id:1,
        title:"RFID Hardware Development",
        image:RFIDHWDEV,
        data:[
            "RFID Readers (Fixed & Handheld)",
            "RFID Antennas",
            "RFID Modules",
            "RFID Printers & Encoders",
            "RFID Portals",
            "RFID Tunnel Readers",
            "RFID Smart Shelves",
            "RFID Smart Cabinets",
            "RFID Smart Bins",
            "RFID Gates (EAS)",
            "RFID Sleds",
            "NFC Readers"
        ]
    },
    {
        id:2,
        title:"RFID Software Development",
        image:RFIDSWDEV,
        data:[
            "RFID Middleware",
            "Reader Management Software",
            "Tag Filtering",
            "Tag Association",
            "EPC Encoding/Decoding",
            "Inventory Management Software",
            "Asset Management",
            "Device Configuration Tools",
            "Desktop Applications",
            "Mobile Applications"
        ]
    },
    {
        id:3,
        title:"RFID Firmware & Embedded Development",
        image:RFIDFirmware,
        data:[
            "Reader Firmware Development",
            "Reader SDK Integration",
            "Antenna Control",
            "RF Power Optimization",
            "Multi-Antenna Control"
        ]
    },
    {
        id:4,
        title:"RFID Standards & Expertise",
        image:RFIDStandards,
        data:[
            "EPC Gen2/Gen2v2",
            "GS1 EPCglobal",
            "EPCIS 2.0",
            "ISO/IEC 18000 Series",
            "ISO/IEC 14443 (HF)",
            "ISO/IEC 15693 (HF)",
            "ISO/IEC 18092 (NFC)",
            "LLRP (Low Level Reader Protocol)",
            "RAIN RFID"
        ]
    },
    {
        id:5,
        title:"RFID Cloud & Enterprise Integration",
        image:RFIDEnterprise,
        data:[
            "EPCIS Repository",
            "Cloud Platforms",
            "REST APIs",
            "MQTT",
            "Azure",
            "AWS",
            "ERP Integration",
            "SAP Integration",
            "Oracle Integration",
            "WMS Integration",
            "POS Integration"
        ]
    },
    {
        id:6,
        title:"RFID Security",
        image:RFIDSecurity,
        data:[
            "Tag Authentication",
            "EPC Memory Management",
            "User Memory Programming",
            "Access Password",
            "Kill Password",
            "Secure Encoding",
            "Data Encryption",
            "Privacy Protection"
        ]
    },
    {
        id:7,
        title:"RFID Applications",
        image:RFIDApplications,
        data:[
            "Inventory Management",
            "Cycle Counting",
            "Smart Shelves",
            "Asset Tracking",
            "Warehouse Automation",
            "Supply Chain Visibility",
            "Retail Store Visibility",
            "Loss Prevention (EAS)",
            "Product Authentication",
            "Digital Product Passport (DPP)"
        ]
    },
]