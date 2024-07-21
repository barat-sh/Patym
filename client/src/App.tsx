import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense } from "react";
import React from "react";
import { RecoilRoot } from "recoil";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/auth.pages/ProtectedRoute";
import Navbar from "./pages/Navbar";
import Profile from "./pages/Profile";
import History from "./pages/History";
const Home = React.lazy(()=> import('./pages/Home'));
const Logout = React.lazy(()=>import('./pages/auth.pages/Logout'))
const Login = React.lazy(()=>import('./pages/auth.pages/Login'))
const Signup = React.lazy(() => import('./pages/auth.pages/Signup'));
const Error = React.lazy(()=> import('./pages/auth.pages/Error'));


function App() {

  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Suspense><Error/></Suspense>} />
          <Route path="/signup" element={<Suspense><Signup /></Suspense>} />
          <Route path="/login" element={<Suspense><Login /></Suspense>} />
          <Route path="/logout" element={<Suspense><Logout/></Suspense>} />
          <Route path="/" element={<Suspense><Home/></Suspense>} />
          <Route element={<ProtectedRoute/>}>
            <Route path="/dashboard" element={<Suspense><Navbar/><Dashboard/></Suspense>} />
            <Route path='/profile' element={[<Navbar/>, <Profile/>]} />
            <Route path='/history' element={[<Navbar/>, <History/>]} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </>
  )
}

export default App
