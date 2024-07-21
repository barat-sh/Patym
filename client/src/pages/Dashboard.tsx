import axios from "axios";
import { useLayoutEffect } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "./recoil/atom";

const Dashboard = () => {
    const [ user, setUser ] = useRecoilState(userAtom);
    useLayoutEffect(()=>{
        const fetchUserData = async() => {
            const response = await axios.get('http://localhost:3001/api/v1/getUser', {withCredentials: true})
            if (response.status === 200){
                setUser({
                    userId: response.data?.user?.id,
                    firstName: response.data?.user?.firstName,
                    lastName: response.data?.user?.lastName,
                    email: response.data?.user?.email,
                    phoneNumber: response.data?.user?.phoneNumber
                })
            }
        }
        fetchUserData()
        const fetchAccountData = async() => {

        }
        fetchAccountData()
    }, [user])

    return(
        <>
                <div className="m-40 grid grid-cols-1 lg:grid-cols-2 space-y-4 space-x-4">
                    <div className="border border-gray-100 p-4">
                        <div className="font-semibold text-xl">
                            Balance Information
                        </div>
                        <div>
                            <div className="flex space-x-4">
                                <div className="text-gray-300">
                                    Account Balance:
                                </div>
                                <div className="text-gray-400">
                                    19,382.00
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-100 p-4">
                        <div className="font-semibold text-xl">
                            Account Information
                        </div>
                        <div>
                            <div className="flex space-x-4">
                                <div className="text-gray-300">
                                    Account Number:
                                </div>
                                <div className="text-gray-400">
                                    AESPE5091F
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Dashboard;