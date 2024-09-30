'use client'
import React, { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import Image from 'next/image'
import Calendary from '@/assets/img/calendary.png'
const Options = [
    { value: 'now', label: 'Estoy listo(a) desde ahora' },
    { value: 'in 3 month', label: 'Estaré listo(a) en 3 a 6 meses' },
    { value: 'in 6 month', label: 'Estaré listo(a) en 6 a 12 meses' },
    { value: 'in 12 month', label: 'Estaré listo(a) en 12 a 24 meses' },
    { value: 'in another time', label: 'Ninguna de las anteriores' },
]
const Timing = () => {
    const [checked, setChecked] = useState<string>('')
    return (
        <div className="flex flex-col lg:flex-row mb-3 bg-white  justify-center items-center rounded-lg  px-4 py-5 sm:p-6">
            <div className='flex w-full h-full flex-col justify-center items-center p-4'>
                <Image
                    src={Calendary}
                    alt="Timing"
                    width={300}
                    height={300}
                    className='rounded-lg'
                />
            </div>
            <div className='flex flex-col justify-center items-center p-4'>
                <h1 className="text-center leading-10 text-3xl font-semibold leading-6 text-emerald-900">EL “TIMING” PARA DAR EL PRIMER PASO DE TU INVERSIÓN ES TU PUNTA DE LANZA</h1>
                <h3 className=" text-center mt-6 mb-4 text-2xl font-semibold leading-6 text-emerald-900">¿Cuándo estarías listo(a) para dar el primer paso de tu inversión en la República Dominicana?</h3>
                <div className="space-y-5">
                    {Options.map((option) => {
                        return (
                            <a
                                href={option.value === 'now' ? '/delivery' : '/error'}
                                key={option.value} className="relative border-solid rounded-lg border-2 border-sky-200  p-4  flex items-start">
                                <div className="flex h-6 items-center">
                                    <Checkbox checked={checked === option.value} onChange={() => setChecked(option.value)} id={option.value} name={option.label} />
                                    <div className="ml-3 text-sm leading-6">
                                        <label
                                            htmlFor="terms1"
                                            className="text-lg font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {option.label}
                                        </label>

                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>

        </div >
    )
}
export default Timing