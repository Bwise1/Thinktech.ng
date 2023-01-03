import React from 'react'

function Footer() {
  return (
    <div className='bg-[#0864B7]'>
        <div className="max-w-7xl mx-auto p-5">

            <div className="lg:mt-[100px] mt-10 justify-center lg:justify-start flex ">
                <h1 className=' font-TTFb text-[20px] text-white mb-[23px] '>For more enquiries:</h1>
            </div>
            <div className=".. lg:flex-row lg:justify-start  flex flex-col justify-center lg:items-start items-center  lg:mb-[100px] mb-10">

                <div className="">
                    <div className=" font-TTF text-white text-[18px] mb-[17px] ">hello@thinktech.ng</div>
                    <div className="font-TTF text-white text-[18px] mb-[17px] lg:mb-0">+234 (0) 8136 6313 92</div>
                </div>

                <div className=" lg:ml-[120px]  ">
                    <div className="flex justify-center lg:justify-start space-x-[50px] mb-[17px] lg:mb-0">
                        <div className="font-TTF text-white text-[18px]">Instagram</div>
                        <div className="font-TTF text-white text-[18px]">Twitter</div>
                        <div className="font-TTF text-white text-[18px]">Youtube</div>
                    </div>

                    <div className="font-TTF text-white text-[18px]">Copyright © 2022 Thinktech Nigeria</div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer