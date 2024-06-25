import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
      <div className='flex justify-between px-8 p-6'>
        <div className='px-7 bg-[#E7E7E7] flex items-center'>
          <p className='text-redColor font-bold text-xl '>Logo</p>
        </div>
        <div className='flex gap-4'>
          <div className='bg-redColor shadow-md shadow-navSecondary text-white flex items-center gap-2 px-4  rounded-[49px] border-2 border-[#FCB4A5]'>
            <Image
              src='/icons/jobs.svg'
              width={25}
              height={25}
              alt='jobs'
              className='object-cover h-5 w-5'
            />
            <p className='font-normal text-lg'>Jobs</p>
          </div>

          <div className='border-[#D1D1D1] shadow-inner shadow-navSecondary  border-2 rounded-[36px] p-2 flex justify-between w-[538px]'>

            <div className='flex items-center gap-2 px-4 py-[6px]'>
              <span className='relative'>
                <Image
                  src='/icons/message.svg'
                  width={25}
                  height={25}
                  alt='jobs'
                  className='object-cover h-5 w-5'
                />
                <span className='bg-redColor rounded-full absolute -top-[2px] -right-[2px] p-[3px]' />
              </span>
              <p className='font-normal text-lg text-[#B0B0B0]'>Message</p>
            </div>
            <div className='flex items-center gap-2 px-4 py-[6px]'>
              <Image
                src='/icons/payment.svg'
                width={25}
                height={25}
                alt='jobs'
                className='object-cover h-5 w-5'
              />
              <p className='font-normal text-lg text-[#B0B0B0]'>Payments</p>
            </div>
            <div className='flex items-center gap-2 px-4 py-[6px]'>
                <Image
                  src='/icons/navUsers.svg'
                  width={25}
                  height={25}
                  alt='jobs'
                  className='object-cover h-5 w-5'
                />
              <p className='font-normal text-lg text-[#B0B0B0]'>Application</p>
            </div>
          </div>
        </div>
        <div className='flex gap-2 justify-around items-center'>
          <span className='relative'>
            <Image
              src='/icons/notification.svg'
              width={10}
              height={10}
              alt='jobs'
              className='object-cover h-8 w-8'
            />
            <span className='bg-redColor rounded-full absolute top-[1px] right-[5px] p-[3px]' />
          </span>
          <Image
            src='/image/atlasian.png'
            width={32}
            height={32}
            alt='jobs'
            className='object-cover h-8 w-8 rounded-full'
          />
          <Image
            src='/icons/downArrow.svg'
            width={14}
            height={14}
            alt='jobs'
            className='object-cover'
          />
        </div>

      </div>
      <div className='border-y border-[#E7E7E7]  pt-4'>
        <div className='px-20 flex gap-4 items-start'>
          <div className='px-5'>
            <p className='font-normal text-xl pb-5 text-redColor  '>Job Preview</p>
            <div className=' w-3/5 mx-auto py-[1px] bg-redColor' />
          </div>
          <div className='px-5'>
            <p className='font-normal text-xl pb-5 text-[#888888]  '>Applications</p>
          </div>
          <div className='px-5'>
            <p className='font-normal text-xl pb-5 text-[#888888]  '>Match</p>
          </div>
          <div className='px-5'>
            <p className='font-normal text-xl pb-5 text-[#888888]  '>Messages</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar