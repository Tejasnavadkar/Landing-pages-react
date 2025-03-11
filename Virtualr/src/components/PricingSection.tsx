import React from 'react'
import {pricingOptions} from '../constants/index'

interface pricingTypes  {
    title: string,
    price: string,
    features: string[]
  }

const PricingSection = () => {
  return (
    <div className='my-6'>
     <div className='text-center sm:text-2xl lg:text-3xl'>
        Pricing
     </div>
     <div className='flex justify-center items-center flex-wrap gap-4 mt-4'>

        {pricingOptions.map((item,idx)=>{
            return <PriceCard key={idx} title={item.title} price={item.price} features={item.features} />
        })}

        

     </div>
    </div>
  )
}

export default PricingSection

const PriceCard = ({title,price,features}:pricingTypes) => {

    return(
        <div className='border border-neutral-500 rounded-lg w-72 flex flex-col items-center'>
        <div className='space-y-3 mt-4'>
        <div>{title}</div>
         <div>
             <span className='text-4xl'>{price}</span>
             <span className='text-neutral-500 text-sm'>/Month</span>
         </div>
         <div className='flex flex-col gap-6 '>
            {features.map((item)=>{
                return <Features item={item} />
            })}
         </div>
         <div className='flex w-full'>
             <button className='border rounded-md py-1 border-orange-400 w-full mt-10 mb-6 '>Subscribe</button>
         </div>
        </div>
     </div>
    )
}

const Features = ({item}:{item:string}) =>{
    return(
        <div>
                <span>✔</span>
                <span>{item}</span>
            </div>
    )
}


