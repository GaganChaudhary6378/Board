import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

export default function Landing() {
  return (
    <div className="bg-bg1">
      <div className="flex flex-row">
        <div className="h-[49.7rem] w-[40%] bg-black text-white flex justify-center content-center flex-col text-center font-mont text-6xl font-bold">
          Board.
        </div>
        <div className="flex flex-col font-mont mt-40 justify-between ml-64">
          <div className="">
            <h3 className="text-[30px] font-semibold">Sign in</h3>
            <p>Sign in to your account</p>

            <div className="flex flex-row items-center mt-7">
              <div className="flex items-center bg-white bg-opacity-100 rounded-lg">
                <button className="flex items-center w-[182px] h-[30px] text-secondary-text font-mont">
                  <FcGoogle className="mt-0 ml-1 mr-2" />
                  Sign in with Google
                </button>
              </div>
              <div className="flex items-center ml-4 bg-white bg-opacity-100 rounded-lg">
                <button className="w-[180px] flex items-center h-[30px] text-secondary-text font-mont">
                <AiFillApple className="text-secondary-text mt-0 mr-2 ml-1 text-lg"/>
                  Sign in with Apple
                </button>
              </div>
            </div>

            <div className="bg-white bg-opacity-100 flex justify-center flex-col mt-11 pl-[30px] rounded-lg rounded-r-lg font-lato h-[317px]">
                <h3>Email address</h3>
                <input type="text" className="bg-[#F5F5F5] w-[325px] h-[40px] rounded-[7px] mt-2"/>
                <h3 className="mt-3">Password</h3>
                <input type="password" className="bg-[#F5F5F5] w-[325px] h-[40px] rounded-[7px] mt-2" />
                <h3 className="text-[16px] font-lato text-[#346BD4] mt-2 hover:cursor-pointer hover:underline">Forgot password?</h3>
                <button className="w-[325px] h-[40px] bg-black text-center text-[#FFF] rounded-lg mt-4 font-lato font-semibold">Sign In</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
