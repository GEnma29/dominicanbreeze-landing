
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Building, Clock, Star, MapPin } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import Link from "next/link"
import Image from "next/image"


import Image1 from '@/assets/img/image1.png'
import Image2 from '@/assets/img/image2.png'
import Image3 from '@/assets/img/image3.png'
import Image4 from '@/assets/img/image4.png'
import Image5 from '@/assets/img/image5.png'
import Image6 from '@/assets/img/image6.png'

const ImageCollage = () => {
    return (
        <Carousel className="" >
            <CarouselContent className=" lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-2 h-full">
                <CarouselItem className="flex rounded-lg">
                    <Image
                        className="w-full h-full rounded-lg object-cover"
                        src={Image4}
                        objectFit="cover"
                        alt="Luxury Development 4"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image
                        className="w-full rounded-lg h-full object-cover"
                        src={Image1}
                        objectFit="cover"
                        alt="Luxury Development 1"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image
                        objectFit="cover"
                        className="w-full h-full rounded-lg object-cover"
                        src={Image2}
                        alt="Luxury Development 2"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image
                        className="w-full rounded-lg h-full object-cover"
                        src={Image3}
                        objectFit="cover"
                        alt="Luxury Development 3"
                    />

                </CarouselItem>
                <CarouselItem>
                    <Image
                        className="w-full h-full rounded-lg object-cover"
                        src={Image5}
                        objectFit="cover"
                        alt="Luxury Development 5"
                    />

                </CarouselItem>
                <CarouselItem>
                    <Image
                        className="w-full h-full rounded-lg object-cover"
                        src={Image6}
                        objectFit="cover"
                        alt="Luxury Development 6"
                    />

                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel >

    )
}

export default function InsectiveSeption() {
    return (
        <div className=" min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Card className="overflow-hidden shadow-xl">
                    <div className="bg-white py-16 px-8  md:flex">
                        <div className="md:w-1/3 m-2 lg:py-0 bg-emerald-600 p-8 rounded-lg flex flex-col items-center justify-center">
                            <ImageCollage />
                        </div>
                        <div className="md:w-2/3 p-8">
                            <CardHeader>
                                <CardTitle className="text-3xl text-center font-bold text-gray-900 mb-2">
                                    El Desarrollador más completo en la República Dominicana
                                </CardTitle>
                                <Badge className="bg-emerald-600 text-white">20 años de experiencia</Badge>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-4">
                                    El desarrollador de este imponente proyecto viene de Puerto Rico
                                    y se estableció en Punta Cana en el año 2000 contando con una trayectoria
                                    de excelencia y de constante éxito:
                                </p>
                                <ul className="mt-6 space-y-4">
                                    {[
                                        "20 años de experiencia en construcción de viviendas de lujo",
                                        "Desarrollador y dueño del primer centro comercial de Punta Cana donde albergan prestigiosas marcas tales como Caribbean Cinemas, IKEA, Psycho Bunny y otras",
                                        "Reputación intachable en puntualidad en fechas de entrega",
                                        "Entrega de unidades con los acabados de la más alta calidad",
                                        "Un nombre de confianza para compradores locales e internacionales",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-center text-gray-700 font-semibold">
                                    Estas cualidades hacen de tu desarrollador una empresa confiable basada en hechos.
                                </p>
                                <p className="mt-4 text-center text-gray-700">
                                    Seguramente ya quieres saber quién es.
                                </p>
                                <p className="mt-4 text-center text-gray-700">
                                    Nuestro broker te dará todos los detalles en la presentación privada en la fecha que selecciones.
                                </p>
                                <div className="mt-8 gap-2 text-center">
                                    <Link className={cn(buttonVariants({ variant: 'default' }), 'w-[220px] h-12 mb-3 lg:mb-0')} href={'/owner'}>
                                        Continuar
                                    </Link>
                                    <Link className={cn(buttonVariants({ variant: 'secondary' }), 'w-[220px] h-12')} href={'/error'}>
                                        Cancelar
                                    </Link>
                                </div>
                            </CardContent>
                        </div>
                    </div>
                    <CardFooter className="bg-gray-100 px-8 py-4 flex flex-wrap justify-between items-center">
                        <div className="flex items-center mb-2 sm:mb-0">
                            <MapPin className="h-5 w-5 text-green-600 mr-2" />
                            <span className="text-gray-700">Punta Cana, República Dominicana</span>
                        </div>
                        <div className="flex items-center mb-2 sm:mb-0">
                            <Building className="h-5 w-5 text-blue-600 mr-2" />
                            <span className="text-gray-700">Viviendas de lujo</span>
                        </div>
                        <div className="flex items-center mb-2 sm:mb-0">
                            <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                            <span className="text-gray-700">Seguridad de Inversión</span>
                        </div>
                        <div className="flex items-center">
                            <Star className="h-5 w-5 text-yellow-500 mr-2" />
                            <span className="text-gray-700">Alta calidad</span>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
