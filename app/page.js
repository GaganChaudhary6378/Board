"use client"
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
// import { signIn } from 'next-auth/client';
export default function Landing() {
    // const [email,setEmail]=useState("")
    // const [password,setPassword]=useState("")

    // const submitHandler = (e) => {
    //     e.preventDefault();
    // }

    const {data: session} =useState();
  return (
    <div className="bg-bg1">
      <div className="flex flex-col md:flex-row">
        <div className="h-[49.7rem] md:w-[40%] bg-black text-white flex justify-center content-center flex-col text-center font-mont text-6xl font-bold">
          Board.
        </div>
        <div className="flex flex-col font-mont mt-8 md:mt-40 justify-between md:ml-64 md:h-auto h-[30rem]">
          <div className="text-center md:text-left">
            <h3 className="text-[30px] font-semibold">Sign in</h3>
            <p className="text-center md:text-left">Sign in to your account</p>

            <div className="flex flex-col md:flex-row items-center mt-7">
              <div className="flex items-center bg-white bg-opacity-100 rounded-lg mb-4 md:mb-0">
                <button className="flex items-center md:w-[182px] h-[30px] text-secondary-text font-mont" onClick={() => signIn('google')}>
                  <FcGoogle className="mt-0 ml-1 mr-2" />
                  Sign in with Google
                </button>
              </div>
              <div className="flex items-center ml-0 md:ml-4 bg-white bg-opacity-100 rounded-lg">
                <button className="w-[180px] flex items-center h-[30px] text-secondary-text font-mont">
                  <AiFillApple className="text-secondary-text mt-0 mr-2 ml-1 text-lg"/>
                  Sign in with Apple
                </button>
              </div>
            </div>

            <div className="bg-white bg-opacity-100 flex justify-center flex-col mt-11 pl-[15px] rounded-lg rounded-r-lg font-lato md:h-[317px]">
              <h3>Email address</h3>
              <input type="text" className="bg-[#F5F5F5] w-[325px] md:w-[21.5rem] h-[40px] rounded-[7px] mt-2 md:ml-0 ml-3" onChange={(e) => setEmail(e.target.value)}/>
              <h3 className="mt-3">Password</h3>
              <input type="password" className="bg-[#F5F5F5] w-[325px] md:w-[21.5rem] h-[40px] rounded-[7px] mt-2 md:ml-0 ml-3" onChange={(e) => setPassword(e.target.value)}/>
              <h3 className="text-[16px] font-lato text-[#346BD4] mt-2 hover:cursor-pointer hover:underline">Forgot password?</h3>
              <button className="w-[325px] md:w-[21.5rem] h-[40px] md:ml-0 ml-3 bg-black text-center text-[#FFF] rounded-lg mt-4 font-lato font-semibold">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
