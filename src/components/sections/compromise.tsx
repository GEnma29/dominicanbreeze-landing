import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import Image from 'next/image'
import Compromise from '@/assets/img/compromise.png'

const Options = [
    { value: '100%', label: 'Sí, me comprometo 100% a asistir' },
    { value: '50%', label: 'Seguramente pueda asistir, pero no me puedo comprometer al 100%' },
    { value: '0%', label: 'No me comprometo a asistir' },
]
const CompromiseSection = () => {
    return (
        <div className="flex flex-col md:flex-row mb-3 bg-white max-w-7xl  justify-center items-center rounded-lg  px-4 py-5 sm:p-6">
            <div className='flex lg:py-16 w-full flex-col justify-center items-center p-4'>
                <h1 className="text-center leading-8 text-xl lg:text-3xl font-semibold  text-emerald-900">EL TIEMPO ES VALIOSO PARA TODOS
                </h1>
                <div className="mt-2 max-w-7xl text-sm text-gray-500">
                    <p className='flex text-center font-semibold text-sm lg:text-lg text-center mt-4'>
                        Una vez selecciones el día y la hora para la presentación privada de este proyecto, reservaremos ese espacio única y exclusivamente para ti sin abrir la oportunidad para otra persona ajena a tu núcleo.
                    </p>
                    <p className='flex text-center font-semibold text-sm lg:text-lg text-center mt-4'>

                        Teniendo en cuenta que es una presentación privada, separada exclusivamente para ti, es libre de costo y a la vez considerando el valor de tu tiempo al igual que el de nuestro Broker,
                    </p>
                    <div className='flex flex-col justify-center items-center '>
                        <p className='flex font-semibold text-lg text-center mt-4'>
                            ¿Te comprometes a asistir puntualmente?
                        </p>
                        <div className='flex flex-col gap-4 mt-4'>
                            {Options.map((option) => (
                                <Link
                                    href={option.value === '100%' ? '/duration' : '/error'}
                                    key={option.value} className="relative flex items-center gap-3 border-solid rounded-lg border-2 border-sky-200  p-4  flex items-start  hover:bg-emerald-50">
                                    <Checkbox id={option.value} name="compromise" value={option.value} />
                                    <Label className='font-semibold' htmlFor={option.value}>{option.label}</Label>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center items-center '>
                <Image alt='compromise' className='rounded-lg' width={600} height={600} src={Compromise} />

            </div>
        </div>
    )
}

export default CompromiseSection