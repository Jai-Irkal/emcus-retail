import Link from "next/link";

export const CareerCard = ({ item }: any) => {
    return (
        <div className="w-full rounded-xl p-6">

            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">

                {/* Left Section (2/3) */}
                <div className="sm:col-span-2">
                    <h2 className="text-xl font-bold text-[#2D7DBA]">
                        {item.role}
                    </h2>
                    <div className="flex gap-2 items-center mt-1">
                        <p className="text-[#333333]">
                            {item.location}
                        </p>
                        <div className="bg-[#64748B] h-2 w-2 rounded-full" />
                        <p className="text-[#333333]">
                            {item.role_type}
                        </p>
                    </div>
                </div>

                {/* Right Section (1/3) */}
                <div className="flex gap-3 sm:justify-start lg:justify-end">
                    {/* <button className="px-4 py-2 border border-[#322986] text-[#322986] rounded-md hover:bg-[#322986] hover:text-white transition"> */}
                    <Link href={`/company/careers/${item.id}`}>
                        <button className="px-4 py-2 bg-[#2D7DBA] text-white font-semibold rounded-md hover:bg-[#2A72A8] transition cursor-pointer">
                            Details
                        </button>
                    </Link>
                    <Link href={`/company/careers/${item.id}?tab=applications`}>
                        <button className="px-4 py-2 bg-[#2C4A94] text-white font-semibold rounded-md hover:bg-[#223974] transition cursor-pointer">
                            APPLY
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
};