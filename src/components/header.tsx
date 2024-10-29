import React from 'react'
import Logo from '@/assets/img/LOGO-Dominican-Breeze.png'
const Header = () => {
    return (
        <div className='flex bg-emerald-600 h-full justify-center items-center mt-4 mb-6 '>
            <div className='flex flex-col justify-center items-center '>
                <img
                    className=" w-full h-[80px]  object-cover"
                    src={Logo.src}
                    alt="Dominican Breeze Logo"
                />

            </div>
        </div>
    )
}

export default Header