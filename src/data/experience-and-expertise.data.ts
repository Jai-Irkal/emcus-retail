import ControlPanelImg from "@/public/experience_expertise/control-panel.svg";
import DevicesImage from "@/public/experience_expertise/fire-alarm-devices.svg";
import WarningDetectionImg from "@/public/experience_expertise/warning-detection.svg";
import ExtinguishPanelImg from "@/public/experience_expertise/estinguishing_panel.svg";
import TestingImg from "@/public/experience_expertise/testing.svg";
import SimulationSW from "@/public/experience_expertise/simulation_sw.svg";
import RegulatoryStandards from "@/public/experience_expertise/standards.svg";
import SoftwareToolsImg from "@/public/experience_expertise/sw_tools.svg";
import CloudAlarmMonitoring from "@/public/experience_expertise/monitoring_sw.svg";

export const EXPERIENCE_AND_EXPERTISE = [
    {
        id:1,
        icon:ControlPanelImg,
        title:"FIRE ALARM CONTROL PANEL",
        data:[
            'Single Loop to Multi Loop Addressable & Conventional',
            'Network Cards',
            'Loop Protocols',
            'Wireless Panels (Mesh/Star Topology) Proprietary Protocols',
            'Remote Annunciators',
            'Emergency Communication Systems',
            'Voice Alarm & Evacuation Systems',
            'Gateway Communication Module'
        ]
    },
    {
        id:3,
        icon:WarningDetectionImg,
        title:"EARLY WARNING DETECTION",
        data:[
            'Aspiration-Based Smoke Detection',
        ]
    },
    {
        id:5,
        icon:TestingImg,
        title:"FIRE SYSTEM TESTING & COMMISSIONING EQUIPMENT",
        data:[
            'Handheld Device Programmers',
            'Flame Detector Tester',
            'Fire Detector Tester'
        ]
    },
    {
        id:7,
        icon:RegulatoryStandards,
        title:"FIRE REGULATORY STANDARDS",
        data:[
            'EN54',
            'UL864',
            'NFPA',
            'AS 1670',
            'ULC-S561',
        ]
    },
    {
        id:9,
        icon:CloudAlarmMonitoring,
        title:"CLOUD-BASED ALARM MONITORING SOFTWARE",
        data:[]
    },
    {
        id:2,
        icon:DevicesImage,
        title:"FIRE ALARM INITIATING DEVICES (WIRED & WIRELESS)",
        data:[
            'Smoke & Heat Detectors',
            'Input/Output Modules',
            'Visual Alarm Indicators',
            'Audible Alarm Indicators',
            'Duct Detectors',
            'Beam Detectors',
            'Aspiration Detectors',
            'CO Detectors',
            'Wireless Expanders',
            'Interface modules'
        ]
    },
    {
        id:4,
        icon:ExtinguishPanelImg,
        title:"FIRE ALARM EXTINGUISHING PANEL",
        data:[
            'Cross-Zoning Algorithms',
            'Control of Extinguishing Systems',
            'Alert Forwarding'
        ]
    },
    {
        id:6,
        icon:SimulationSW,
        title:"SIMULATION SOFTWARE",
        data:[
            'Event Simulator',
            'Device Simulator',
            'Loop Simulator',
            'Panel Simulator',
            'Network Simulator',
            'Loop Power Calculators'
        ]
    },
    {
        id:8,
        icon:SoftwareToolsImg,
        title:"SOFTWARE TOOLS",
        data:[
            'PC-Based Configuration Suite',
            'Smartphone Applications',
            'Loop Power Calculators',
            'Notification Software'
        ]
    },
]