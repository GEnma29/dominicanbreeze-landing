import React from 'react'
import Logo from '@/assets/img/LOGO-Dominican-Breeze.png'
const Header = () => {
    return (
        <div className='flex bg-emerald-600 h-full justify-center items-center mt-4 mb-6 '>
            <div className='flex flex-col justify-center items-center '>
                <img
                    className="mt-6 lg:mt-0 w-full h-[110px]  object-cover"
                    src={Logo.src}
                    alt="Dominican Breeze Logo"
                />

            </div>
        </div>
    )
}

export default Header