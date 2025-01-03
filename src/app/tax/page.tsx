import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tax1 from '@/assets/img/tax1.png'
import Tax2 from '@/assets/img/tax2.png'
import TaxTable from '@/assets/img/table-tax.png'
const TaxPage = () => {
    return (
        <div className='bg-white px-4 py-6 sm:px-6 lg:px-8 rounded-lg'>
            <div className='flex flex-col justify-center items-center mb-4 p-4'>
                <h1 className='text-center text-lg lg:text-3xl text-emerald-600 font-bold'>
                    EXENCIÓN CONTRIBUTIVA SOBRE LA PROPIEDAD
                </h1>
                <h3 className='text-center text-lg lg:text-2xl text-emerald-600 font-bold'>
                    ¡Tu lujosa villa, estará exenta de impuestos sobre la propiedad por 15 años!
                </h3>
                <div >
                    <ul className='mt-4 space-y-4 list-disc'>
                        <li className='text-sm text-gray-500'>
                            <p className='text-sm text-gray-500'>
                                El 1% del valor de tu propiedad se descontará de tu pago de impuestos en 15 años.
                            </p>
                        </li>
                        <li className='text-sm text-gray-500'>
                            <p className='text-sm text-gray-500'>
                                Si proyectamos un aumento conservador del 7% anual del valor de tu villa, en la tabla abajo verás el ahorro en impuestos de acuerdo a la unidad que selecciones.
                            </p>
                        </li>
                        <li className='text-sm text-gray-500'>
                            <p className='text-sm text-gray-500'>
                                Como ejercicio matemático, puedes restar al precio de venta el ahorro en el pago de impuestos que tendrás en 15 años para que tengas el resultado del precio de venta proyectado.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex w-full justify-center items-center '>
                <Image src={TaxTable} alt="Chart" sizes='(max-width: 200px) height: 200px, 100vw' />
            </div>

            <div className='flex justify-around items-center mt-8'>
                <div className='flex pb-16 lg:pb-0 flex-col justify-center items-center'>
                    <Image src={Tax1} alt="Chart" width={200} height={200} />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-xs text-center lg:text-base text-gray-500 mt-4'>
                        Nuestro Broker te revelará el ahorro adicional en la presentación privada para que veas tu precio final proyectado.
                    </p>

                    <Link href={'/benefits'} className={cn(buttonVariants({ variant: 'default' }), 'w-[220px] mt-4 h-12')}>
                        Continuar
                    </Link>
                </div>
                <div className='flex pb-12 lg:pb-0 flex-col justify-center items-center'>
                    <Image src={Tax2} alt="Chart" width={200} height={200} />
                </div>
            </div>
        </div>
    )
}

export default TaxPage