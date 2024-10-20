'use client'
import React from 'react'
import { YouTubeEmbed } from 'react-social-media-embed';
import { useMobileDetect } from '@/hooks/isMobile.hook'

const EndPage = () => {
    const isMobile = useMobileDetect();
    const YOUTUBE_DEFAULT_HEIGHT = isMobile ? 390 : 625;
    const YOUTUBE_DEFAULT_WIDTH = isMobile ? 320 : 960;
    return (
        <section className="py-12 bg-white rounded-lg w-full lg:max-w-7xl  md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl  text-emerald-900 font-bold mb-6">Felicitaciones 🎉</h2>
                    <p className="text-xl text-black mb-8">
                        ¡Felicidades! Has completado el proceso .
                    </p>
                    <div className="flex flex-col items-center justify-center">
                        <YouTubeEmbed url="https://youtu.be/fNyR8H1HvRk"
                            width={YOUTUBE_DEFAULT_WIDTH} height={YOUTUBE_DEFAULT_HEIGHT} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default EndPage