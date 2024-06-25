import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (

    <div className=" px-24 p-6 pt-6 border-r-2 border-[#E7E7E7]">
      <div className="flex items-center  gap-4">
        <Image
          src='/image/atlasian.png'
          width={25}
          height={25}
          alt='jobs'
          className='object-cover w-10 h-10'
        />
        <div className='flex justify-between gap-3 items-center'>
          <p className="text-xl font-normal text-[#4F4F4F]">Atlassian</p>
          <button className="bg-[#E0EBF9] shadow-lg text-[#003788] font-bold px-3 py-1 rounded-full text-sm">Follow</button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-4">
        <div className='col-span-2 py-3'>

          <div className='py-2'>
            <p className="text-[#6E6D6D] font-normal text-sm">Company size</p>
            <p className='font-normal text-[#3D3D3D] text-base py-2'>1k - 2k Employees</p>
          </div>

          <div className='py-2'>
            <p className="text-[#6E6D6D] font-normal text-sm">Sector</p>
            <p className='font-normal text-[#3D3D3D] text-base py-2' >Information Technology, Infrastructure</p>
          </div>
          <div className='py-2'>
            <p className="text-[#6E6D6D] font-normal text-sm">Founded In</p>
            <p className='font-normal text-[#3D3D3D] text-base py-2' >2019</p>
          </div>
        </div>
        <div className='col-span-2 py-3'>
          <div>
            <p className="text-[#6E6D6D] font-normal text-sm">Type</p>
            <p className='font-normal text-[#3D3D3D] text-base py-2' >Private</p>
          </div>

          <div className='py-2'>
            <p className="text-[#6E6D6D] font-normal text-sm">Funding</p>
            <p className='font-normal text-[#3D3D3D] text-base py-2' >Bootstrapped</p>
          </div>
          <div className='py-2'>
            <p className="text-[#6E6D6D] font-normal text-sm">Founded By</p>
            <p className='font-normal text-[#3D3D3D] text-base py-2' >Scott Farquhar, Mike Cannon-Brookes</p>
          </div>
        </div>
      </div>
        <div className="">
          <a href="#" className="text-[#B0B0B0] font-normal text-xs underline">Report this listing</a>
        </div>
    </div>

  )
}

export default Footer