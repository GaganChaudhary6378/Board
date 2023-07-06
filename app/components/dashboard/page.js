"use client";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { useSession,signIn,signOut } from "next-auth/react";
import HamburgerMenu from "../hamburger/page";
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
export default function dashboard() {
  const [testedCount, setTestedCount] = useState(0);
  const [vaccinatedCount1, setVaccinatedCount1] = useState(0);
  const [vaccinatedCount2, setVaccinatedCount2] = useState(0);
  const [confirmedCases, setConfirmedCases] = useState(0);
  const [recoveredCases, setRecoveredCases] = useState(0);
  const [deceasedCases, setDeceasedCases] = useState(0);
  
  const windowWidth = useWindowWidth();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://data.covid19india.org/v4/min/data.min.json");
        const data = await response.json();

        const anData = data?.AN || {};

        const tested = anData?.delta?.tested || 0;
        const vaccinated1 = anData?.delta?.vaccinated1 || 0;
        const vaccinated2 = anData?.delta?.vaccinated2 || 0;

        const totalConfirmed = anData?.total?.confirmed || 0;
        const totalRecovered = anData?.total?.recovered || 0;
        const totalDeceased = anData?.total?.deceased || 0;

        setTestedCount(tested);
        setVaccinatedCount1(vaccinated1);
        setVaccinatedCount2(vaccinated2);
        setConfirmedCases(totalConfirmed);
        setRecoveredCases(totalRecovered);
        setDeceasedCases(totalDeceased);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(testedCount,vaccinatedCount1,vaccinatedCount2,confirmedCases,recoveredCases,deceasedCases);
  return (
    <div className="bg-bg1 w-full h-full flex md:flex-row flex-col pb-10">

      {/* sidebar */}
      <div className="pt-10">
        <div className="sidebar w-[288px] h-[1060px] bg-[#000] rounded-3xl ml-[40px] flex flex-col font-mont">
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
            <div className="mt-[28rem]">
              <h2 className="pb-4">Help</h2>
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
      {/* till here the sidebar is */}
      
      <div className="md:ml-12 ml-8 mt-10">
        <h1 className="text-black font-semibold text-xl">Dashboard</h1>
        <div className="flex md:flex-row flex-col md:gap-12 gap-6 mt-5 dashboard">
          <div className="flex md:flex-row md:gap-12 gap-6 flex-col">
            <div className="md:w-[222px] w-[20rem] h-[120px] bg-box1 rounded-2xl">
              <Image
                src={"/Vector1.svg"}
                width={28}
                height={28}
                className="md:ml-[11.4rem] ml-[17.5rem] mt-3"
              />
              <div className="font-lato ml-5">
                <h2>Total tests</h2>
                <h3 className="font-semibold text-xl pt-2">{testedCount}</h3>
              </div>
            </div>
            <div className="md:w-[222px] w-[20rem] h-[120px] bg-box2 rounded-2xl">
              <Image
                src={"/total_transactions_icon.svg"}
                width={20}
                height={20}
                className="md:ml-[11.4rem] ml-[18rem] mt-3"
              />
              <div className="font-lato ml-5">
                <h2>Confirmed Cases</h2>
                <h3 className="font-semibold text-xl pt-2">{confirmedCases}</h3>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row md:gap-12 gap-6 flex-col">
            <div className="md:w-[222px] w-[20rem] h-[120px] bg-box3 rounded-2xl">
              <Image
                src={"/Vector2.svg"}
                width={20}
                height={20}
                className="md:ml-[11.4rem] ml-[18rem] mt-3"
              />
              <div className="font-lato ml-5">
                <h2>Total Recovered</h2>
                <h3 className="font-semibold text-xl pt-2">{recoveredCases}</h3>
              </div>
            </div>
            <div className="md:w-[222px] w-[20rem] h-[120px] bg-box4 rounded-2xl">
              <Image
                src={"/Vector3.svg"}
                width={28}
                height={28}
                className="md:ml-[11.4rem] ml-[17.5rem] mt-3"
              />
              <div className="font-lato ml-5">
                <h2>Total Deceased</h2>
                <h3 className="font-semibold text-xl pt-2">{deceasedCases}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="activities md:w-[1030px] md:h-[430px] h-[360px] bg-acti rounded-2xl mt-10 w-[320px]">
          <h2 className="font-semibold font-mont ml-7 pt-5">Corona Cases</h2>
          <div className="md:pt-0 pt-5 ">
            <LineChart />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-[4.4rem] gap-10 mt-10">
          <div className="md:w-[480px] w-[320px] h-[300px] rounded-2xl bg-acti">
            <h2 className="font-semibold font-mont ml-7 pt-5">Total Cases</h2>
            <div className="md:pt-0 pt-5">
              <PieChart />
            </div>
          </div>
          <div className="md:w-[480px] w-[320px] h-[300px] rounded-2xl bg-acti">
            <h2 className="font-semibold font-mont ml-7 pt-5">
              Today’s schedule
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
