import Image from "next/image";

export default function Card({img, name, username, about, date, time} : {img: string, name: string, username: string, about: string, date: string, time: string}) {
    return (
        <div className="bg-secondary rounded-lg w-[300px] h-[200px] shadow-2xl shadow-blue-500/30 flex flex-col mx-auto gap-4 p-5 text-white/50">
            <div className="flex gap-4 items-center">
                <div className="w-[50px] h-[70px]">
                    <Image
                        src={img}
                        alt="profile picture"
                        height={50}
                        width={50}
                        className="rounded-full object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-xl font-bold cursor-pointer">{name}</h1>
                    <p className="text-sm">{username}</p>
                </div>
            </div>

            <div className="text-sm">
                {about}
            </div>

            <div className="flex gap-4 items-center">
                <p>{time}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}