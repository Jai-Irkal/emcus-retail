import React from 'react'

const HegxagonComponent = ({ num }: { num: number }) => {
    return (
        <div
            className="w-10 h-10 bg-[#2D7DBA] rotate-90 flex items-center justify-center
  [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]"
        >
            <p className="-rotate-90 font-bold text-white">
                {num}
            </p>
        </div>
    )
}

export default HegxagonComponent