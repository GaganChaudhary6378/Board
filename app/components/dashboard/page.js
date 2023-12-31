"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { MdNotifications } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useWindowWidth } from "@react-hook/window-size";
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function dashboard() {
  const [testedCount, setTestedCount] = useState(0);
  const [vaccinatedCount1, setVaccinatedCount1] = useState(0);
  const [vaccinatedCount2, setVaccinatedCount2] = useState(0);
  const [confirmedCases, setConfirmedCases] = useState(0);
  const [recoveredCases, setRecoveredCases] = useState(0);
  const [deceasedCases, setDeceasedCases] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const windowWidth = useWindowWidth();

  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://data.covid19india.org/v4/min/data.min.json"
        );
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
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(
    testedCount,
    vaccinatedCount1,
    vaccinatedCount2,
    confirmedCases,
    recoveredCases,
    deceasedCases
  );

  function handleClick() {
    router.push(`https://intern-task-phi.vercel.app`);
  }

  return (
    <div className="main bg-bg1 min-h-screen min-w-screen h-full md:h-[76vw] flex md:flex-row flex-col pb-10">
      {/* sidebar */}

      <div className="md:ml-12 md:mt-[2rem] md:w-[20rem] text-white relative bg-[#000] md:rounded-3xl">
        <h1 className="font-semibold text-[30px] md:ml-12 md:mt-10 md:pt-5 ml-[2rem] mt-1">
          Board.
        </h1>
        <button
          className="md:hidden absolute top-4 right-4 text-white focus:outline-none"
          onClick={handleToggleMenu}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12h18M3 6h18M3 18h18"
              />
            </svg>
          )}
        </button>
        <ul
          className={`mt-6 md:mt-[4rem] md:ml-12 font-mont ml-7 ${
            isOpen ? "block" : "hidden md:block"
          }`}
        >
          <li className="flex flex-row gap-3 pb-[40px] md:pb-[3rem] font-bold hover:cursor-pointer">
            <Image src={"/dashboard_icon.svg"} width={20} height={20} />
            Dashboard
          </li>
          <li className="flex flex-row gap-3 md:pb-[3rem] pb-[40px] hover:cursor-pointer">
            <Image src={"/transaction_icon.svg"} width={20} height={20} />
            Corona Cases
          </li>
          <li className="flex flex-row gap-3 md:pb-[3rem]  pb-[40px] hover:cursor-pointer">
            <Image src={"/schedule_icon.svg"} width={20} height={20} />
            Testings
          </li>
          <li className="flex flex-row gap-3 md:pb-[3rem] pb-[40px] hover:cursor-pointer">
            <Image src={"/user_icon.svg"} width={20} height={20} />
            Users
          </li>
          <li className="flex flex-row gap-3 pb-[40px] hover:cursor-pointer">
            <Image src={"/setting_icon.svg"} width={20} height={20} />
            Settings
          </li>
          <div className="font-mont md:mt-[28rem]">
            <h3 className="pb-5">Help</h3>
            <h3>Contact Us</h3>
          </div>
        </ul>
      </div>
      {/* till here the sidebar is */}

      <div className="md:ml-12 ml-8 mt-10">
        <div className="flex md:flex-row flex-col">
          <h1 className="text-black font-semibold text-xl md:flex-none flex justify-center align-middle">
            Dashboard
          </h1>
          <div className="relative  md:ml-[25rem]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <input
              type="search"
              id="default-search"
              className="block w-[20rem] md:mt-0 md:h-[1rem] p-4 pl-10 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
              placeholder="Search Cases, Recovered..."
              required
            />
          </div>

          <button
            className="md:ml-[5rem] mt-3 md:mt-0 bg-indigo-500 text-white md:w-[6rem] w-[20rem] md:mr-0 md:h-8 h-10 rounded-lg font-mont font-semibold"
            onClick={handleClick}
          >
            SignOut
          </button>
        </div>
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
          <h2 className="font-semibold font-mont ml-7 pt-5 text-xl">
            Corona Cases
          </h2>
          <div className="md:pt-0 pt-5 ">
            <LineChart />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-[4.4rem] gap-10 mt-10">
          <div className="md:w-[480px] w-[320px] h-[300px] rounded-2xl bg-acti">
            <h2 className="font-semibold font-mont ml-7 pt-5 text-xl">
              Total Cases
            </h2>
            <div className="md:pt-0 pt-5">
              <PieChart />
            </div>
          </div>
          <div className="md:w-[480px] w-[320px] h-[300px] rounded-2xl bg-acti">
            <h2 className="font-semibold font-mont ml-7 pt-5 text-xl">
              Today’s schedule
            </h2>
            <div className="md:mt-6 mt-2 font-lato ml-7">
              <div className="flex flex-row">
                <Image
                  src={"/Line6.svg"}
                  width={10}
                  height={10}
                  className="md:h-[5rem] h-[6rem] mt-3"
                />
                <div className="ml-3 mt-3">
                  <h2>Corona checkups/sampling in rural area.</h2>
                  <p className="text-[14px]">14:00-15:00</p>
                  <p className="text-[14px]">at Sunset Road, Kuta, Bali</p>
                </div>
              </div>
              <div className="flex flex-row">
                <Image
                  src={"/Line7.svg"}
                  width={10}
                  height={10}
                  className="md:h-[5rem] h-[6rem] mt-6"
                />
                <div className="ml-3 mt-7">
                  <h2>Data entry of total cases and updates.</h2>
                  <p className="text-[14px]">16:00-18:00</p>
                  <p className="text-[14px]">at Central Jakarta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
