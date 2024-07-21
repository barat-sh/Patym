import React from "react"

interface BoxProps {
    children: React.ReactNode;
}
export const Box: React.FC<BoxProps> = ({children}) => {
    return (
        <>
        <main className="grid min-h-full place-items-center ${pX} ${pY} border border-stone-300">
            <div className="text-center">
                {children}
            </div>
        </main>
        </>
    )
}