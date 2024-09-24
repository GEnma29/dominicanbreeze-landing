import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
const CongratsSection = () => {
    return (
        <div className="flex mb-3 flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <h1 className="text-center leading-10 text-3xl font-semibold leading-6 text-emerald-900">¡FELICITACIONES!</h1>
            <h3 className="mt-3 text-2xl font-semibold leading-6 text-emerald-900">HAS CUALIFICADO PARA LA PRESENTACIÓN PRIVADA CON NUESTRO BROKER</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p className='flex font-semibold text-lg text-center mt-4'>
                    Ya solo queda este gran paso para tu inversión en la República Dominicana
                </p>
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
    )
}

export default CongratsSection