import Link from "next/link";

export default function Navbar() {

    const navbarData = [
        { "name": "PRICING", "link": "#pricing" },
        { "name": "SLIDER", "link": "#slider" },
        { "name": "BLOG", "link": "#blog" },
        { "name": "Product", "link" : "#product"}
    ] ; 

    return (
        <div className="bg-secondary p-3 text-white">
            <div className="w-11/12 mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold font-sans cursor-pointer hover:scale-95">
                    <Link className="text-shadow-sky-100" href="#">Codebase</Link>
                </div>
                <div className="flex gap-4 bg-navbar/20 px-6 py-2 rounded">
                    {
                        navbarData.map((item, index) => (
                            <div key={index} className="text-[14px] font-semibold hover:bg-navbar/60 px-5 py-1 rounded capitalize transition-all transform-content duration-75">
                                <Link className=" uppercase" href={`${item.link}`}>
                                    {item.name}
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className="bg-navbar/50 px-6 py-2 rounded hover:scale-95 cursor-pointer transition-all transform-fill duration-75">
                    <Link className="text-[14px] font-semibold" href="#">Get Touch</Link>
                </div>
            </div>
        </div>
    )
}