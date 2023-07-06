"use client"
import { useState } from "react";
import Image from "next/image";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ml-0 mt-[0rem] text-white relative bg-[#000]">
      <h1 className="font-semibold text-[30px]">Board.</h1>
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
        className={`mt-6 md:mt-[3rem] font-mont ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
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
    </div>
  );
}
