import Image from 'next/image'
import React from 'react'
import product from '../Asssets/product-design.svg'
import app from '../Asssets/App.svg'
import web from '../Asssets/Web-maintenance.svg'

function Info() {
  return (
    <div className='flex box mt-[15rem] justify-center'>
      <div className="wrapper">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <div className="flex justify-center mt-10 lg:mt-0 md:mt-0">
            <h1 className=' font-TTFb text-[24px]'>WHAT WE DO</h1>
            </div>
            

           <div className=".. grid grid-cols-1 gap-[71px] sm:grid-cols-2 md:gap-[71px] lg:grid-cols-3 mb-10 lg:mb-0 md:mb-0">

            {/* First card */}
           
           <div className="border-[1.6px] border-[#0864B7] mt-[70px] p-[43px]">

            <div className="mb-[44px]">
              <Image src={product}  className='w-[50px] h-[50px] .' alt=''>
          </Image>
            </div>
           

          <div className="flex mb-[21px]">
            <h1 className=' font-TTFb text-[20px] text-[#0864B7] '>Product designing</h1>
          </div>
          

          <div className="flex mb-[70px]">
            <p className='font-TTF w-[228px]'>Transform your ideas into reality with our professional product design services. From concept development to prototyping and production, our team of experienced designers will guide you through every step of the process. Let us bring your vision to life and take your product to the next level.</p>
          </div>

          <div className="bg-[#0864B7] text-white overflow-hidden mb-[5px] py-[11px] px-[8px] w-fit cursor-pointer ">
            <div className=" font-TTF">
            ENGAGE US
            </div>
           </div>
          </div>

          {/* Second card */}
           <div className="border-[1.6px] border-[#0864B7] mt-[70px] p-[43px]">

            <div className="mb-[44px]">
              <Image src={app}  className='w-[50px] h-[50px] .' alt=''>
          </Image>
            </div>
           

          <div className="flex mb-[21px]">
            <h1 className=' font-TTFb text-[20px] text-[#0864B7] '>Mobile Application Development</h1>
          </div>
          

          <div className="flex mb-[70px]">
            <p className='font-TTF w-[228px]'>With our mobile app development service, we help brand businesses build mobile applications that makes their work easier, faster and smarter. We help build apps that meet your business needs and go beyond them by providing a platform for your users who want to access every feature of your app but you don’t want to think about it.</p>
          </div>

          <div className="bg-[#0864B7] text-white overflow-hidden py-[11px] px-[8px] w-fit cursor-pointer">
            <div className="font-TTF">
            ENGAGE US
            </div>
           </div>
          </div>

          {/* Third card */}
           <div className="border-[1.6px] border-[#0864B7] mt-[70px] p-[43px]">

            <div className="mb-[44px]">
              <Image src={web}  className='w-[50px] h-[50px] .' alt=''>
          </Image>
            </div>
           

          <div className="flex mb-[21px]">
            <h1 className=' font-TTFb text-[20px] text-[#0864B7] '>Website Development</h1>
          </div>
          

          <div className="flex mb-[70px] ">
            <p className='font-TTF w-[228px]'>We offer a wide range of activities, including designing the layout and user interface, writing and organizing content, and implementing functionalities Our service delivery help businesses and organizations reach a wider audience, improve their brand image, and establish credibility in their industry.</p>
          </div>

          <div className="bg-[#0864B7] text-white overflow-hidden mb-[5px] py-[11px] px-[8px] w-fit cursor-pointer ">
            <div className="font-TTF">
            ENGAGE US
            </div>
           </div>
          </div>
          
          

           
           
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Info