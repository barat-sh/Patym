import { ReactNode } from "react";
interface container {
    children: ReactNode
}
const Container :React.FC<container> = ({children}) => {
    return(
        <>
         <main className="grid min-h-full place-content-center px-6 py-24 sm:py-32 md:px-10">
                {children}            
        </main>
        </>
    )
}

export default Container;