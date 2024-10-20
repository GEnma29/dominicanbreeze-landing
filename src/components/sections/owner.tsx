import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, MapPin } from "lucide-react"
import JoseBg from '@/assets/img/jose-bg-landing.png'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'


const OwnerSection = () => {
    return (
        <div className="w-full flex px-4 sm:px-6 lg:px-8">
            <div className="flex w-full lg:max-w-7xl mx-auto">
                <Card className="overflow-hidden shadow-xl">
                    <div className="bg-white py-16 px-8  md:flex">
                        <div className="md:w-1/3 bg-emerald-600 p-4 lg:p-6 rounded-lg  rounded-lgflex flex-col items-center justify-center">
                            <div className='w-full flex flex-col justify-center items-center  mt-4'>
                                <img
                                    className="rounded-full  border-4 border-white shadow-lg w-full h-200px lg:h-[600px]  object-cover"
                                    src={JoseBg.src}
                                    alt="Jose"
                                />
                                <h1 className=' mt-4 text-center text-[#e0ad10] text-xl font-bold'>José Antonio Quiñones, REALTOR®</h1>

                            </div>


                        </div>
                        <div className="md:w-2/3 p-4 lg:p-8">
                            <CardHeader>
                                <CardTitle className="text-lg lg:text-3xl text-center font-bold text-gray-900 mb-2">
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
                                <Link href={'/error'} className={cn(buttonVariants({ variant: 'secondary' }), 'w-[220px] h-12')}>
                                    Cancelar
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