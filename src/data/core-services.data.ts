import ProductEngineeringIcon from '@/public/core-services/product-engineering-icon.svg'
import HardwareEngineeringIcon from '@/public/core-services/hardware-engineering-icon.svg'
import FirmwareEngineeringIcon from '@/public/core-services/firmware-engineering-icon.svg'
import CyberSecurityEngineeringIcon from '@/public/core-services/cyber-security-engineering.svg'
import SoftwareEngineeringIcon from '@/public/core-services/software-engineering-icon.svg'
import MechanicalEngineeringIcon from '@/public/core-services/mechanical-engineering-icon.svg'
import CertificationIcon from '@/public/core-services/certification-icon.svg'
import ManufacturingSupportIcon from '@/public/core-services/manufacturing-icon.svg'

export type CoreService = {
    id: number;
    imgSrc: string;
    title: string;
    data: string[];
};

export const CORE_SERVICES: CoreService[] = [
    {
        id:1,
        imgSrc: ProductEngineeringIcon,
        title:"Product Engineering",
        data:[
            'New Product Development',
            'Prototype Development',
            'Product Modernization',
            'Cost Optimization',
            'Sustenance Engineering',
        ]
    },
    {
        id:2,
        imgSrc: HardwareEngineeringIcon,
        title:"Hardware Engineering",
        data:[
            'Electronic Hardware Design',
            'PCB Design & Layout',
            'Power Electronics',
            'Wireless Connectivity Design'
        ]
    },
    {
        id:3,
        imgSrc: FirmwareEngineeringIcon,
        title:"Firmware Engineering",
        data:[
            'Embedded Firmware Development',
            'RTOS/Linux Solutions',
            'Protocol & Connectivity Integration',
            'Device Driver Development',
            'Security & Functional Safety',
        ]
    },
    {
        id:4,
        imgSrc: CyberSecurityEngineeringIcon,
        title:"Cyber Security Engineering",
        data:[
            'Secure Product Architecture',
            'Secure Boot & Firmware Protection',
            'Authentication & Authorization',
            'Secure Communication (TLS/SSL)',
            'Encryption & Key Management',
        ]
    },
    {
        id:5,
        imgSrc: SoftwareEngineeringIcon,
        title:"Software Engineering",
        data:[
            'Mobile Applications',
            'Web Applications',
            'Desktop Applications',
            'Cloud & IoT Platforms',
        ]
    },
    {
        id:6,
        imgSrc: MechanicalEngineeringIcon,
        title:"Mechanical Engineering",
        data:[
            'Enclosure Design',
            'Industrial Design',
            'Thermal & Structural Engineering',
            'Product Packaging',
        ]
    },
    {
        id:7,
        imgSrc: CertificationIcon,
        title:"Verification, Validation & Certification",
        data:[
            'Verification & Validation',
            'Functional Testing',
            'Automation Testing',
            'Manual Testing',
        ]
    },
    {
        id:8,
        imgSrc: ManufacturingSupportIcon,
        title:"Manufacturing Support",
        data:[
            'DFM (Design for Manufacturing) /DFT (Design for Testability)',
            'Production Support',
            'Manufacturing Transfer'
        ]
    }
]