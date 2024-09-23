import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'


const Examples = () => {
    return (
        <div className="flex mb-3 flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <h1 className="text-center leading-10 text-3xl font-semibold leading-6 text-emerald-900">EJEMPLOS DE PRÉSTAMOS HIPOTECARIOS PARA TU VILLA
            </h1>
            <div className="flex  gap-4 justify-center items-center w-full mt-8">
                <div className="flex mt-4 w-full gap-4 justify-center items-center w-full ">
                    <a href={'/'} className={cn(buttonVariants({ variant: 'default' }), 'h-12  w-[135px]')}  >
                        Si
                    </a>
                    <Button variant={"secondary"} className='h-12 w-[135px]'>
                        No
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Examples