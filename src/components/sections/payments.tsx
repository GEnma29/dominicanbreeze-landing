import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { TabsPayment } from "../tabs/payments.component"
import Image from "next/image"
import Image1 from '@/assets/img/payment.png'
export default function PaymentsSection() {
    return (
        <div className="flex bg-white max-w-7xl flex-col justify-center items-center p-4 rounded-lg">
            <div className="flex items-center mb-4">
                <h1 className="text-3xl text-emerald-600 font-bold">FORMA DE PAGO</h1>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-2 justify-around items-center mb-4">
                <Image className="rounded-lg" src={Image1} alt="Payment" width={600} height={600} />
                <TabsPayment />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
                <Link className={cn(buttonVariants({ variant: 'default' }), 'w-[220px] h-12')} href={'/example'}>
                    Continuar
                </Link>
                <Link className={cn(buttonVariants({ variant: 'secondary' }), 'w-[220px] h-12')} href={'/error'}>
                    Cancelar
                </Link>
            </div>
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Información Importante sobre Financiamiento</h3>
                <ul className="space-y-4 list-disc text-gray-700">
                    <li className="text-gray-700">
                        Dado a que en el sistema financiero de la República Dominicana no se usan inversionistas o aseguradoras de mercados secundarios tales como Freddie Mac, Fannie Mae, Veteranos, Rural, FHA u otros, son las mismas instituciones financieras que con su solidez  otorgan los préstamos hipotecarios de sus propios fondos.
                    </li>
                    <li className="text-gray-700">
                        A tales efectos, las tasas de interés en préstamos hipotecarios son más altas de lo que pudiéramos estar acostumbrados en nuestros países aunque estas sean enteramente manejables comenzando en un 8.25% APR con hasta 20 años.
                    </li>
                    <li className="text-gray-700">
                        No obstante, aunque el sistema de cualificación para préstamos hipotecarios en los bancos de la República Dominicana tienen muchas similitudes con los de Puerto Rico, Estados Unidos, Canadá y Europa, son mucho más flexibles en sus comités de  aprobaciones.
                    </li>
                </ul>
            </div>
        </div>
    )
}