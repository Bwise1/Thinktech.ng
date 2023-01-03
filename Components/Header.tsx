import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../Asssets/thinktech-logo.svg'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Bars3Icon } from '@heroicons/react/24/solid'
import HeaderRow from './HeaderRow'


declare global {
    namespace JSX {
        interface IntrinsicElements {
            'my-html-custom-tag': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

function Header() {

  
  let Links =[
    {name:"HOME",link:"/"},
    {name:"OUR WORK",link:"/"},
    {name:"ENGAGE US",link:"/"},
  ];
  let [open,setOpen]=useState(false);


  return (
    <div className='flex justify-center max-w-7xl mx-auto'>





<div className='shadow-sm md:shadow-none lg:shadow-none w-full fixed md:absolute lg:absolute z-50 top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 flex-col '>

      
        <div className="flex">
          <Image className='' src={logo} alt="ggg" ></Image>
        </div>
      
      
       <div onClick={()=>setOpen(!open)} className='text-3xl absolute flex justify-center items-center right-8 top-6 cursor-pointer md:hidden transition-all duration-500 ease-in'>
       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden transition-all duration-500 ease-in'>
      
      </div>

       {/* {(!open) &&
       <XMarkIcon  className="h-8 w-8 text-black"/>
       }
       <Bars3Icon  className="h-8 w-8 text-black {`md:flex lg:mt-[54px] md:mt-[54px] md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${!open ? 'dis'}`} "/>
       
       {open &&
       <XMarkIcon  className="h-8 w-8 text-black"/>
       } */}
       
       {/* <HeaderRow Icon={open ? 'XMarkIcon':'Bars3Icon'} />
       <HeaderRow Icon={XMarkIcon} /> */}

       <Bars3Icon  className={`h-8 w-8 text-black transition-all duration-500 ease-in ${open ? 'hidden ':'flex'}`} />

       <XMarkIcon  className={`h-8 w-8 transition-all duration-500 ease-in text-black ${open ? 'flex ':'hidden'}`} />
       </div>

       
       <ul className={`md:flex lg:mt-[54px] md:mt-[54px] md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 font-TTF hover:text-[#0864B7] duration-500'>{link.name}</a>
            </li>
          ))
        }
       </ul>
       </div>
    </div>

      {/* <div className=''>

        <div className="flex justify-center">
          <Image className='' src={logo} alt="ggg" ></Image>
        </div>
        

        
        <div className="flex items-center space-x-5 cursor-pointer font-TTF font-medium">
            <h3 className='hover:text-[#0864B7]'>HOME</h3>
            <h3 className='hover:text-[#0864B7]'>OUR WORK</h3>
            <h3 className='hover:text-[#0864B7]'>ENGAGE US</h3>
        </div>
      </div> */}
        
        
    </div>
  )
}

export default Header