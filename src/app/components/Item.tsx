import React from 'react'
import Image from "next/image";
import food from "@/app/assets/food.png"

const Item = () => {
  return (
    <>
    <div className='py-[140px] px-[220px] top-[92px] w-[1920px] bg-[#1b1c1d] text-white flex items-center'>
        <div className='w-[656px] h-[361px]'>
        <div className='w-[656px] h-[238px]'>
        <Image src={food} alt= 'food' className='w-[660px] h-[657px]'/>
        </div>
        </div>
<div className='w-[624.15px] h-[633.51px]'/>
    </div>
</>
  )
}

export default Item