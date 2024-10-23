import React from 'react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

import Zoom from '@/assets/img/zoom.png'


const DurationSection = () => {
    return (
        <div className='flex pb-6 flex-col md:flex-row mb-3 bg-white max-w-7xl  justify-center items-center rounded-lg  px-4 lg:py-5 sm:p-6'>
            <div className="flex  bg-white mb-3 flex-col justify-center items-center rounded-lg px-4 py-6 lg:py-16">
                <h1 className="text-center leading-10 text-3xl font-semibold  text-emerald-900">DURACIÓN DE 1 HORA Y 30 MINUTOS
                </h1>
                <div className="mt-4 lg:mt-2 max-w-7xl text-sm text-gray-500">
                    La presentación privada de este proyecto tiene una duración de 1 hora y 30 minutos y se divide en las siguientes 3 secciones:
                </div>
                <div className="mt-2 max-w-2xl text-sm text-gray-500">
                    <ul className="list-disc  pl-5">
                        <li className='py-2'>A medida que nuestro Broker te vaya compartiendo su pantalla para mostrarte todos los visuales del proyecto incluyendo interiores, exteriores, áreas comunes (sociales), “master plan” y “floor plans”, te irá orientando sobre la ubicación, cercanías, amenidades, beneficios, cuotas de mantenimiento y todo lo que incluye. <strong>(30 minutos)</strong></li>
                        <li>Nuestro Broker te mostrará la lista de precios, disponibilidad y la ubicación de la unidad o las unidades de tu interés en el “master plan”. <strong>(30 minutos)</strong></li>
                        <li className='py-2'>Métodos de pago, reservaciones y financiamiento. Sección de preguntas y respuestas. <strong>(30 minutos)</strong> </li>
                    </ul>
                </div>
                <div className="mt-2 max-w-7xl text-sm text-gray-500">
                    <h3 className='flex text-center font-semibold text-lg text-center mt-4'>
                        ¿Estás de acuerdo con el orden del contenido y el tiempo de duración?
                    </h3>
                </div>
                <div className="flex  gap-4 justify-center items-center w-full mt-8">
                    <div className="flex mt-4 w-full gap-4 justify-center items-center w-full ">
                        <Link href={'/confirm'} className={cn(buttonVariants({ variant: 'default' }), 'h-12  w-[135px]')}  >
                            Si
                        </Link>
                        <Link href={'/error'} className={cn(buttonVariants({ variant: 'secondary' }), 'h-12  w-[135px]')}  >
                            No
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center '>
                <Image className='rounded-lg' src={Zoom} alt="arrow-right" width={600} height={600} />

            </div>
        </div>
    )
}

export default DurationSection