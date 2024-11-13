'use client'
import React from 'react'
import { useEffect, useState } from "react"
import { YouTubeEmbed } from 'react-social-media-embed';
import { useMobileDetect } from '@/hooks/isMobile.hook'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Image1 from "@/assets/img/logo-1-min.png"
import Image2 from "@/assets/img/logo-2-min.png"
import Image3 from "@/assets/img/logo-3-min.png"
import Image4 from "@/assets/img/logo-4-min.png"
import Image5 from "@/assets/img/logo-5-min.png"
import Image6 from "@/assets/img/logo-6-min.png"
import Image7 from "@/assets/img/cap.png"
import Image8 from "@/assets/img/logo-8.png"
import Image10 from "@/assets/img/logo-10.png"
import Image11 from "@/assets/img/logo-11.png"
import Image12 from "@/assets/img/logo-12.png"
import Image13 from "@/assets/img/logo-13.png"
import Image14 from "@/assets/img/logo-14.png"

import { Card } from '@/components/ui/card'


const EndPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const logos = [
        { src: Image1.src, alt: 'logo-1', width: Image1.width, height: Image1.height },
        { src: Image2.src, alt: 'logo-2', width: Image2.width, height: Image2.height },
        { src: Image3.src, alt: 'logo-3', width: Image3.width, height: Image3.height },
        { src: Image4.src, alt: 'logo-4', width: Image4.width, height: Image4.height },
        { src: Image5.src, alt: 'logo-5', width: Image5.width, height: Image5.height },
        { src: Image6.src, alt: 'logo-6', width: Image6.width, height: Image6.height },
        { src: Image7.src, alt: 'logo-7', width: Image7.width, height: Image7.height },
        { src: Image8.src, alt: 'logo-8', width: Image8.width, height: Image8.height },
        { src: Image10.src, alt: 'logo-10', width: Image10.width, height: Image10.height },
        { src: Image11.src, alt: 'logo-11', width: Image11.width, height: Image11.height },
        { src: Image12.src, alt: 'logo-12', width: Image12.width, height: Image12.height },
        { src: Image13.src, alt: 'logo-13', width: Image13.width, height: Image13.height },
        { src: Image14.src, alt: 'logo-14', width: Image14.width, height: Image14.height },
    ]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length)
    }

    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length)
    // }

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000)
        return () => clearInterval(interval)
    }, [currentIndex])

    const isMobile = useMobileDetect();
    const YOUTUBE_DEFAULT_HEIGHT = isMobile ? 280 : 325;
    const YOUTUBE_DEFAULT_WIDTH = isMobile ? 340 : 325;
    // const LOGOS_PER_SLIDE = isMobile ? 1 : 3
    // const TOTAL_SLIDES = Math.ceil(logos.length / LOGOS_PER_SLIDE)
    return (
        <div className=" w-full text-white p-4 flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-bold text-yellow-400 text-center mb-2">
                Felicitaciones 🎉
            </h1>
            <h2 className="text-lg md:text-xl text-center mb-6">
                Has completado el proceso.
            </h2>
            <div className="flex items-center justify-center">
                <YouTubeEmbed url="https://youtu.be/fNyR8H1HvRk" width={YOUTUBE_DEFAULT_WIDTH} height={YOUTUBE_DEFAULT_HEIGHT} />
            </div>
            <div className="w-full max-w-5xl mt-9">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {logos.map((logo, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                                <Card className="w-full h-24 md:h-16 relative bg-white/10 p-4 overflow-hidden">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className={`p-2 ${index >= 5 && index <= 7 ? 'scale-125' : ''}`}
                                        style={{ objectFit: 'contain' }}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default EndPage