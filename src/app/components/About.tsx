import React from "react";
import Image from "next/image";
import group from "@/app/assets/group.png"
const About = () => {
return (
  <>
  <div className='py-[140px] px-[220px] top-[92px] w-[1920px] bg-[#1b1c1d] text-white flex items-center'>
      <div className='w-[656px] h-[361px]'>
      <div className='w-[656px] h-[238px]'>
          <h2 className='font-bold text-[64px] leading[77.45px] tracking-[-0.02em] mb-6'></h2>
          
          
          <Image src={group} alt= 'group' className='w-[660px] h-[330px]'/>
      </div>
      </div>
<div className='w-[624.15px] h-[633.51px]'/>
  </div>


  </>
);
};



export default About;
