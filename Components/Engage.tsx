import React from 'react'

function Engage() {
  return (
    <div className='max-w-7xl mx-auto p-5 mt-[220px] mb-[125px] '>
        <div className="flex">
          <h2 className=' font-TTFb text-[#0864B7] text-[27px] mb-[54px] '>Engage us today!</h2>  
        </div>

        
         <form className='space-y-10'> 

          <div className=" sm:flex sm:space-y-0 md:flex md:space-y-0 lg:flex lg:space-y-0 sm:space-x-[81px] space-y-10">

            {/* first flex */}
            <div className=" w-full .. space-y-10">

             
              <label className="block mb-5">
          <input 
          className=" border-b-2 border-black placeholder:font-TTF placeholder:text-[20px] py-2  form-input w-full ring-[#0864B7] outline-none focus:ring text-[20px] font-TTF px-2" placeholder="Name" type="text"/>
          </label>
          

          
            <label className="block mb-5">
          <input 
          className=" border-b-2 border-black py-2  form-input w-full ring-[#0864B7] outline-none focus:ring placeholder:font-TTF placeholder:text-[20px] text-[20px] font-TTF px-2" placeholder="E-Mail" type="text"/>
          </label>
          
            </div>

            {/* Second flex */}
            <div className="w-full . space-y-10">

          <label className="block mb-5">
          <input 
          className=" border-b-2 border-black py-2  form-input w-full ring-[#0864B7] outline-none focus:ring placeholder:font-TTF placeholder:text-[20px]  text-[20px] font-TTF px-2" placeholder="Company Name" type="text"/>
          </label>
          
          <label className="block mb-5">
          <input 
          className=" border-b-2 border-black py-2 text-[20px] font-TTF px-2 form-input w-full ring-[#0864B7] outline-none focus:ring placeholder:font-TTF placeholder:text-[20px] " placeholder="Address" type="text"/>
          </label>
            </div>
          </div>
          <label className="block mb-5">
          <input 
          className=" border-b-2 border-black py-2  form-input w-full ring-[#0864B7] outline-none focus:ring text-[20px] font-TTF px-2 placeholder:font-TTF placeholder:text-[20px] " placeholder="Purpose" type="text"/>
          </label>
         </form>

         <div className="flex sm:justify-center md:justify-center lg:justify-center mt-10">
         <button className=" bg-[#0864B7] mt-[41px] text-white overflow-hidden py-5 px-5 font-TTF">ENGAGE US</button>
         </div>
        
          


    </div>
  )
}

export default Engage