import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants/index'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../context/Theme'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { setTheme,theme } = useTheme()
    // console.log(theme)

    const IconComponent = menuOpen ? X : Menu
    // console.log(navItems)
    return (
        <>

            <div className='sticky top-0'>
                <nav className='flex justify-between border-b border-b-gray-700 py-3 px-12 z-50 backdrop-blur-sm '>
                    <div className='flex items-center'>
                        <img className='h-10 w-10 mr-2 shrink-0' src={logo} alt="" />
                        <span className='text-xl tracking-tight'>VirtualR</span>
                    </div>
                    <ul className=' gap-8 items-center text-sm hidden lg:flex'>
                        {navItems?.map((item, idx) => (
                            <li key={idx}><a href={item.href}>{item.label}</a></li>
                        ))}
                    </ul>
                    <div className='space-x-6 hidden  lg:flex items-center text-sm '>
                        <a href='#' className='border px-2 py-1 rounded-md'>Signin</a>
                        <a href='#' className=' bg-linear-to-r from-[#f26312] to-[#863608] px-2 py-1 rounded-md'>Create an account</a>
                    </div>
                    <button onClick={() => setMenuOpen(pre => !pre)} className='lg:hidden'>
                        <IconComponent />
                    </button>
                    {/* <button onClick={() => setTheme((prev) => {
                        if (prev === 'dark') {
                            return 'light'
                        } else {
                            return 'dark'
                        }
                    })} >theme</button> */}

                    {/* theme toggle */}

                    <div className='flex '>
                        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            {/* <span style={{ marginRight: '0.5rem' }}>Dark Mode</span> */}
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="checkbox"
                                    // checked={theme === 'dark'}
                                    onChange={() => setTheme((prev) => {
                                        if (prev === 'dark') {
                                            return 'light'
                                        } else {
                                            return 'dark'
                                        }
                                    })}
                                    style={{ opacity: 0, width: 0, height: 0 }}
                                />
                                <span style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '40px',
                                    height: '20px',
                                    backgroundColor: theme === 'dark' ? 'blue' : '#CCC',
                                    borderRadius: '20px',
                                    transition: '0.4s'
                                }}></span>
                                <span style={{
                                    position: 'absolute',
                                    top: '2px',
                                    left: theme === 'dark' ? '22px' : '2px',
                                    width: '16px',
                                    height: '16px',
                                    backgroundColor: 'white',
                                    borderRadius: '50%',
                                    transition: '0.4s'
                                }}></span>
                            </div>
                        </label>
                    </div>
                </nav>
                {/* mobileDrawer */}
                {menuOpen && <div className={` fixed left-0 right-0 z-20 lg:hidden bg-black h-[300px] `}>  {/* agar && use nahi kiya to transition apply hoga eg: transition-all ease-in duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} and if used this  menuOpen && ---  then transtion work nahi karega kyuki tum state ke according div ko mount kar rahe ho*/}
                    <div className=' h-full flex w-full justify-center'>
                        <div className=' w-full flex flex-col justify-center gap-10 '>
                            <ul className=' flex flex-col gap-6 items-center text-sm'>
                                {navItems?.map((item, idx) => (
                                    <li key={idx}><a href={item.href}>{item.label}</a></li>
                                ))}
                            </ul>
                            <div className='space-x-6 items-center text-sm text-center '>
                                <a href='#' className='border px-2 py-1 rounded-md'>Signin</a>
                                <a href='#' className=' bg-gradient-to-r from-[#f26312] to-[#863608] px-2 py-1 rounded-md'>Create an account</a>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Navbar
