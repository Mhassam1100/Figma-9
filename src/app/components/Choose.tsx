import React from 'react'
import Image from "next/image";
import why from "@/app/assets/why.png"

const Choose = () => {
  return (
    <>
    <div className='py-[140px] px-[220px] top-[92px] w-[1920px] bg-[#1b1c1d] text-white flex items-center'>
        <div className='w-[656px] h-[361px]'>
        <div className='w-[656px] h-[238px]'>
        <Image src={why} alt= 'why' className='w-[660px] h-[330px]'/>
        </div>
        </div>
<div className='w-[624.15px] h-[633.51px]'/>
</div>
    </>
  );
};

export default Choose