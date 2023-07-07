"use client";
import Link from "next/link";
// import Image from "next/image";
import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
import { signIn, signOut, getProviders } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

// const {data:session}=useSession();
import login_validate from "./components/register/validate";
export default function Landing({session}) {

  const [providers, setProviders] = useState();
  const router=useRouter();

  const formik=useFormik({
    initialValues: {
      email: "",
      password:""
    },
    validate:login_validate,
    onSubmit
  })

  async function onSubmit(values){
    // console.log(values)
    const status=await signIn('credentials',{
      redirect:false,
      email:values.email,
      password:values.password,
      callbackUrl:`https://intern-task-phi.vercel.app/components/dashboard`
    })
    console.log(status)
    if(status.ok){
      router.push(status.url)
    }
  }

  useEffect(()=>{
    const setUpProviders = async ()=>{
        const response = await getProviders()
        setProviders(response)
    }
    setUpProviders()
},[])

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
                
                {providers &&
                Object.values(providers).map((provider) => (
                (provider.name=='google' && <button 
                type="button"
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className="flex items-center md:w-[182px] h-[30px] text-secondary-text font-mont">
                  <FcGoogle className="mt-0 ml-1 mr-2" />
                  Sign in with Google
                </button>)
                ))}

              </div>


              <div className="flex items-center ml-0 md:ml-4 bg-white bg-opacity-100 rounded-lg">
                <button className="w-[180px] flex items-center h-[30px] text-secondary-text font-mont">
                  <AiFillApple className="text-secondary-text mt-0 mr-2 ml-1 text-lg"/>
                  Sign in with Apple
                </button>
              </div>
            </div>

            <form className="bg-white bg-opacity-100 flex justify-center flex-col mt-11 pl-[15px] rounded-lg rounded-r-lg font-lato md:h-[317px]" onSubmit={formik.handleSubmit}>
              <h3 className="font-semibold">Email address</h3>
              <input type="email" name="email" placeholder="Email" className="bg-[#F5F5F5] w-[325px] pl-3 md:w-[21.5rem] h-[40px] rounded-[7px] mt-2 md:ml-0 ml-3" {...formik.getFieldProps('email')}/>
              {formik.errors.email && formik.touched.email? <span className="text-rose-500">{formik.errors.email}</span>:<></>}
              <h3 className="mt-3 font-semibold">Password</h3>
              <input type="password" name="password" placeholder="Password" className="bg-[#F5F5F5] pl-3 w-[325px] md:w-[21.5rem] h-[40px] rounded-[7px] mt-2 md:ml-0 ml-3" {...formik.getFieldProps('password')}/>
              {formik.errors.password && formik.touched.password? <span className="text-rose-500">{formik.errors.password}</span>:<></>}
              <h3 className="text-[16px] font-lato text-[#346BD4] mt-2 hover:cursor-pointer hover:underline">Forgot password?</h3>
              <button type="submit" className="w-[325px] md:w-[21.5rem] h-[40px] md:ml-0 ml-3 bg-black text-center text-[#FFF] rounded-lg mt-4 font-lato font-semibold">Sign In</button>
            </form>

            <div className="flex flex-row md:mt-4 justify-center gap-2 font-mont">
              <h2 >Don’t have an account?</h2>
              <Link href={"/components/register"}><h3 className="text-blue-500 hover:underline">Register here</h3></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
