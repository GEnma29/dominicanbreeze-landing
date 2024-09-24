import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
const Options = [
    { value: '100%', label: 'Sí, me comprometo 100% a asistir' },
    { value: '50%', label: 'Seguramente pueda asistir, pero no me puedo comprometer al 100%' },
    { value: '0%', label: 'No me comprometo a asistir' },
]
const CompromiseSection = () => {
    return (
        <div className="flex mb-3 flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <h1 className="text-center leading-10 text-3xl font-semibold leading-6 text-emerald-900">EL TIEMPO ES VALIOSO PARA TODOS
            </h1>
            <div className="mt-2 max-w-7xl text-sm text-gray-500">
                <p className='flex text-center font-semibold text-lg text-center mt-4'>
                    Una vez selecciones el día y la hora para la presentación privada de este proyecto, reservaremos ese espacio única y exclusivamente para ti sin abrir la oportunidad para otra persona ajena a tu núcleo.

                    Teniendo en cuenta que es una presentación privada, separada exclusivamente para ti, es libre de costo y a la vez considerando el valor de tu tiempo al igual que el de nuestro Broker,

                </p>
                <div className='flex flex-col justify-center items-center '>
                    <p className='flex font-semibold text-lg text-center mt-4'>
                        ¿Cuánto comprometo a asistir?
                    </p>
                    <div className='flex flex-col gap-4 mt-4'>
                        {Options.map((option) => (
                            <Link
                                href={option.value === '100%' ? '/duration' : '/error'}
                                key={option.value} className="relative flex items-center gap-3 border-solid rounded-lg border-2 border-sky-200  p-4  flex items-start">
                                <Checkbox id={option.value} name="compromise" value={option.value} />
                                <Label className='font-semibold' htmlFor={option.value}>{option.label}</Label>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompromiseSection