import Image from 'next/image'
import React from 'react'

const JobDetails = () => {
  return (
    <div className='border-r-2 border-[#E7E7E7] ' >
      <div className="border-b px-24 py-6 border-[#E7E7E7]">
        <div className='flex items-center gap-1' >
          <p className="text-4xl px-1 font-semibold text-[#3D3D3D]">Senior Product Designer</p>
          <div className=" bg-headSecondary w-[2px] h-[2px] rounded-full p-[2px]" />
          <p className='font-normal text-sm text-[#888888]'>posted 2 days ago</p>
          <span className='bg-[#ECFDF3] border border-badgeBackground text-badgeText flex font-normal items-center px-2 py-[2px] gap-2 rounded-full'>
            <span className=" bg-badgeText w-[2px] h-[2px] rounded-full p-[2px]" />
            Open
          </span>
        </div>
        <div className=" px-1 py-4 flex gap-3 items-center mt-2">
          <div className=' flex gap-2 items-center'>
            <Image
              src='/icons/location.svg'
              width={25}
              height={25}
              alt='jobs'
              className='object-cover'
            />
            <span className='font-normal text-[#5D5D5D] text-xl'>Delaware, USA</span>
          </div>
          <div className=" bg-headSecondary w-[2px] h-[2px] rounded-full p-[2px]" />
          <div className='flex gap-2 items-center'>
            <Image
              src='/icons/coinStack.svg'
              width={20}
              height={20}
              alt='jobs'
              className='object-cover'
            />

            <span className=" font-normal text-xl text-[#5D5D5D]">$300k-$400k</span>
          </div>
        </div>
      </div>
      <div className="px-24 py-8 flex justify-between w-11/12">
        <div className="">
          <h2 className="text-sm text-[#6E6D6D] font-normal">Skills Required</h2>
          <div className=" flex flex-col gap-3 mt-4">
            <div>
              <span className="border px-1 gap-2 border-[#D0D5DD] p-[2px] rounded-md">
                <Image
                  src='/image/figma.png'
                  width={25}
                  height={25}
                  alt='jobs'
                  className='object-cover inline'
                />

                <h2 className='font-normal inline text-xs'>
                  Figma
                </h2>
              </span>
            </div>

            <div>
              <span className="border px-1 gap-2 border-[#D0D5DD] p-[2px] rounded-md">
                <Image
                  src='/image/adobeillustration.png'
                  width={25}
                  height={25}
                  alt='jobs'
                  className='object-cover inline'
                />

                <h2 className='font-normal inline text-xs'>
                  Adobe Illustrator
                </h2>
              </span>
            </div>

            <div>
              <span className="border px-1 rounded-md gap-2 border-[#D0D5DD] p-[2px] ">
                <Image
                  src='/image/adobe.png'
                  width={25}
                  height={25}
                  alt='jobs'
                  className='object-cover inline'
                />

                <h2 className='font-normal inline text-xs'>
                  Adobe XD
                </h2>
              </span>
            </div>

          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-sm text-[#6E6D6D] font-normal">Preferred Language</h2>
          <p className='font-semibold mt-3 text-base text-[#3D3D3D]'>English</p>
        </div>

        <div className="mb-4">
          <h2 className="text-sm text-[#6E6D6D] font-normal">Type</h2>
          <p className='font-semibold mt-3 text-base text-[#3D3D3D]'>Full time</p>
        </div>

        <div className="mb-4">
          <h2 className="text-sm text-[#6E6D6D] font-normal">Years of Experience</h2>
          <p className='font-semibold mt-3 text-base text-[#3D3D3D]'>3+ Years of Experience</p>
        </div>
      </div>

      <div className="px-24 py-6 border-t border-[#E7E7E7]">
        <h2 className="text-sm text-[#6E6D6D] font-normal">About the job</h2>
        <ol className="list-decimal ml-7 mt-2">
          <li className='text-[#3D3D3D] font-normal text-base'>Handle the UI/UX research design</li>
          <li className='text-[#3D3D3D] font-normal text-base'>Work on researching on latest web applications designs & trends</li>
          <li className='text-[#3D3D3D] font-normal text-base'>Work on conceptualizing and visualizing</li>
          <li className='text-[#3D3D3D] font-normal text-base'>Work on creating graphics content and other graphic related works</li>
        </ol>

        <div className="mb-2">
          <h2 className="text-[#3D3D3D] font-normal text-base">Benefits:</h2>
          <ul className="list-disc ml-7 mt-2">
            <li>Health Insurance</li>
            <li>Provident Fund</li>
          </ul>
        </div>

        <div className="mt-2">
          <h2 className="text-[#3D3D3D] font-normal text-base">Schedule:</h2>
          <ul className=' list-disc ml-7 mt-2'>
            <li>Day Shift</li>
          </ul>
        </div>

        <div className="mt-2">
          <h2 className="text-[#3D3D3D] font-normal text-base">Supplemental pay types:</h2>
          <ul className="list-disc ml-7 mt-2">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="text-[#3D3D3D] font-normal text-base">Work Location: In person</p>
        </div>
      </div>
    </div>
  )
}

export default JobDetails