import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Plane, Hotel, CheckCircle, } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Image1 from '@/assets/img/flyBuy.png'
export default function BenefictsSection() {
    return (
        <div className="pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Card className="overflow-hidden shadow-xl">
                    <CardHeader className="flex flex-row  text-center text-emerald-600 text-xl lg:text-3xl font-bold mb-2">
                        <div className="flex w-full flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <Image className='rounded-lg' src={Image1} alt="Luxury Development in Punta Cana" width={200} height={200} />
                            </div>
                            <div className="flex justify-center items-center h-full">
                                <h2 className="flex text-lg lg:text-2xl font-bold text-center text-gray-900 ">
                                    ¡VIAJA Y CONOCE!
                                </h2>
                            </div>
                        </div>
                        <div className="flex w-full flex-col justify-center items-center">
                            <h2 className="flex text-lg lg:text-3xl font-bold text-center text-emerald-600 ">
                                EL DESARROLLADOR PAGA TUS GASTOS DE HOTEL Y PASAJE
                            </h2>
                            <div className="flex mt-6 justify-center items-center space-x-2">
                                <Plane className="h-8 w-8" />
                                <span className="text-2xl font-semibold">+</span>
                                <Hotel className="h-8 w-8" />
                                <span className="text-2xl font-semibold">=</span>
                                <Badge className="bg-white text-emerald-600 text-xl px-4 py-2">
                                    HASTA 2,000 USD
                                </Badge>
                            </div>
                        </div>


                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="grid gap-6">
                            {[
                                "Recibirás un tour total de orientación.",
                                "Aprenderás sobre las calidades de construcción en unidades ya construidas por el desarrollador.",
                                "Conocerás la comunidad en dónde se construirá este proyecto de lujo.",
                                "Comprobarás tu mismo(a) la ubicación privilegiada en el `Jetset` de Punta Cana.",
                                "Te asegurarás de conocernos desde la A hasta la Z.",
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                                    <p className="text-gray-700 text-lg">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="bg-gray-100 p-6">
                        <div className="w-full text-center">
                            <p className="text-gray-700 text-lg mb-4">
                                Pregúntale los detalles a nuestro Broker en la presentación privada para que veas la realidad de este gran beneficio
                            </p>
                            <Link href={'/payments'} className={cn(buttonVariants({ variant: 'default' }), 'w-[220px] h-12')}>
                                Continuar
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}