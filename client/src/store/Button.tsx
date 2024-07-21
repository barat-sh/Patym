type ButtonProps = {
    label: string;
    bgColor: string;
    textColor: string;
    hoverBgColor: string;
    href: string;
};

export const Button: React.FC<ButtonProps> = ({label, bgColor, textColor, hoverBgColor, href}) => {
    return (
        <button onClick={()=>{window.location.href = `${href}`}} className={`rounded-md bg-green-600 ${bgColor} px-3.5 py-2.5 text-sm font-semibold ${textColor} shadow-sm ${hoverBgColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600`}>
            {label}
        </button>
    )
}