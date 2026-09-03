import Image from "next/image";

export const Card = ({ item }:any) => (
  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
    <div className="bg-[#d94536] text-white px-6 py-5 flex items-center gap-4">
      <Image
        src={item.icon}
        alt="Icon"
        className="w-10 h-10 object-contain"
      />
      <h3 className="text-lg font-bold uppercase tracking-wide">
        {item.title}
      </h3>
    </div>

    {item.data.length > 0 && (
      <div className="bg-[#3b2f8f] text-white px-8 py-6">
        <ul
          className={`list-disc ${
            item.data.length > 4
              ? "grid grid-cols-1 sm:grid-cols-2 gap-x-10"
              : "space-y-2"
          }`}
        >
          {item.data.map((point:any, index:any) => (
            <li key={index} className="text-[15px] leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);