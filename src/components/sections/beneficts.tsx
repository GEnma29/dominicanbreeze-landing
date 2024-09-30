import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Plane, Hotel, MapPin, CheckCircle, Info } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Image1 from '@/assets/img/flyBuy.png'
export default function BenefictsSection() {
    return (
        <div className="bg-gradient-to-b from-emerald-50 to-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Card className="overflow-hidden shadow-xl">
                    <CardHeader className="bg-emerald-600 text-white text-center py-8">
                        <CardTitle className="text-3xl font-bold mb-2">
                            EL DESARROLLADOR PAGA TUS GASTOS DE HOTEL Y PASAJE
                        </CardTitle>
                        <div className="flex justify-center items-center space-x-2">
                            <Plane className="h-8 w-8" />
                            <span className="text-2xl font-semibold">+</span>
                            <Hotel className="h-8 w-8" />
                            <span className="text-2xl font-semibold">=</span>
                            <Badge className="bg-white text-emerald-600 text-xl px-4 py-2">
                                HASTA 2,000 USD
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="flex flex-col justify-center items-center">
                            <Image className='rounded-lg' src={Image1} alt="Luxury Development in Punta Cana" width={200} height={200} />
                        </div>
                        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                            ¡VIAJA Y CONOCE!
                        </h2>
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
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Ubicación Privilegiada</h3>
                    </div>
                    <p className="text-gray-700">
                        Descubre por qué nuestra ubicación en el Jetset de Punta Cana es inigualable. Experimenta de primera mano el lujo y la exclusividad que te rodearán en tu futura inversión.
                    </p>
                </div>
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <Info className="h-6 w-6 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Información Importante</h3>
                    </div>
                    <p className="text-gray-700">
                        Los gastos de hotel y pasaje están sujetos a términos y condiciones. Nuestro Broker te proporcionará todos los detalles durante la presentación privada, asegurando total transparencia en esta increíble oferta.
                    </p>
                </div>
            </div>
        </div>
    )
}