export default function PriceCard({
  icon,
  text,
  price,
  features,
  mark,
}: {
  icon: any;
  text: string;
  price: string;
  features: { icon: any; label: string }[];
  mark?: boolean;
}) {
  return (
      <div className={`px-1 py-2 rounded-xl  shadow text-white shadow-navbar/20 ${mark ? " border-2 border-primary scale-105" : "border border-white/20 hover:scale-105"}`}>
      <div className="flex flex-col gap-8 p-6 rounded-lg">

         <div className="bg-hero px-4 py-6 flex flex-col items-center justify-center rounded-lg gap-4 pb-12">
            <div className="bg-secondary p-6 rounded-full text-xl border-1 border-white/10">{icon}</div>
            <p className="text-[16px] font-semibold">{text}</p>
            <p className="text-xl font-semibold">{price}</p>
         </div>

         <button className="bg-navbar text-[14px] font-bold text-secondary px-4 py-2 rounded-lg cursor-pointer hover:scale-95 transition-all transform-content duration-75">
            Get Started
         </button>

         <div className="mt-3 flex flex-col gap-2 text-sm">
            {
                features.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center">
                        {item.icon}
                        <p>{item.label}</p>
                    </div>
                ))
            }
         </div>
      </div>
    </div>
  );
}
