import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FooterSection from './components/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative'>
       <Navbar/>
       <div className='border max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection/>
        <FeatureSection/>
        <WorkFlow/>
        <PricingSection/>
        <TestimonialsSection/>
        <FooterSection/>
       </div>
    </div>
  )
}

export default App
