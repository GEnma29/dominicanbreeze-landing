'use client'
import React, { useState } from 'react'
import { buttonVariants } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function DeterminationForm() {
    const [selectedValue, setSelectedValue] = useState<number | null>(null)


    return (
        <div className="flex mb-3 flex-col justify-center items-center rounded-lg px-4 py-5 sm:p-6">
            <h1 className="text-center leading-10 text-3xl font-semibold text-emerald-900">TU DETERMINACIÓN ES EL PUNTO DE PARTIDA</h1>
            <h3 className="mt-3 text-center text-2xl font-semibold text-emerald-900">En una escala de 0 al 10, siendo el 0 la menor determinación y el 10 la mayor.</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
                <div className="flex mt-6 flex-wrap lg:flex-nowrap gap-4 justify-center items-center w-full">
                    {Array.from({ length: 11 }).map((_, i) => (
                        <Link
                            key={i}
                            href={i === 10 ? '/timing' : '/error'}
                            className={cn(buttonVariants({ variant: 'outline' }), `flex-1 p-4  ${selectedValue === i ? 'bg-emerald-100' : ''} text-emerald-900`)}
                        >
                            {i}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}