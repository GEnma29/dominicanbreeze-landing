import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import Price from '@/assets/img/price.png'

const Options = [
    { value: '100', label: '559,000 USD en unidades de 1 nivel' },
    { value: '50', label: '595,000 USD en unidades de 2 niveles' },
    { value: 'none', label: 'Ninguna de las anteriores' },
]

const Prices = () => {
    return (
        <div className="flex flex-col w-[90%] lg:flex-row justify-center items-center rounded-lg px-4 py-5 sm:p-6 bg-gray-50 shadow-md">
            <div className="flex w-full h-full flex-col justify-center items-center p-4">
                <h2 className="text-center text-xl leading-10 lg:text-3xl font-semibold leading-6 text-emerald-900">
                    TÚ SELECCIONAS EL PRECIO A TU MEJOR CONVENIENCIA
                </h2>
                <h3 className="mt-3 text-sm text-center lg:text-2xl font-semibold leading-6 text-emerald-900">
                    Los precios comienzan en 559,000 USD en unidades de 1 nivel y 595,000 USD en las de 2 niveles. Ambos casos con terraza y piscina privada. ¿Cuál de las anteriores se ajusta a lo que estás buscando?
                </h3>

                <div className="flex flex-col gap-4 justify-center items-center w-full mt-8">
                    <div className="space-y-5"> {/* Consider a heading for price ranges */}
                        {Options.map((option) => (
                            <Link
                                href={option.value === 'none' ? '/error' : '/tax'}
                                key={option.value}
                                className="relative items-center border-solid rounded-lg border-2 border-sky-200  p-4  flex items-start hover:bg-emerald-50"
                            >
                                <div className="flex h-6 items-center">
                                    <Checkbox id={`price-${option.value}`} name={`price-${option.value}`} />
                                    <div className="ml-3 text-sm leading-6">
                                        <label
                                            htmlFor="terms1"
                                            className="text-lg font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {option.label}
                                        </label>

                                    </div>
                                </div>
                            </Link>
                        )
                        )}
                    </div>
                </div>
            </div>
            <div className="flex w-full h-full justify-center items-center ">
                <Image className="rounded-lg" src={Price} alt="Luxury Development in Punta Cana" width={600} height={600} />
            </div>

        </div >
    )
}


export default Prices