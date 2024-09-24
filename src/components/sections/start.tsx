import React from 'react'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const start: React.FC<{
    href: string
    title: string
    content: string
    subtitle: string
}> = ({ subtitle, title, href, content }) => {

    return (
        <div className="flex mb-3 flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <h1 className="text-center leading-10 text-3xl font-semibold leading-6 text-emerald-900">{title}</h1>
            <h3 className="mt-6 text-center lg:mt-4 text-2xl font-semibold leading-6 text-emerald-900">{subtitle}</h3>
            <div className="mt-2 text-center max-w-xl text-sm text-gray-500">
                <p className='flex font-semibold text-lg text-center mt-4'>
                    {content}
                </p>
            </div>
            <div className="flex  gap-4 justify-center items-center w-full mt-8">
                <div className="flex mt-4 w-full gap-4 justify-center items-center w-full ">
                    <Link href={href} className={cn(buttonVariants({ variant: 'default' }), 'h-12  w-[135px]')}  >
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

export default start