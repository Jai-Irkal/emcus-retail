import HardwareDesign from "@/public/technology-expertise/HardwareDesign.svg";
import MechanicalDesign from "@/public/technology-expertise/MechanicalDesign.svg";
import Embedded from "@/public/technology-expertise/EmbeddedFirmware.svg";
import SoftwareDevelopment from "@/public/technology-expertise/SoftwareDevelopment.svg";
import Verification from "@/public/technology-expertise/Validation.svg";
import Connectivity from "@/public/technology-expertise/Connectivity.svg";
import UI from "@/public/technology-expertise/UI.svg";
import MID from "@/public/technology-expertise/MID.svg"



export type TechnologyToolsSoftwareItem = {
    id: number,
    title:string,
    image:string,
    data: string[]
}

export const TECHNOLOGY_TOOLS: TechnologyToolsSoftwareItem[] = [
    {
        id:1,
        title:"Hardware Design Services",
        image:HardwareDesign,
        data:[
            "Altium Designer / Cadence OrCAD / KiCad",
            "Cadence Allegro / Mentor Graphics PADS",
            "LTspice / PSpice",
            "HyperLynx"
        ]
    },
    {
        id:2,
        title:"Mechanical Design Services",
        image:MechanicalDesign,
        data:[
            "SolidWorks / Creo / Pro-E",
            "Fusion 360",
            "AutoCAD",
            "CATIA / ANSYS (FEA Simulation)"
        ]
    },
    {
        id:3,
        title:"Embedded Firmware Services",
        image:Embedded,
        data:[
            "STM32 Series / Renesas RX/RL78",
            "NXP LPC / i.MX RT",
            "TI MSP430 / Sitara",
            "Microchip PIC / AVR / SAM",
            "IAR Embedded Workbench",
            "Keil MDK / µVision",
            "STM32CubeIDE / MPLAB X",
            "Segger J-Link",
            "CCS / Eclipse / Mbed / HEW",
            "GNU / CMake / Git / Subversion"
        ]
    },
    {
        id:4,
        title:"Software Development Services",
        image:SoftwareDevelopment,
        data:[
            "Flutter / Android Native",
            "iOS Native / React Native",
            "Angular / React / HTML5",
            "JavaScript / TypeScript",
            ".NET Core / WPF / MVC",
            "WinForms / Delphi",
            "Azure / AWS / Google Cloud",
            "Node.js / Java",
            ".NET Core",
            "PostgreSQL / SQL Server / MongoDB"
        ]
    },
    {
        id:5,
        title:"Verification, Validation and Automation",
        image:Verification,
        data:[
            "Selenium, Jenkins",
            "TestRail, Postman",
            "SoapUI, Rest Assured",
            "Python Automation Frameworks",
            "Google Test, NUnit",
            "JUnit, VectorCAST"
        ]
    },
    {
        id:6,
        title:"Connectivity and IoT Engineering Services",
        image:Connectivity,
        data:[
            "Visual Studio Code",
            "Eclipse IDE",
            "STM32Cube IDE",
            "Keil MDK",
            "IAR Embedded Workbench",
            "PlatformIO",
            "Arduino IDE"
        ]
    },
    {
        id:7,
        title:"UI/UX Design Services",
        image:UI,
        data:[
            "Figma",
            "Sketch",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Miro"
        ]
    },
    {
        id:8,
        title:"Mechanical Industrial Design (ID) Services",
        image:MID,
        data:[
            "SolidWorks",
            "Rhino3D",
            "KeyShot",
            "Fusion 360",
            "Blender"
        ]
    },
]