import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";



const Card = () => {
  return (
    <div>   
      <div className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileAlt/>
        <p className='text-sm leading-right mt-5 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 w-full h-12 left-0 py-3 px-8'>
            <div className='flex items-center justify-between mb-5'>
                <h5>0.4mb</h5>
                <LuDownload/>
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default Card
