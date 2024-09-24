import React from 'react'

const EndPage = () => {
    return (
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl  text-emerald-900 font-bold mb-6">Felicitaciones 🎉</h2>
                    <p className="text-xl text-black mb-8">
                        ¡Felicidades! Has completado el proceso .
                    </p>
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
                </div>
            </div>
        </section>
    )
}

export default EndPage