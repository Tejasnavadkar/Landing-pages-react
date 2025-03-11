
import {testimonials} from '../constants/index'

const TestimonialsSection = () => {
    return (
        <div className='my-6'>
            <div className='text-center sm:text-2xl lg:text-4xl my-10'>
                What people are saying
            </div>
            <div className='flex justify-center flex-wrap gap-4'>

                {testimonials.map((item)=>{
                    return <TestimonialsCard user={item.user} company={item.company} image={item.image} text={item.text}  />
                })}

            </div>
        </div>
    )
}

export default TestimonialsSection

const TestimonialsCard = ({user,company,image,text}) =>{

    return (
        <div className='w-70 px-4 py-3 space-y-4 bg-neutral-900'>
        <p className='text-xs text-neutral-400'>
           {text}
        </p>
        <div className='flex gap-3'>
            <div>
                <img className='h-10 rounded-full' src={image} alt="" />
            </div>
            <div>
                <div className='text-sm'>{user}</div>
                <div className='text-xs text-neutral-500'>
                   {company}
                </div>
            </div>
        </div>

    </div>
    )
}
