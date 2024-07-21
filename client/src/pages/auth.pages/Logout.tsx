import axios from "axios";
import { useEffect } from "react";
import { Button } from "../../store/Button";

const Logout = () => {

    useEffect(()=>{
        const requestLogout = async() => {
            const response = await axios.post("http://localhost:3001/api/v1/logout", { withCredentials:true })
            if(response.status){
                document.cookie = "jwt"+'=; Max-Age=-99999999;';
            }
        }
        requestLogout();
    }, [])
    return (
        <>
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-red-600"></p>
                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-200 sm:text-5xl">User logged out</h1>
                    <p className="mt-6 text-base leading-7 text-red-600">User successfully loged-out, Please sign in.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button textColor='text-white' label="Login" bgColor="bg-green-700" hoverBgColor='hover:bg-green-600' href="/login" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Logout;