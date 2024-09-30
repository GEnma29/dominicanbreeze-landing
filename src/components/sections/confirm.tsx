
import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Image1 from '@/assets/img/satifaction.png'
import Image2 from '@/assets/img/satifaction2.png'
const ConfirmSection = () => {
    return (
        <div className="flex mb-3 bg-white flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <h1 className="text-center leading-10 text-3xl font-semibold leading-6 text-emerald-900">POR FAVOR, LEE DETENIDAMENTE </h1>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <Image className="rounded-lg" src={Image1} alt="Payment" width={250} height={250} />
                <div className='flex flex-col justify-center items-center p-4'>

                    <div className="flex  flex-col mt-2 justify-center items-center max-w-7xl text-sm text-gray-500">
                        <p className='flex font-semibold text-lg text-center mt-4'>
                            Esta presentación ha sido diseñada para compradores realmente potenciales, con la determinación a invertir y que cuentan con las capacidades económicas necesarias.
                        </p>
                        <p className='flex font-semibold text-lg text-center mt-4'>
                            Garantizamos satisfacción total en la adquisición en este proyecto.
                        </p>
                    </div>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <p className='flex font-semibold text-lg text-center mt-4'>
                            El Desarrollador de este proyecto cuenta con las siguientes características:
                        </p>
                        <ul className='list-disc pl-5'>
                            <li className='py-2'>
                                Vasta experiencia en el campo de la construcción de proyectos nuevos.
                            </li>
                            <li className='py-2'>
                                Excelente reputación de puntualidad en las fechas de entrega establecidas.

                            </li>
                            <li className='py-2'>
                                Reconocido en la industria por hacer entregas de sus unidades con los más
                                finos acabados y de la más alta calidad.

                            </li>
                        </ul>
                    </div>
                </div>
                <Image className="rounded-lg" src={Image2} alt="Payment" width={200} height={200} />
            </div>
            <p className='text-center py-2'>Si usted confirma que cuenta con los requisitos económicos mínimos explicados en las preguntas, usted ya ha cualificado para recibir la orientación privada de este hermoso proyecto con nuestro Broker.</p>
            <h3 className='flex text-center font-semibold text-lg text-center mt-4'>
                Confirma que posee la capacidad económica para realizar una inversión en la República Dominicana
            </h3>
            <div className="flex  gap-4 justify-center items-center w-full mt-8">
                <div className="flex mt-4 w-full gap-4 justify-center items-center w-full ">
                    <Link href={'/congrats'} className={cn(buttonVariants({ variant: 'default' }), 'h-12  w-[135px]')}  >
                        Si
                    </Link>
                    <Link href={'/error'} className={cn(buttonVariants({ variant: 'secondary' }), 'h-12  w-[135px]')}  >
                        No
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ConfirmSection