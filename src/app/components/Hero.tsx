import Image from 'next/image'
import image from "@/app/assets/image.png"
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='py-[140px] px-[220px] top-[92px] w-[1920px] bg-[#1b1c1d] text-white flex items-center'>
        <div className='w-[656px] h-[361px]'>
        <div className='w-[656px] h-[238px]'>
            <h2 className='font-bold text-[64px] leading[77.45px] tracking-[-0.02em] mb-6'>The Art Of Speed Food Quality</h2>
            <p className='font-normal text-lg leading-[30px] tracking-[-0.02em] pr-[40px]'>Lorem ipsum dolor sit amet ,consectutre  </p>
            <button className='w-[219px] h-[63px] bg-[#e2df3a] rounded-lg flex flex-row gap-[10px] p-4 text-lg font-normal items-center mt-[60px] hover:bg-[#568cf1] hover:cursor-pointer hover:text-sky-300'><p>See Menu</p><span>&#8594;</span></button>
        </div>
        </div>
<div className='w-[624.15px] h-[633.51px]'/>
<Image src={image} alt= 'image' className='w-[660px] h-[330px]'/>
    </div>


    </>
  );
};

export default Hero