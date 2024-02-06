interface CardProps {
    title: string;
    description: string;
    status?: string;
}

const Card = ({ title, description, status }: CardProps) => {
    return (
        <div className="w-full rounded-lg border-[1px] border-gray-400 bg-white">
            <div className="w-full flex p-5">
                <div>
                    <p className="text-3xl font-semibold">{description}</p>
                    <h2 className="text-sm font-normal text-gray-500">{title}</h2>
                </div>
                {status &&
                    <div className="pl-2">
                        <span className="bg-gray-100 font-normal text-sm p-1 rounded-md text-blue-500">4 {status}</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Card