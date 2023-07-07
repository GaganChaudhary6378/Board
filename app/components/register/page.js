"use client"
import { useState } from "react";
import { useFormik } from "formik";
import { register_validate } from "./validate";
import { useRouter } from "next/navigation";
export default function Landing() {

  const router=useRouter();

  const formik=useFormik({
    initialValues: {
      username: "",
      email:"",
      password:"",
      cpassword:""
    },
    validate:register_validate,
    onSubmit
  })

  async function onSubmit(values){
    const options = {
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(values)
    }
    console.log(options)
    await fetch(`/api/sign`,options)
      .then(res => res.json())
      .then((data) => {
        console.log("?")
        if(data) router.push(`${process.env.NEXTAUTH_URL}`)
      })
    // console.log(values)
  }

  return (
    <div className="bg-bg1">
      <div className="flex flex-col md:flex-row">
        <div className="h-[49.7rem] md:w-[40%] bg-black text-white flex justify-center content-center flex-col text-center font-mont text-6xl font-bold">
          Board.
        </div>
        <div className="flex flex-col font-mont mt-8 md:mt-40 justify-between md:ml-64 md:h-auto h-[30rem]">
          <div className="text-center md:text-left">
            <h3 className="text-[30px] font-semibold">Register</h3>
            <p className="text-center md:text-left">Register to your account</p>

            <form className="bg-white bg-opacity-100 flex justify-center flex-col mt-11 pl-[15px] rounded-lg rounded-r-lg font-lato md:h-[28rem] md:w-[23.5rem]" onSubmit={formik.handleSubmit}>
              <h3 className="font-semibold">Username</h3>
              <input type="text" name="username" placeholder="Username" className="bg-[#F5F5F5] pl-3 w-[325px] md:w-[21.5rem] h-[40px] rounded-[7px] mt-2 md:ml-0 ml-3" {...formik.getFieldProps('username')}/>
              {formik.errors.username && formik.touched.username? <span className="text-rose-500">{formik.errors.username}</span>:<></>}
              <h3 className="font-semibold">Email address</h3>
              <input type="email" name="email" placeholder="Email" className="bg-[#F5F5F5] pl-3 w-[325px] md:w-[21.5rem] h-[40px] rounded-[7px] mt-2 md:ml-0 ml-3" {...formik.getFieldProps('email')}/>
              {formik.errors.email && formik.touched.email? <span className="text-rose-500">{formik.errors.email}</span>:<></>}
              <h3 className="mt-3 font-semibold">Password</h3>
              <input type="password" name="password" placeholder="Password" className="bg-[#F5F5F5] pl-3 w-[325px] md:w-[21.5rem] h-[40px] rounded-[7px] mt-2 md:ml-0 ml-3" {...formik.getFieldProps('password')}/>
              {formik.errors.password && formik.touched.password? <span className="text-rose-500">{formik.errors.password}</span>:<></>}
              <h3 className="mt-3 font-semibold">Confirm Password</h3>
              <input type="password" name="cpassword" placeholder="Confirm Password" className="bg-[#F5F5F5] pl-3 w-[325px] md:w-[21.5rem] h-[40px] rounded-[7px] mt-2 md:ml-0 ml-3" {...formik.getFieldProps('cpassword')}/>
              {formik.errors.cpassword && formik.touched.cpassword? <span className="text-rose-500">{formik.errors.cpassword}</span>:<></>}
              <button type="submit" className="w-[325px] md:w-[21.5rem] h-[40px] md:ml-0 ml-3 bg-black text-center text-[#FFF] rounded-lg mt-4 font-lato font-semibold">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
