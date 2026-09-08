import AIComputerVision from '@/public/portfolio-assets/AIComputerVision.svg';
import CloudPlatform from '@/public/portfolio-assets/CloudPlatforms.svg';
import DeviceManagement from '@/public/portfolio-assets/DeviceManagement.svg';
import HandheldEnterpriseMobility from '@/public/portfolio-assets/HandheldEnterpriseMobility.svg';
import LossPrevention from '@/public/portfolio-assets/LossPrevention.svg';
import POS from '@/public/portfolio-assets/POS.svg';
import RegulatoryCompliance from '@/public/portfolio-assets/RegulatoryCompliance.svg';
import RFIDAUTO from "@/public/portfolio-assets/RFID_AUTOID.svg";
import StoreTech from '@/public/portfolio-assets/StoreTech.svg';

export type RetailPortfolioItem = {
    id: number;
    icon: string;
    title: string;
    leftData: string[];
    rightData: string[];
};

export const RETAIL_SYSTEMS_PORTFOLIO: RetailPortfolioItem[] = [
    {
        id:1,
        icon:RFIDAUTO,
        title:"RFID & Auto-ID Solutions",
        leftData:[
            'Inventory Management',
            'Asset Tracking',
            'Item-Level Tracking',
            'RFID Middleware',
            'Reader Integration',
            'Antenna Design',
            'Tunnel Readers',
            'RFID Portal Solutions',
            'Smart Bins, Shelves & Cabinets',
            'Printer & Encoder Integration'
        ],
        rightData:[
            'Tag Encoding & Decoding',
            'Tag Commissioning & Personalization',
            'Barcode, QR & NFC Solutions',
            'EPC/GS1/EPCIS Standards',
        ]
    },
    {
        id:2,
        icon:HandheldEnterpriseMobility,
        title:"Handheld & Enterprise Mobility Solutions",
        leftData:[
            'Handheld Devices',
            'Enterprise Tablets',
            'Wearable & Ring Scanners',
            'Android Solutions',
            'Store Associate App',
            'Warehouse Solutions',
            'Mobile Workforce App',
            'Field Service App'
        ],
        rightData:[]
    },
    {
        id:3,
        icon:DeviceManagement,
        title:"Device Management Solutions",
        leftData:[
            'Mobile Devivce Management (MDM)',
            'Unified Endpoint Management (UEM)',
            'Enterprise Device Provisioning',
            'Remote Configuration, Monitoring & Diagnostics',
            'OTA Firmware Updates',
            'Software & Patch Deployment',
            'Device Security & Health Monitoring',
        ],
        rightData:[
            'Asset Management'
        ]
    },
    {
        id:4,
        icon:AIComputerVision,
        title:"AI Solutions",
        leftData:[
            'Computer Vision',
            'Product & Shelf Analytics',
            'Object Detection & OCR',
            'Customer Behavior Analysis',
            'Inventory & Demand Forecasting',
            'Retail & Operational Analytics',
            'Data Engineering',
            'Business Intelligence & Dashboards',
            'Demand Forecasting',
        ],
        rightData:[
            'Predictive Analytics'
        ]
    },
    {
        id:5,
        icon:StoreTech,
        title:"Store Technology",
        leftData:[
            'Smart Store Solutions',
            'Store Automation Solutions',
            'Smart Fitting Rooms',
            'Smart Shopping Carts',
            'Self-Service Kiosks',
            'Smart Lockers & Vending Machines',
            'Customer Experience Solutions',
            'Queue Management Solutions',
            'Footfall & Occupancy Monitoring'
        ],
        rightData:[]
    },
    {
        id:6,
        icon:LossPrevention,
        title:"Loss Prevention & Security Solutions",
        leftData:[
            'Electronic Article Surveillance (EAS)',
            'RFID Exit Gates',
            'Hard Tag Detachers',
            'Merchandise Protection',
            'Anti-Theft Systems',
            'Cash Loss Prevention',
            'People Counting',
            'Occupancy Monitoring',
            'Video Surveillance Integration',
            'Shrinkage Analytics'
        ],
        rightData:[
            'AM, RF & RFID EAS Systems',
            'Soft Label Deactivators',
            'Source Tagging'
        ]
    },
    {
        id:7,
        icon:RegulatoryCompliance,
        title:"Regulatory & Retail Compliance",
        leftData:[
            'Electrical Safety (IEC 62368-1, UL 62368-1, CSA 62368-1)',
            'EMC & Radio Compliance (CE, FCC, UKCA, RED)',
            'Environmental Compliance (RoHS, REACH, WEEE)',
            'Wireless Certification (Bluetooth SIG, Wi-Fi Alliance, NFC Forum)',
            'Payment & Security (PCI DSS, EMV)',
            'RFID & Auto-ID Standards (GS1, EPCglobal, EPCIS 2.0)',
            
        ],
        rightData:[
            'Cybersecurity Compliance (IEC 62443, ISO 27001, NIST)'
        ]
    },
    {
        id:8,
        icon:CloudPlatform,
        title:"Cloud Platforms",
        leftData:[
            'SaaS Solutions',
            'Mobile & Web Applications',
            'API & Middleware Development',
            'ERP/WMS/POS Integration',
            'Third-Party Device Integration',
            'Device Management Portals',
            'Reporting & Analytics Platforms'
        ],
        rightData:[]
    },
]