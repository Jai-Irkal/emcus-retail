import Define from "@/public/how-we-work/EngagementLifeCycle/Define.svg";
import Develop from "@/public/how-we-work/EngagementLifeCycle/Develop.svg";
import Test from "@/public/how-we-work/EngagementLifeCycle/Test.svg";
import Support from "@/public/how-we-work/EngagementLifeCycle/support.svg"

export type SubItem = {
    title:string,
    data:string[]
}

export type EngagementLifeCycleItem = {
    id:number,
    img:string,
    title:string,
    description:string,
    one: SubItem,
    two: SubItem,
}

export const EngagementLifeCycle:EngagementLifeCycleItem[] = [
    {
        id:1,
        img:Define,
        title:"Define",
        description:"Understand the problem before touching a line of code.",
        one:{
            title:"Requirements",
            data:[
                "Discovery workshops",
                "Use-case framing",
                "Stakeholder alignment",
                "Progressive elaboration"
            ]
        },
        two:{
            title:"Document",
            data:[
                "Scope & assumptions",
                "Risk register",
                "Design baseline",
                "Acceptance criteria"
            ]
        }
    },
    {
        id:2,
        img:Develop,
        title:"Develop",
        description:"Build in small, demonstrable increments.",
        one:{
            title:"Engineering",
            data:[
                "Architecture & Design Reviews",
                "Pair programming",
                "Sprint deliverables",
                "Continuous integration"
            ]
        },
        two:{
            title:"Demonstration",
            data:[
                "Working software each sprint",
                "Stakeholder demos",
                "Iterative feedback loops"
            ]
        }
    },
    {
        id:3,
        img:Test,
        title:"Test",
        description:"Verify behavior across the stack - unit to system to field.",
        one:{
            title:"Verification",
            data:[
                "Integration Testing",
                "System Testing",
                "Regulatory & compliance testing"
            ]
        },
        two:{
            title:"Release",
            data:[
                "Acceptance review",
                "Deployment automation",
                "Test management & traceability"
            ]
        }
    },
    {
        id:4,
        img:Support,
        title:"Support",
        description:"Beyond launch, we listen & evolve.",
        one:{
            title:"Post-Release",
            data:[
                "Monitor solution performance",
                "Triage issues & gather feedback",
                "Provide Tier-2 & Tier-3 support"
            ]
        },
        two:{
            title:"Evolution",
            data:[
                "Project scope & key assumptions",
                "Risk tracking log",
                "Design foundation"
            ]
        }
    }
]