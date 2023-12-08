import React from 'react'
import Card from './Card'

const Foreground = () => {
  return (
    <div>
      <div className='fixed top-0 left-0 z-[3] w-full h-full'>
        <Card/>
      </div>
    </div>
  )
}

export default Foreground
