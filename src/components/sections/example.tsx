import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import TableExamples from '../table/table-examples.component'
import Image from 'next/image'
import image from '@/assets/img/example1.png'

const Examples = () => {
    return (
        <div className="flex bg-white mb-3 flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <h1 className="text-center py-4 leading-10 text-3xl font-semibold leading-6 text-emerald-900">EJEMPLOS DE PRÉSTAMOS HIPOTECARIOS PARA TU VILLA
            </h1>
            <Image className="rounded-lg " src={image} alt="Example" width={600} height={600} />
            <TableExamples />
            <div className="flex flex-col  gap-4 justify-center items-center w-full mt-8">
                <h3 className='font-semibold text-center text-xl'>¿Deseas Continuar?</h3>
                <div className="flex mt-4 w-full gap-4 justify-center items-center w-full ">
                    <Link href={'/decision'} className={cn(buttonVariants({ variant: 'default' }), 'h-12  w-[135px]')}  >
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

export default Examples