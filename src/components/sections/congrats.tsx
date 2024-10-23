'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import Image from 'next/image'
import Image1 from '@/assets/img/globs.png'
import Image2 from '@/assets/img/Zoom2.png'
import { useMobileDetect } from "@/hooks/isMobile.hook"
const CongratsSection = () => {
    const isMobile = useMobileDetect()
    return (
        <div className="flex mb-3 max-w-7xl min-h-[75vh] bg-white flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <h1 className="text-center leading-10 text-3xl font-semibold leading-6 text-emerald-900">🎊 ¡FELICITACIONES! 🎊</h1>
            <h3 className="mt-3  py-2 text-center text-xl lg:text-2xl font-semibold leading-6 text-emerald-900">HAS CUALIFICADO PARA LA PRESENTACIÓN PRIVADA CON NUESTRO BROKER</h3>
            <h3 className="mt-3  py-2 text-center text-xl lg:text-2xl font-semibold leading-6 text-emerald-900"> Ya solo queda este gran paso para tu inversión en la República Dominicana</h3>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <Image className="rounded-lg ml-8 lg:ml-0" src={Image1} alt="Payment" width={300} height={300} />
                <div className='flex flex-col justify-center items-center p-4'>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <p className='flex font-semibold text-lg text-center mt-4'>
                            SELECCIONA TU DÍA Y HORA A TU MEJOR CONVENIENCIA
                        </p>
                    </div>

                    <div className="flex  gap-4 justify-center items-center w-full mt-8">
                        <div className="flex mt-4 w-full gap-4 justify-center items-center w-full ">
                            <Link href={'/candely'} className={cn(buttonVariants({ variant: 'default' }), 'h-12  w-[135px]')}  >
                                Continuar
                            </Link>
                        </div>
                    </div>
                </div>
                <Image className="rounded-lg mr-4 lg:mr-0" src={Image2} alt="Payment" width={isMobile ? 200 : 300} height={isMobile ? 200 : 300} />
            </div>
        </div>
    )
}

export default CongratsSection