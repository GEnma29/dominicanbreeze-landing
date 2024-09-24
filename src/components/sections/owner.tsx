import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, MapPin } from "lucide-react"
import Jose from '@/assets/img/jose-landing.png'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'


const OwnerSection = () => {
    return (
        <div className="bg-gradient-to-b from-emerald-50 to-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Card className="overflow-hidden shadow-xl">
                    <div className="md:flex">
                        <div className="md:w-1/3 bg-emerald-600 p-6 flex items-center justify-center">
                            <img
                                className="rounded-full  border-4 border-white shadow-lg w-64 h-86  object-cover"
                                src={Jose.src}
                                alt="Jose"
                            />
                        </div>
                        <div className="md:w-2/3 p-8">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                                    ¿Sabías que nuestro Broker/Owner también es original de Puerto Rico, pero residente de la República Dominicana?
                                </CardTitle>
                                <Badge className="bg-emerald-600 text-white">33 años de experiencia</Badge>
                            </CardHeader>
                            <CardContent>
                                <ul className="mt-6 space-y-4">
                                    {[
                                        "Miembro de la National Association of REALTORS® de los Estados Unidos",
                                        "Miembro de la Asociación de Agentes y Empresas Inmobiliarias de la República Dominicana",
                                        "Corredor de Bienes Raíces en Puerto Rico desde el año 1991",
                                        "Licensed Real Estate Broker del estado de Florida desde el año 2002",
                                        "Corredor de Bienes Raíces en República Dominicana desde el año 2013",
                                        "Ha asistido a más de 700 familias de Puerto Rico, Estados Unidos, Canadá y Europa en realizar sus inversiones en el país",
                                        '"TOP PRODUCER" de proyectos nuevos de los desarrolladores de mayor prestigio en la República Dominicana',
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </CardContent>
                            <div className="flex mt-6 w-full justify-center ">
                                <Link href={'/sinergy'} className={cn(buttonVariants({ variant: 'default' }), 'w-[220px] h-12')}>
                                    Continuar
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 px-8 py-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                            <span className="text-gray-700">Puerto Rico | Florida | República Dominicana</span>
                        </div>
                        <div className="flex items-center">
                            <Award className="h-5 w-5 text-yellow-500 mr-2" />
                            <span className="text-gray-700">Top Producer</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default OwnerSection