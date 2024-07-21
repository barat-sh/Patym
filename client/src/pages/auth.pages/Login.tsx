import axios from "axios";
import { SyntheticEvent, useLayoutEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useRecoilState } from "recoil";
import { isAuthAtom } from "../recoil/atom";

const Login = () => {
  const [ isAuth, setIsAuth ] = useRecoilState(isAuthAtom);

    const [ login, setLogin ] = useState({
        email: '',
        password: ''
    })

    useLayoutEffect(()=>{
      const isAuth = !!Cookies.get('jwt');
      if (isAuth){
        window.location.href = '/dashboard';
        return;
      }
    }, [])

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setLogin({
          ...login,
          [name]: value
        });
    };

    const handleLogin = async(e: SyntheticEvent) => {
        e.preventDefault();
        console.log("hittin")
        const response = await axios.post("http://localhost:3001/api/v1/login", login)
        if (response.status == 200){
            const jwt = response.data.token;
            Cookies.set('jwt', jwt, { expires: 1, sameSite: 'Strict' });
            setIsAuth(true);
            window.location.href = '/dashboard'
        }
    }

    return (
      <>
      {isAuth}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
              Sign in to your account
            </h2>
          </div>
            <form onSubmit={handleLogin} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-100">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    onChange={(e)=>handleChange(e)}
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    onChange={(e)=>handleChange(e)}
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-300">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-blue-400 hover:text-blue-300 underline">
                Signup
              </a>
            </p>
        </div>
      </>
    )
  }

  export default Login;
  