'use client'
import React, { useState } from 'react'
import { buttonVariants } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import Timing from '@/assets/img/focus.png'
export default function DeterminationForm() {
    const [selectedValue,] = useState<number | null>(null)


    return (
        <div className="flex mb-3 bg-white flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <div className='flex flex-wrap'>
                <div className='flex flex-col justify-center items-center p-4'>
                    <Image className='flex rounded-lg' src={Timing} alt="Timing" width={600} height={400} />
                </div>

                <div className='flex flex-col min-h-[60vh] max-w-2xl justify-center items-center p-4'>

                    <h1 className="text-center leading-10 text-3xl font-semibold text-emerald-900">TU DETERMINACIÓN ES EL PUNTO DE PARTIDA</h1>
                    <h3 className="mt-3 text-center text-2xl font-semibold text-emerald-900">En una escala de 0 al 10, siendo el 0 la menor determinación y el 10 la mayor?</h3>
                    <p className='mt-6 font-bold text-center text-esmerald-900'>¿Cuán determinado(a) estás en hacer tu inversión en la República Dominicana?</p>
                    <div className="mt-2 max-w-sm text-sm text-gray-500">
                        <div className='flex w-full flex-col  flex-wrap lg:flex-nowrap gap-4 justify-center items-center w-full'>
                            <div className="flex mt-6 flex-wrap  gap-4 justify-center items-center w-full">
                                {Array.from({ length: 11 }).map((_, i) => (
                                    <Link
                                        key={i}
                                        href={i === 10 ? '/timing' : '/error'}
                                        className={cn(buttonVariants({ variant: 'outline' }), `flex p-4 w-[60px]  ${selectedValue === i ? 'bg-emerald-100' : ''} text-emerald-900`)}
                                    >
                                        {i}
                                    </Link>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>

            </div>

        </div>
    )
}