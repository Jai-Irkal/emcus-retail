import HardwareDesignServicesImg from "@/public/our-services/HardwareDesignServices.svg";
import EmbeddedFirmwareServicesImg from "@/public/our-services/EmbeddedFirmwareServices.svg";
import SoftwareDevelopmentServicesImg from "@/public/our-services/SoftwareDevelopmentServices.svg";
import MechanicalDesignServicesImg from "@/public/our-services/MechanicalDesignServices.svg";
import VerificationValidationServicesImg from "@/public/our-services/VerificationServices.svg";
import CertificationSupportImg from "@/public/our-services/Certification.svg";
import AutomationTestingServicesImg from "@/public/our-services/Automation.svg";
import ConnectivityIoTEngineeringServicesImg from "@/public/our-services/ConnectivityServices.svg";
import UIUXDesignServicesImg from "@/public/our-services/UXServices.svg";
import MechanicalIndustrialDesignServicesImg from "@/public/our-services/MechIDServices.svg";
import HardwareDesignServicesMoblieImg from "@/public/our-services/mobile-imgs/HardwareDesignServices_Mobile.svg";
import EmbeddedFirmwareServicesMoblieImg from "@/public/our-services/mobile-imgs/EmbeddedFirmware_Mobile.svg";
import SoftwareDevelopmentServicesMoblieImg from "@/public/our-services/mobile-imgs/SoftwareDevelopmentServices_Mobile.svg";
import MechanicalDesignServicesMoblieImg from "@/public/our-services/mobile-imgs/MechanicalDesignServices_Mobile.svg";
import VerificationValidationServicesMoblieImg from "@/public/our-services/mobile-imgs/VerificationServices_Mobile.svg";
import CertificationSupportMoblieImg from "@/public/our-services/mobile-imgs/CertificationSupport_Mobile.svg";
import AutomationTestingServicesMoblieImg from "@/public/our-services/mobile-imgs/AutomationTestingServices_Mobile.svg";
import ConnectivityIoTEngineeringServicesMoblieImg from "@/public/our-services/mobile-imgs/ConnectivityServices_Mobile.svg";
import UIUXDesignServicesMoblieImg from "@/public/our-services/mobile-imgs/UIServices_Mobile.svg";
import MechanicalIndustrialDesignServicesMoblieImg from "@/public/our-services/mobile-imgs/MechIDServices_Mobile.svg";

export type ServiceItem = {
    id: number;
    title: string;
    image: string;
    mobileImage:string;
    leftItems: string[];
    rightItems: string[];
};

