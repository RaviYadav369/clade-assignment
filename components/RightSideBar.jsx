import Image from 'next/image'
import React from 'react'

const RightSideBar = () => {
  return (
    <div className=' '>
      <div className='flex gap-4 px-4 justify-end py-5'>
        <button className='bg-redBg text-redColor border border-redColor font-normal text-base px-5 py-2 rounded-lg flex gap-2 items-center '>
          <Image
            src='/icons/trash.svg'
            width={20}
            height={20}
            alt='jobs'
            className='object-cover w-6 h-6'
          />
          Delete job
        </button>
        <button className='bg-redColor border-2 border-[#FED3CA] text-[#ffffff] font-normal text-base px-8 py-2 rounded-lg gap-2 flex items-center '>
          <Image
            src='/icons/pencil.svg'
            width={20}
            height={20}
            alt='jobs'
            className='object-cover w-6 text-[#ffffff] h-6'
          />
          Edit job
        </button>
      </div>
      <div className=' px-10 pl-16 '>
        <div className='flex justify-between items-center border-b border-[#E7E7E7] py-4'>
          <div className='flex items-center gap-2 py-2'>
            <Image
              src='/icons/users.svg'
              width={20}
              height={20}
              alt='jobs'
              className='object-cover w-6 h-6'
            />
            <p className='font-normal text-[#4F4F4F] text-base'>Applicants</p>
          </div>
          <p className='font-normal text-[#4F4F4F] text-base'>400</p>
        </div>
        <div className='flex justify-between items-center border-b border-[#E7E7E7] py-4'>
          <div className='flex items-center gap-2 py-2'>
            <Image
              src='/icons/profileSelect.svg'
              width={20}
              height={20}
              alt='jobs'
              className='object-cover w-6 h-6'
            />
            <p className='font-normal text-[#4F4F4F] text-base'>Matches</p>
          </div>
          <p className='font-normal text-[#4F4F4F] text-base'>100</p>
        </div>
        <div className='flex justify-between items-center border-b border-[#E7E7E7] py-4'>
          <div className='flex  gap-2 py-2 items-center'>
            <Image
              src='/icons/messages.svg'
              width={25}
              height={25}
              alt='jobs'
              className='object-cover w-5 h-5'
            />
            <p className='font-normal text-[#4F4F4F] text-base'>Messages</p>
          </div>
          <p className='font-normal text-[#4F4F4F] text-base'>147</p>
        </div>
        <div className='flex justify-between items-center border-b border-[#E7E7E7] py-4'>
          <div className='flex items-center gap-2 py-2'>
            <Image
              src='/icons/eye.svg'
              width={20}
              height={20}
              alt='jobs'
              className='object-cover w-6 h-6'
            />
            <p className='font-normal text-[#4F4F4F] text-base'>Views</p>
          </div>
          <p className='font-normal text-[#4F4F4F] text-base'>800</p>
        </div>


      </div>
      <div className='p-6'>
        <div className='p-5 border rounded-xl border-[#F7F7F7] shadow-lg'>
          <p className='font-normal p-2 text-xl text-[#000000]'>“A quote from a Atlassian.”</p>
          <div className='pt-8 flex gap-4 items-center'>
            <Image
              src='/image/person.png'
              width={20}
              height={20}
              alt='jobs'
              className='object-cover rounded-full w-12 h-12'
            />
            <div>
              <p className='font-normal text-base text-[#000000] '>Name</p>
              <p className='font-normal text-base text-[#828282]  '>Description</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightSideBar