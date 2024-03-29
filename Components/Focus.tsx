import Image from "next/image";
import React from "react";
import macbook from "../Asssets/macbook.jpg";
import people from "../Asssets/people.png";
import { motion } from "framer-motion";

function Focus() {
  return (
    <div>
      <div className="max-w-7xl mx-auto flex flex-col ">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <div className="flex justify-center">
            <h1 className=" font-TTFb text-[24px] mb-[65px]">WHAT WE DO</h1>
          </div>

          <div className="grid grid-cols-1 gap-14  sm:grid-cols-1  md:gap-28 lg:grid-cols-2">
            {/* First card */}
            <div className="bg-[#F3F9FF] group cursor-pointer border overflow-hidden">
              <div className="">
                <div className="group-hover:scale-105 object-cover">
                  <Image
                    src={macbook}
                    alt=""
                    className="h-[23rem] w-full  transition-transform duration-200 ease-in-out "
                  ></Image>
                </div>

                <div className="flex flex-col ">
                  <div className="box1 sm:h-[92px] sm:top-[-41px] left-[0.001px] h-[60px] w-[101%] bg-[#F3F9FF] relative z-9 top-[-25px] "></div>
                </div>
              </div>

              <div className="m-[41px] mr-0 mt-[-40px] relative ">
                <div className=" pr-2 lg:pr-[118px] md:pr-[445px] sm:pr-[310px] ">
                  <h2 className=" font-TTFb text-[#0864B7] text-[27px] ">
                    Solve problems with technology
                  </h2>
                </div>

                <p className="mt-[20px] font-TTF mr-5 sm:mr-[135px] md:mr-[135px] lg:mr-[135px] ">
                  Everyone has a problem to solve, a service to render or a
                  business to run, but a lot of people go about it in the hectic
                  and traditional way and it is difficult sometimes to develop
                  solutions amidst all the chaos. This is why ThinkTech is here;
                  to provide solutions, and find simpler and effective methods
                  to go about regular or even irregular activities to ensure
                  ease and speed.
                </p>

                <button className=" bg-[#0864B7] text-[14px] sm:text-[16x] md:text-[16px] lg:text-[16px] mt-[90px] text-white overflow-hidden py-[11px] px-[8px] font-TTF">
                  READ MORE
                </button>
              </div>
            </div>
            <div className="bg-[#F3F9FF] group cursor-pointer border rounded-lg overflow-hidden">
              <div className="">
                <Image
                  src={people}
                  alt=""
                  className="h-[23rem] w-full group-hover:scale-105 transition-transform duration-200 ease-in-out object-cover"
                ></Image>
                <div className="flex flex-col ">
                  <div className="box1 sm:h-[93px] sm:top-[-41px] h-[60px] w-[101%] bg-[#F3F9FF] relative z-9 top-[-25px] "></div>
                </div>
              </div>

              <div className="m-[41px] mr-0 mt-[-40px] relative ">
                <div className=" pr-5 lg:pr-[118px] md:pr-[445px] sm:pr-[310px]">
                  <h2 className=" font-TTFb text-[#0864B7] text-[27px] ">
                    Equip others to be problem solvers
                  </h2>
                </div>

                <p className="mt-[20px] font-TTF mr-5 sm:mr-[135px] md:mr-[135px] lg:mr-[135px] ">
                  We believe that there are a lot of people with talents and
                  problem-solving skills but without a means to harness them or
                  go through the required training to become professionals in
                  the field. Our trainingsare not just focused on teaching the
                  tools, applications or methods necessary to have a career in
                  tech but to transfer a lot of ideas, shortcuts and wisdom that
                  have been accumulated by the tutors from many years of
                  experience.
                </p>

                <button className=" bg-[#0864B7] text-[14px] sm:text-[16x] md:text-[16px] lg:text-[16px] mt-[41px] text-white overflow-hidden py-[11px] px-[8px] font-TTF">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Focus;
