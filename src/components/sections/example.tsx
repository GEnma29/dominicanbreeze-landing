import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import image from '@/assets/img/example1.png'
import TableExample from '@/assets/img/table-example.png'

const Examples = () => {
    return (
        <div className="flex bg-white mb-3 min-w-5xl  max-w-7xl flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <div className='flex flex-col w-full justify-center items-center '>
                <h1 className="text-center py-4 leading-10 text-3xl font-semibold leading-6 text-emerald-900">EJEMPLOS DE PRÉSTAMOS HIPOTECARIOS PARA TU VILLA
                </h1>
                <Image className="rounded-lg " src={image} alt="Example" width={600} height={600} />
                <div className='flex flex-col justify-center items-center p-4'>
                    <Image className='rounded-lg' src={TableExample} alt="Example table" width={600} height={600} />
                    <div className='max-w-2xl flex flex-col justify-center items-center p-4'>
                        <p className='text-xs text-center mt-3 text-gray-700'>  Préstamos hipotecarios en dólares estadounidenses a una tasa de interés del 8.25% APR fijo durante el primer año y Loan to Value del 80% del precio de venta o tasación, el que sea menor. Pagos mensuales aproximados, calculados en principal e interés. Seguros de vida y de propiedad serán aplicables dependiendo de factores tales como edad y término del préstamo hipotecario.</p>
                    </div>
                </div>
                <div className="flex flex-col  gap-4 justify-center items-center w-full mt-8">
                    <h3 className='font-semibold text-center text-xl'>¿Deseas Continuar?</h3>
                    <div className="flex mt-4 w-full gap-4 justify-center items-center w-full ">
                        <Link href={'/decision'} className={cn(buttonVariants({ variant: 'default' }), 'h-12  w-[135px]')}  >
                            Continuar
                        </Link>
                        <Link href={'/error'} className={cn(buttonVariants({ variant: 'secondary' }), 'h-12  w-[135px]')}  >
                            Cancelar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Examples