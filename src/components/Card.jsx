import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";



const Card = () => {
  return (
    <div>   
      <div className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileAlt/>
        <p className='text-sm leading-right mt-5 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 w-full h-12 left-0 py-3'>
            <div className='flex items-center justify-between mb-3 px-8'>
                <h5>0.4mb</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                  <LuDownload size=".7em" color='#fff'/>
                </span>
                
            </div>
            <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
              <h3 className='text-md'>Download Now</h3>
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default Card
