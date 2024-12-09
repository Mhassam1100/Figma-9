import Image from 'next/image'
import cheef from "@/app/assets/cheef.png"
import React from 'react'

const our = () => {
  return (
    <>
    
    <div className='w-[1920px] h-[657] bg-[#0a0a0a] flex flex-col justify-center items-center py-[140px] px-[220px] gap-[100px]'>
        <h1 className='w-[1482px] h-[px] font-bold text-center text-7xl leading-[87.14px] tracking-[-0.02em] justify-center'>Our Cheef</h1>
        <Image src={cheef} alt='cheef' className='w-[1482px] h-[657px]'/>
    </div>

    </>
  )
}

export default our