export const OUR_SERVICES: ServiceItem[] = [
    {
        id:1,
        title:"HARDWARE DESIGN SERVICES",
        image: HardwareDesignServicesImg,
        mobileImage:HardwareDesignServicesMoblieImg,
        leftItems: [
            "Architecture & Design",
            "Analog & Digital Circuit Design",
            "Power Electronics Design",
            "Battery & Power Management",
            "High-Speed Interface Design",
            "Signal & Power Integrity",
            "RF & Wireless Hardware Design",
            "Design for Testability (DFT)",
        ],
        rightItems: [
            "Schematic Capture & PCB Layout",
            "EMI/EMC Design Optimization",
            "Obsolescence Management",
            "Prototype Bring-Up & Debugging",
            "Design for Manufacturing (DFM)",
            "Hardware Verification & Validation",
        ]
    },
    {
        id:2,
        title:"EMBEDDED FIRMWARE SERVICES",
        image: EmbeddedFirmwareServicesImg,
        mobileImage:EmbeddedFirmwareServicesMoblieImg,
        leftItems: [
            "BSP & Device Driver Development",
            "RTOS/Bare-Metal Firmware Development",
            "Embedded Linux Development",
            "Bootloader & Firmware Upgrade Solutions",
            "Communication Protocol Development",
            "Security & Encryption Implementation"
        ],
        rightItems: [
            "Middleware Integration",
            "Performance Optimization & Debugging",
            "Unit Testing & Integration Testing",
            "Firmware Maintenance & Sustenance",
            "Functional Safety Implementation",
            "OTA/FOTA Solutions",
        ]
    },
    {
        id:3,
        title:"SOFTWARE DEVELOPMENT SERVICES (MOBILE/WEB/DESKTOP/CLOUD)",
        image: SoftwareDevelopmentServicesImg,
        mobileImage:SoftwareDevelopmentServicesMoblieImg,
        leftItems: [
            "BSP & Device Driver Development",
            "RTOS/Bare-Metal Firmware Development",
            "Embedded Linux Development",
            "Bootloader & Firmware Upgrade Solutions",
            "Communication Protocol Development",
            "Security & Encryption Implementation"
        ],
        rightItems: [
            "Middleware Integration",
            "Performance Optimization & Debugging",
            "Unit Testing & Integration Testing",
            "Firmware Maintainence & Sustenance",
            "Functional Safety Implementation",
            "OTA/FOTA Solutions",
        ]
    },
    {
        id:4,
        title:"MECHANICAL DESIGN SERVICES",
        image: MechanicalDesignServicesImg,
        mobileImage:MechanicalDesignServicesMoblieImg,
        leftItems: [
            "Product Enclosure Design",
            "3D CAD Modeling",
            "Sheet metal & plastic enclosure design",
            "Prototype Development",
            "Industrial Design (ID)",
            "Tooling Support",
            "Thermal Analysis",
            "Structural Analysis",
            "Manufacturing Support"
        ],
        rightItems: [
            "Airflow Analysis",
            "FEA Simulation",
            "Design for Manufacturing (DFM)"
        ]
    },
    {
        id:5,
        title:"VERIFICATION & VALIDATION SERVICES (V&V)",
        image: VerificationValidationServicesImg,
        mobileImage:VerificationValidationServicesMoblieImg,
        leftItems: [
            "Requirement-Based Testing",
            "Design Verification",
            "Functional Testing",
            "Integration Testing",
            "System Testing",
            "Regression Testing",
            "Performance Testing",
            "Traceability & Compliance Verification"
        ],
        rightItems: [
            "Reliability Testing",
            "Environmental Testing Support",
            "Mobile & Web Application Testing",
            "Embedded Product Testing",
            "Alpha, Beta & Production Validation Testing"
        ]
    },
    {
        id:6,
        title:"CERTIFICATION SUPPORT/ STANDARDS EXPERTISE",
        image: CertificationSupportImg,
        mobileImage:CertificationSupportMoblieImg,
        leftItems: [
            "UL864",
            "ULC-S527",
            "ULC-S559",
            "EN 54 Series",
            "AS 7240 Series",
            "NFPA 72"
        ],
        rightItems: [
        ]
    },
    {
        id:7,
        title:"AUTOMATION TESTING SERVICES",
        image: AutomationTestingServicesImg,
        mobileImage:AutomationTestingServicesMoblieImg,
        leftItems: [
            "Test Automation Framework Development",
            "Automated Regression Testing",
            "API Automation Testing",
            "Continuous Integration Testing",
            "Testing script Development",
            "Automated Test Reporting",
            "Performance Automation",
            "UI Automation Testing"
        ],
        rightItems: [
            "Continuous Testing",
            "Test Data Management"
        ]
    },
    {
        id:8,
        title:"CONNECTIVITY & IoT ENGINEERING SERVICES",
        image: ConnectivityIoTEngineeringServicesImg,
        mobileImage:ConnectivityIoTEngineeringServicesMoblieImg,
        leftItems: [
            "IoT Gateway Development",
            "Edge Computing Solutions",
            "BLE Solutions",
            "Wi-Fi Solutions",
            "GSM/LTE/Cellular Solutions",
            "NFC Solutions",
            "Ethernet Connectivity",
            "RS232/RS485 Connectivity",
            "MQTT/HTTPS/REST Integration"
        ],
        rightItems: [
            "Cloud Connectivity & Device Management",
            "Remote Monitoring & Diagnostics",
            "OTA/FOTA Update Solutions"
        ]
    },
    {
        id:9,
        title:"UI/UX DESIGN SERVICES (MOBILE/WEB/DESKTOP/EMBEDDED UI)",
        image: UIUXDesignServicesImg,
        mobileImage:UIUXDesignServicesMoblieImg,
        leftItems: [
            "User Experience Research",
            "User Interface Design",
            "Information Architecture",
            "Wireframing",
            "Interactive Prototyping",
            "Design Systems",
            "Dashboard Design",
            "Mobile App UI Design",
            "Web Application UI Design"
        ],
        rightItems: [
            "Embedded GUI Design",
            "Human Machine Interface (HMI) Design"
        ]
    },
    {
        id:10,
        title:"MECHANICAL INDUSTRIAL DESIGN (ID) SERVICES",
        image: MechanicalIndustrialDesignServicesImg,
        mobileImage:MechanicalIndustrialDesignServicesMoblieImg,
        leftItems: [
            "Product Styling",
            "Concept Development",
            "Product Visualization",
            "Ergonomics Engineering",
            "Human Factors Design",
            "Product Aesthetics",
            "CMF (Color, Material & Finish)",
            "Concept Sketching"
        ],
        rightItems: [
            "Design Language Development",
            "Product Branding Integration"
        ]
    },
]