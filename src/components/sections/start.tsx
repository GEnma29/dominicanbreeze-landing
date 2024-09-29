import React from 'react'
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/img/LOGO-Dominican-Breeze.png'
interface StartProps {
    href: string
    title: string
    content: string
    question?: string
    greeting?: string;
    subtitle: string
    image?: {
        src: string
        alt: string
        position?: 'left' | 'right' | 'top' | 'bottom'
    }
    primaryButtonText?: string
    secondaryButtonText?: string
    onSecondaryClick?: () => void
    isExternal?: boolean
}

const Start: React.FC<StartProps> = ({
    subtitle,
    title,
    href,
    content,
    question,
    image,
    greeting,
    primaryButtonText = 'Sí',
    secondaryButtonText = 'No',
    onSecondaryClick,
    isExternal = false,
}) => {
    const imagePosition = image?.position || 'left'

    return (
        <div className="flex bg-white h-[60vh] rounded-lg flex-col md:flex-row items-center justify-center p-4 md:p-6 lg:p-8 lg:max-w-7xl mx-auto">
            {image && (imagePosition === 'left' || imagePosition === 'top') && (
                <div className={cn(
                    "w-full md:w-1/2 mb-4 md:mb-0",
                    imagePosition === 'top' ? "md:w-full md:mb-4" : "md:mr-6"
                )}>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            )}

            <div className={cn(
                "flex flex-col justify-center items-center",
                image ? "w-full md:w-1/2" : "w-full"
            )}>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-sm font-semibold leading-7 text-emerald-500">{greeting}</h2>
                    <p className="mt-2 text-center text-4xl font-bold tracking-tight text-emerald-600 sm:text-2xl">
                        {title}
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-smerald-300">
                    {subtitle}
                </p>
                <p className='text-lg text-center text-lg font-semibold text-gray-700 mb-6'>
                    {content}
                </p>
                <p className='text-lg text-center text-lg font-semibold text-gray-700 mb-6'>
                    {question}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                    <Button asChild className="w-full sm:w-[135px]">
                        <Link href={href} passHref={isExternal}>
                            {primaryButtonText}
                        </Link>
                    </Button>
                    {onSecondaryClick ? (
                        <Button
                            onClick={onSecondaryClick}
                            variant="secondary"
                            className="w-full sm:w-[135px]"
                        >
                            {secondaryButtonText}
                        </Button>
                    ) : (
                        <Button asChild variant="secondary" className="w-full sm:w-[135px]">
                            <Link href="/error">
                                {secondaryButtonText}
                            </Link>
                        </Button>
                    )}
                </div>
                <div className='flex  w-full jutify-start items-center mt-6'>
                    <Image src={Logo} alt="arrow-right" width={160} height={120} />
                </div>

            </div>

            {image && (imagePosition === 'right' || imagePosition === 'bottom') && (
                <div className={cn(
                    "w-full md:w-1/2 mt-4 md:mt-0",
                    imagePosition === 'bottom' ? "md:w-full md:mt-4" : "md:ml-6"
                )}>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                        className="rounded-lg object-cover"
                    />
                </div>
            )}
        </div>
    )
}

export default Start