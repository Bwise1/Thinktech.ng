import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="p-3 h-[100dvh] flex flex-col items-center" id="hero">
      <div className="basis-2/3 mt-32 content-center">
        <div className="max-w-7xl mx-auto flex justify-center">
          <h1 className="w-[571px] mt-[90px] md:mt-[90px] lg:mt-[90px] sm:mt-[90px] text-[40px] sm:text-[45px] md:text-[45px] lg:text-[45px] font-TTFb text-center">
            Developing innovative technology solutions for
            <span className="text-[#0864B7]"> a smarter future of work.</span>
          </h1>
        </div>

        <div className=" font-TTFn text-black flex justify-center text-center text-[20px].">
          <p className=" w-[80%] mt-[2rem] text-center">
            Our team of skilled professionals work tirelessly to develop
            innovative solutions that drive progress and make life easier for
            our clients. We have the knowledge and expertise to tackle any
            challenge. Join us as we strive towards a more efficient and
            interconnected world.
          </p>
        </div>
      </div>
      <div className="justify-center text-center flex mt-7  sm:flex-row md:flex-rw lg:flex-row">
        <div className=". group py-[0.7rem] px-[0.6rem] sm:px-[1.8rem] md:px-[1.8rem] lg:px-[1.8rem] mr-5 lg:mr-3 md:mr-3 sm:mr-3 flex justify-center border-[1.6px] border-[#0864B7]  hover:bg-[#0864B7] hover:text-white transition-all duration-200 cursor-pointer ">
          <div className="font-TTF text-[14px] sm:text-[16x] md:text-[16px] lg:text-[16px] text-[#0864B7] group-hover:text-white whitespace-nowrap overflow-hidden">
            LEARN MORE
          </div>

          <div className="ml-[1.5rem] sm:ml-[1.8rem] md:ml-[1.8rem] lg:ml-[1.8rem] ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:stroke-white"
                d="M9.65351 18.2006C14.0672 18.2006 17.6449 14.6228 17.6449 10.2092C17.6449 5.79552 14.0672 2.21777 9.65351 2.21777C5.23986 2.21777 1.66211 5.79552 1.66211 10.2092C1.66211 14.6228 5.23986 18.2006 9.65351 18.2006Z"
                stroke="#0864B7"
                strokeWidth="1.19871"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="group-hover:stroke-white"
                d="M8.64673 13.0301L11.4597 10.2091L8.64673 7.38818"
                stroke="#0864B7"
                strokeWidth="1.19871"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className=". group a py-[0.7rem] px-[0.6rem] sm:px-[1.8rem] md:px-[1.8rem] lg:px-[1.8rem] flex justify-center border-[1.6px] border-[#0864B7]  bg-[#0864B7] hover:bg-white transition-all duration-200 cursor-pointer">
          <div className="group font-TTF text-[14px] sm:text-[16x] md:text-[16px] lg:text-[16px] text-white group-hover:text-[#0864B7] whitespace-nowrap overflow-hidden">
            ENGAGE US
          </div>

          <div className=" ml-[1.5rem] sm:ml-[1.8rem] md:ml-[1.8rem] lg:ml-[1.8rem] ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:stroke-[#0864B7]"
                d="M9.65351 18.2006C14.0672 18.2006 17.6449 14.6228 17.6449 10.2092C17.6449 5.79552 14.0672 2.21777 9.65351 2.21777C5.23986 2.21777 1.66211 5.79552 1.66211 10.2092C1.66211 14.6228 5.23986 18.2006 9.65351 18.2006Z"
                stroke="white"
                strokeWidth="1.19871"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="group-hover:stroke-[#0864B7]"
                d="M8.64673 13.0301L11.4597 10.2091L8.64673 7.38818"
                stroke="white"
                strokeWidth="1.19871"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* <div className=". p-[0.8rem] flex justify-center  border-[1.6px] bg-[#0864B7] border-[#0864B7] text-white">ENGAGE US</div> */}
      </div>
    </div>
  );
}

export default Hero;
