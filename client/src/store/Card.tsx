interface card {
    heading: string;
    contentHeading: string;
    contentContent: string;
}

const Card: React.FC<card> = ({heading, contentHeading, contentContent}) => {
    return (
        <>
        <div className="border border-gray-400 bg-stone-700 max-w-lg p-4">
            <div className="font-bold text-xl text-left underline">
                {heading}
            </div>
            <div className="flex space-x-2 p-2">
                <div className="text-gray-100">
                    {contentHeading}:
                </div>
                <div className="text-md text-gray-300">
                    {contentContent}
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;