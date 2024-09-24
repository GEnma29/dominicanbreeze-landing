
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Building, Clock, Star, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import Link from "next/link"

const perks = [
    {
        name: 'Experencia',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
        description:
            "20 años de experiencia en construcción de viviendas de lujo",
    },
    {
        name: 'Trayactoria',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
        description:
            "Desarrollador y dueño del primer centro comercial de Punta Cana donde albergan prestigiosas marcas tales como Caribbean Cinemas, IKEA, Psycho Bunny y otras",
    },
    {
        name: 'Reputacion',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
        description:
            'Reputación intachable en puntualidad en fechas de entrega',
    },
    {
        name: 'Calidad',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
        description:
            "Entrega de unidades con los acabados de la más alta calidad",
    },
    {
        name: 'Confianza',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
        description:
            "Un nombre de confianza para compradores locales e internacionales",
    },
]


export default function InsectiveSeption() {
    return (
        <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Card className="overflow-hidden shadow-xl">
                    <div className="md:flex">
                        <div className="md:w-1/3 bg-green-600 p-6 flex items-center justify-center">
                            <img
                                className="rounded-lg border-4 border-white shadow-lg w-full h-auto object-cover"
                                src="/placeholder.svg?height=400&width=300"
                                alt="Luxury Development in Punta Cana"
                            />
                        </div>
                        <div className="md:w-2/3 p-8">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                                    El Desarrollador más completo en la República Dominicana
                                </CardTitle>
                                <Badge className="bg-green-600 text-white">20 años de experiencia</Badge>
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
                                <p className="mt-6 text-gray-700 font-semibold">
                                    Estas cualidades hacen de tu desarrollador una empresa confiable basada en hechos.
                                </p>
                                <p className="mt-4 text-gray-700">
                                    Seguramente ya quieres saber quién es.
                                </p>
                                <p className="mt-4 text-gray-700">
                                    Nuestro broker te dará todos los detalles en la presentación privada en la fecha que selecciones.
                                </p>
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
                            <span className="text-gray-700">Puntualidad en entregas</span>
                        </div>
                        <div className="flex items-center">
                            <Star className="h-5 w-5 text-yellow-500 mr-2" />
                            <span className="text-gray-700">Alta calidad</span>
                        </div>
                    </CardFooter>
                </Card>
                <div className="mt-8 text-center">
                    <Link className={cn(buttonVariants({ variant: 'default' }), 'w-[220px] h-12')} href={'/owner'}>
                        Deseo continuar
                    </Link>
                </div>
            </div>
        </div>
    )
}
