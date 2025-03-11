import React from 'react'
import { features } from '../constants'

const FeatureSection = () => {
    return (
        <div className='my-6' >
            <div className='flex flex-col gap-8 border'>
                <div className='text-center text-sm sm:text-lg text-orange-500'>
                    FEATURE
                </div>

                <div className='text-center sm:text-3xl lg:text-6xl'>
                    Easily Build <span className='bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text'>Your Code</span>
                </div>

                <div className='border py-4 px-2 grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {/* Cards  */}
                  {features.map((item)=>{
                    return <Card icon={item.icon} text={item.text} description={item.description}  />
                  })}
                    
                </div>
            </div>
        </div>
    )
}

export default FeatureSection

const Card = ({icon,text,description}) =>{

    return(
        <div className=' flex max-w-72 gap-3 py-2'>
        <div>
            {icon}
        </div>
        <div className='flex flex-col gap-3'>
            <div>
                {text}
            </div>
            <div className='text-sm text-neutral-500'>
            {description}
            </div>
        </div>
    </div>
    )
}
