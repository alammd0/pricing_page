

export default function HostProject({heading, paragraph} : {heading: string, paragraph: string}) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p className="text-sm">{paragraph}</p>
        </div>
    )
}