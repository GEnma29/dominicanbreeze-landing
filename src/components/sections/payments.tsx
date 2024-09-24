import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { TabsPayment } from "../tabs/payments.component"

export default function PaymentsSection() {
    return (
        <div className="flex bg-white flex-col justify-center items-center p-4 rounded-lg">
            <div className="flex items-center mb-4">
                <h1 className="text-3xl text-emerald-600 font-bold">FORMA DE PAGO</h1>
            </div>
            <TabsPayment />
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
                <Link className={cn(buttonVariants({ variant: 'default' }), 'w-[220px] h-12')} href={'/owner'}>
                    Continuar
                </Link>
                <Link className={cn(buttonVariants({ variant: 'secondary' }), 'w-[220px] h-12')} href={'/error'}>
                    Cancelar
                </Link>
            </div>
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Información Importante sobre Financiamiento</h3>
                <ul className="space-y-4">
                    <li className="text-gray-700">
                        El sistema financiero de la República Dominicana no usa inversionistas o aseguradoras de mercados secundarios como Freddie Mac, Fannie Mae, Veteranos, Rural, FHA u otros.
                    </li>
                    <li className="text-gray-700">
                        Las instituciones financieras otorgan los préstamos hipotecarios de sus propios fondos.
                    </li>
                    <li className="text-gray-700">
                        Las tasas de interés en préstamos hipotecarios comienzan en un 8.25% APR con hasta 20 años.
                    </li>
                    <li className="text-gray-700">
                        El sistema de cualificación para préstamos hipotecarios es similar pero más flexible que en Puerto Rico, Estados Unidos, Canadá y Europa.
                    </li>
                </ul>
            </div>
        </div>
    )
}