import React from 'react'
import code from '../assets/code.jpg'
import { checklistItems } from '../constants/index'
import { BadgeCheck } from 'lucide-react'

const WorkFlow = () => {
    return (
        <div className='my-6 border'>
            <div className='text-center sm:text-2xl md:text-3xl lg:text-4xl'>
                <p>Accelerate your <span className='bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text' >coding workflow</span></p>
            </div>
            <div className=' mt-4 flex flex-col items-center  lg:flex-row '>
                <div className='w-1/2 '>
                    <img src={code} alt="" />
                </div>
                <div className='w-1/2  flex flex-col gap-4 justify-center items-center py-6 '>
                    {/* list  */}

                   {checklistItems.map((item,idx)=>{
                    return <ChecklistItem key={idx} title={item.title} description={item.description} />
                   })}

                </div>
            </div>
        </div>
    )
}

export default WorkFlow


const ChecklistItem = ({title,description}:{title:string,description:string}) => {

    return (
        <div className=' flex max-w-72 gap-5 py-2'>
            <div className='text-green-400 '>
                <BadgeCheck className='h-5' />
            </div>
            <div className='flex flex-col gap-3'>
                <div>
                    {title}
                </div>
                <div className='text-sm text-neutral-500'>
                   {description}
                </div>
            </div>
        </div>
    )
}