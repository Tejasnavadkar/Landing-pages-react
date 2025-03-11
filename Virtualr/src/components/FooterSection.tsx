import React from 'react'
import  {resourcesLinks,platformLinks,communityLinks} from '../constants/index'

const FooterSection = () => {
  return (
    <div className='flex justify-evenly border-t border-t-neutral-500 py-6'>
      <div>
        <div>Reasourse</div>
        <ul className='mt-4'>
            {resourcesLinks.map((item)=>{
                return <li><a className='text-sm text-neutral-500' href={item.href}>{item.text}</a></li>
            })}
            
        </ul>
      </div>
      <div>
        <div>Platform</div>
        <ul className='mt-4'>
        {platformLinks.map((item)=>{
                return <li><a className='text-sm text-neutral-500' href={item.href}>{item.text}</a></li>
            })}
        </ul>
      </div>
      <div>
        <div>community</div>
        <ul className='mt-4'>
        {communityLinks.map((item)=>{
                return <li><a className='text-sm text-neutral-500' href={item.href}>{item.text}</a></li>
            })}
        </ul>
      </div>
    </div>
  )
}

export default FooterSection
