import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'


const SectionVideo = () => {

    return (
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl  text-emerald-900 font-bold mb-6">Descubre tu hogar ideal</h2>
                    <div className="aspect-video mb-8">
                        <video
                            className="w-full h-full object-cover rounded-lg"
                            controls
                            poster="/placeholder.svg?height=400&width=600"
                        >
                            <source src={"https://youtu.be/WHqZAXHZN_w?si=K2ANIuPL4sflPLH6"} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                    <p className="text-xl text-black mb-8">
                        Somos expertos en encontrar la propiedad perfecta para ti. Mira nuestro video para conocer más sobre nuestros servicios.
                    </p>
                    <a href='/start' className={cn(buttonVariants({ variant: 'default' }), 'h-12  mi-w-[135px]')}  >
                        Explorar propiedades
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SectionVideo