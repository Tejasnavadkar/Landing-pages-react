import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
    return (
        <div>
            <div className=' sm:px-25 lg:px-50 '>
                <div className='flex flex-col gap-5 text-center py-4 '>
                    <div className=' text-2xl sm:text-4xl  lg:text-7xl'>
                        VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text' >for developers</span>
                    </div>
                    <div className='text-center text  sm:text-xs sm:px-2  lg:text-sm  text-gray-400'>
                        Empower your creativity and bring your VR app ideas to life with our intuitive development tools.
                        Get started today and turn your imagination into immersive reality!
                    </div>

                    <div className='flex  justify-center gap-5 items-center text-sm'>
                        <a href='#' className=' bg-linear-to-r from-[#f26312] to-[#863608] px-2 py-2 rounded-md'>Start for free</a>
                        <a href='#' className='border px-2 py-2 rounded-md'>Documentation</a>
                    </div>
                </div>

            </div>

            <div className='my-10'>
                {/* video  */}
                <div className='border flex w-full px-4 gap-2'>
                    <video autoPlay muted loop className='w-1/2 rounded-lg border border-orange-700 shadow-orange-400 my-4'>
                            <source src={video1} type='video/mp4' />
                            browser not supports this video 
                    </video>

                    <video autoPlay muted loop className='w-1/2 rounded-lg border border-orange-700 shadow-orange-400 my-4'>
                            <source src={video2} type='video/mp4' />
                            browser not supports this video 
                    </video>

                </div>
            </div>
        </div>
    )
}

export default HeroSection
