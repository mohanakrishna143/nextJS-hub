"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import paths from "./path";
import { logIn, toggleLogOutStatus } from "@/redux/features/auth-slice";
import {   useDispatch } from "react-redux";
import { useState } from "react";
import { AppDispatch } from "@/redux/store";

function SignIn() {
  const router = useRouter();
  const [userName, setUserName] = useState(""); 
  const dispatch = useDispatch<AppDispatch>();

  const handleSignUpClick = () => {
    console.log("-------click--event-------");
    router.push(paths.signUp());  
  };
  const handleSignInClick = () => {
    console.log("------Home--"); 
    dispatch(logIn(userName)) 
    dispatch(toggleLogOutStatus()) 
    router.push(paths.homePage());  
  };
    return (
        <div className="flex justify-center mt-16" style={{marginTop: "100px"}}>
            <div style={{ minWidth: "30%" }}>
                <div className="flex min-h-full shadow-lg flex-1 flex-col justify-center px-6 py-6 lg:px-8 bg-white">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="flex justify-center">
                            <Image src="/login.gif" height={100} width={100} alt={""} />
                        </div>
                        <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="space-y-6" >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={(e)=> setUserName(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button  
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleSignInClick}>
                    Sign in
                  </button>
                </div>
              </div>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <span
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"  onClick={handleSignUpClick}
                >
                  Start a 14 day free trial
                </span>
              </p>
            </div>
                </div>
            </div>
        </div>
    );

}

export default SignIn;