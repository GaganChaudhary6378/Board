"use client";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
export default function dashboard() {
  return (
    <div className="bg-bg1 w-full h-full flex md:flex-row flex-col pb-10">
      <div className="pt-10">
        <div className="sidebar w-[288px] h-[1000px] bg-[#000] rounded-3xl ml-[40px] flex flex-col font-mont">
          <div className="ml-14 mt-[4rem] text-white ">
            <h1 className="font-semibold text-[30px]">Board.</h1>
            <ul className="mt-[3rem] font-mont">
              <li className="flex flex-row gap-3 pb-[40px] font-bold">
                <Image src={"/dashboard_icon.svg"} width={20} height={20} />
                Dashboard
              </li>
              <li className="flex flex-row gap-3 pb-[40px]">
                <Image src={"/transaction_icon.svg"} width={20} height={20} />
                Transaction
              </li>
              <li className="flex flex-row gap-3 pb-[40px]">
                <Image src={"/schedule_icon.svg"} width={20} height={20} />
                Schedules
              </li>
              <li className="flex flex-row gap-3 pb-[40px]">
                <Image src={"/user_icon.svg"} width={20} height={20} />
                Users
              </li>
              <li className="flex flex-row gap-3 pb-[40px]">
                <Image src={"/setting_icon.svg"} width={20} height={20} />
                Settings
              </li>
            </ul>
            <div className="mt-[22rem]">
              <h2 className="pb-4">Help</h2>
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-12 mt-10">
        <h1 className="text-black font-semibold text-xl">Dashboard</h1>
        <div className="flex flex-row gap-12 mt-5">
          <div className="w-[222px] h-[120px] bg-box1 rounded-2xl">
            <Image
              src={"/Vector1.svg"}
              width={28}
              height={28}
              className="ml-[11.4rem] mt-3"
            />
          </div>
          <div className="w-[222px] h-[120px] bg-box2 rounded-2xl">
            <Image
              src={"/total_transactions_icon.svg"}
              width={20}
              height={20}
              className="ml-[11.4rem] mt-3"
            />
          </div>
          <div className="w-[222px] h-[120px] bg-box3 rounded-2xl">
            <Image
              src={"/Vector2.svg"}
              width={20}
              height={20}
              className="ml-[11.4rem] mt-3"
            />
          </div>
          <div className="w-[222px] h-[120px] bg-box4 rounded-2xl">
            <Image
              src={"/Vector3.svg"}
              width={28}
              height={28}
              className="ml-[11.4rem] mt-3"
            />
          </div>
        </div>
        <div className="activities w-[1030px] h-[400px] bg-acti rounded-2xl mt-10">
          <h2 className="font-semibold font-mont ml-7 pt-5">Corona Cases</h2>
                   <LineChart />
        </div>
        <div className="flex flex-row gap-[4.4rem] mt-10">
          <div className="w-[480px] h-[300px] rounded-2xl bg-acti">
            <h2 className="font-semibold font-mont ml-7 pt-5">Total Cases</h2>
            <PieChart/>
          </div>
          <div className="w-[480px] h-[300px] rounded-2xl bg-acti">
            <h2 className="font-semibold font-mont ml-7 pt-5">
              Today’s schedule
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
